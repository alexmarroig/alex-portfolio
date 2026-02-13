import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";

export default function SelectedWorkSection() {
  return (
    <RevealSection className="section" id="work" staggerChildren>
      <SectionTitle title="Featured Work" lead="Selected software, automation, and SANDECH industrial engineering case studies." />
      <div className="projectGrid">
        {siteContent.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </RevealSection>
  );
}
