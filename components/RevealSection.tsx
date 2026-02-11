"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
};

export default function RevealSection({ children, className = "", id, ariaLabelledby }: RevealSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(8px)" }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: reducedMotion ? 0.01 : 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
