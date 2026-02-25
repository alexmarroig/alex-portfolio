import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { setAdminPassword } from "@/lib/adminConfig";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ ok: false, message: "Não autorizado." }, { status: 401 });
  }

  try {
    const { newPassword } = (await request.json()) as { newPassword?: string };
    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json({ ok: false, message: "Senha deve ter ao menos 6 caracteres." }, { status: 400 });
    }

    await setAdminPassword(newPassword);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Erro interno." }, { status: 500 });
  }
}
