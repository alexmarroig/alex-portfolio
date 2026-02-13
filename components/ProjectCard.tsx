"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
  problem: string;
  architecture: string;
  role: string;
  impact: string;
  stackTags: string[];
  revealOrder?: number;
};

export default function ProjectCard({
  title,
  subtitle,
  href,
  tag,
  problem,
  architecture,
  role,
  impact,
  stackTags,
  revealOrder = 0
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const reducedMotion = useReducedMotion();

  const toggleFlip = () => setIsFlipped((value) => !value);

  return (
    <motion.article
      className={`projectCardWrap ${isFlipped ? "isFlipped" : ""}`}
      onMouseLeave={() => setIsFlipped(false)}
      initial={reducedMotion ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: reducedMotion ? 0.01 : 0.55, delay: reducedMotion ? 0 : revealOrder * 0.12 }}
    >
      <button
        type="button"
        className="projectCardButton"
        aria-expanded={isFlipped}
        aria-label={`${title} project details`}
        onClick={toggleFlip}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleFlip();
          }
        }}
      >
        <div className="projectCardInner">
          <div className="projectCardFace cardFront">
            <p className="cardTag">{tag}</p>
            <h3 className="cardTitle">{title}</h3>
            <p className="cardSubtitle">{subtitle}</p>
            <span className="flipHint">Flip for details →</span>
          </div>

          <div className="projectCardFace cardBack">
            <h3 className="cardTitle">{title}</h3>
            <ul className="projectMetaList">
              <li>
                <strong>Problem</strong>
                <span>{problem}</span>
              </li>
              <li>
                <strong>Architecture</strong>
                <span>{architecture}</span>
              </li>
              <li>
                <strong>My Role</strong>
                <span>{role}</span>
              </li>
              <li>
                <strong>Impact</strong>
                <span>{impact}</span>
              </li>
            </ul>
            <div className="chipGroup">
              {stackTags.map((tagName) => (
                <span className="chip" key={tagName}>
                  {tagName}
                </span>
              ))}
            </div>
            <Link
              href={href}
              className="cardAction"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              View case study →
            </Link>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
