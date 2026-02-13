"use client";

import Link from "next/link";
import FlipCard from "@/components/ui/FlipCard";
import StatusPill from "@/components/ui/StatusPill";
import TechBadge from "@/components/ui/TechBadge";
import type { SiteContent } from "@/src/data/content";
import { techCatalog } from "@/src/data/techCatalog";

type ProjectCardProps = SiteContent["projects"][number];

const sections = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" }
] as const;

export default function ProjectCard({ title, subtitle, description, status, tech, caseStudy, links }: ProjectCardProps) {
  return (
    <FlipCard
      label={`Flip card for ${title} case study`}
      front={
        <>
          <p className="projectCaseType">{subtitle}</p>
          <h3 className="projectTitle">{title}</h3>
          <StatusPill status={status} />
          <p className="projectDescription">{description}</p>
          <div className="badgeRow">
            {tech.map((item) => (
              <TechBadge key={item} {...techCatalog[item]} compact />
            ))}
          </div>
          <p className="projectFlipCta">Hover or tap to flip →</p>
        </>
      }
      back={
        <>
          <h3 className="projectTitle">{title}</h3>
          <div className="caseStudyBlocks">
            {sections.map((section) => (
              <div className="caseRow" key={section.key}>
                <p className="caseLabel">{section.label}</p>
                <p>{caseStudy[section.key]}</p>
              </div>
            ))}
          </div>
          <div className="projectLinks">
            {links.github ? (
              <Link href={links.github} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} className="projectLink">
                GitHub ↗
              </Link>
            ) : (
              <span className="projectPrivateNote">Private engagement</span>
            )}
            {links.live ? (
              <Link href={links.live} onClick={(event) => event.stopPropagation()} className="projectLink">
                Case study ↗
              </Link>
            ) : null}
          </div>
        </>
      }
    />
  );
}
