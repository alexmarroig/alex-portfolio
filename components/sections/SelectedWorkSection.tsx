"use client";

import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import type { ProjectCategory } from "@/src/data/content";
import { useSiteContent } from "@/src/data/siteContentContext";
import type { IconType } from "react-icons";
import { FaBriefcase, FaCode, FaHeartbeat, FaRocket } from "react-icons/fa";
import { GiCrystalBall } from "react-icons/gi";

type CategoryMeta = {
  key: ProjectCategory;
  label: string;
  icon: IconType;
  color: string;
};

const CATEGORIES: CategoryMeta[] = [
  { key: "health", label: "Health & Clinical", icon: FaHeartbeat, color: "#22c55e" },
  { key: "astrology", label: "Astrology & Esoteric", icon: GiCrystalBall, color: "#c084fc" },
  { key: "ai", label: "AI & Automation", icon: FaRocket, color: "#49f1ff" },
  { key: "products", label: "Products & Business", icon: FaBriefcase, color: "#ff3ea6" },
  { key: "personal", label: "Personal & Identity", icon: FaCode, color: "#facc15" },
];

export default function SelectedWorkSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section" id="work" staggerChildren>
      <SectionTitle
        title="Selected Projects"
        lead="Real products I'm building across health, AI, astrology, and business."
      />

      {CATEGORIES.map((cat) => {
        const catProjects = content.projects.filter((p) => p.category === cat.key);
        if (!catProjects.length) return null;

        return (
          <div
            key={cat.key}
            className="categoryGroup"
            style={{ "--category-color": cat.color } as React.CSSProperties}
          >
            <div className="categoryHeader">
              <div className="categoryIcon">
                <cat.icon aria-hidden="true" />
              </div>
              <h3 className="categoryLabel">{cat.label}</h3>
              <div className="categoryDivider" />
            </div>
            <div className="projectGrid">
              {catProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        );
      })}
    </RevealSection>
  );
}
