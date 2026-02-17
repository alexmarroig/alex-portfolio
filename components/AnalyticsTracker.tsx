"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function getSourceFromUrl() {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  return params.get("utm_source") ?? "";
}

function track(payload: {
  type?: "pageview" | "resume_download";
  path: string;
  referrer?: string;
  source?: string;
  keyword?: string;
}) {
  fetch("/api/analytics/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(() => undefined);
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedPathRef = useRef("");

  useEffect(() => {
    const query = searchParams.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;
    if (trackedPathRef.current === fullPath) return;
    trackedPathRef.current = fullPath;

    track({
      type: "pageview",
      path: fullPath,
      referrer: document.referrer,
      source: getSourceFromUrl()
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href$='.pdf'], a[data-analytics='resume-download']");
      if (!link) return;

      const href = (link as HTMLAnchorElement).getAttribute("href") ?? "";
      track({
        type: "resume_download",
        path: href,
        referrer: document.referrer,
        source: getSourceFromUrl()
      });
    }

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}
