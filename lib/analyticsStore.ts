import "server-only";

import { createHash } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type AnalyticsEventType = "pageview" | "resume_download";

export type AnalyticsEventPayload = {
  type: AnalyticsEventType;
  path: string;
  referrer?: string;
  source?: string;
  keyword?: string;
  country?: string;
  userAgent?: string;
  visitorId?: string;
};

type DailyMetrics = {
  pageviews: number;
  resumeDownloads: number;
  visitors: number;
};

type StoredEvent = {
  date: string;
  type: AnalyticsEventType;
  path: string;
  referrer: string;
  source: string;
  keyword: string;
  country: string;
  visitorId: string;
};

type AnalyticsStore = {
  totals: {
    events: number;
    pageviews: number;
    resumeDownloads: number;
    uniqueVisitors: number;
  };
  pages: Record<string, number>;
  referrers: Record<string, number>;
  sources: Record<string, number>;
  countries: Record<string, number>;
  keywords: Record<string, number>;
  llmAgents: Record<string, number>;
  timeline: Record<string, DailyMetrics>;
  visitorHashes: string[];
  timelineVisitorHashes: Record<string, string[]>;
  events: StoredEvent[];
};

export type AnalyticsRangePreset = "7d" | "14d" | "30d" | "custom";

export type AnalyticsFilterParams = {
  period?: AnalyticsRangePreset;
  startDate?: string;
  endDate?: string;
  country?: string;
  referrer?: string;
  source?: string;
};

const ANALYTICS_DIR = path.join(process.cwd(), ".analytics");
const ANALYTICS_FILE = path.join(ANALYTICS_DIR, "site-analytics.json");
const MAX_EVENTS_STORED = 50000;

const EMPTY_STORE: AnalyticsStore = {
  totals: {
    events: 0,
    pageviews: 0,
    resumeDownloads: 0,
    uniqueVisitors: 0
  },
  pages: {},
  referrers: {},
  sources: {},
  countries: {},
  keywords: {},
  llmAgents: {},
  timeline: {},
  visitorHashes: [],
  timelineVisitorHashes: {},
  events: []
};

const SOURCE_LABEL_MAP: Record<string, string> = {
  "google.com": "google",
  "www.google.com": "google",
  "m.google.com": "google",
  "l.instagram.com": "instagram",
  "instagram.com": "instagram",
  "www.instagram.com": "instagram",
  "linkedin.com": "linkedin",
  "www.linkedin.com": "linkedin",
  "m.linkedin.com": "linkedin",
  "twitter.com": "x",
  "x.com": "x",
  "www.x.com": "x",
  "t.co": "x",
  "github.com": "github",
  "www.github.com": "github"
};

function increment(map: Record<string, number>, key: string, by = 1) {
  map[key] = (map[key] ?? 0) + by;
}

function normalizePath(rawPath: string) {
  if (!rawPath) return "/";
  const value = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  return value.split("?")[0] || "/";
}

