import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";
import Badge from "@/components/ui/Badge";

const stackGroups: Record<string, { icon: string; skills: { label: string; hint: string }[] }> = {
  "Product & Delivery": {
    icon: "🎯",
    skills: [
      { label: "Discovery → Delivery", hint: "Turn ambiguity into delivery plans with clear checkpoints." },
      { label: "Stakeholder mgmt (C-level)", hint: "Align executive outcomes with execution reality." },
      { label: "Roadmaps & Scope", hint: "Prioritize value, risk, and implementation effort." },
      { label: "Agile / Hybrid", hint: "Operate in mixed delivery models across enterprise constraints." },
      { label: "Vendor mgmt", hint: "Coordinate external partners without losing delivery quality." }
    ]
  },
  "Automation & AI Systems": {
    icon: "⚡",
    skills: [
      { label: "AI onboarding", hint: "Discovery, design, and rollout of AI customer-service platforms." },
      { label: "Workflow automation", hint: "Map process bottlenecks and automate safely." },
      { label: "QA validation", hint: "Define test strategy and release gates for reliability." },
      { label: "NLP / RAG patterns", hint: "Use pragmatic retrieval and intent systems where applicable." },
      { label: "Deterministic guardrails", hint: "Constrain AI behavior for enterprise-safe outcomes." }
    ]
  },
  "Platforms & Ops": {
    icon: "🛠",
    skills: [
      { label: "API integrations", hint: "Integrate internal/external systems with traceable contracts." },
      { label: "Incident & support ops", hint: "Stabilize post-go-live operation and incident response." },
      { label: "Observability basics", hint: "Measure flow health with practical telemetry." },
      { label: "Release mgmt", hint: "Coordinate safe releases with rollback awareness." },
      { label: "Regulated rollout", hint: "Deliver in compliance-sensitive environments." }
    ]
  }
};

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack" staggerChildren>
      <h2 className="sectionTitle">Core Stack</h2>
      <p className="sectionLead">How I operate as a Technical PM who also builds, integrates, and validates.</p>
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
                  <Badge key={skill.label} label={skill.label} hint={skill.hint} />
                ))}
              </div>
            </article>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
