import ProjectCard from "@/components/ProjectCard";
import RevealSection from "@/components/RevealSection";

export default function SelectedWorkSection() {
  return (
    <RevealSection className="section" id="selected-work" staggerChildren>
      <h2 className="sectionTitle">Selected Work</h2>
      <p className="sectionLead">Flip each card for problem / architecture / role / impact.</p>
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
  );
}
