import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import { projects } from "@/src/data/projects";

export default function SelectedWorkSection() {
  return (
    <RevealSection className="section" id="selected-work" staggerChildren>
      <h2 className="sectionTitle">Selected Work</h2>
      <p className="sectionLead">Flip each card for problem framing, solution details, and impact.</p>
      <div className="projectGrid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </RevealSection>
  );
}
