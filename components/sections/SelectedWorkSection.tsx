import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import { siteContent } from "@/src/data/content";

export default function SelectedWorkSection() {
  return (
    <RevealSection className="section" id="work" staggerChildren>
      <h2 className="sectionTitle">Selected Work</h2>
      <p className="sectionLead">Desktop hover flips cards. On mobile, tap to flip.</p>
      <div className="projectGrid">
        {siteContent.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </RevealSection>
  );
}
