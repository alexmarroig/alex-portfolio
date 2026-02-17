import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { createVisitorId, trackAnalyticsEvent } from "@/lib/analyticsStore";

function getFirstIp(raw: string) {
  return raw.split(",")[0]?.trim() ?? "unknown";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const file = url.searchParams.get("file") || "/alex-de-freitas-marroig-resume.pdf";

  const headerStore = await headers();
  const userAgent = headerStore.get("user-agent") ?? "unknown";
  const forwardedFor = headerStore.get("x-forwarded-for") ?? "unknown";
  const ip = getFirstIp(forwardedFor);
  const country =
    headerStore.get("x-vercel-ip-country") ??
    headerStore.get("cf-ipcountry") ??
    "unknown";
  const referrer = headerStore.get("referer") ?? "";

  await trackAnalyticsEvent({
    type: "resume_download",
    path: file,
    referrer,
    source: "resume_download",
    country,
    userAgent,
    visitorId: createVisitorId(ip, userAgent)
  });

  return NextResponse.redirect(new URL(file, url.origin));
}
