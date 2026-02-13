"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

type Props = {
  label: string;
  front: ReactNode;
  back: ReactNode;
};

export default function FlipCard({ label, front, back }: Props) {
  const [isFlipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <article className={`projectCardRoot ${isFlipped ? "isFlipped" : ""}`} onClick={toggle} onKeyDown={onKeyDown} tabIndex={0} role="button" aria-label={label} aria-pressed={isFlipped}>
      <div className="projectCardInner">
        <div className="projectCardFace projectFront">{front}</div>
        <div className="projectCardFace projectBack">{back}</div>
      </div>
    </article>
  );
}
