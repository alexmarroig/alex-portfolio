"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteContent, type SiteContent } from "@/src/data/content";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

type ThemeConfig = {
  accent: string;
  accent2: string;
  bg: string;
  bg2: string;
  text: string;
  muted: string;
  border: string;
};

type SiteContentContextValue = {
  content: SiteContent;
  theme: ThemeConfig;
  setThemeValue: (key: keyof ThemeConfig, value: string) => void;
  updateContent: (patch: DeepPartial<SiteContent>) => void;
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

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
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
  const [overrides, setOverrides] = useState<DeepPartial<SiteContent>>({});
  const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const rawContent = localStorage.getItem(STORAGE_CONTENT_KEY);
      if (rawContent) {
        setOverrides(JSON.parse(rawContent) as DeepPartial<SiteContent>);
      }

      const rawTheme = localStorage.getItem(STORAGE_THEME_KEY);
      if (rawTheme) {
        const parsed = JSON.parse(rawTheme) as Partial<ThemeConfig>;
        setTheme((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      setOverrides({});
      setTheme(DEFAULT_THEME);
    }
  }, []);

  useEffect(() => {
    applyThemeToRoot(theme);
    localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(STORAGE_CONTENT_KEY, JSON.stringify(overrides));
  }, [overrides]);

  const content = useMemo(() => deepMerge(siteContent, overrides), [overrides]);

  const value = useMemo<SiteContentContextValue>(
    () => ({
      content,
      theme,
      setThemeValue: (key, value) => setTheme((prev) => ({ ...prev, [key]: value })),
      updateContent: (patch) => setOverrides((prev) => deepMerge(prev, patch)),
      resetAll: () => {
        setOverrides({});
        setTheme(DEFAULT_THEME);
        localStorage.removeItem(STORAGE_CONTENT_KEY);
        localStorage.removeItem(STORAGE_THEME_KEY);
      }
    }),
    [content, theme]
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
