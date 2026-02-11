import ProjectCard from "@/components/ProjectCard";
import InteractiveProjectCard from "@/components/InteractiveProjectCard";
import RevealSection from "@/components/RevealSection";

const stackGroups: Record<string, string[]> = {
  "Product & Delivery": [
    "AI Product Leadership",
    "Technical Program Management",
    "Cross-functional Delivery",
    "B2B SaaS in Regulated Environments"
  ],
  "Automation & AI": ["Workflow Automation", "AI Platform Delivery (NLP / RAG)", "APIs", "Low-code / No-code"],
  "Dev & Ops": ["Systems Integration", "Power Automate", "Enterprise Operations", "Zero-to-One + Scale"]
};

const whatITakeOn = [
  "AI Product Leadership",
  "Technical Program Management",
  "Systems Integration",
  "Workflow Automation",
  "AI Platform Delivery (NLP / RAG)",
  "B2B SaaS in Regulated Environments",
  "Zero-to-One + Scale"
];

const letsTalkHref = "mailto:alex.c.marroig@gmail.com?subject=Let%E2%80%99s%20Talk%20-%20Portfolio";

export default function Home() {
  return (
    <>
      <RevealSection className="section">
        <span className="heroBadge">Open to: Remote roles • Contract • Advisory</span>

        <h1 className="heroTitle">AI Product Manager. Technical PM. Systems that ship.</h1>

        <p className="heroSummary">
          I lead complex, cross-functional delivery across B2B SaaS and enterprise—where product strategy,
          automation, and AI meet real-world constraints.
        </p>

        <div className="heroActions">
          <a href={letsTalkHref} className="btn btnPrimary">
            Let&apos;s Talk
          </a>
          <a href="#featured" className="btn btnGhost">
            View Featured Builds
          </a>
        </div>

        <p className="microText">I respond within 48 hours.</p>
      </RevealSection>

      <RevealSection className="section">
        <h2 className="sectionTitle">What I Take On</h2>
        <div className="chipGroup" style={{ marginTop: 14 }}>
          {whatITakeOn.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section" id="featured">
        <h2 className="sectionTitle">Featured Builds</h2>
        <p className="sectionLead">Projects that represent how I think and ship.</p>

        <div className="projectGrid">
          <ProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform. Human-centered workflows, privacy by design, applied AI with guardrails."
          />

          <InteractiveProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time data and decision automation. Signal over noise, rule-first logic with pragmatic AI assistance."
            problem="noise/latency"
            solution="rule-first alerts + AI assist"
            focus="explainability/guardrails"
            outcomes={[
              "Faster alert triage",
              "Transparent decision paths",
              "Reliable automation under market volatility"
            ]}
          />

          <InteractiveProjectCard
            title="AI Ops Assistant"
            tag="Public portfolio project"
            href="/project/ai-ops-assistant"
            subtitle="Workflow automation for enterprise teams with deterministic-first guardrails and explainable AI support."
            problem="unstructured ops intake"
            solution="triage/routing + AI assist"
            focus="enterprise workflow"
            outcomes={["Structured request intake", "Priority-aware routing", "Explainable support with guardrails"]}
          />
        </div>
      </RevealSection>

      <RevealSection className="section" ariaLabelledby="core-stack-title">
        <h2 id="core-stack-title" className="sectionTitle">
          Core Stack
        </h2>
        <p className="sectionLead">A cross-functional toolkit for shipping high-quality products with speed and rigor.</p>

        {Object.entries(stackGroups).map(([groupName, items]) => (
          <div key={groupName} className="stackGroup">
            <h3 className="stackLabel">{groupName}</h3>
            <div className="badgeGroup">
              {items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </RevealSection>
    </>
  );
}
