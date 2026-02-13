import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { FaCogs, FaProjectDiagram } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

const featureBlocks = [
  {
    title: "Complex Systems & Industrial Engineering",
    description:
      "Large-scale industrial engineering projects, mission-critical environments, integration across multi-disciplinary teams.",
    icon: MdPrecisionManufacturing
  },
  {
    title: "Enterprise Delivery & M&A Integration",
    description:
      "Post-acquisition integration, cross-business orchestration, stakeholder alignment across C-levels.",
    icon: FaProjectDiagram
  },
  {
    title: "Automation & AI Systems",
    description: "AI platforms, workflow automation, APIs, QA-driven validation, technical orchestration.",
    icon: RiAiGenerate
  },
  {
    title: "Full-Stack Technical Depth",
    description: "Node.js, Python, SQL, Power Platform, system integration, production debugging, QA testing.",
    icon: FaCogs
  }
];

export default function CurrentFocusSection() {
  return (
    <RevealSection className="section" id="current-focus">
      <SectionHeader title="Capability Highlights" lead="Core areas where strategy, architecture, and execution converge." />

      <div className="featureGrid" role="list" aria-label="Capability feature blocks">
        {featureBlocks.map((block) => {
          const Icon = block.icon;
          return (
            <article key={block.title} className="glassPanel featureCard" role="listitem">
              <div className="featureHead">
                <span className="featureIcon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{block.title}</h3>
              </div>
              <p>{block.description}</p>
            </article>
          );
        })}
      </div>
    </RevealSection>
  );
}
