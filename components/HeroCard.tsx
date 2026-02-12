"use client";

import { CSSProperties, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MAX_TILT = 8;

export default function HeroCard() {
  const reducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const updateTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setCursor({ x: px * 100, y: py * 100 });
    if (reducedMotion) return;

    setTilt({
      x: (0.5 - py) * MAX_TILT,
      y: (px - 0.5) * MAX_TILT
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setCursor({ x: 50, y: 50 });
  };

  const heroStyle = {
    "--mx": `${cursor.x}%`,
    "--my": `${cursor.y}%`
  } as CSSProperties;

  return (
    <div className="heroCardWrap">
      <div className="heroGlowRing" aria-hidden="true" />
      <motion.div
        className="heroCard glassPanel"
        onMouseMove={updateTilt}
        onMouseLeave={resetTilt}
        style={heroStyle}
        animate={{
          transform: reducedMotion ? "none" : `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
        transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.7 }}
      >
        <div className="heroNoise" aria-hidden="true" />
        <p className="heroKicker">Technical Project Manager | Technical PM | Systems Integrator | QA-minded Builder</p>
        <h1 className="heroTitle">Shipping intelligent systems with clarity, control, and trust.</h1>
        <p className="heroSummary">
          PMP + PSM-I with 10+ years across pharma, tech, oil & gas, and manufacturing. I lead discovery →
          delivery for AI customer service platforms, while staying close to integration, QA validation, and
          production reliability.
        </p>

        <div className="heroActions">
          <a href="#selected-work" className="btn btnPrimary">
            View Work ↗
          </a>
          <a href="https://www.linkedin.com/in/alexmarroig/" className="btn btnGhost" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnGhost">
            Email ↗
          </a>
          <a href="/contact" className="btn btnGhost">
            Download Resume ↗
          </a>
        </div>

        <div className="metaRow">
          <span>30+ projects delivered • 10+ digital transformation initiatives</span>
          <span>•</span>
          <span>Post-M&A migration: 200+ people transition, 30+ regulated systems</span>
        </div>
      </motion.div>

      <a className="scrollCue" href="#core-stack" aria-label="Scroll to core stack section">
        Scroll
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
