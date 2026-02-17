"use client";

import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

type Props = {
  label: string;
  front: ReactNode;
  back: ReactNode;
};

export default function FlipCard({ label, front, back }: Props) {
  const [isFlipped, setFlipped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const toggle = () => setFlipped((v) => !v);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  if (reducedMotion) {
    return (
      <article className="card projectAccordionCard" aria-label={label}>
        <div className="projectAccordionFront">{front}</div>
        <button className="flipControl" onClick={toggle} aria-expanded={isFlipped}>
          {isFlipped ? "Hide details" : "View details"}
        </button>
        {isFlipped ? <div className="projectAccordionBack">{back}</div> : null}
      </article>
    );
  }

  return (
    <article className={`projectCardRoot ${isFlipped ? "isFlipped" : ""}`} onClick={toggle} onKeyDown={onKeyDown} tabIndex={0} role="button" aria-label={label} aria-pressed={isFlipped}>
      <div className="projectCardInner">
        <div className="projectCardFace projectFront">{front}</div>
        <div className="projectCardFace projectBack">{back}</div>
      </div>
    </article>
  );
}
