import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";

const stackGroups = {
  Frontend: ["Next.js", "Product UX", "Design Systems", "Accessibility"],
  "AI & Data": ["Applied AI", "Prompt Design", "Workflow Intelligence", "Data APIs"],
  "Dev & Ops": ["Automation", "Power Automate", "Systems Integration", "B2B SaaS"]
};

const whatITakeOn = ["AI Product", "Technical PM", "Automation", "Systems Integration"];

const coreStack = [
  "Product Leadership",
  "AI",
  "Automation",
  "B2B SaaS",
  "APIs",
  "Low-code",
  "Power Automate",
  "Enterprise Delivery",
  "Cross-functional Execution",
  "Regulated Environments"
];

export default function Home() {
  return (
    <>
      <section className="section">
        <h1 className="heroTitle">AI Product Manager | Technical PM | AI-Driven SaaS</h1>

        <p className="heroSummary">
          Product and delivery leader with extensive experience building and scaling highly complex,
          cross-functional initiatives across B2B SaaS, enterprise, and regulated environments. Strong
          technical foundation in automation, low-code/no-code, APIs, and AI-driven systems.
        </p>

        <div className="heroActions">
          <a href="#selected-work" className="btn btnPrimary">
            View Work
          </a>
          <a
            href="https://www.linkedin.com/in/alexmarroig/"
            target="_blank"
            rel="noreferrer"
            className="btn btnGhost"
          >
            LinkedIn
          </a>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnGhost">
            Email
          </a>
          <a href="#" className="btn btnGhost" aria-disabled="true">
            Download Resume
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

        <div className="metaRow">
          <span>São Paulo, Brazil</span>
          <span aria-hidden="true">•</span>
          <span>Fluent in English and Portuguese</span>
        </div>
      </section>

      <section className="section" aria-labelledby="core-stack-title">
        <h2 id="core-stack-title" className="sectionTitle">
          Core Stack
        </h2>
        <div className="badgeGroup">
          {coreStack.map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="selected-work">
        <h2 className="sectionTitle">Selected work</h2>

        <div className="projectGrid">
          <ProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform. Human-centered workflows, privacy by design, applied AI with guardrails."
          />

          <ProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time data and decision automation. Signal over noise, rule-first logic with pragmatic AI assistance."
          />

          <ProjectCard
            title="AI Ops Assistant"
            tag="Public portfolio project"
            href="/project/ai-ops-assistant"
            subtitle="Workflow automation for enterprise teams with deterministic-first guardrails and explainable AI support."
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

      <RevealSection className="section glassPanel">
        <h2 className="sectionTitle">About</h2>
        <p className="sectionLead">
          I lead product and delivery across technical domains where ambiguity is high and reliability matters.
          My approach blends strategy, systems thinking, and execution discipline to help teams ship confidently.
        </p>
      </RevealSection>

      <RevealSection className="section glassPanel">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionLead">If you&apos;re building AI-powered products and need hands-on product leadership, let&apos;s connect.</p>
        <div className="heroActions" style={{ marginTop: 18 }}>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnPrimary">
            Let&apos;s Talk
          </a>
          <a href="https://www.linkedin.com/in/alexmarroig/" target="_blank" rel="noreferrer" className="btn btnGhost">
            LinkedIn
          </a>
        </div>
      </RevealSection>
    </>
  );
}
