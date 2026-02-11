"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const reducedMotion = useReducedMotion();

  const heroParent = reducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } }
      };

  const heroItem = reducedMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
          show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" } }
        }
      };

  return (
    <>
      <RevealSection className="section">
        <motion.div {...heroParent}>
          <motion.span className="heroBadge" {...heroItem}>
            Open to: Remote roles • Contract • Advisory
          </motion.span>

          <motion.h1 className="heroTitle" {...heroItem}>
            AI Product Manager. Technical PM. Systems that ship.
          </motion.h1>

          <motion.p className="heroSummary" {...heroItem}>
            I lead complex, cross-functional delivery across B2B SaaS and enterprise—where product strategy,
            automation, and AI meet real-world constraints.
          </motion.p>

          <motion.div className="heroActions" {...heroItem}>
            <a href={letsTalkHref} className="btn btnPrimary">
              Let&apos;s Talk
            </a>
            <a href="#featured" className="btn btnGhost">
              View Featured Builds
            </a>
            <a href="#" className="btn btnGhost" aria-disabled="true">
              Download Resume
            </a>
          </motion.div>

          <motion.p className="microText" {...heroItem}>
            I respond within 48 hours.
          </motion.p>
        </motion.div>
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
      </RevealSection>

      <RevealSection className="section" id="featured">
        <h2 className="sectionTitle">Featured Builds</h2>
        <p className="sectionLead">Projects that represent how I think and ship.</p>

        <div className="projectGrid">
          <InteractiveProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform. Human-centered workflows, privacy by design, applied AI with guardrails."
            problem="fragmented tools + privacy"
            solution="offline-first + assistive AI"
            focus="trust, ethics, workflow"
            stackTags={["Offline-first", "Privacy by design", "Assistive AI"]}
            outcomes={["Human-centered clinical operations", "Deterministic workflows", "Safer delivery in sensitive environments"]}
          />

          <InteractiveProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time data and decision automation. Signal over noise, rule-first logic with pragmatic AI assistance."
            problem="noise/latency"
            solution="rule-first alerts + AI assist"
            focus="explainability/guardrails"
            stackTags={["Rule engine", "Streaming APIs", "AI assist"]}
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
            stackTags={["Workflow automation", "Routing", "Explainable AI"]}
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

      <RevealSection className="section glassPanel">
        <h2 className="sectionTitle">Let’s build something that holds up in production.</h2>
        <p className="sectionLead">
          If you’re hiring for AI product leadership, technical program management, or AI-enabled delivery—reach out.
        </p>
        <div className="heroActions" style={{ marginTop: 18 }}>
          <a href={letsTalkHref} className="btn btnPrimary">
            Start a Conversation
          </a>
        </div>
      </RevealSection>
    </>
  );
}
