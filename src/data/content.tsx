import { type ReactNode } from "react";
import type { IconType } from "react-icons";
import { FaAward, FaBullseye, FaProjectDiagram, FaSyncAlt, FaTrophy } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill, RiNodejsLine, RiReactjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import {
  SiGithub,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiSqlite,
  SiDatabricks
} from "react-icons/si";

export type ProjectStatus = "ACTIVE" | "FOUNDATIONAL" | "PRIVATE";

export type SiteContent = {
  hero: {
    headline: string;
    supportLine: string;
    experienceLine: string;
    subhead: string[];
    ctas: { label: string; href: string; external?: boolean }[];
  };
  currentFocus: { title: string; description: string; status: "ACTIVE" | "FOUNDATIONAL" }[];
  stackCategories: { category: string; items: { label: string; icon: IconType }[] }[];
  credentials: {
    subtitle: string;
    certs: { title: string; issuer: string; year: string; description: string; icon: IconType }[];
    awards: { title: string; issuer: string; year: string; description: string; icon: IconType }[];
  };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    status: ProjectStatus;
    icon: ReactNode;
    tech: string[];
    caseStudy: { problem: string; solution: string; impact: string };
    links: { github?: string; live?: string };
    isPrivate?: boolean;
  }[];
  about: { heading: string; paragraphs: string[] };
};

