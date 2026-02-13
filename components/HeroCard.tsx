"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { siteContent } from "@/src/data/content";

export default function HeroCard() {
  const reduceMotion = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setParallax({ x: (px - 0.5) * 12, y: (py - 0.5) * 10 });
  };

  return (
    <div className="heroCardWrap">
      <motion.div className="heroParallaxGrid" aria-hidden="true" animate={{ x: parallax.x, y: parallax.y }} transition={{ type: "spring", stiffness: 120, damping: 18 }} />
      <motion.article
        className="heroCard glassPanel"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setParallax({ x: 0, y: 0 })}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <p className="heroSupport">{siteContent.hero.supportLine}</p>
        <h1 className="heroTitle heroNameGlow">{siteContent.hero.headline}</h1>
        <p className="heroSummary">{siteContent.hero.subhead[0]}</p>
        <p className="heroSummary">{siteContent.hero.subhead[1]}</p>
        <p className="heroExperience">{siteContent.hero.experienceLine}</p>

        <div className="heroActions" aria-label="Primary actions">
          {siteContent.hero.ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className="btn btnPrimary btnGlow" target={cta.external ? "_blank" : undefined} rel={cta.external ? "noreferrer" : undefined}>
              {cta.label}
            </a>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
