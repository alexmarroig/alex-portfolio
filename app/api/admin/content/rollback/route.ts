import { NextResponse } from "next/server";
import { rollbackLastPublished } from "@/lib/siteContentStore";

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

type RollbackBody = {
  key?: string;
  updatedBy?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RollbackBody;

  if (!ADMIN_KEY || body.key !== ADMIN_KEY) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const store = await rollbackLastPublished({ updatedBy: body.updatedBy });

  if (!store) {
    return NextResponse.json({ ok: false, message: "Não existe versão publicada anterior para rollback." }, { status: 409 });
  }

  return NextResponse.json({ ok: true, ...store });
}
