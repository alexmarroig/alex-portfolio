"use client";

import FlipCard from "@/components/ui/FlipCard";
import StatusPill from "@/components/ui/StatusPill";
import type { SiteContent } from "@/src/data/content";
import { projectHeroIcons, techStackIcons } from "@/src/data/projectIcons";
import { FaProjectDiagram } from "react-icons/fa";

type ProjectCardProps = SiteContent["projects"][number];

const sections = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" },
] as const;

export default function ProjectCard({
  title,
  subtitle,
  description,
  status,
  icon,
  stack,
  caseStudy,
  asciiDiagram,
}: ProjectCardProps) {
  const HeroIcon = projectHeroIcons[icon] ?? FaProjectDiagram;

  return (
    <FlipCard
      label={`Flip card for ${title} case study`}
      front={
        <>
          <div className="projectHeroIcon">
            <HeroIcon aria-hidden="true" />
          </div>
          <p className="projectCaseType">{subtitle}</p>
          <h3 className="projectTitle">{title}</h3>
          <StatusPill status={status} />
          <p className="projectDescription">{description}</p>
          <div className="projectPills">
            {stack.slice(0, 4).map((name) => {
              const Icon = techStackIcons[name] ?? FaProjectDiagram;
              return (
                <span className="projectPill" key={name}>
                  <Icon aria-hidden="true" /> {name}
                </span>
              );
            })}
            {stack.length > 4 && (
              <span className="projectPill projectPillMore">
                +{stack.length - 4} more
              </span>
            )}
          </div>
          <p className="projectFlipCta">Hover or tap to view details</p>
        </>
      }
      back={
        <>
          <div className="projectHeroIcon projectHeroIconSmall">
            <HeroIcon aria-hidden="true" />
          </div>
          <h3 className="projectTitle">{title}</h3>
          {asciiDiagram && (
            <pre className="asciiDiagram">
              <code>{asciiDiagram}</code>
            </pre>
          )}
          <div className="caseStudyBlocks">
            {sections.map((section) => (
              <div className="caseRow" key={section.key}>
                <p className="caseLabel">{section.label}</p>
                <p>{caseStudy[section.key]}</p>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
