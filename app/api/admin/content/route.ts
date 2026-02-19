import { NextResponse } from "next/server";
import { readSiteContentStore } from "@/lib/siteContentStore";

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key") ?? "";

  if (!ADMIN_KEY || key !== ADMIN_KEY) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const store = await readSiteContentStore();
  return NextResponse.json({ ok: true, ...store });
}
