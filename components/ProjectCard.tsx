"use client";

import FlipCard from "@/components/ui/FlipCard";
import StatusPill from "@/components/ui/StatusPill";
import type { SiteContent } from "@/src/data/content";
import { FaProjectDiagram, FaShieldAlt } from "react-icons/fa";
import { MdIntegrationInstructions, MdOutlinePrecisionManufacturing, MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { SiNodedotjs, SiTestinglibrary } from "react-icons/si";

type ProjectCardProps = SiteContent["projects"][number];

const sections = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" }
] as const;

const iconMap = {
  Delivery: MdOutlinePrecisionManufacturing,
  Governance: FaProjectDiagram,
  Risk: FaShieldAlt,
  APIs: MdIntegrationInstructions,
  Automation: RiRobot2Line,
  "Node.js": SiNodedotjs,
  QA: SiTestinglibrary,
  "CI/CD": MdOutlinePublishedWithChanges,
  Integration: MdIntegrationInstructions,
  Architecture: FaShieldAlt,
  Execution: MdOutlinePublishedWithChanges
} as const;

export default function ProjectCard({ title, subtitle, description, status, stack, caseStudy }: ProjectCardProps) {
  return (
    <FlipCard
      label={`Flip card for ${title} case study`}
      front={
        <>
          <p className="projectCaseType">{subtitle}</p>
          <h3 className="projectTitle">{title}</h3>
          <StatusPill status={status} />
          <p className="projectDescription">{description}</p>
          <div className="projectPills">
            {stack.map((name) => {
              const Icon = iconMap[name as keyof typeof iconMap] ?? FaProjectDiagram;
              return (
                <span className="projectPill" key={name}>
                  <Icon aria-hidden="true" /> {name}
                </span>
              );
            })}
          </div>
          <p className="projectFlipCta">Hover or tap to view details</p>
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
        </>
      }
    />
  );
}
