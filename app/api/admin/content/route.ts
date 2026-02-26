import { NextResponse } from "next/server";
import { readSiteContentStore } from "@/lib/siteContentStore";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const store = await readSiteContentStore();
  return NextResponse.json({ ok: true, ...store });
}
