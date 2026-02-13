import { FaBrain, FaChartLine, FaIndustry, FaShieldAlt } from "react-icons/fa";
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
    subtitle: "Healthcare AI Platform",
    description: "Offline-first clinical workflows with compliance-ready AI guardrails.",
    status: "PRIVATE",
    icon: <FaShieldAlt aria-hidden="true" />,
    tech: ["Node.js", "React", "TypeScript", "Azure", "RBAC", "QA Validation"],
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
    subtitle: "Signal Intelligence Engine",
    description: "Real-time alerting focused on explainability and operator trust.",
    status: "POC",
    icon: <FaChartLine aria-hidden="true" />,
    tech: ["Node.js", "Discord.js", "SQLite", "Streaming APIs", "Alert Scoring", "Automation"],
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
    subtitle: "Ops Automation Suite",
    description: "Enterprise intake-to-resolution automation with deterministic routing.",
    status: "LIVE",
    icon: <FaBrain aria-hidden="true" />,
    tech: ["Python", "FastAPI", "React", "OpenAI", "Vector DB", "Node.js"],
    caseStudy: {
      problem: "Ops teams lost time routing repetitive requests and searching fragmented internal context.",
      solution:
        "Implemented intake-to-routing automation with retrieval support, deterministic escalation logic, and integration-first workflows.",
      impact: "Increased throughput and reliability while keeping governance and auditability in production flows."
    },
    links: {
      github: "https://github.com/alexmarroig",
      live: "/project/ai-ops-assistant"
    }
  },
  {
    title: "Complex Industrial Engineering Projects (SANDECH)",
    subtitle: "Industrial Engineering Delivery",
    description: "Cross-industry program delivery integrating engineering, QA, and automation.",
    status: "PRIVATE",
    icon: <FaIndustry aria-hidden="true" />,
    tech: ["Industrial IoT", "M&A Integration", "QA Systems", "Automation", "Program Leadership"],
    caseStudy: {
      problem:
        "Multi-domain engineering programs and post-M&A environments created fragmented execution, uneven quality controls, and high coordination overhead.",
      solution:
        "Led integration playbooks across cross-industry teams, standardized QA gates, and introduced automation patterns to connect planning, delivery, and reporting.",
      impact:
        "Improved delivery consistency across complex engineering projects while accelerating integration readiness and decision velocity."
    },
    links: {
      github: "https://github.com/alexmarroig"
    },
    isPrivate: true
  }
];
