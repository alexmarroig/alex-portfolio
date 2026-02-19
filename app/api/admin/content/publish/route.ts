import { NextResponse } from "next/server";
import { publishDraft } from "@/lib/siteContentStore";

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

type PublishBody = {
  key?: string;
  updatedBy?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as PublishBody;

  if (!ADMIN_KEY || body.key !== ADMIN_KEY) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const store = await publishDraft({ updatedBy: body.updatedBy });
  return NextResponse.json({ ok: true, ...store });
}
