"use client";

import { type CSSProperties, type MouseEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MAX_TILT = 7;

export default function HeroCard() {
  const reducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const updateTilt = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches || reducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setCursor({ x: px * 100, y: py * 100 });
    setTilt({ x: (0.5 - py) * MAX_TILT, y: (px - 0.5) * MAX_TILT });
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
      <motion.article
        className="heroCard glassPanel"
        style={heroStyle}
        onMouseMove={updateTilt}
        onMouseLeave={resetTilt}
        animate={{ transform: reducedMotion ? "none" : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        transition={{ type: "spring", stiffness: 120, damping: 14, mass: 0.8 }}
      >
        <div className="heroNoise" aria-hidden="true" />
        <h1 className="heroTitle">Alex de Freitas Marroig — Technical PM, Systems Integrator, QA-minded Builder</h1>
        <p className="heroSummary">
          Bridging business and engineering. I architect, build, and integrate mission-critical systems that teams can
          trust in production.
        </p>

        <div className="heroActions">
          <a href="#current-focus" className="btn btnPrimary">
            Explore Current Focus
          </a>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnGhost">
            Let&apos;s Talk
          </a>
        </div>

        <div className="metaRow">
          <span>10+ years across regulated and high-stakes environments</span>
          <span>•</span>
          <span>30+ projects delivered, including post-M&A transformation programs</span>
        </div>
      </motion.article>

      <a className="scrollCue" href="#current-focus" aria-label="Scroll to current focus section">
        Scroll
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
