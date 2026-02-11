"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MAX_TILT = 10;

export default function HeroCard() {
  const reducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const updateTilt = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - py) * MAX_TILT,
      y: (px - 0.5) * MAX_TILT
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="heroCardWrap">
      <div className="heroGlowRing" aria-hidden="true" />
      <motion.div
        className="heroCard glassPanel"
        onMouseMove={updateTilt}
        onMouseLeave={resetTilt}
        animate={{
          transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
        transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.7 }}
      >
        <p className="heroKicker">AI Product Manager • Technical PM • Systems Integrator</p>
        <h1 className="heroTitle">Building intelligent products that ship with trust.</h1>
        <p className="heroSummary">
          I help teams turn ambiguity into product momentum across B2B SaaS, AI automation, and enterprise
          delivery.
        </p>

        <div className="heroActions">
          <a href="#selected-work" className="btn btnPrimary">
            View Work
          </a>
          <a href="https://www.linkedin.com/in/alexmarroig/" className="btn btnGhost" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnGhost">
            Email
          </a>
        </div>

        <div className="metaRow">
          <span>10+ years experience</span>
          <span>•</span>
          <span>B2B SaaS • AI & Automation • Product Leadership</span>
        </div>
      </motion.div>

      <a className="scrollCue" href="#core-stack" aria-label="Scroll to core stack section">
        Scroll
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
