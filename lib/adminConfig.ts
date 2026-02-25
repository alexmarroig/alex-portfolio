import "server-only";

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const CONFIG_DIR = path.join(process.cwd(), ".content");
const CONFIG_FILE = path.join(CONFIG_DIR, "admin-config.json");

export async function getAdminPassword() {
  try {
    const raw = await readFile(CONFIG_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return parsed.password || process.env.ADMIN_PASSWORD || "Bianco256";
  } catch {
    return process.env.ADMIN_PASSWORD || "Bianco256";
  }
}

export async function setAdminPassword(newPassword: string) {
  try {
    await mkdir(CONFIG_DIR, { recursive: true });
    await writeFile(CONFIG_FILE, JSON.stringify({ password: newPassword }), "utf8");
  } catch (err) {
    console.warn("Admin password write failed:", err);
  }
}

export type AdminLog = {
  date: string;
  ip: string;
  country: string;
  userAgent: string;
  visitorId: string;
};

const LOG_FILE = path.join(CONFIG_DIR, "admin-logs.json");

export async function trackAdminLogin(log: AdminLog) {
  try {
    const logs = await getAdminLogs();
    logs.unshift(log);
    const trimmed = logs.slice(0, 100);
    await writeFile(LOG_FILE, JSON.stringify(trimmed), "utf8");
  } catch {
    try {
      await mkdir(CONFIG_DIR, { recursive: true });
      await writeFile(LOG_FILE, JSON.stringify([log]), "utf8");
    } catch (err) {
      console.warn("Admin login log write failed:", err);
    }
  }
}

export async function getAdminLogs(): Promise<AdminLog[]> {
  try {
    const raw = await readFile(LOG_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
