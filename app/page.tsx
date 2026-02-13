import AboutSection from "@/components/sections/AboutSection";
import ContractSection from "@/components/sections/ContractSection";
import CoreStackSection from "@/components/sections/CoreStackSection";
import CurrentFocusSection from "@/components/sections/CurrentFocusSection";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import HeroCard from "@/components/HeroCard";
import ProjectCard from "@/components/ProjectCard";
import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";
import ScrollRevealText from "@/components/ScrollRevealText";

const stackGroups: Record<string, { icon: string; skills: string[] }> = {
  "Product Engineering": {
    icon: "🧠",
    skills: [
      "AI-first Product Design",
      "Specs → Systems → Shipping",
      "Metrics-driven Delivery",
      "B2B SaaS (Regulated / High-stakes)"
    ]
  },
  "Automation & AI Systems": {
    icon: "⚡",
    skills: [
      "Workflow Orchestration",
      "RAG / Retrieval Systems",
      "LLM Guardrails (Determinism + Escalation)",
      "Event-driven Pipelines",
      "API-first Integrations"
    ]
  },
  "Platforms & Ops": {
    icon: "🛠",
    skills: [
      "Systems Integration",
      "Operational Tooling",
      "Reliability & Auditability",
      "Zero-to-One → Scale"
    ]
  }
};

const thoughtLines = [
  { text: "I build products that matter.", highlightWords: ["matter"] },
  {
    text: "I’m driven by innovation, obsessed with structure, and energized by solving complex problems.",
    highlightWords: ["innovation", "structure", "complex"]
  },
  {
    text: "Technology is how I transform dreams into real, usable solutions.",
    highlightWords: ["Technology", "transform", "real", "usable"]
  }
];

const rolesExploring = [
  "Technical Project Manager",
  "Technical Program Manager",
  "Technical Product Manager",
  "AI Product Manager",
  "AI / Automation Product Lead"
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <CurrentFocusSection />
      <CoreStackSection />
      <SelectedWorkSection />
      <AboutSection />
      <ContractSection />
      <RevealSection className="section">
        <HeroCard />
      </RevealSection>

      <RevealSection className="section" id="core-stack" staggerChildren>
        <h2 className="sectionTitle">Core Stack</h2>
        <p className="sectionLead">
          I build ambitious systems with disciplined execution: clear architecture, automation leverage, and delivery
          that holds up in the real world.
        </p>

        <div className="stackGrid">
          {Object.entries(stackGroups).map(([group, data], index) => (
            <RevealItem order={index} key={group}>
              <article className="glassPanel stackCard">
                <h3 className="stackTitle">
                  <span aria-hidden="true">{data.icon}</span>
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
            </RevealItem>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section" id="selected-work" staggerChildren>
        <h2 className="sectionTitle">Selected Work</h2>
        <p className="sectionLead">Flip each card for problem framing, architecture decisions, and outcomes.</p>

        <div className="projectGrid">
          <ProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform with privacy-first workflows and assistive AI guardrails."
            problem="Clinical teams were blocked by disconnected workflows, slow approvals, and strict compliance constraints."
            architecture="Offline-first sync engine + role-based policy layer + AI assistant with deterministic guardrails and explainability."
            role="Led product strategy and system framing; translated constraints into architecture choices and shipped iterative releases."
            impact="Reduced workflow friction and increased confidence in high-stakes decisions under strict privacy requirements."
            stackTags={["Offline-first", "Privacy by design", "Guardrails"]}
            revealOrder={0}
          />

          <ProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time alerting architecture focused on signal quality, explainability, and automation."
            problem="High-noise alerting caused delayed response and low trust in market decision workflows."
            architecture="Streaming ingestion + enrichment + scoring pipeline + explainable triage to reduce false positives."
            role="Defined requirements, designed decision loops, and converted analyst heuristics into reliable automation."
            impact="Faster signal-to-action with lower alert fatigue in volatile conditions."
            stackTags={["Streaming", "Rule + Scoring", "Explainability"]}
            revealOrder={1}
          />

          <ProjectCard
            title="AI Ops Assistant"
            tag="Public portfolio project"
            href="/project/ai-ops-assistant"
            subtitle="Enterprise intake-to-resolution automation with deterministic guardrails and RAG support."
            problem="Ops teams lost time routing repetitive requests and searching fragmented internal context."
            architecture="Workflow orchestrator + retrieval layer + integration fabric + escalation guardrails for auditability."
            role="Designed the end-to-end system: intake patterns → routing logic → resolution SLAs."
            impact="Improved throughput and reliability while preserving governance and traceability."
            stackTags={["Orchestration", "RAG", "API Integration"]}
            revealOrder={2}
          />
        </div>
      </RevealSection>

      <RevealSection className="section" staggerChildren>
        <h2 className="sectionTitle">How I Think</h2>

        {thoughtLines.map((line, index) => (
          <RevealItem key={line.text} order={index}>
            <ScrollRevealText className="thoughtLine" text={line.text} highlightWords={line.highlightWords} />
          </RevealItem>
        ))}

        <p className="aboutQuote">“I build products where AI has to survive real-world complexity — not slide decks.”</p>

        <p className="aboutBody">
          I love turning ambiguity into systems: clear interfaces, robust flows, measurable outcomes. My default mode is
          engineering-minded product work — define sharply, build cleanly, automate ruthlessly, ship relentlessly.
        </p>
      </RevealSection>

      <RevealSection className="section contractSection" id="contract" staggerChildren>
        <div className="contractStatus" role="status" aria-label="Availability status">
          <span
            className="contractDot"
            aria-hidden="true"
            style={{
              backgroundColor: "#22c55e",
              boxShadow: "0 0 0 3px rgba(34,197,94,0.18), 0 0 18px rgba(34,197,94,0.55)"
            }}
          />
          Available for High-Impact Work
        </div>

        <h2 className="sectionTitle contractTitle">Let’s Build Something That Ships</h2>

        <p className="contractLead">
          I’m looking for roles where technical depth meets product outcomes — complex systems, real constraints,
          measurable delivery, and AI that behaves in production.
        </p>

        <div className="contractChipRow">
          {rolesExploring.map((item, index) => (
            <RevealItem order={index} key={item}>
              <span className="contractChip">{item}</span>
            </RevealItem>
          ))}
        </div>

        <div className="contractDivider" aria-hidden="true" />

        <h3 className="contractSubTitle">Work I’m Great At</h3>

        <div className="contractChipRow">
          {[
            "AI Product Strategy (Pragmatic)",
            "Workflow Automation",
            "Systems Integration",
            "RAG + Guardrails",
            "Delivery Under Constraints"
          ].map((item, index) => (
            <RevealItem order={index} key={item}>
              <span className="contractChip">{item}</span>
            </RevealItem>
          ))}
        </div>

        <a href="mailto:alex.c.marroig@gmail.com" className="contractCta">
          Start a Conversation
        </a>

        <p className="contractNote">Clear scope. Clean execution. No theatre.</p>
      </RevealSection>
    </>
  );
}