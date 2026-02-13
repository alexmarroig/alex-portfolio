"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealItemProps = {
  children: React.ReactNode;
  order?: number;
  className?: string;
};

export default function RevealItem({ children, order = 0, className }: RevealItemProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: reducedMotion ? 0.01 : 0.45, delay: reducedMotion ? 0 : order * 0.08 }}
    >
      {children}
    </motion.div>
  );
}
