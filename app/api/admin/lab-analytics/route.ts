import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/lib/analyticsStore";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export async function GET() {
  const isAllowed = await isAdminAuthenticated();

  if (!isAllowed) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const analytics = await getAnalyticsSummary();
  return NextResponse.json({ ok: true, analytics });
}
