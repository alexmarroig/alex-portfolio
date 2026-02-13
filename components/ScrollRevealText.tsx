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
          </motion.span>
        );
      })}
    </motion.p>
  );
}
