import ProjectCard from "@/components/ProjectCard";

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
      </section>
    </>
  );
}
