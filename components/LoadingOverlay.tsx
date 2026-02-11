"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SPLASH_KEY = "ax-portfolio-splash-seen";
const SPLASH_DURATION_MS = 1400;

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

  if (!isMounted) return null;

  const lineVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 8, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="loadingOverlay"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, filter: "blur(6px)" }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)" }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.35, ease: "easeOut" }}
        >
          <div className="loadingNoise" aria-hidden="true" />
          <div className="loadingGrid" aria-hidden="true" />
          {prefersReducedMotion ? null : (
            <motion.div
              className="loadingScanline"
              aria-hidden="true"
              initial={{ x: "-140%", opacity: 0 }}
              animate={{ x: "140%", opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          )}

          <motion.div
            className="loadingPanel"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: prefersReducedMotion ? 0 : 0.08,
                  delayChildren: prefersReducedMotion ? 0.04 : 0.1
                }
              }
            }}
          >
            <div className="loadingArcWrap" aria-hidden="true">
              <motion.svg
                className="loadingArc"
                width="124"
                height="124"
                viewBox="0 0 124 124"
                animate={prefersReducedMotion ? undefined : { rotate: [0, 12, 0] }}
                transition={prefersReducedMotion ? undefined : { duration: 1.2, ease: "easeInOut" }}
              >
                <circle className="loadingArcTrack" cx="62" cy="62" r="47" />
                <motion.circle
                  className="loadingArcProgress"
                  cx="62"
                  cy="62"
                  r="47"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.86 }}
                  transition={{ duration: prefersReducedMotion ? 0.25 : 1.1, ease: "easeInOut" }}
                />
              </motion.svg>
              <div className="loadingGlyph">AX</div>
            </div>

            <motion.p className="loadingLabel" variants={lineVariants} transition={{ duration: 0.34 }}>
              Loading...
            </motion.p>
            <motion.p className="loadingTitle" variants={lineVariants} transition={{ duration: 0.36 }}>
              Alex Marroig — Portfolio
            </motion.p>
            <motion.p className="loadingSub" variants={lineVariants} transition={{ duration: 0.38 }}>
              AI Product • Technical PM • Automation
            </motion.p>

            <div className="loadingBarTrack" aria-hidden="true">
              <motion.div
                className="loadingBarFill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.28 : 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
