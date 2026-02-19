import { NextResponse } from "next/server";
import { saveDraft, type ThemeConfig } from "@/lib/siteContentStore";
import type { SiteContent } from "@/src/data/content";

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

type SaveDraftBody = {
  key?: string;
  content?: SiteContent;
  theme?: ThemeConfig;
  updatedBy?: string;
};

export async function PUT(request: Request) {
  const body = (await request.json()) as SaveDraftBody;

  if (!ADMIN_KEY || body.key !== ADMIN_KEY) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  if (!body.content || !body.theme) {
    return NextResponse.json({ ok: false, message: "Payload inválido." }, { status: 400 });
  }

  const store = await saveDraft({
    content: body.content,
    theme: body.theme,
    updatedBy: body.updatedBy
  });

  return NextResponse.json({ ok: true, ...store });
}
