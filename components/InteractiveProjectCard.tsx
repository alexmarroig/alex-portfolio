"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type InteractiveProjectCardProps = {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
  problem: string;
  solution: string;
  focus: string;
  stackTags: string[];
  outcomes: string[];
};

export default function InteractiveProjectCard({
  title,
  subtitle,
  href,
  tag,
  problem,
  solution,
  focus,
  stackTags,
  outcomes
}: InteractiveProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const cardTransform = useMemo(() => {
    if (reducedMotion) {
      return isPressed ? "scale(0.99)" : "scale(1)";
    }
    if (isOpen) return "rotateY(180deg) scale(1.008)";
    return `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isPressed ? 0.988 : 1.018})`;
  }, [isOpen, isPressed, reducedMotion, tilt.x, tilt.y]);

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion || isOpen) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setGlow({ x: px * 100, y: py * 100 });
    setTilt({ x: (0.5 - py) * 7.5, y: (px - 0.5) * 10 });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
    setIsPressed(false);
  };

  return (
    <motion.div className={`interactiveCardWrap ${isOpen ? "isOpen" : ""}`}>
      <button
        type="button"
        className="interactiveCardButton"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onPointerDown={() => setIsPressed(true)}
        onPointerUp={() => setIsPressed(false)}
        onClick={() => setIsOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen((value) => !value);
          }
        }}
        aria-expanded={isOpen}
        aria-label={`${title} details`}
      >
        <motion.div className="interactiveCard3d" style={{ transform: cardTransform }}>
          <div
            className="cardSpecular"
            style={{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.24), rgba(255,255,255,0.01) 40%, transparent 62%)`
            }}
          />

          <div className="interactiveFace interactiveFront card">
            <div className="cardHeader">
              <div className="cardTitle">{title}</div>
              <span className="cardTag">{tag}</span>
            </div>
            <p className="cardSubtitle">{subtitle}</p>
            <div className="cardAction">Click to expand →</div>
          </div>

          <div className="interactiveFace interactiveBack card">
            <div className="backLabel">Expanded View</div>
            <div className="cardTitle">{title}</div>
            <ul className="backMetaList">
              <li>
                <strong>Problem:</strong> {problem}
              </li>
              <li>
                <strong>Solution:</strong> {solution}
              </li>
              <li>
                <strong>Focus:</strong> {focus}
              </li>
            </ul>
            <div className="badgeGroup">
              {stackTags.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
            <ul className="backOutcomeList">
              {outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="backActions">
              <Link href={href} className="btn btnPrimary">
                Open Case Study
              </Link>
              <span
                role="button"
                tabIndex={0}
                className="btn btnGhost"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setIsOpen(false);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setIsOpen(false);
                  }
                }}
              >
                Back
              </span>
            </div>
          </div>
        </motion.div>
      </button>
    </motion.div>
  );
}
