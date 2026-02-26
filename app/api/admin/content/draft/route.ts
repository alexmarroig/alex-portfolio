import { NextResponse } from "next/server";
import { saveDraft, type ThemeConfig } from "@/lib/siteContentStore";
import type { SiteContent } from "@/src/data/content";
import { isAdminAuthenticated } from "@/lib/adminAuth";

type SaveDraftBody = {
  content?: SiteContent;
  theme?: ThemeConfig;
  updatedBy?: string;
};

export async function PUT(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as SaveDraftBody;

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
