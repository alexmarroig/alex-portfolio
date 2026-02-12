"use client";

import { Children, Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
  staggerChildren?: boolean;
};

export default function RevealSection({
  children,
  className = "",
  id,
  ariaLabelledby,
  staggerChildren = false
}: RevealSectionProps) {
  const reducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(10px)" },
    show: reducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: staggerChildren ? 0.1 : 0
          }
        }
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(8px)" },
    show: reducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.45, ease: "easeOut" }
        }
  };

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      {staggerChildren
        ? Children.map(children, (child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children ?? <Fragment />}
    </motion.section>
  );
}
