"use client";

import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
  details: string;
  stackTags: string[];
};

export default function ProjectCard({ title, subtitle, href, tag, details, stackTags }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className={`projectCardWrap ${isFlipped ? "isFlipped" : ""}`}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((value) => !value)}
    >
      <div className="projectCardInner">
        <div className="projectCardFace cardFront">
          <p className="cardTag">{tag}</p>
          <h3 className="cardTitle">{title}</h3>
          <p className="cardSubtitle">{subtitle}</p>
          <button type="button" className="flipHint" aria-label={`Reveal details for ${title}`}>
            Reveal details →
          </button>
        </div>

        <div className="projectCardFace cardBack">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardSubtitle">{details}</p>
          <div className="chipGroup">
            {stackTags.map((tagName) => (
              <span className="chip" key={tagName}>
                {tagName}
              </span>
            ))}
          </div>
          <Link href={href} className="cardAction">
            View case study →
          </Link>
        </div>
      </div>
    </article>
  );
}