export const siteContent: SiteContent = {
  hero: {
    headline: "Technical Project Manager who builds, not just manages.",
    supportLine: "PMP • PSM-I • Product (PM3) • Mechanical Engineer",
    experienceLine: "10+ years bridging business + engineering + software delivery across industrial, pharma, and AI enterprise.",
    subhead: [
      "I lead complex systems from scope → architecture → delivery.",
      "I ship automation, QA strategy, integrations, and AI workflows in production."
    ],
    ctas: [
      { label: "View Selected Work", href: "#work" },
      { label: "Download Resume", href: "/alex-de-freitas-marroig-resume.pdf" },
      { label: "Let’s Talk", href: "mailto:alex.c.marroig@gmail.com" }
    ]
  },
  currentFocus: [
    {
      title: "AI Enterprise Onboarding & Conversational Systems",
      description: "Designing onboarding journeys that connect enterprise workflows with AI copilots teams can trust.",
      status: "ACTIVE"
    },
    {
      title: "QA Automation & Quality Systems",
      description: "Building pragmatic QA frameworks that improve release confidence without slowing down delivery.",
      status: "ACTIVE"
    },
    {
      title: "Systems Integration & API Architecture",
      description: "Aligning APIs, process automation, and governance so data and decisions move cleanly across teams.",
      status: "ACTIVE"
    },
    {
      title: "Industrial Program Delivery & M&A Integration",
      description: "Applying industrial execution rigor to large, multi-stakeholder programs and post-acquisition transitions.",
      status: "FOUNDATIONAL"
    }
  ],
  stackCategories: [
    {
      category: "Frontend",
      items: [
        { label: "Next.js", icon: RiNextjsFill },
        { label: "React", icon: RiReactjsLine },
        { label: "TypeScript", icon: SiTypescript },
        { label: "Tailwind", icon: RiTailwindCssFill }
      ]
    },
    {
      category: "Backend / Automation",
      items: [
        { label: "Node.js", icon: RiNodejsLine },
        { label: "Python", icon: SiPython },
        { label: "SQL", icon: SiSqlite },
        { label: "APIs", icon: FaProjectDiagram },
        { label: "Power Automate", icon: FaProjectDiagram }
      ]
    },
    {
      category: "AI / Data",
      items: [
        { label: "OpenAI", icon: SiOpenai },
        { label: "RAG", icon: FaSyncAlt },
        { label: "Vector DB Concepts", icon: SiDatabricks },
        { label: "Postgres", icon: SiPostgresql }
      ]
    },
    {
      category: "Dev & Ops",
      items: [
        { label: "GitHub", icon: SiGithub },
        { label: "Vercel", icon: RiVercelFill },
        { label: "VS Code", icon: BiLogoVisualStudio }
      ]
    }
  ],
  credentials: {
    subtitle: "Signals that I operate with rigor and deliver outcomes.",
    certs: [
      {
        title: "PMP",
        issuer: "Project Management Institute (PMI)",
        year: "Active",
        description: "Program-level planning, risk, cost, governance.",
        icon: FaTrophy
      },
      {
        title: "PSM I",
        issuer: "Scrum.org",
        year: "Certified",
        description: "Agile execution, iterative delivery, team velocity.",
        icon: FaSyncAlt
      },
      {
        title: "Product Management (PM3)",
        issuer: "Product School",
        year: "Completed",
        description: "Product thinking, prioritization, outcomes over output.",
        icon: FaBullseye
      }
    ],
    awards: [
      {
        title: "Top Performer / Best Employee",
        issuer: "SANDECH",
        year: "Multiple years",
        description: "Recognized for delivery excellence and ownership across multiple years.",
        icon: FaAward
      }
    ]
  },
  projects: [
    {
      title: "Hypera Pharma — Factory / Systems Integration",
      subtitle: "Systems Leadership Case",
      description: "Integration governance connecting operations, readiness, and delivery decision-making.",
      status: "PRIVATE",
      icon: <FaProjectDiagram aria-hidden="true" />,
      tech: ["Systems Integration", "Stakeholder Governance", "Readiness Planning"],
      caseStudy: {
        problem: "Factory and systems initiatives required tight coordination across technical and business stakeholders.",
        solution: "Structured cross-functional governance rituals, integration checkpoints, and readiness criteria for delivery teams.",
        impact: "Improved alignment and launch readiness across integrated systems without sacrificing execution speed."
      },
      links: {},
      isPrivate: true
    },
    {
      title: "SANDECH — Industrial Engineering Program Delivery",
      subtitle: "Industrial Engineering",
      description: "Complex engineering portfolio delivery with cost, risk, and schedule discipline.",
      status: "PRIVATE",
      icon: <FaAward aria-hidden="true" />,
      tech: ["Program Delivery", "Cost Control", "Risk"],
      caseStudy: {
        problem: "Large industrial initiatives demanded strict coordination across engineering scope, budgets, and multi-team schedules.",
        solution: "Led program governance with structured planning, risk controls, and execution cadences shared across stakeholders.",
        impact: "Delivered complex portfolios with strong financial control and schedule discipline."
      },
      links: {},
      isPrivate: true
    },
    {
      title: "Inbenta — AI Platform Delivery & Integrations",
      subtitle: "AI Delivery",
      description: "Enterprise AI delivery focused on QA systems, integrations, and automation outcomes.",
      status: "ACTIVE",
      icon: <SiOpenai aria-hidden="true" />,
      tech: ["QA Systems", "Integrations", "Automation", "Client Delivery"],
      caseStudy: {
        problem: "Enterprise clients needed conversational AI solutions integrated into existing systems with predictable quality.",
        solution: "Implemented QA workflows, integration playbooks, and automation patterns for consistent client delivery.",
        impact: "Raised delivery reliability and operational trust across production AI implementations."
      },
      links: {
        github: "https://github.com/alexmarroig"
      }
    }
  ],
  about: {
    heading: "I structure complex delivery into systems that teams can execute.",
    paragraphs: [
      "I work in industry-heavy environments where timelines, compliance, and C-level expectations are all real at the same time. My role is to translate complexity into aligned plans and execution clarity.",
      "I stay close to technical reality: architecture decisions, integration risks, QA strategy, and automation opportunities. That hands-on depth keeps delivery grounded and decisions faster.",
      "My focus is outcomes—reliable launches, stable operations, and stakeholder trust built through consistent delivery discipline."
    ]
  }
};
