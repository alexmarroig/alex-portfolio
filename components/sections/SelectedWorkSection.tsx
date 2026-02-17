"use client";

import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function SelectedWorkSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section" id="work" staggerChildren>
      <SectionTitle title="Selected Work" lead="Private case studies from pharma, industrial engineering, and post-acquisition governance." />
      <SectionTitle title="Featured Work" lead="Selected software, automation, and SANDECH industrial engineering case studies." />
      <div className="projectGrid">
        {content.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </RevealSection>
  );
}
