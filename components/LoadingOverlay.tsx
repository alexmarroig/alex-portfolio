"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function LoadingOverlay() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutMs = prefersReducedMotion ? 320 : 1450;
    const timer = window.setTimeout(() => setIsVisible(false), timeoutMs);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="loadingOverlay"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.985 }}
          transition={{ duration: prefersReducedMotion ? 0.12 : 0.35, ease: "easeOut" }}
        >
          <div className="loadingGrid" />
          <motion.div
            className="loadingPanel"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.42, ease: "easeOut" }}
          >
            <div className="loadingArcWrap" aria-hidden="true">
              <motion.div
                className="loadingArc"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={prefersReducedMotion ? undefined : { duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="loadingGlyph">✦</div>
            </div>

            <motion.p
              className="loadingLabel"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { delay: 0.08, duration: 0.36 }}
            >
              Loading...
            </motion.p>
            <motion.p
              className="loadingTitle"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 8 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? undefined : { delay: 0.14, duration: 0.36 }}
            >
              Portfolio
            </motion.p>

            <div className="loadingBarTrack" aria-hidden="true">
              <motion.div
                className="loadingBarFill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.24 : 1.15, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
