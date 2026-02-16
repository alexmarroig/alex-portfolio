import "server-only";

import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "alex_admin_session";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "change-this-admin-session-secret";

function sha256(input: string) {
  return createHmac("sha256", SESSION_SECRET).update(input).digest("hex");
}

function safeEqualText(a: string, b: string) {
  const first = Buffer.from(a);
  const second = Buffer.from(b);
  if (first.length !== second.length) return false;
  return timingSafeEqual(first, second);
}

export function validateAdminCredentials(email: string, password: string) {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) return false;

  const emailOk = safeEqualText(email.trim().toLowerCase(), ADMIN_EMAIL.trim().toLowerCase());
  const passwordOk = safeEqualText(sha256(password), sha256(ADMIN_PASSWORD));
  return emailOk && passwordOk;
}

export function createSessionToken() {
  const issuedAt = Date.now().toString();
  const signature = createHmac("sha256", SESSION_SECRET).update(issuedAt).digest("hex");
  return `${issuedAt}.${signature}`;
}

export function isValidSessionToken(token: string) {
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;

  const expected = createHmac("sha256", SESSION_SECRET).update(issuedAt).digest("hex");
  if (!safeEqualText(signature, expected)) return false;

  const ageMs = Date.now() - Number(issuedAt);
  const maxAgeMs = 1000 * 60 * 60 * 12;
  return Number.isFinite(ageMs) && ageMs >= 0 && ageMs <= maxAgeMs;
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;
  return isValidSessionToken(token);
}
