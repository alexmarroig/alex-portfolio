import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";

export default function SelectedWorkSection() {
  return (
    <RevealSection className="section" id="work" staggerChildren>
      <SectionTitle title="Selected Work" lead="Private case studies from pharma, industrial engineering, and post-acquisition governance." />
      <div className="projectGrid">
        {siteContent.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </RevealSection>
  );
}
