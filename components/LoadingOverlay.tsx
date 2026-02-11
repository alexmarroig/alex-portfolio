"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function LoadingOverlay() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutMs = prefersReducedMotion ? 260 : 1500;
    const timer = window.setTimeout(() => setIsVisible(false), timeoutMs);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div className="loadingOverlay" aria-live="polite" aria-label="Loading portfolio">
          <div className="loadingGrid" />
          <motion.div className="loadingPanel">
            <div className="loadingArcWrap" aria-hidden="true">
              <div className="loadingArc" />
              <div className="loadingGlyph">✦</div>
            </div>
            <motion.p className="loadingLabel">Loading...</motion.p>
            <motion.p className="loadingTitle">Portfolio</motion.p>
            <div className="loadingBarTrack" aria-hidden="true">
              <motion.div className="loadingBarFill" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
