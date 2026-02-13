"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  highlightWords?: string[];
  cinematic?: boolean;
};

function normalizeToken(token: string) {
  return token.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

export default function ScrollRevealText({
  text,
  className,
  highlightWords = [],
  cinematic = false,
}: ScrollRevealTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.trim().split(/\s+/);
  const highlightSet = new Set(highlightWords.map((w) => normalizeToken(w)));

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.06,
        delayChildren: reducedMotion ? 0 : 0.06,
      },
    },
  } as const;

  return (
    <motion.p
      className={`${className ?? ""} thoughtLineCinematic`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55 }}
      variants={containerVariants}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightSet.has(normalizeToken(word));

        return (
          <motion.span
            key={`${word}-${index}`}
            className={[
              "thoughtWord",
              isHighlighted ? "thoughtWordHighlight" : "",
              cinematic ? "isCinematic" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            variants={{
              hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(6px)" },
              show: reducedMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.42, ease: "easeOut" },
                  },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
