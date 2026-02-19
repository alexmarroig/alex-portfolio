import "server-only";

import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { siteContent, type SiteContent } from "@/src/data/content";

export type ThemeConfig = {
  accent: string;
  accent2: string;
  bg: string;
  bg2: string;
  text: string;
  muted: string;
  border: string;
};

export type ContentSnapshot = {
  content: SiteContent;
  theme: ThemeConfig;
  updatedBy: string;
  updatedAt: string;
  version: number;
};

export type SiteContentStore = {
  draft: ContentSnapshot;
  published: ContentSnapshot;
  previousPublished: ContentSnapshot | null;
};

const CONTENT_DIR = path.join(process.cwd(), ".content");
const CONTENT_FILE = path.join(CONTENT_DIR, "site-content.json");

export const DEFAULT_THEME: ThemeConfig = {
  accent: "#ff3ea6",
  accent2: "#49f1ff",
  bg: "#050615",
  bg2: "#0b1023",
  text: "#eef2ff",
  muted: "rgba(239, 243, 255, 0.72)",
  border: "rgba(166, 180, 255, 0.22)"
};

function createInitialStore(): SiteContentStore {
  const now = new Date().toISOString();
  const initialSnapshot: ContentSnapshot = {
    content: structuredClone(siteContent),
    theme: structuredClone(DEFAULT_THEME),
    updatedBy: "system",
    updatedAt: now,
    version: 1
  };

  return {
    draft: structuredClone(initialSnapshot),
    published: structuredClone(initialSnapshot),
    previousPublished: null
  };
}

async function writeStore(store: SiteContentStore) {
  await mkdir(CONTENT_DIR, { recursive: true });
  await writeFile(CONTENT_FILE, JSON.stringify(store, null, 2), "utf8");
}

export async function readSiteContentStore() {
  try {
    const raw = await readFile(CONTENT_FILE, "utf8");
    const parsed = JSON.parse(raw) as SiteContentStore;

    if (!parsed?.draft || !parsed?.published) {
      throw new Error("Invalid site content store");
    }

    return parsed;
  } catch {
    const initialStore = createInitialStore();
    await writeStore(initialStore);
    return initialStore;
  }
}

export async function saveDraft(payload: { content: SiteContent; theme: ThemeConfig; updatedBy?: string }) {
  const store = await readSiteContentStore();
  const updatedAt = new Date().toISOString();

  store.draft = {
    content: payload.content,
    theme: payload.theme,
    updatedBy: payload.updatedBy?.trim() || "admin",
    updatedAt,
    version: store.draft.version + 1
  };

  await writeStore(store);
  return store;
}

export async function publishDraft(payload: { updatedBy?: string }) {
  const store = await readSiteContentStore();
  const updatedAt = new Date().toISOString();

  store.previousPublished = structuredClone(store.published);
  store.published = {
    ...structuredClone(store.draft),
    updatedBy: payload.updatedBy?.trim() || "admin",
    updatedAt,
    version: store.published.version + 1
  };

  store.draft = {
    ...structuredClone(store.published),
    updatedBy: payload.updatedBy?.trim() || "admin",
    updatedAt,
    version: store.draft.version + 1
  };

  await writeStore(store);
  return store;
}

export async function rollbackLastPublished(payload: { updatedBy?: string }) {
  const store = await readSiteContentStore();

  if (!store.previousPublished) {
    return null;
  }

  const updatedAt = new Date().toISOString();
  const rollbackTarget = structuredClone(store.previousPublished);

  store.previousPublished = structuredClone(store.published);
  store.published = {
    ...rollbackTarget,
    updatedBy: payload.updatedBy?.trim() || "admin",
    updatedAt,
    version: store.published.version + 1
  };

  store.draft = {
    ...structuredClone(store.published),
    updatedBy: payload.updatedBy?.trim() || "admin",
    updatedAt,
    version: store.draft.version + 1
  };

  await writeStore(store);
  return store;
}
