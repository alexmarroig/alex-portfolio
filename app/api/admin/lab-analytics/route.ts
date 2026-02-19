import { NextResponse } from "next/server";
import { getAnalyticsSummary, toAnalyticsCsv, type AnalyticsRangePreset } from "@/lib/analyticsStore";

const ADMIN_LAB_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key") ?? "";

  if (!ADMIN_LAB_KEY || key !== ADMIN_LAB_KEY) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const period = (searchParams.get("period") ?? "14d") as AnalyticsRangePreset;
  const startDate = searchParams.get("start") ?? undefined;
  const endDate = searchParams.get("end") ?? undefined;
  const country = searchParams.get("country") ?? undefined;
  const referrer = searchParams.get("referrer") ?? undefined;
  const source = searchParams.get("source") ?? undefined;
  const format = searchParams.get("format") ?? "json";

  const analytics = await getAnalyticsSummary({ period, startDate, endDate, country, referrer, source });

  if (format === "csv") {
    const csv = toAnalyticsCsv(analytics);
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="analytics-${analytics.period.startDate}-to-${analytics.period.endDate}.csv"`
      }
    });
  }

  return NextResponse.json({ ok: true, analytics });
}
