import HeroCard from "@/components/HeroCard";
import ProjectCard from "@/components/ProjectCard";
import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";
import ScrollRevealText from "@/components/ScrollRevealText";

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

      <RevealSection className="section" id="core-stack" staggerChildren>
        <h2 className="sectionTitle">Core Stack</h2>
        <div className="stackGrid">
          {Object.entries(stackGroups).map(([group, data], index) => (
            <RevealItem order={index} key={group}>
              <article className="glassPanel stackCard">
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
            </RevealItem>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section" id="selected-work" staggerChildren>
        <h2 className="sectionTitle">Selected Work</h2>
        <p className="sectionLead">Flip each card for problem / architecture context and outcomes.</p>
        <div className="projectGrid">
          <ProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform with privacy-first workflows and assistive AI guardrails."
            problem="Clinical teams were blocked by disconnected workflows, slow approvals, and strict compliance constraints."
            architecture="Offline-first sync engine + role-based policy layer + explainable AI assistant for clinical flow orchestration."
            role="Led product strategy, aligned compliance/security stakeholders, and shipped cross-functional roadmap increments."
            impact="Reduced workflow friction and improved confidence for high-stakes decisions in privacy-sensitive settings."
            stackTags={["Offline-first", "Privacy by design", "Assistive AI"]}
            revealOrder={0}
          />
          <ProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time alerting architecture focused on signal quality, explainability, and automation."
            problem="High noise alerting caused delayed response and weak trust in market decision workflows."
            architecture="Rule and scoring pipeline with streaming ingestion, event enrichment, and explainable AI-assisted triage."
            role="Defined product requirements, prioritized execution loops, and translated analyst needs into automated workflows."
            impact="Faster and more consistent signal-to-action decisions with lower alert fatigue in volatile conditions."
            stackTags={["Rule engine", "Streaming APIs", "Explainable AI"]}
            revealOrder={1}
          />
          <ProjectCard
            title="AI Ops Assistant"
            tag="Public portfolio project"
            href="/project/ai-ops-assistant"
            subtitle="Enterprise intake-to-resolution automation with deterministic guardrails and RAG support."
            problem="Support and ops teams lost time routing repetitive requests and handling fragmented internal context."
            architecture="Workflow orchestrator + retrieval layer + API integration fabric with deterministic escalation guardrails."
            role="Designed end-to-end product narrative and execution model from intake patterns to measurable resolution SLAs."
            impact="Improved throughput and reliability while preserving governance and auditability for enterprise operations."
            stackTags={["Workflow orchestration", "LLM triage", "API-first integration"]}
            revealOrder={2}
          />
        </div>
      </RevealSection>

      <RevealSection className="section aboutSection" id="about" staggerChildren>
        <h2 className="sectionTitle aboutTitle">How I Think</h2>
        <ScrollRevealText
          className="thoughtLine"
          text="I build products that are ambitious in vision and disciplined in execution."
          highlightWords={["ambitious", "disciplined"]}
        />
        <p className="aboutQuote">“I build products where AI has to survive real-world complexity, not slide demos.”</p>
        <p className="aboutBody">
          My approach blends <strong>product strategy</strong>, operational rigor, and human-centered systems
          design—especially in regulated or high-stakes domains where reliability is non-negotiable.
        </p>
        <p className="aboutBody">
          I focus on turning uncertainty into delivery: clear architecture choices, measurable outcomes, and teams
          aligned around what ships and what scales.
        </p>
      </RevealSection>

      <RevealSection className="section" staggerChildren>
        <h2 className="sectionTitle">Open to Work / Services</h2>
        <div className="serviceGrid">
          <RevealItem order={0}>
            <article className="serviceCard">
              <h3>Product Management Roles</h3>
              <p>Senior IC or lead PM roles where AI, data, and enterprise workflows converge.</p>
            </article>
          </RevealItem>
          <RevealItem order={1}>
            <article className="serviceCard">
              <h3>AI-driven SaaS Advisory</h3>
              <p>Fractional support on product strategy, automation roadmaps, and delivery systems.</p>
            </article>
          </RevealItem>
        </div>
      </RevealSection>
    </>
  );
}
