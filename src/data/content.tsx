import type { IconType } from "react-icons";
import {
  FaAward,
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
  currentFocus: {
    lead: string;
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
  projects: {
    title: string;
    subtitle: string;
    description: string;
    status: ProjectStatus;
    stack: string[];
    caseStudy: { problem: string; solution: string; impact: string };
  }[];
};

export const siteContent: SiteContent = {
  hero: {
    intro: "Hey, I’m Alex de Freitas Marroig",
    headline: "Technical Project Manager who builds, not just manages.",
    subheadline: "Systems Integrator | QA-minded Builder | Delivery & Architecture",
    paragraph:
      "I bridge business strategy with deep technical execution—structuring complexity, solving hard systems problems, and shipping outcomes. Across 10+ years and multiple industries, I’ve led programs spanning QA, automation, integrations, support, and coding, including M&A assessment and integration work with C-level stakeholders.",
    humanLine: [
      { icon: FaHeart, label: "Husband" },
      { icon: FaCross, label: "Faith-driven" },
      { icon: FaHome, label: "Family-first" }
    ],
    ctas: [
      { label: "View Featured Work", href: "#work", variant: "primary" },
      { label: "Download Resume", href: "/alex-de-freitas-marroig-resume.pdf", variant: "secondary" },
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
    supporting: [
      {
        title: "M&A Due Diligence + Integration Planning",
        summary: "Shipping practical operating plans for billion-scale initiatives with executive and cross-functional alignment.",
        tags: ["M&A", "C-Level", "Governance"],
        status: "SHIPPING"
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
  projects: [
    {
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
      title: "M&A Technical Due Diligence & Integration",
      subtitle: "Strategic Integration",
      description: "Multi-stakeholder due diligence and integration planning for high-value, high-visibility initiatives.",
      status: "SHIPPING",
      stack: ["Assessment", "Architecture", "Execution"],
      caseStudy: {
        problem: "Post-acquisition programs required aligned technical and operational integration decisions.",
        solution: "Led practical due diligence and integration roadmaps with C-level and cross-functional stakeholders.",
        impact: "Reduced integration ambiguity and enabled confident phased execution plans."
      }
    }
  ]
};
