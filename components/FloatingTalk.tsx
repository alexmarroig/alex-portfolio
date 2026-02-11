"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FloatingTalk() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="floatingTalk"
      animate={reducedMotion ? undefined : { scale: [1, 1.02, 1] }}
      transition={reducedMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.a
        className="btn btnPrimary"
        href="mailto:alex.c.marroig@gmail.com?subject=Let%E2%80%99s%20Talk%20-%20Portfolio"
        aria-label="Let's Talk via email"
        whileHover={reducedMotion ? undefined : { scale: 1.03 }}
        whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      >
        Let&apos;s Talk
      </motion.a>
    </motion.div>
  );
}
