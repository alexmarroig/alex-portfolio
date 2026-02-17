import type { IconType } from "react-icons";
import {
  FaAward,
  FaBrain,
  FaCrosshairs,
  FaCubes,
  FaFlask,
  FaRegCompass,
  FaShieldAlt,
  FaSitemap,
  FaTrophy,
  FaUsers,
  FaWrench
} from "react-icons/fa";
import { SiGithub, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { MdChecklist, MdHub, MdOutlineSpaceDashboard, MdPsychologyAlt } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

export type ProjectStatus = "ACTIVE" | "FOUNDATIONAL" | "PRIVATE";

export type SiteContent = {
  hero: {
    subline: string[];
    paragraph: string;
    humanLine: string;
  };
  capabilityGrid: { title: string; description: string; icon: IconType }[];
  currentFocus: {
    lead: string;
    items: { title: string; summary: string; tags: string[]; status: ProjectStatus }[];
  };
  stackCategories: {
    category: string;
    items: { name: string; icon: IconType }[];
  }[];
  certifications: { title: string; issuer: string; state: string; icon: IconType }[];
  awards: { title: string; detail: string; icon: IconType }[];
  about: { heading: string; paragraphs: string[] };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    status: ProjectStatus;
    stack: string[];
    caseStudy: { problem: string; solution: string; impact: string };
  }[];
  gameIntel: string[];
};

