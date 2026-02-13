"use client";

import Link from "next/link";
import { useMemo, useState, type KeyboardEvent } from "react";
import type { SiteContent } from "@/src/data/content";

type ProjectCardProps = SiteContent["projects"][number];

const sections = [
  { key: "problem", label: "Problem", icon: "P" },
  { key: "solution", label: "Solution / Architecture", icon: "S" },
  { key: "impact", label: "Impact", icon: "I" }
] as const;

export default function ProjectCard({ title, subtitle, description, status, icon, tech, caseStudy, links, isPrivate }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const statusClass = useMemo(() => {
    if (status === "ACTIVE") return "statusLive";
    if (status === "FOUNDATIONAL") return "statusPoc";
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
      className={`group relative projectCardRoot ${isFlipped ? "isFlipped" : ""}`}
      tabIndex={0}
      onClick={() => setIsFlipped((value) => !value)}
      onKeyDown={onKeyToggle}
      aria-label={`Flip card for ${title} case study`}
      role="button"
      aria-pressed={isFlipped}
    >
      <div className="projectCardInner">
        <div className="projectCardFace projectFront">
          <div className="projectTopRow">
            <span className="projectIcon">{icon}</span>
            <div>
              <p className="projectCaseType">{subtitle}</p>
              <h3 className="projectTitle">{title}</h3>
            </div>
          </div>

          <span className={`projectStatus ${statusClass}`}>{status}</span>
          <p className="projectDescription">{description}</p>

          <div className="projectPills">
            {tech.map((item) => (
              <span key={item} className="projectPill">
                {item}
              </span>
            ))}
          </div>

          <p className="projectFlipCta">Flip for architecture ➔</p>
        </div>

        <div className="projectCardFace projectBack">
          <h3 className="projectTitle">{title}</h3>
          <div className="caseStudyBlocks">
            {sections.map((section) => (
              <div className="caseRow" key={section.key}>
                <span className="caseIcon" aria-hidden="true">{section.icon}</span>
                <div>
                  <p className="caseLabel">{section.label}</p>
                  <p>{caseStudy[section.key]}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="projectLinks">
            {links.github ? (
              <Link href={links.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="projectLink">
                GitHub ↗
              </Link>
            ) : (
              <span className="projectPrivateNote">{isPrivate ? "Private repository" : "Repository unavailable"}</span>
            )}
            {links.live ? (
              <Link href={links.live} onClick={(event) => event.stopPropagation()} className="projectLink">
                Case study ↗
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
