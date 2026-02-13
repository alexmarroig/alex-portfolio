import type { IconType } from "react-icons";
import { FaAward, FaCertificate, FaPeopleCarry, FaProjectDiagram, FaShieldAlt, FaTrophy } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";
import type { TechKey } from "@/src/data/techCatalog";

export type ProjectStatus = "BUILDING" | "SHIPPING" | "OPEN TO WORK";

export type SiteContent = {
  hero: {
    name: string;
    roleLine: string;
    narrative: string[];
    humanLayer: string;
    ctas: { label: string; href: string; external?: boolean }[];
    proofPoints: string[];
  };
  currentFocus: {
    main: { title: string; summary: string; tags: TechKey[]; status: ProjectStatus };
    supporting: { title: string; summary: string; tags: TechKey[]; status: ProjectStatus }[];
  };
  stackCategories: { category: string; items: TechKey[] }[];
  certifications: { title: string; issuer: string; date: string; icon: IconType }[];
  awards: { title: string; detail: string; icon: IconType }[];
  about: { heading: string; paragraphs: string[] };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    status: ProjectStatus;
    tech: TechKey[];
    caseStudy: { problem: string; solution: string; impact: string };
    links: { github?: string; live?: string };
  }[];
};

export const siteContent: SiteContent = {
  hero: {
    name: "I’m Alex de Freitas Marroig",
    roleLine: "Technical Project Manager who builds, not just manages.",
    narrative: [
      "I lead cross-functional delivery where business outcomes, technical architecture, and execution discipline all have to align.",
      "My edge is systems thinking: translating ambiguity into clear plans, then building the workflows, automations, and integrations that make those plans real.",
      "From industrial engineering to enterprise AI, I operate end-to-end—from strategy and stakeholder alignment to shipping implementation."
    ],
    humanLayer: "Married, faith-driven, and family-first — values that keep my leadership grounded and steady.",
    ctas: [
      { label: "Download Resume (PDF)", href: "/alex-de-freitas-marroig-resume.pdf" },
      { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
      { label: "GitHub", href: "https://github.com/alexmarroig", external: true },
      { label: "Start a Conversation", href: "mailto:alex.c.marroig@gmail.com" }
    ],
    proofPoints: ["10+ years delivery leadership", "PMP Certified", "Multi-industry execution", "Automation + AI systems", "Enterprise program delivery"]
  },
  currentFocus: {
    main: {
      title: "Enterprise AI Delivery Systems",
      summary: "Designing onboarding + QA + integration layers so AI products ship reliably in regulated environments.",
      tags: ["RAG", "NLP", "API", "Power Automate"],
      status: "BUILDING"
    },
    supporting: [
      {
        title: "Cross-Platform PM Tooling",
        summary: "Unifying Jira, Confluence, ClickUp, and ServiceNow workflows for tighter delivery visibility.",
        tags: ["Jira", "Confluence", "ClickUp", "ServiceNow"],
        status: "SHIPPING"
      },
      {
        title: "High-Impact PM Leadership Roles",
        summary: "Open to TPM / Program roles where strategy and implementation ownership are equally valued.",
        tags: ["MS Project", "Primavera P6", "SAP"],
        status: "OPEN TO WORK"
      }
    ]
  },
  stackCategories: [
    {
      category: "Delivery + Systems",
      items: ["API", "MySQL/SQL", "HTML/CSS", "Power Apps", "Power Automate", "Google Analytics"]
    },
    {
      category: "AI + Analytics",
      items: ["NLP", "RAG", "Power BI", "Tableau", "VBA"]
    },
    {
      category: "Execution Platforms",
      items: ["Jira", "Confluence", "ClickUp", "MS Project", "Primavera P6", "ServiceNow", "SAP"]
    },
    {
      category: "Modern Web",
      items: ["Next.js", "React", "TypeScript", "Node"]
    }
  ],
  certifications: [
    { title: "PMP", issuer: "PMI", date: "Dec/2023", icon: FaTrophy },
    { title: "PSM I", issuer: "Scrum.org", date: "Sep/2023", icon: FaCertificate },
    { title: "Six Sigma Green Belt", issuer: "Master Método", date: "Oct/2023", icon: FaShieldAlt },
    { title: "Product Management", issuer: "PM3", date: "Oct/2023", icon: FaProjectDiagram }
  ],
  awards: [
    {
      title: "Top Performer / Employee Recognition",
      detail: "SANDECH — recognized for multiple consecutive years of delivery excellence and ownership.",
      icon: FaAward
    }
  ],
  about: {
    heading: "I convert complexity into systems teams can execute with confidence.",
    paragraphs: [
      "I lead in environments where compliance, schedule pressure, and executive expectations are all real at once.",
      "My work style combines planning rigor with technical hands-on depth, so decisions stay grounded in implementation reality.",
      "The outcome I optimize for is reliable delivery: launched programs, stable operations, and stakeholder trust earned over time."
    ]
  },
  projects: [
    {
      title: "SANDECH — Industrial Engineering Portfolios",
      subtitle: "Case Study",
      description: "Complex industrial project portfolios with strict governance across scope, risk, and execution cadence.",
      status: "SHIPPING",
      tech: ["Primavera P6", "MS Project", "SAP", "Power BI"],
      caseStudy: {
        problem: "Engineering portfolios were fragmented across planning tracks, making coordination and visibility difficult.",
        solution: "Implemented unified delivery governance, standardized reporting, and risk controls across workstreams.",
        impact: "Improved predictability and executive confidence while sustaining throughput on complex programs."
      },
      links: {}
    },
    {
      title: "Pharma Post-M&A Integration",
      subtitle: "Case Study",
      description: "Factory migration + people transition + 30+ validated systems managed under a single delivery playbook.",
      status: "SHIPPING",
      tech: ["ServiceNow", "Jira", "Confluence", "API"],
      caseStudy: {
        problem: "Post-acquisition integration introduced operational and compliance risk across teams, tools, and systems.",
        solution: "Led phased integration planning with dependency mapping, stakeholder rituals, and validation-aware change governance.",
        impact: "Delivered a stable transition with business continuity while preserving validation standards."
      },
      links: {}
    },
    {
      title: "Inbenta — AI Platform Delivery",
      subtitle: "Building Now",
      description: "Enterprise conversational AI delivery with QA automation and integration reliability.",
      status: "BUILDING",
      tech: ["NLP", "RAG", "API", "Power Automate", "React"],
      caseStudy: {
        problem: "Enterprise teams needed AI rollout plans that balanced speed with quality and governance.",
        solution: "Built QA workflows, integration standards, and release controls to reduce production risk.",
        impact: "Increased implementation confidence and improved time-to-value for enterprise clients."
      },
      links: { github: "https://github.com/alexmarroig" }
    }
  ]
};
