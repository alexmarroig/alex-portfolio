"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteContent, type SiteContent } from "@/src/data/content";

type ThemeConfig = {
  accent: string;
  accent2: string;
  bg: string;
  bg2: string;
  text: string;
  muted: string;
  border: string;
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

type SiteContentContextValue = {
  content: SiteContent;
  theme: ThemeConfig;
  isHydrated: boolean;
  setThemeValue: (key: keyof ThemeConfig, value: string) => void;
  replaceTheme: (nextTheme: ThemeConfig) => void;
  updateContent: (patch: DeepPartial<SiteContent>) => void;
  replaceContent: (nextContent: SiteContent) => void;
  resetAll: () => void;
};

const DEFAULT_THEME: ThemeConfig = {
  accent: "#ff3ea6",
  accent2: "#49f1ff",
  bg: "#050615",
  bg2: "#0b1023",
  text: "#eef2ff",
  muted: "rgba(239, 243, 255, 0.72)",
  border: "rgba(166, 180, 255, 0.22)"
};

const STORAGE_CONTENT_KEY = "alex-portfolio-content-overrides";
const STORAGE_THEME_KEY = "alex-portfolio-theme-overrides";
const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}



function normalizeContent(candidate: unknown): SiteContent {
  if (!isObject(candidate)) return structuredClone(siteContent);
  return deepMerge(structuredClone(siteContent), candidate as DeepPartial<SiteContent>);
}

function normalizeTheme(candidate: unknown): ThemeConfig {
  if (!isObject(candidate)) return structuredClone(DEFAULT_THEME);
  return { ...DEFAULT_THEME, ...(candidate as Partial<ThemeConfig>) };
}

function deepMerge<T>(target: T, source: DeepPartial<T>): T {
  if (Array.isArray(target)) {
    return (Array.isArray(source) ? source : target) as T;
  }

  if (!isObject(target) || !isObject(source)) {
    return (source as T) ?? target;
  }

  const result: Record<string, unknown> = { ...target };

  Object.keys(source).forEach((key) => {
    const targetValue = result[key];
    const sourceValue = source[key as keyof typeof source];

    if (sourceValue === undefined) return;

    if (Array.isArray(sourceValue)) {
      result[key] = sourceValue;
      return;
    }

    if (isObject(targetValue) && isObject(sourceValue)) {
      result[key] = deepMerge(targetValue, sourceValue);
      return;
    }

    result[key] = sourceValue;
  });

  return result as T;
}

function applyThemeToRoot(theme: ThemeConfig) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent2", theme.accent2);
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--bg2", theme.bg2);
  root.style.setProperty("--text", theme.text);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--border", theme.border);
}

export function SiteContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(siteContent);
  const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_THEME);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let mounted = true;

    const hydrate = async () => {
      try {
        const response = await fetch(`/api/admin/content?key=${encodeURIComponent(ADMIN_SECRET)}`);
        const payload = (await response.json()) as {
          ok?: boolean;
          draft?: { content: SiteContent; theme: ThemeConfig };
        };

        if (!response.ok || !payload.ok || !payload.draft) {
          throw new Error("Falha ao carregar conteúdo remoto");
        }

        if (!mounted) return;
        setContent(normalizeContent(payload.draft.content));
        setTheme(normalizeTheme(payload.draft.theme));
        localStorage.setItem(STORAGE_CONTENT_KEY, JSON.stringify(payload.draft.content));
        localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(payload.draft.theme));
      } catch {
        try {
          const rawContent = localStorage.getItem(STORAGE_CONTENT_KEY);
          if (rawContent) {
            setContent(normalizeContent(JSON.parse(rawContent)));
          }

          const rawTheme = localStorage.getItem(STORAGE_THEME_KEY);
          if (rawTheme) {
            setTheme(normalizeTheme(JSON.parse(rawTheme)));
          }
        } catch {
          setContent(siteContent);
          setTheme(DEFAULT_THEME);
        }
      } finally {
        if (mounted) {
          setIsHydrated(true);
        }
      }
    };

    hydrate();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    applyThemeToRoot(theme);
    if (!isHydrated) return;
    localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(theme));
  }, [theme, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(STORAGE_CONTENT_KEY, JSON.stringify(content));
  }, [content, isHydrated]);

  const value = useMemo<SiteContentContextValue>(
    () => ({
      content,
      theme,
      isHydrated,
      setThemeValue: (key, value) => setTheme((prev) => ({ ...prev, [key]: value })),
      replaceTheme: (nextTheme) => setTheme(nextTheme),
      updateContent: (patch) => setContent((prev) => deepMerge(prev, patch)),
      replaceContent: (nextContent) => setContent(nextContent),
      resetAll: () => {
        setContent(siteContent);
        setTheme(DEFAULT_THEME);
        localStorage.removeItem(STORAGE_CONTENT_KEY);
        localStorage.removeItem(STORAGE_THEME_KEY);
      }
    }),
    [content, theme, isHydrated]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error("useSiteContent must be used inside SiteContentProvider");
  }
  return ctx;
}