function normalizeHostLabel(raw?: string) {
  if (!raw) return "";

  const candidate = raw.trim().toLowerCase();
  if (!candidate) return "";

  try {
    const parsed = new URL(candidate.startsWith("http") ? candidate : `https://${candidate}`);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return candidate.replace(/^https?:\/\//, "").split("/")[0]?.replace(/^www\./, "") ?? "";
  }
}

function normalizeReferrer(rawReferrer?: string) {
  if (!rawReferrer) return "direct";

  const host = normalizeHostLabel(rawReferrer);
  return host || "direct";
}

function normalizeSource(source?: string, referrer?: string) {
  const explicitSource = normalizeHostLabel(source);
  if (explicitSource) {
    return SOURCE_LABEL_MAP[explicitSource] ?? explicitSource;
  }

  const ref = normalizeReferrer(referrer);
  if (ref === "direct") return "direct";
  return SOURCE_LABEL_MAP[ref] ?? ref;
}

function normalizeKeyword(keyword?: string) {
  if (!keyword) return "";
  return keyword.trim().toLowerCase().slice(0, 120);
}

function normalizeCountry(country?: string) {
  if (!country) return "unknown";
  return country.toUpperCase();
}

function detectLlmAgent(userAgent?: string) {
  if (!userAgent) return "";
  const patterns = [
    "chatgpt",
    "gptbot",
    "openai",
    "claude",
    "anthropic",
    "perplexity",
    "gemini",
    "google-extended",
    "cohere",
    "bytespider",
    "youbot",
    "meta-externalagent"
  ];

  const lower = userAgent.toLowerCase();
  const matched = patterns.find((pattern) => lower.includes(pattern));
  return matched ?? "";
}

async function readStore() {
  try {
    const raw = await readFile(ANALYTICS_FILE, "utf8");
    const parsed = JSON.parse(raw) as AnalyticsStore;
    return {
      ...EMPTY_STORE,
      ...parsed,
      totals: { ...EMPTY_STORE.totals, ...parsed.totals },
      pages: parsed.pages ?? {},
      referrers: parsed.referrers ?? {},
      sources: parsed.sources ?? {},
      countries: parsed.countries ?? {},
      keywords: parsed.keywords ?? {},
      llmAgents: parsed.llmAgents ?? {},
      timeline: parsed.timeline ?? {},
      visitorHashes: parsed.visitorHashes ?? [],
      timelineVisitorHashes: parsed.timelineVisitorHashes ?? {},
      events: parsed.events ?? []
    };
  } catch {
    return structuredClone(EMPTY_STORE);
  }
}

async function writeStore(store: AnalyticsStore) {
  await mkdir(ANALYTICS_DIR, { recursive: true });
  await writeFile(ANALYTICS_FILE, JSON.stringify(store, null, 2), "utf8");
}

function hashVisitor(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function createVisitorId(ip: string, userAgent: string) {
  return hashVisitor(`${ip}::${userAgent}`);
}

export async function trackAnalyticsEvent(payload: AnalyticsEventPayload) {
  const store = await readStore();

  const day = new Date().toISOString().slice(0, 10);
  if (!store.timeline[day]) {
    store.timeline[day] = { pageviews: 0, resumeDownloads: 0, visitors: 0 };
  }
  if (!store.timelineVisitorHashes[day]) {
    store.timelineVisitorHashes[day] = [];
  }

  store.totals.events += 1;

  const normalizedPath = normalizePath(payload.path);
  increment(store.pages, normalizedPath);

  const referrer = normalizeReferrer(payload.referrer);
  increment(store.referrers, referrer);

  const source = normalizeSource(payload.source, payload.referrer);
  increment(store.sources, source);

  const country = normalizeCountry(payload.country);
  increment(store.countries, country);

  const keyword = normalizeKeyword(payload.keyword);
  if (keyword) {
    increment(store.keywords, keyword);
  }

  const llmAgent = detectLlmAgent(payload.userAgent);
  if (llmAgent) {
    increment(store.llmAgents, llmAgent);
  }

  if (payload.type === "resume_download") {
    store.totals.resumeDownloads += 1;
    store.timeline[day].resumeDownloads += 1;
  }

  if (payload.type === "pageview") {
    store.totals.pageviews += 1;
    store.timeline[day].pageviews += 1;
  }

  if (payload.visitorId) {
    if (!store.visitorHashes.includes(payload.visitorId)) {
      store.visitorHashes.push(payload.visitorId);
      store.totals.uniqueVisitors += 1;
    }

    if (!store.timelineVisitorHashes[day].includes(payload.visitorId)) {
      store.timelineVisitorHashes[day].push(payload.visitorId);
      store.timeline[day].visitors += 1;
    }
  }

  store.events.push({
    date: day,
    type: payload.type,
    path: normalizedPath,
    referrer,
    source,
    keyword,
    country,
    visitorId: payload.visitorId ?? "anonymous"
  });

  if (store.events.length > MAX_EVENTS_STORED) {
    store.events = store.events.slice(-MAX_EVENTS_STORED);
  }

  await writeStore(store);
}

function topEntries(entries: Record<string, number>, limit = 8) {
  return Object.entries(entries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([label, value]) => ({ label, value }));
}

function parsePeriodRange(params: AnalyticsFilterParams) {
  const endBase = params.endDate ? new Date(`${params.endDate}T00:00:00.000Z`) : new Date();
  const end = new Date(Date.UTC(endBase.getUTCFullYear(), endBase.getUTCMonth(), endBase.getUTCDate()));

  const preset = params.period ?? "14d";
  if (preset === "custom" && params.startDate && params.endDate) {
    const start = new Date(`${params.startDate}T00:00:00.000Z`);
    const spanDays = Math.max(1, Math.floor((end.getTime() - start.getTime()) / 86400000) + 1);
    return { start, end, days: spanDays, preset: "custom" as const };
  }

  const days = preset === "7d" ? 7 : preset === "30d" ? 30 : 14;
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - days + 1);
  return { start, end, days, preset };
}

function dateToIso(date: Date) {
  return date.toISOString().slice(0, 10);
}

function inRange(dateIso: string, startIso: string, endIso: string) {
  return dateIso >= startIso && dateIso <= endIso;
}

function dayDiff(startIso: string, dateIso: string) {
  const start = new Date(`${startIso}T00:00:00.000Z`).getTime();
  const date = new Date(`${dateIso}T00:00:00.000Z`).getTime();
  return Math.floor((date - start) / 86400000);
}

function percentageChange(current: number, previous: number) {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Number((((current - previous) / previous) * 100).toFixed(2));
}

function buildSummaryFromEvents(events: StoredEvent[], startIso: string, endIso: string) {
  const pages: Record<string, number> = {};
  const referrers: Record<string, number> = {};
  const sources: Record<string, number> = {};
  const countries: Record<string, number> = {};
  const keywords: Record<string, number> = {};
  const daily: Record<string, DailyMetrics> = {};
  const visitorsByDay: Record<string, Set<string>> = {};
  const allVisitors = new Set<string>();

  for (const event of events) {
    if (!inRange(event.date, startIso, endIso)) continue;

    increment(pages, event.path);
    increment(referrers, event.referrer);
    increment(sources, event.source);
    increment(countries, event.country);
    if (event.keyword) increment(keywords, event.keyword);

    if (!daily[event.date]) {
      daily[event.date] = { pageviews: 0, resumeDownloads: 0, visitors: 0 };
    }

    if (event.type === "pageview") daily[event.date].pageviews += 1;
    if (event.type === "resume_download") daily[event.date].resumeDownloads += 1;

    allVisitors.add(event.visitorId);
    visitorsByDay[event.date] = visitorsByDay[event.date] ?? new Set<string>();
    visitorsByDay[event.date].add(event.visitorId);
  }

  for (const [date, set] of Object.entries(visitorsByDay)) {
    daily[date] = daily[date] ?? { pageviews: 0, resumeDownloads: 0, visitors: 0 };
    daily[date].visitors = set.size;
  }

  const timeline = Object.entries(daily)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, metrics]) => ({ date, ...metrics }));

  return {
    totals: {
      events: events.filter((event) => inRange(event.date, startIso, endIso)).length,
      pageviews: Object.values(daily).reduce((sum, day) => sum + day.pageviews, 0),
      resumeDownloads: Object.values(daily).reduce((sum, day) => sum + day.resumeDownloads, 0),
      uniqueVisitors: allVisitors.size
    },
    topPages: topEntries(pages, 10),
    topReferrers: topEntries(referrers, 10),
    topSources: topEntries(sources, 10),
    topCountries: topEntries(countries, 10),
    topKeywords: topEntries(keywords, 10),
    timeline
  };
}

