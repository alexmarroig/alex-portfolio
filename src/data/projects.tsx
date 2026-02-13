import { FaBrain, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { type ReactNode } from "react";

export type ProjectStatus = "LIVE" | "POC" | "PRIVATE";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  icon: ReactNode;
  tech: string[];
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
  };
  links: {
    github?: string;
    live?: string;
  };
  isPrivate?: boolean;
};

export const projects: Project[] = [
  {
    title: "ETHOS",
    subtitle: "Private product case",
    description: "Offline-first clinical platform with privacy-first workflows and assistive AI guardrails.",
    status: "PRIVATE",
    icon: <FaShieldAlt aria-hidden="true" />,
    tech: ["Node.js", "React", "TypeScript", "Offline-first", "Privacy by design", "Guardrails"],
    caseStudy: {
      problem: "Clinical teams were blocked by disconnected workflows, slow approvals, and strict compliance constraints.",
      solution:
        "Built an offline-first sync model with role-based policy controls and deterministic AI guardrails for traceable decision support.",
      impact:
        "Reduced workflow friction and improved confidence for high-stakes decisions while preserving privacy and governance."
    },
    links: {},
    isPrivate: true
  },
  {
    title: "CryptoAlert Pro",
    subtitle: "Private product case",
    description: "Real-time alerting architecture focused on signal quality, explainability, and automation.",
    status: "POC",
    icon: <FaChartLine aria-hidden="true" />,
    tech: ["Node.js", "TypeScript", "Streaming APIs", "Scoring", "Explainability", "Automation"],
    caseStudy: {
      problem: "High-noise alerting caused delayed response and weak trust in market decision workflows.",
      solution:
        "Designed an ingestion, enrichment, and scoring pipeline with explainable triage to reduce false positives and noisy escalation.",
      impact: "Improved signal-to-action speed and lowered alert fatigue in volatile conditions."
    },
    links: {},
    isPrivate: true
  },
  {
    title: "AI Ops Assistant",
    subtitle: "Public portfolio project",
    description: "Enterprise intake-to-resolution automation with deterministic guardrails and RAG support.",
    status: "LIVE",
    icon: <FaBrain aria-hidden="true" />,
    tech: ["React", "TypeScript", "RAG", "OpenAI", "Workflow Orchestration", "API Integration"],
    caseStudy: {
      problem: "Ops teams lost time routing repetitive requests and searching fragmented internal context.",
      solution:
        "Implemented intake-to-routing automation with retrieval support, deterministic escalation logic, and integration-first workflows.",
      impact: "Increased throughput and reliability while keeping governance and auditability in production flows."
    },
    links: {
      github: "https://github.com/alexmarroig"
    }
  }
];
