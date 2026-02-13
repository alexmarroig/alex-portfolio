"use client";

import { type KeyboardEvent, useState } from "react";

export default function HeroCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped((value) => !value);

  const onKeyToggle = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div className="heroCardWrap">
      <div className="heroGlowRing" aria-hidden="true" />

      <article
        className={`group heroFlipRoot ${isFlipped ? "isFlipped" : ""}`}
        tabIndex={0}
        role="button"
        aria-label="Flip hero card"
        aria-pressed={isFlipped}
        onClick={toggleFlip}
        onKeyDown={onKeyToggle}
      >
        <div className="heroFlipInner">
          <div className="heroFlipFace heroFlipFront heroCard glassPanel">
            <div className="heroNoise" aria-hidden="true" />
            <p className="heroKicker">AI Product Manager • Technical PM • Systems Integrator</p>
            <h1 className="heroTitle">Building intelligent products that ship with trust.</h1>
            <p className="heroSummary">
              I help teams turn ambiguity into product momentum across B2B SaaS, AI automation, and enterprise delivery.
            </p>

            <div className="heroActions">
              <a href="#selected-work" className="btn btnPrimary" onClick={(event) => event.stopPropagation()}>
                View Work ↗
              </a>
              <a
                href="https://www.linkedin.com/in/alexmarroig/"
                className="btn btnGhost"
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                LinkedIn ↗
              </a>
              <a href="mailto:alex.c.marroig@gmail.com" className="btn btnGhost" onClick={(event) => event.stopPropagation()}>
                Email ↗
              </a>
              <a href="/contact" className="btn btnGhost" onClick={(event) => event.stopPropagation()}>
                Download Resume ↗
              </a>
            </div>

            <div className="metaRow">
              <span>30+ projects delivered • 10+ digital transformation initiatives</span>
              <span>•</span>
              <span>Post-M&A migration: 200+ people transition, 30+ regulated systems</span>
            </div>
            <p className="heroFlipHint">Tap to flip</p>
          </div>

          <div className="heroFlipFace heroFlipBack heroCard glassPanel">
            <div className="heroNoise" aria-hidden="true" />
            <p className="heroKicker">How I execute</p>
            <h2 className="heroTitle">I align product strategy with implementation reality.</h2>
            <p className="heroSummary">
              From discovery and stakeholder alignment to QA validation and launch, I focus on outcomes teams can trust in
              production.
            </p>
            <ul className="heroBackList">
              <li>Bridge business objectives, engineering constraints, and delivery timelines.</li>
              <li>Design implementation plans that reduce risk without slowing momentum.</li>
              <li>Drive AI-enabled systems toward measurable adoption and operational value.</li>
            </ul>
            <p className="heroFlipHint">Tap to flip back</p>
          </div>
        </div>
      </article>

      <a className="scrollCue" href="#core-stack" aria-label="Scroll to core stack section">
        Scroll
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
