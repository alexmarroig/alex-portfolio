import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteContent } from "@/src/data/content";

export default function SelectedWorkSection() {
  return (
    <RevealSection className="section" id="work" staggerChildren>
      <SectionHeader title="Selected Work" lead="Most relevant impact first: enterprise case studies, active builds, then older work." />
      <div className="projectGrid">
        {siteContent.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </RevealSection>
  );
}
