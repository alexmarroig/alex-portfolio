import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createSessionToken, validateAdminCredentials } from "@/lib/adminAuth";
import { trackAdminLogin } from "@/lib/adminConfig";
import { createVisitorId } from "@/lib/analyticsStore";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = body.email ?? "";
    const password = body.password ?? "";

    if (!(await validateAdminCredentials(email, password))) {
      return NextResponse.json({ ok: false, message: "Credenciais inválidas." }, { status: 401 });
    }

    const ua = request.headers.get("user-agent") || "unknown";
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const country = request.headers.get("x-vercel-ip-country") || "unknown";
    const visitorId = createVisitorId(ip, ua);

    await trackAdminLogin({
      date: new Date().toLocaleString("pt-BR"),
      ip,
      country,
      userAgent: ua,
      visitorId
    });

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: ADMIN_SESSION_COOKIE,
      value: createSessionToken(),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12
    });

    return response;
  } catch {
    return NextResponse.json({ ok: false, message: "Payload inválido." }, { status: 400 });
  }
}
