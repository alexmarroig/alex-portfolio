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
  FaAws,
  FaCogs,
  FaCross,
  FaDocker,
  FaHeart,
  FaHome,
  FaJenkins,
  FaMedal,
  FaNetworkWired,
  FaProjectDiagram,
  FaRegClock,
  FaShieldAlt
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdIntegrationInstructions, MdOutlinePrecisionManufacturing, MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiNextjsFill, RiRobot2Line } from "react-icons/ri";
import { SiNodedotjs, SiPython, SiReact, SiTypescript, SiVercel, SiPostgresql, SiTestinglibrary } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export type ProjectStatus = "BUILDING" | "SHIPPING" | "IMPROVING";

export type SiteContent = {
  hero: {
    intro: string;
    headline: string;
    subheadline: string;
    paragraph: string;
    humanLine: { icon: IconType; label: string }[];
    ctas: { label: string; href: string; variant: "primary" | "secondary" | "text" }[];
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
    main: { title: string; summary: string; tags: string[]; status: ProjectStatus };
    supporting: { title: string; summary: string; tags: string[]; status: ProjectStatus }[];
  };
  stackCategories: {
    category: string;
    items: { name: string; note: string; icon: IconType }[];
  }[];
  certifications: { title: string; issuer: string; year: string; icon: IconType }[];
  awards: string[];
  about: { heading: string; paragraphs: string[] };
  contract: {
    availability: string;
    title: string;
    lead: string;
    ctaLabel: string;
    note: string;
    subTitle: string;
    areas: string[];
  };
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
    intro: "Hey, I’m Alex de Freitas Marroig",
    headline: "Technical Project Manager who builds, not just manages.",
    subheadline: "Systems Integrator | QA-minded Builder | Delivery & Architecture",
    paragraph:
      "I bridge business strategy with deep technical execution—structuring complexity, solving hard systems problems, and shipping outcomes. Across 10+ years and multiple industries, I’ve led programs spanning QA, automation, integrations, support, and coding, including post-merger integration delivery with C-level and cross-functional stakeholders.",
    humanLine: [
      { icon: FaHeart, label: "Husband" },
      { icon: FaCross, label: "Faith-driven" },
      { icon: FaHome, label: "Family-first" }
    ],
    ctas: [
      { label: "View Featured Work", href: "#work", variant: "primary" },
      { label: "Download Resume", href: "/api/analytics/resume-download?file=%2Falex-de-freitas-marroig-resume.pdf", variant: "secondary" },
      { label: "Get in Touch", href: "/contact", variant: "text" }
    ]
  },
  currentFocus: {
    lead: "Focused on what I’m building, shipping, and improving now.",
    main: {
      title: "Enterprise Integration & Delivery Architecture",
      summary: "Building integration-first delivery systems that connect business goals, implementation teams, and release quality.",
      tags: ["Integrations", "Architecture", "QA", "Automation"],
      status: "BUILDING"
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
        title: "Post-Merger Integration Planning",
        summary: "Designing and executing practical post-merger operating plans with executive and cross-functional alignment.",
        tags: ["M&A", "C-Level", "Governance"],
        status: "BUILDING"
      },
      {
        title: "QA & Reliability Delivery",
        summary: "Improving test strategy, triage flows, and release confidence across high-stakes products.",
        tags: ["Testing", "Release", "Reliability"],
        status: "IMPROVING"
      },
      {
        title: "Automation for Operational Support",
        summary: "Improving support handoffs with workflow automation and monitoring-driven feedback loops.",
        tags: ["Support", "Workflows", "Observability"],
        status: "IMPROVING"
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
      category: "Delivery & Systems",
      items: [
        { name: "APIs", note: "integration backbone", icon: MdIntegrationInstructions },
        { name: "Integrations", note: "business + technical alignment", icon: FaNetworkWired },
        { name: "Observability", note: "monitor + respond", icon: FaRegClock },
        { name: "QA / Testing", note: "quality by design", icon: SiTestinglibrary },
        { name: "Automation", note: "build + streamline", icon: RiRobot2Line }
      ]
    },
    {
      category: "Platforms",
      items: [
        { name: "Azure", note: "enterprise cloud delivery", icon: VscAzure },
        { name: "AWS", note: "scalable infrastructure", icon: FaAws },
        { name: "Power Platform", note: "workflow acceleration", icon: HiOutlineSparkles },
        { name: "CI/CD", note: "repeatable shipping", icon: FaJenkins },
        { name: "Vercel", note: "front-end deployment", icon: SiVercel }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Node.js", note: "services + APIs", icon: SiNodedotjs },
        { name: "TypeScript", note: "safe iteration", icon: SiTypescript },
        { name: "Python", note: "automation + scripting", icon: SiPython },
        { name: "SQL", note: "data reliability", icon: SiPostgresql },
        { name: "React", note: "interface systems", icon: SiReact },
        { name: "Next.js", note: "production web", icon: RiNextjsFill }
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
    { title: "Project Management Professional (PMP)", issuer: "PMI", year: "2023", icon: FaMedal },
    { title: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", year: "2023", icon: FaShieldAlt },
    { title: "PM3 Product Management Course", issuer: "PM3", year: "2023", icon: FaProjectDiagram },
    { title: "Top Performer Recognition", issuer: "SANDECH", year: "Multiple Years", icon: FaAward }
  ],
  awards: [
    "SANDECH Top Performer Recognition — multiple years",
    "Employee excellence recognition for industrial engineering portfolio delivery",
    "Cross-functional leadership recognition for complex integration initiatives"
  ],
  about: {
    heading: "I translate complexity into systems teams can actually ship.",
    paragraphs: [
      "I’m most effective where business pressure and technical depth collide: regulated environments, integration-heavy programs, and fast-moving product delivery.",
      "My operating model is simple—clarify outcomes, architect the system, then execute with QA discipline and close stakeholder alignment.",
      "The result is practical, end-to-end delivery: clearer decisions, healthier releases, and stronger trust from teams to C-level leadership."
    ]
  },
  contract: {
    availability: "Open to full-time, contract, or consulting roles",
    title: "Let's Build Something",
    lead: "If you need someone who can align stakeholders, design the system, and deliver with QA rigor—I'm ready to help.",
    ctaLabel: "Start a Conversation",
    note: "Typical response time: within 48 hours.",
    subTitle: "What I Take On",
    areas: [
      "Systems Architecture",
      "Full-Stack Development",
      "AI/ML Integration",
      "Technical Project Management",
      "QA & Testing"
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
      title: "Industrial Engineering Portfolio Delivery (SANDECH)",
      subtitle: "Industrial Program Delivery",
      description: "Complex multi-discipline engineering program delivery with governance, sequencing, and executive reporting.",
      status: "SHIPPING",
      stack: ["Delivery", "Governance", "Risk"],
      caseStudy: {
        problem: "Program complexity across disciplines created coordination friction and uneven delivery visibility.",
        solution: "Established a unified delivery cadence, risk controls, and cross-team communication rhythm.",
        impact: "Improved predictability and decision confidence without exposing confidential project details."
      }
    },
    {
      title: "Enterprise Integration & Automation",
      subtitle: "Systems + Workflow",
      description: "Integration and workflow orchestration that connects business process owners with engineering delivery.",
      status: "BUILDING",
      stack: ["APIs", "Automation", "Node.js"],
      caseStudy: {
        problem: "Disconnected tools and manual handoffs slowed delivery and increased context loss.",
        solution: "Mapped core workflows, implemented automations, and created shared operational visibility.",
        impact: "Faster handoffs, fewer blockers, and stronger alignment between product and operations."
      }
    },
    {
      title: "QA & Reliability Delivery",
      subtitle: "Quality Systems",
      description: "QA strategy, automation, and defect triage practices to harden releases and reduce avoidable issues.",
      status: "IMPROVING",
      stack: ["QA", "Automation", "CI/CD"],
      caseStudy: {
        problem: "Release reliability was inconsistent due to fragmented validation and triage ownership.",
        solution: "Introduced quality gates, shared defect ownership, and automation for repeatable checks.",
        impact: "More stable releases and clearer accountability across product and engineering teams."
      }
    },
    {
      title: "Post-Merger Technical Integration",
      subtitle: "Strategic Integration",
      description: "Multi-stakeholder post-merger integration planning for high-value, high-visibility initiatives.",
      status: "BUILDING",
      stack: ["Integration", "Architecture", "Execution"],
      caseStudy: {
        problem: "Post-acquisition programs required aligned technical and operational integration decisions.",
        solution: "Led practical post-merger integration roadmaps with C-level and cross-functional stakeholders.",
        impact: "Reduced integration ambiguity and enabled confident phased execution plans."
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
