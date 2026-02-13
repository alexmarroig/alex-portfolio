"use client";

import Link from "next/link";
import { useMemo, useState, type KeyboardEvent } from "react";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  subtitle,
  description,
  status,
  icon,
  tech,
  caseStudy,
  links,
  isPrivate
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const statusClass = useMemo(() => {
    if (status === "LIVE") return "statusLive";
    if (status === "POC") return "statusPoc";
    return "statusPrivate";
  }, [status]);

  const onKeyToggle = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsFlipped((value) => !value);
    }
  };

  return (
    <article
      className={`group relative h-[400px] projectCardRoot ${isFlipped ? "isFlipped" : ""}`}
      tabIndex={0}
      onClick={() => setIsFlipped((value) => !value)}
      onKeyDown={onKeyToggle}
      aria-label={`Flip card for ${title} case study`}
      role="button"
      aria-pressed={isFlipped}
    >
      <span className="sr-only">Flip card</span>
      <div className="relative h-full w-full transition-transform duration-700 projectCardInner group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 rounded-2xl border projectCardFace projectFront">
          <div className="projectTopRow">
            <span className="projectIcon">{icon}</span>
            <h3 className="projectTitle">{title}</h3>
          </div>

          <span className={`projectStatus ${statusClass}`}>{status}</span>
          <p className="projectCategory">{subtitle}</p>
          <p className="projectDescription">{description}</p>

          <div className="projectPills">
            {tech.map((item) => (
              <span key={item} className="projectPill">
                {item}
              </span>
            ))}
          </div>

          <div className="projectHintRow">
            <p className="projectHintDesktop">Hover for case study</p>
            <p className="projectHintMobile">Tap to flip</p>
            <button
              type="button"
              className="flipControl"
              aria-label={`Flip card for ${title}`}
              onClick={(event) => {
                event.stopPropagation();
                setIsFlipped((value) => !value);
              }}
            >
              Flip card
            </button>
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl border projectCardFace projectBack">
          <h3 className="projectTitle">{title}</h3>
          <div className="caseStudyBlocks">
            <div>
              <p className="caseLabel">Problem</p>
              <p>{caseStudy.problem}</p>
            </div>
            <div>
              <p className="caseLabel">Solution</p>
              <p>{caseStudy.solution}</p>
            </div>
            <div>
              <p className="caseLabel">Impact</p>
              <p>{caseStudy.impact}</p>
            </div>
          </div>

          <div className="projectLinks">
            {links.github ? (
              <Link
                href={links.github}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="projectLink"
              >
                GitHub ↗
              </Link>
            ) : (
              <span className="projectPrivateNote">{isPrivate ? "Private repository" : "Repository unavailable"}</span>
            )}
            {links.live ? (
              <Link
                href={links.live}
                target="_blank"
                rel="noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="projectLink"
              >
                Live ↗
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
