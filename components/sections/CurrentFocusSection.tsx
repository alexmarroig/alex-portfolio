import { FaBrain, FaNetworkWired, FaRobot } from "react-icons/fa";
import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";

const focusCards = [
  {
    title: "LLM Reasoning + ChatOps",
    icon: FaBrain,
    points: [
      "Operational copilots for support, onboarding, and internal ops teams.",
      "Prompt orchestration with deterministic fallbacks and escalation paths.",
      "Human-in-the-loop workflows for enterprise-safe automation."
    ]
  },
  {
    title: "Systems Architecture",
    icon: FaNetworkWired,
    points: [
      "Integration-first delivery under compliance and legacy constraints.",
      "API contracts, observability hooks, and rollout planning.",
      "Cross-functional execution from discovery through launch validation."
    ]
  },
  {
    title: "GenAI in Production",
    icon: FaRobot,
    points: [
      "RAG and retrieval patterns focused on traceability and reliability.",
      "QA-minded release gating and instrumentation before scale-up.",
      "Practical governance for auditability in regulated environments."
    ]
  }
] as const;

export default function CurrentFocusSection() {
  return (
    <RevealSection className="section" id="current-focus" staggerChildren>
      <div className="currentFocusHeader">
        <h2 className="sectionTitle">Current Focus</h2>
        <p className="sectionLead">Where I create the most value right now.</p>
      </div>

      <div className="focusGrid focusGridRefined">
        {focusCards.map((card, index) => (
          <RevealItem order={index} key={card.title}>
            <article className="glassPanel focusCard focusCardRefined">
              <h3 className="focusTitle">
                <card.icon aria-hidden="true" />
                {card.title}
              </h3>
              <ul className="focusListVertical">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
