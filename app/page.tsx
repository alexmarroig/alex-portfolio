import HeroCard from "@/components/HeroCard";
import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";

const stackGroups: Record<string, { icon: string; skills: string[] }> = {
  "Product & Delivery": {
    icon: "🎯",
    skills: [
      "AI Product Leadership",
      "Technical Program Management",
      "Cross-functional Delivery",
      "B2B SaaS in Regulated Environments"
    ]
  },
  "Automation & AI": {
    icon: "⚡",
    skills: ["Workflow Automation", "AI Platform Delivery (NLP / RAG)", "APIs", "Low-code / No-code"]
  },
  "Dev & Ops": {
    icon: "🛠",
    skills: ["Systems Integration", "Power Automate", "Enterprise Operations", "Zero-to-One + Scale"]
  }
};

export default function Home() {
  return (
    <>
      <RevealSection className="section">
        <HeroCard />
      </RevealSection>

      <RevealSection className="section" id="core-stack">
        <h2 className="sectionTitle">Core Stack</h2>
        <div className="stackGrid">
          {Object.entries(stackGroups).map(([group, data]) => (
            <article className="glassPanel stackCard" key={group}>
              <h3 className="stackTitle">
                <span>{data.icon}</span>
                {group}
              </h3>
              <div className="chipGroup">
                {data.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section" id="selected-work">
        <h2 className="sectionTitle">Selected Work</h2>
        <p className="sectionLead">Flip each card for problem / solution context and next actions.</p>
        <div className="projectGrid">
          <ProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform with privacy-first workflows and assistive AI guardrails."
            details="Designed for sensitive environments where trust, ethics, and speed must coexist."
            stackTags={["Offline-first", "Privacy by design", "Assistive AI"]}
          />
          <ProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time alerting architecture focused on signal quality, explainability, and automation."
            details="Rule-first decisions with AI support for lower latency and higher confidence actions."
            stackTags={["Rule engine", "Streaming APIs", "Explainable AI"]}
          />
          <ProjectCard
            title="AI Ops Assistant"
            tag="Public portfolio project"
            href="/project/ai-ops-assistant"
            subtitle="Enterprise intake-to-resolution automation with deterministic guardrails and RAG support."
            details="Built to demonstrate modern process ops where reliability and speed are both measurable."
            stackTags={["Workflow orchestration", "LLM triage", "API-first integration"]}
          />
        </div>
      </RevealSection>

      <RevealSection className="section">
        <h2 className="sectionTitle">How I Think</h2>
        <p className="thoughtLine">
          I build products that are <span>ambitious</span> in vision and <span>disciplined</span> in execution.
        </p>
        <p className="sectionLead">
          My approach blends product strategy, operational rigor, and human-centered systems design—especially in
          regulated or high-stakes domains.
        </p>
      </RevealSection>

      <RevealSection className="section">
        <h2 className="sectionTitle">Open to Work / Services</h2>
        <div className="serviceGrid">
          <article className="serviceCard">
            <h3>Product Management Roles</h3>
            <p>Senior IC or lead PM roles where AI, data, and enterprise workflows converge.</p>
          </article>
          <article className="serviceCard">
            <h3>AI-driven SaaS Advisory</h3>
            <p>Fractional support on product strategy, automation roadmaps, and delivery systems.</p>
          </article>
        </div>
      </RevealSection>
    </>
  );
}