function createInsights(current: Awaited<ReturnType<typeof buildSummaryFromEvents>>, previous: Awaited<ReturnType<typeof buildSummaryFromEvents>>) {
  const insights: { title: string; detail: string; tone: "positive" | "warning" | "neutral" }[] = [];

  const trafficDelta = percentageChange(current.totals.pageviews, previous.totals.pageviews);
  if (trafficDelta <= -20) {
    insights.push({
      title: "Queda de tráfego relevante",
      detail: `Pageviews caíram ${Math.abs(trafficDelta)}% versus período anterior.`,
      tone: "warning"
    });
  } else if (trafficDelta >= 20) {
    insights.push({
      title: "Aceleração de tráfego",
      detail: `Pageviews subiram ${trafficDelta}% versus período anterior.`,
      tone: "positive"
    });
  }

  const currentTopRef = current.topReferrers[0]?.label;
  const previousTopRef = previous.topReferrers[0]?.label;
  if (currentTopRef && currentTopRef !== previousTopRef) {
    insights.push({
      title: "Novo top referrer",
      detail: `${currentTopRef} virou principal origem de referência (antes: ${previousTopRef ?? "n/a"}).`,
      tone: "positive"
    });
  }

  const peakDownloads = current.timeline.reduce((max, day) => (day.resumeDownloads > max.resumeDownloads ? day : max), { date: "", pageviews: 0, visitors: 0, resumeDownloads: 0 });
  if (peakDownloads.resumeDownloads > 0) {
    insights.push({
      title: "Pico de downloads",
      detail: `${peakDownloads.resumeDownloads} downloads em ${peakDownloads.date}.`,
      tone: "neutral"
    });
  }

  return insights;
}

