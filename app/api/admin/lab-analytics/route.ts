import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/lib/analyticsStore";

const ADMIN_LAB_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key") ?? "";

  if (!ADMIN_LAB_KEY || key !== ADMIN_LAB_KEY) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const analytics = await getAnalyticsSummary();
  return NextResponse.json({ ok: true, analytics });
}
