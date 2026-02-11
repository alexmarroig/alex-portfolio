"use client";

import { motion, useReducedMotion } from "framer-motion";
import InteractiveProjectCard from "@/components/InteractiveProjectCard";
import RevealSection from "@/components/RevealSection";

const stackGroups = {
  "Product & Delivery": [
    "AI Product Leadership",
    "Technical Program Management",
    "Cross-functional Delivery",
    "B2B SaaS in Regulated Environments"
  ],
  "Automation & AI": [
    "Workflow Automation",
    "AI Platform Delivery (NLP / RAG)",
    "APIs",
    "Low-code / No-code"
  ],
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

const letsTalkHref = "mailto:alex.c.marroig@gmail.com?subject=Let’s%20Talk%20-%20Portfolio";

export default function Home() {
  const reducedMotion = useReducedMotion();
  const itemAnimation = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20, filter: "blur(8px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 0.5, ease: "easeOut" }
      };

  return (
    <>
      <RevealSection className="section heroSection">
        <motion.span className="heroBadge" {...itemAnimation} transition={{ delay: 0.05, duration: 0.45 }}>
          Open to: Remote roles • Contract • Advisory
        </motion.span>

        <motion.h1 className="heroTitle" {...itemAnimation} transition={{ delay: 0.15, duration: 0.6 }}>
          AI Product Manager. Technical PM. Systems that ship.
        </motion.h1>

        <motion.p className="heroSummary" {...itemAnimation} transition={{ delay: 0.22, duration: 0.55 }}>
          I lead complex, cross-functional delivery across B2B SaaS and enterprise—where product strategy,
          automation, and AI meet real-world constraints.
        </motion.p>
        <motion.p className="heroSummary heroSummaryTight" {...itemAnimation} transition={{ delay: 0.28, duration: 0.55 }}>
          From APIs and low-code workflows to AI-enabled platforms, I turn ambiguity into scalable systems.
        </motion.p>

        <motion.div className="heroActions" {...itemAnimation} transition={{ delay: 0.34, duration: 0.45 }}>
          <motion.a href={letsTalkHref} className="btn btnPrimary" whileTap={reducedMotion ? undefined : { scale: 0.97 }}>
            Let&apos;s Talk
          </motion.a>
          <motion.a href="#featured" className="btn btnGhost" whileTap={reducedMotion ? undefined : { scale: 0.98 }}>
            View Featured Builds
          </motion.a>
          <motion.a href="#" className="btn btnGhost" aria-disabled="true">
            Download Resume
          </motion.a>
        </motion.div>

        <motion.p className="microText" {...itemAnimation} transition={{ delay: 0.38, duration: 0.45 }}>
          I respond within 48 hours.
        </motion.p>
      </RevealSection>

      <RevealSection className="section">
        <h2 className="sectionTitle">What I Take On</h2>
        <div className="chipGroup chipsWrap">
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

        <div className="projectGrid interactiveGrid">
          <InteractiveProjectCard
            title="ETHOS"
            tag="Private product case"
            href="/case/ethos"
            subtitle="Offline-first clinical platform. Human-centered workflows, privacy by design, applied AI with guardrails."
            problem="fragmented tools + privacy"
            solution="offline-first + assistive AI"
            focus="trust, ethics, workflow"
            outcomes={["Human-centered clinical operations", "Privacy-first architecture", "Deterministic workflows with AI assist"]}
          />

          <InteractiveProjectCard
            title="CryptoAlert Pro"
            tag="Private product case"
            href="/case/cryptoalert"
            subtitle="Real-time data and decision automation. Signal over noise, rule-first logic with pragmatic AI assistance."
            problem="noise/latency"
            solution="rule-first alerts + AI assist"
            focus="explainability/guardrails"
            outcomes={["Faster alert triage", "Transparent decision paths", "Reliable automation under market volatility"]}
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
        <p className="sectionLead">Technologies I use to build and ship solutions.</p>

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
          If you’re hiring for AI product leadership, technical program management, or AI-enabled delivery—reach
          out.
        </p>
        <div className="heroActions finalCtaActions">
          <a href={letsTalkHref} className="btn btnPrimary">
            Start a Conversation
          </a>
        </div>
        <p className="microText">I respond within 48 hours.</p>
      </RevealSection>
    </>
  );
}