export const siteContent: SiteContent = {
  hero: {
    subline: ["Systems Delivery", "Integration Architecture", "QA Automation", "AI Workflows"],
    paragraph:
      "I lead complex systems from scope → architecture → delivery. I ship automation, QA strategy, integrations, and AI workflows in production—bridging business + engineering across industrial, pharma, and AI enterprise.",
    humanLine: "Off the clock: married, faith-centered, and family-first."
  },
  capabilityGrid: [
    {
      title: "Systems Delivery",
      description: "Program execution, scope control, risk, governance, delivery rituals.",
      icon: MdOutlineSpaceDashboard
    },
    {
      title: "Integration & Architecture",
      description: "APIs, systems orchestration, process automation, data flow alignment.",
      icon: FaSitemap
    },
    {
      title: "QA & Reliability",
      description: "QA strategy, automation, test design, release confidence without slowing teams.",
      icon: FaShieldAlt
    },
    {
      title: "AI Workflows",
      description: "LLM-assisted ops, conversational systems, onboarding, RAG concepts, automation leverage.",
      icon: MdPsychologyAlt
    }
  ],
  currentFocus: {
    lead: "Focused on what I’m building, shipping, and improving right now.",
    items: [
      {
        title: "AI Enterprise Onboarding & Conversational Systems",
        summary: "Designing enterprise onboarding and conversational flows that balance speed, governance, and reliability.",
        tags: ["AI Ops", "Conversation", "Onboarding"],
        status: "ACTIVE"
      },
      {
        title: "QA Automation & Quality Systems",
        summary: "Building automation-first QA systems to reduce release friction while improving confidence.",
        tags: ["QA", "Automation", "Release"],
        status: "ACTIVE"
      },
      {
        title: "Systems Integration & API Architecture",
        summary: "Aligning platforms and APIs so product, operations, and engineering work as one system.",
        tags: ["APIs", "Integrations", "Architecture"],
        status: "ACTIVE"
      },
      {
        title: "Industrial Program Delivery & M&A Integration",
        summary: "Applying proven governance and integration playbooks from high-complexity industrial and post-acquisition programs.",
        tags: ["Industrial", "M&A", "Governance"],
        status: "FOUNDATIONAL"
      }
    ]
  },
  stackCategories: [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss }
      ]
    },
    {
      category: "Backend / Automation",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Python", icon: SiPython },
        { name: "SQL", icon: SiPostgresql },
        { name: "REST APIs", icon: MdHub },
        { name: "Power Platform", icon: FaCubes }
      ]
    },
    {
      category: "AI / Data",
      items: [
        { name: "OpenAI", icon: SiOpenai },
        { name: "RAG", icon: FaBrain },
        { name: "Vector DB", icon: FaRegCompass },
        { name: "PostgreSQL", icon: SiPostgresql }
      ]
    },
    {
      category: "Dev / Ops",
      items: [
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "VS Code", icon: VscVscode }
      ]
    }
  ],
  certifications: [
    { title: "PMP", issuer: "PMI", state: "Active", icon: FaTrophy },
    { title: "PSM I", issuer: "Scrum.org", state: "Certified", icon: MdChecklist },
    { title: "Product Management", issuer: "PM3", state: "Completed", icon: FaCrosshairs }
  ],
  awards: [
    {
      title: "Top Performer / Best Employee",
      detail: "SANDECH — Multiple years of recognition for delivery and ownership.",
      icon: FaAward
    },
    {
      title: "Petrobras SMS Audit",
      detail: "2nd place recognition for quality and safety execution support.",
      icon: FaFlask
    }
  ],
  about: {
    heading: "I translate complexity into systems teams can execute with confidence.",
    paragraphs: [
      "I work where delivery pressure, executive expectations, and deep technical implementation all meet.",
      "My approach combines clear scope framing, system architecture thinking, and practical execution across QA, automation, and integration.",
      "The result: more predictable launches, better stakeholder alignment, and stronger reliability in production."
    ]
  },
  projects: [
    {
      title: "Hypera Pharma — Factory / Systems Integration",
      subtitle: "Private Case Study",
      description: "Factory-side systems integration and delivery coordination in a regulated pharma environment.",
      status: "PRIVATE",
      stack: ["Integrations", "Governance", "Validation"],
      caseStudy: {
        problem: "Multiple validated systems and teams needed alignment without introducing delivery risk.",
        solution: "Led structured integration planning, stakeholder rituals, and phased implementation controls.",
        impact: "Kept execution stable while improving coordination and readiness across operations and tech."
      }
    },
    {
      title: "SANDECH — Industrial Engineering Program Delivery",
      subtitle: "Private Case Study",
      description: "Managed complex industrial engineering program streams across scope, risk, and sequencing.",
      status: "PRIVATE",
      stack: ["Program Delivery", "Risk", "Industrial"],
      caseStudy: {
        problem: "Large multi-discipline initiatives suffered from inconsistent delivery cadence and visibility.",
        solution: "Established governance, planning cadence, and tighter reporting for cross-discipline execution.",
        impact: "Improved predictability and decision quality while maintaining throughput on critical programs."
      }
    },
    {
      title: "M&A / Post-acquisition Integration Governance",
      subtitle: "Private Case Study",
      description: "C-level facing integration governance for post-acquisition operational and technical alignment.",
      status: "PRIVATE",
      stack: ["M&A", "Governance", "Architecture"],
      caseStudy: {
        problem: "Acquisition integration required high-stakes decisions across teams, systems, and timelines.",
        solution: "Built pragmatic governance structures and integration roadmaps with multi-stakeholder ownership.",
        impact: "Reduced ambiguity and enabled confident phased execution for strategic integration priorities."
      }
    }
  ],
  gameIntel: [
    "PMP-certified delivery leader with structured governance habits.",
    "Skilled in risk framing before execution starts.",
    "Builds stakeholder alignment with clear decision rhythms.",
    "Turns scope ambiguity into executable delivery plans.",
    "Designs API-first integration maps across platforms.",
    "Aligns orchestration workflows between business and engineering.",
    "Automates repetitive process handoffs for scale.",
    "Builds QA strategy around practical release confidence.",
    "Uses automation to reduce manual testing bottlenecks.",
    "Improves defect triage clarity without slowing teams.",
    "Recognized by SANDECH as a top performer across multiple years.",
    "Petrobras SMS Audit recognition: 2nd place."
  ]
};
