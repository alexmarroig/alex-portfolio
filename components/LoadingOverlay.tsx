"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SPLASH_KEY = "ax-portfolio-splash-seen";
const SPLASH_DURATION_MS = 1200;
const BOOT_LINES = [
  "BOOTING SYSTEM...",
  "Loading interface modules",
  "Initializing runtime",
  "Authenticating identity",
  "SYSTEM ONLINE",
  "Alex de Freitas Marroig"
];

export default function LoadingOverlay() {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const alreadySeen = window.sessionStorage.getItem(SPLASH_KEY) === "1";
    if (alreadySeen) return;

    setIsVisible(true);
    window.sessionStorage.setItem(SPLASH_KEY, "1");

    const timer = window.setTimeout(() => setIsVisible(false), SPLASH_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const containerExit = useMemo(
    () =>
      prefersReducedMotion
        ? { opacity: 0 }
        : {
            opacity: 0,
            filter: ["blur(0px)", "blur(1.5px)", "blur(0px)", "blur(3px)"],
            x: [0, -3, 2, 0]
          },
    [prefersReducedMotion]
  );

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="loadingOverlay"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={containerExit}
          transition={{ duration: prefersReducedMotion ? 0.18 : 0.28, ease: "easeOut" }}
        >
          <div className="loadingNoise" aria-hidden="true" />
          <div className="loadingGrid" aria-hidden="true" />
          <motion.div
            className="loadingPanel"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: prefersReducedMotion ? 0 : 0.08,
                  delayChildren: 0.08
                }
              }
            }}
          >
            <div className="loadingArcWrap" aria-hidden="true">
              <motion.svg className="loadingArc" width="148" height="148" viewBox="0 0 148 148">
                <circle className="loadingArcTrack" cx="74" cy="74" r="56" />
                <motion.circle
                  className="loadingArcProgress"
                  cx="74"
                  cy="74"
                  r="56"
                  initial={{ pathLength: 0, rotate: -90, transformOrigin: "50% 50%" }}
                  animate={
                    prefersReducedMotion
                      ? { pathLength: 1 }
                      : {
                          pathLength: [0, 0.65, 0.85],
                          rotate: [-90, -30, 20]
                        }
                  }
                  transition={{ duration: prefersReducedMotion ? 0.24 : 1.05, ease: "easeInOut" }}
                />
              </motion.svg>
            </div>

            <div className="bootText" role="status" aria-live="polite">
              {BOOT_LINES.map((line, index) => (
                <motion.p
                  key={line}
                  className={`bootLine ${index === BOOT_LINES.length - 1 ? "isIdentity" : ""}`}
                  variants={{
                    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 4 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.18 }}
                >
                  {line}
                </motion.p>
              ))}
              <span className="bootCursor" aria-hidden="true">
                ▋
              </span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
