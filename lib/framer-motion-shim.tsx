"use client";

import { createElement, forwardRef, useEffect, useMemo, useState } from "react";
import type React from "react";

type MotionProps = Record<string, unknown>;

const FILTERED_KEYS = new Set([
  "initial",
  "animate",
  "exit",
  "variants",
  "transition",
  "whileHover",
  "whileTap",
  "layout",
  "layoutId",
  "viewport",
  "whileInView"
]);

function cleanProps(props: MotionProps) {
  const next: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (!FILTERED_KEYS.has(key)) next[key] = value;
  }
  return next;
}

function makeMotion(tag: keyof React.JSX.IntrinsicElements) {
  return forwardRef<HTMLElement, MotionProps>(function MotionTag(props, ref) {
    return createElement(tag, { ...cleanProps(props), ref }, props.children as React.ReactNode);
  });
}

export const motion = new Proxy(
  {},
  {
    get(_target, prop: string) {
      return makeMotion(prop as keyof React.JSX.IntrinsicElements);
    }
  }
) as Record<string, ReturnType<typeof makeMotion>>;

export function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return useMemo(() => reduced, [reduced]);
}
