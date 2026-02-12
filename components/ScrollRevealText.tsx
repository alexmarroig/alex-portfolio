"use client";

import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
  highlightWords?: string[];
  cinematic?: boolean;
};

export default function ScrollRevealText({
  text,
  className,
  highlightWords = [],
  cinematic = false
}: ScrollRevealTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reducedMotion ? 0 : 0.045
          }
        }
      }}
    >
      {words.map((word, index) => {
        const cleanWord = word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
        const isHighlighted = highlightWords.map((item) => item.toLowerCase()).includes(cleanWord);
};

function normalizeToken(token: string) {
  return token.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

export default function ScrollRevealText({
  text,
  className,
  highlightWords = []
}: ScrollRevealTextProps) {
  const reducedMotion = useReducedMotion();
  const words = text.trim().split(/\s+/);
  const highlightSet = new Set(highlightWords.map((w) => normalizeToken(w)));

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.06,
        delayChildren: reducedMotion ? 0 : 0.06
      }
    }
  } as const;

  const wordVariants = {
    hidden: reducedMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 18, rotateX: 18, filter: "blur(9px)" },
    show: reducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: [18, -2, 0],
          rotateX: [18, 0, 0],
          filter: ["blur(9px)", "blur(0px)", "blur(0px)"],
          transition: {
            duration: 0.62,
            times: [0, 0.7, 1],
            ease: [0.22, 1, 0.36, 1]
          }
        }
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
              cinematic ? "isCinematic" : ""
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
                    transition: { duration: 0.42, ease: "easeOut" }
                  }
            }}
          >
            {word}
            className={isHighlighted ? "thoughtWord thoughtWordHighlight isCinematic" : "thoughtWord isCinematic"}
            variants={wordVariants}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
}
