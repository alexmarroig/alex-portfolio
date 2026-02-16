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
};

const ANALYTICS_DIR = path.join(process.cwd(), ".analytics");
const ANALYTICS_FILE = path.join(ANALYTICS_DIR, "site-analytics.json");

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
  timelineVisitorHashes: {}
};

function increment(map: Record<string, number>, key: string, by = 1) {
  map[key] = (map[key] ?? 0) + by;
}

function normalizePath(rawPath: string) {
  if (!rawPath) return "/";
  const value = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  return value.split("?")[0] || "/";
}

function normalizeReferrer(rawReferrer?: string) {
  if (!rawReferrer) return "direct";

  try {
    const refUrl = new URL(rawReferrer);
    return refUrl.hostname || "direct";
  } catch {
    return "direct";
  }
}

function normalizeSource(source?: string, referrer?: string) {
  if (source?.trim()) return source.trim().toLowerCase();
  const ref = normalizeReferrer(referrer);
  return ref === "direct" ? "direct" : ref;
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
      timelineVisitorHashes: parsed.timelineVisitorHashes ?? {}
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

  await writeStore(store);
}

function topEntries(entries: Record<string, number>, limit = 8) {
  return Object.entries(entries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([label, value]) => ({ label, value }));
}

export async function getAnalyticsSummary() {
  const store = await readStore();

  const timeline = Object.entries(store.timeline)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-14)
    .map(([date, metrics]) => ({ date, ...metrics }));

  return {
    totals: store.totals,
    topPages: topEntries(store.pages, 10),
    topReferrers: topEntries(store.referrers, 10),
    topSources: topEntries(store.sources, 10),
    topCountries: topEntries(store.countries, 10),
    topKeywords: topEntries(store.keywords, 10),
    llmAgents: topEntries(store.llmAgents, 10),
    timeline
  };
}
