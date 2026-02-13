"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type MouseEvent } from "react";

export default function HeroCard() {
  const reduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - py) * 8, y: (px - 0.5) * 10 });
  };

  return (
    <div className="heroCardWrap">
      <motion.article
        className="heroCard glassPanel"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={reduceMotion ? undefined : { rotateX: tilt.x, rotateY: tilt.y, scale: 1.002 }}
        transition={{ type: "spring", stiffness: 140, damping: 16, mass: 0.7 }}
      >
        <div className="heroGradient" aria-hidden="true" />
        <p className="heroKicker">Technical Project Manager • Systems Integrator • QA-minded Builder</p>
        <h1 className="heroTitle">Building ambitious systems with disciplined execution.</h1>
        <p className="heroSummary">
          I lead product and delivery execution as a Technical Project Manager, Systems Integrator, and QA-minded builder who
          translates strategy into stable, shippable systems.
        </p>

        <div className="heroActions" aria-label="Primary actions">
          <a href="#selected-work" className="btn btnPrimary">View Work</a>
          <a href="https://www.linkedin.com/in/alexmarroig/" className="btn btnPrimary" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnPrimary">Email</a>
        </div>
      </motion.article>

      <a className="scrollCue" href="#current-focus" aria-label="Scroll to current focus section">
        Scroll <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
