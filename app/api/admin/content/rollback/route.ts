import { NextResponse } from "next/server";
import { rollbackLastPublished } from "@/lib/siteContentStore";
import { isAdminAuthenticated } from "@/lib/adminAuth";

type RollbackBody = {
  updatedBy?: string;
};

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as RollbackBody;

  const store = await rollbackLastPublished({ updatedBy: body.updatedBy });

  if (!store) {
    return NextResponse.json({ ok: false, message: "Não existe versão publicada anterior para rollback." }, { status: 409 });
  }

  return NextResponse.json({ ok: true, ...store });
}