export function toAnalyticsCsv(analytics: Awaited<ReturnType<typeof getAnalyticsSummary>>) {
  const header = ["date", "pageviews", "visitors", "resumeDownloads"];
  const rows = analytics.timeline.map((row) => [row.date, row.pageviews, row.visitors, row.resumeDownloads].join(","));
  return [header.join(","), ...rows].join("\n");
}

export async function getAnalyticsSummary(params: AnalyticsFilterParams = {}) {
  const store = await readStore();
  const range = parsePeriodRange(params);

  const startIso = dateToIso(range.start);
  const endIso = dateToIso(range.end);

  const prevEnd = new Date(range.start);
  prevEnd.setUTCDate(prevEnd.getUTCDate() - 1);
  const prevStart = new Date(prevEnd);
  prevStart.setUTCDate(prevStart.getUTCDate() - range.days + 1);

  const prevStartIso = dateToIso(prevStart);
  const prevEndIso = dateToIso(prevEnd);

  const normalizedCountry = params.country ? normalizeCountry(params.country) : "";
  const normalizedReferrer = params.referrer ? normalizeReferrer(params.referrer) : "";
  const normalizedSource = params.source ? normalizeSource(params.source) : "";

  const filteredEvents = store.events.filter((event) => {
    if (normalizedCountry && event.country !== normalizedCountry) return false;
    if (normalizedReferrer && event.referrer !== normalizedReferrer) return false;
    if (normalizedSource && event.source !== normalizedSource) return false;
    return true;
  });

  const currentSummary = buildSummaryFromEvents(filteredEvents, startIso, endIso);
  const previousSummary = buildSummaryFromEvents(filteredEvents, prevStartIso, prevEndIso);

  const timelineMap = new Map(currentSummary.timeline.map((row) => [row.date, row]));
  const previousMap = new Map(previousSummary.timeline.map((row) => [row.date, row]));

  const comparativeTimeline = Array.from({ length: range.days }, (_, index) => {
    const day = new Date(range.start);
    day.setUTCDate(day.getUTCDate() + index);
    const iso = dateToIso(day);

    const previousDay = new Date(prevStart);
    previousDay.setUTCDate(previousDay.getUTCDate() + index);
    const previousIso = dateToIso(previousDay);

    const current = timelineMap.get(iso) ?? { date: iso, pageviews: 0, visitors: 0, resumeDownloads: 0 };
    const previous = previousMap.get(previousIso) ?? { date: previousIso, pageviews: 0, visitors: 0, resumeDownloads: 0 };

    return {
      date: iso,
      previousDate: previousIso,
      pageviews: current.pageviews,
      visitors: current.visitors,
      resumeDownloads: current.resumeDownloads,
      previousPageviews: previous.pageviews,
      previousVisitors: previous.visitors,
      previousResumeDownloads: previous.resumeDownloads
    };
  });

  return {
    period: {
      preset: range.preset,
      startDate: startIso,
      endDate: endIso,
      previousStartDate: prevStartIso,
      previousEndDate: prevEndIso,
      days: range.days
    },
    totals: currentSummary.totals,
    previousTotals: previousSummary.totals,
    deltas: {
      pageviews: percentageChange(currentSummary.totals.pageviews, previousSummary.totals.pageviews),
      uniqueVisitors: percentageChange(currentSummary.totals.uniqueVisitors, previousSummary.totals.uniqueVisitors),
      resumeDownloads: percentageChange(currentSummary.totals.resumeDownloads, previousSummary.totals.resumeDownloads),
      events: percentageChange(currentSummary.totals.events, previousSummary.totals.events)
    },
    filters: {
      country: normalizedCountry,
      referrer: normalizedReferrer,
      source: normalizedSource
    },
    availableFilters: {
      countries: Object.keys(store.countries).sort((a, b) => a.localeCompare(b)),
      referrers: Object.keys(store.referrers).sort((a, b) => a.localeCompare(b)),
      sources: Object.keys(store.sources).sort((a, b) => a.localeCompare(b))
    },
    topPages: currentSummary.topPages,
    topReferrers: currentSummary.topReferrers,
    topSources: currentSummary.topSources,
    topCountries: currentSummary.topCountries,
    topKeywords: currentSummary.topKeywords,
    llmAgents: topEntries(store.llmAgents, 10),
    timeline: currentSummary.timeline,
    comparativeTimeline,
    insights: createInsights(currentSummary, previousSummary)
  };
}
