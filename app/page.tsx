import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <section style={{ paddingTop: 10 }}>
        <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: "10px 0 6px" }}>
          AI Product Manager | Technical PM | AI-Driven SaaS
        </h1>

        <p style={{ maxWidth: 760, fontSize: 16, opacity: 0.9, marginTop: 10 }}>
          Product and delivery leader with extensive experience building and scaling highly complex,
          cross-functional initiatives across B2B SaaS, enterprise, and regulated environments.
          Strong technical foundation in automation, low-code/no-code, APIs, and AI-driven systems.
          Fluent in English and Portuguese.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14, fontSize: 13, opacity: 0.9 }}>
          <span>São Paulo, Brazil</span>
          <span>•</span>
          <a href="https://www.linkedin.com/in/alexmarroig/" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
            LinkedIn
          </a>
          <span>•</span>
          <a href="mailto:alex.c.marroig@gmail.com" style={{ color: "inherit" }}>
            Email
          </a>
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Selected work</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
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
