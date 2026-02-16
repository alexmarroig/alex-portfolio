import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { createVisitorId, trackAnalyticsEvent } from "@/lib/analyticsStore";

function getFirstIp(raw: string) {
  return raw.split(",")[0]?.trim() ?? "unknown";
}

function extractKeywordFromReferrer(referrer?: string) {
  if (!referrer) return "";

  try {
    const ref = new URL(referrer);
    return (
      ref.searchParams.get("q") ??
      ref.searchParams.get("p") ??
      ref.searchParams.get("query") ??
      ref.searchParams.get("keyword") ??
      ""
    );
  } catch {
    return "";
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      path?: string;
      referrer?: string;
      source?: string;
      keyword?: string;
      type?: "pageview" | "resume_download";
    };

    const headerStore = await headers();
    const userAgent = headerStore.get("user-agent") ?? "unknown";
    const forwardedFor = headerStore.get("x-forwarded-for") ?? "unknown";
    const ip = getFirstIp(forwardedFor);
    const country =
      headerStore.get("x-vercel-ip-country") ??
      headerStore.get("cf-ipcountry") ??
      "unknown";

    await trackAnalyticsEvent({
      type: payload.type ?? "pageview",
      path: payload.path ?? "/",
      referrer: payload.referrer,
      source: payload.source,
      keyword: payload.keyword || extractKeywordFromReferrer(payload.referrer),
      country,
      userAgent,
      visitorId: createVisitorId(ip, userAgent)
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
