import { NextResponse } from "next/server";
import { publishDraft } from "@/lib/siteContentStore";
import { isAdminAuthenticated } from "@/lib/adminAuth";

type PublishBody = {
  updatedBy?: string;
};

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as PublishBody;

  const store = await publishDraft({ updatedBy: body.updatedBy });
  return NextResponse.json({ ok: true, ...store });
}
