import { FaBrain, FaChartLine, FaIndustry, FaShieldAlt } from "react-icons/fa";
import { type ReactNode } from "react";

export type ProjectStatus = "LIVE" | "POC" | "PRIVATE";
export type Project = {
  title: string; subtitle: string; description: string; status: ProjectStatus; icon: ReactNode; tech: string[];
  caseStudy: { problem: string; solution: string; impact: string };
  links: { github?: string; live?: string }; isPrivate?: boolean;
};
export const projects: Project[] = [
  {
    title: "ETHOS", subtitle: "Privacy-First Clinical AI Platform",
    description: "Offline-first clinical software with local transcription, secure records and human-reviewed AI documentation. In active development.",
    status: "PRIVATE", icon: <FaShieldAlt aria-hidden="true" />,
    tech: ["Electron", "React", "React Native", "TypeScript", "Whisper", "SQLCipher"],
    caseStudy: { problem: "Sensitive clinical workflows need efficient documentation without compromising privacy.", solution: "Designed an offline-first desktop/mobile architecture with local transcription, encrypted persistence and explicit human review.", impact: "Architecture and core workflows are under development; no production outcome is claimed." },
    links: {}, isPrivate: true
  },
  {
    title: "Agentic Dev Studio", subtitle: "AI Development Orchestration MVP",
    description: "Multi-service prototype for repository-aware task planning, execution and artifact generation.",
    status: "POC", icon: <FaBrain aria-hidden="true" />,
    tech: ["Next.js", "FastAPI", "Python", "TypeScript", "Supabase"],
    caseStudy: { problem: "Engineering tasks often span planning, execution, code review and delivery tools.", solution: "Structured web, orchestrator and executor services around a tracked run workflow and repository integration.", impact: "MVP architecture implemented; planning currently uses a mock agent and further security hardening is pending." },
    links: { github: "https://github.com/alexmarroig/Multiagent" }
  },
  {
    title: "PremiumCRM", subtitle: "Automation-Ready CRM Backend",
    description: "Multi-tenant API backend with authentication, event ingestion, background jobs and configurable AI integration.",
    status: "POC", icon: <FaChartLine aria-hidden="true" />,
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "JWT"],
    caseStudy: { problem: "CRM workflows require consistent persistence, tenant boundaries and integration-friendly automation.", solution: "Built an API-first backend with migrations, webhook ingestion, scheduled jobs and an AI provider interface.", impact: "Documented backend and test commands; the default AI provider is mocked and production adoption is not asserted." },
    links: { github: "https://github.com/alexmarroig/PremiumCRM" }
  },
  {
    title: "Best Things to Do", subtitle: "Experiences & Discovery App",
    description: "Personal application exploring how people discover and organize things to do.",
    status: "POC", icon: <FaChartLine aria-hidden="true" />,
    tech: ["Product Design", "Full-Stack Exploration"],
    caseStudy: { problem: "Finding and organizing activities across interests can be fragmented.", solution: "Developing a dedicated application for discovery and curation.", impact: "Public repository available; feature-level and deployment claims will be added after technical verification." },
    links: { github: "https://github.com/alexmarroig/Besthingstodo" }
  },
  {
    title: "Get It Done / LifeDOIT", subtitle: "Local-First Productivity App",
    description: "Personal planning app integrating tasks, energy-aware priorities and mobile workflows.",
    status: "PRIVATE", icon: <FaBrain aria-hidden="true" />,
    tech: ["React", "TypeScript", "Dexie", "Zustand", "Firebase", "Capacitor"],
    caseStudy: { problem: "Traditional task apps rarely account for time, energy and life-area balance together.", solution: "Designed local-first task persistence, smart scheduling suggestions and cross-device integration.", impact: "Ongoing private product development; no public release or usage results claimed." },
    links: {}, isPrivate: true
  },
  {
    title: "M-Timer", subtitle: "Mobile Meditation Companion",
    description: "Mobile-first companion for timed practice, history, reminders, streaks and sync.",
    status: "PRIVATE", icon: <FaChartLine aria-hidden="true" />,
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Supabase"],
    caseStudy: { problem: "Maintaining a consistent meditation routine needs a focused, low-friction experience.", solution: "Structured a multi-phase timer, history, companion system and local/cloud synchronization model.", impact: "Work in progress with identified technical gaps and planned validation." },
    links: {}, isPrivate: true
  },
  {
    title: "Couple Closet", subtitle: "Relationship & Commerce Platform",
    description: "Backend supporting date ideas, quizzes, wishlists and commerce integrations.",
    status: "POC", icon: <FaShieldAlt aria-hidden="true" />,
    tech: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL"],
    caseStudy: { problem: "Relationship-oriented experiences and commerce features need a unified API layer.", solution: "Designed authenticated endpoints for recommendations, quizzes, couples' wishlists and Shopify-oriented flows.", impact: "Public API implementation with documented endpoints; commercial rollout not verified." },
    links: { github: "https://github.com/alexmarroig/CoupleCloset" }
  },
  {
    title: "Código do Destino", subtitle: "Structured Narrative Web Platform",
    description: "Astrology and numerology application combining calculation services with structured storytelling.",
    status: "POC", icon: <FaBrain aria-hidden="true" />,
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Python"],
    caseStudy: { problem: "Calculation-heavy personal insight tools require a reliable separation of logic and presentation.", solution: "Built a Next.js frontend and Python API for calculations and narrative generation.", impact: "Repository documents API routes and deployment configuration; no traffic or sales claims." },
    links: { github: "https://github.com/alexmarroig/CodigodoDestino" }
  },
  {
    title: "AXIS Premium Cars", subtitle: "Vehicle Curation API Prototype",
    description: "API-first car discovery and recommendation backend.",
    status: "POC", icon: <FaChartLine aria-hidden="true" />,
    tech: ["FastAPI", "PostgreSQL", "Redis", "JWT", "Docker"],
    caseStudy: { problem: "Car discovery combines search, listing data and user-specific preferences.", solution: "Designed search, alert and recommendation services with background workers and API contracts.", impact: "Prototype architecture documented; external connectors include stubs." },
    links: { github: "https://github.com/alexmarroig/Carpremiumsell" }
  },
  {
    title: "Flowchart Generator", subtitle: "Workflow Visualization API",
    description: "Backend for converting process descriptions into editable workflow diagrams.",
    status: "POC", icon: <FaBrain aria-hidden="true" />,
    tech: ["Node.js", "REST APIs", "Mermaid"],
    caseStudy: { problem: "Text-based business processes are often difficult to translate into shared diagrams.", solution: "Implemented endpoints for diagram CRUD, text-to-structure conversion and Mermaid export.", impact: "Demonstrable API-level workflow; no production usage figures claimed." },
    links: { github: "https://github.com/alexmarroig/flowchartgenerator" }
  },
  {
    title: "Enterprise Transformation & M&A", subtitle: "Program Delivery",
    description: "Complex business systems migration and enterprise integration experience.",
    status: "PRIVATE", icon: <FaIndustry aria-hidden="true" />,
    tech: ["SAP ECC", "Systems Integration", "QA", "Program Management"],
    caseStudy: { problem: "Post-merger integration required coordination across business systems, infrastructure and operations.", solution: "Coordinated complex cross-functional migration, governance and operational transition workstreams.", impact: "Resume documents an initiative involving 30+ applications and a transition of 200+ employees." },
    links: {}, isPrivate: true
  }
];
