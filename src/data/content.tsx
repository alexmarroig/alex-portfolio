import type { IconType } from "react-icons";
import {
  FaAward,
  FaAws,
  FaCross,
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
import { MdIntegrationInstructions } from "react-icons/md";
import { RiNextjsFill, RiRobot2Line } from "react-icons/ri";
import { SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTestinglibrary, SiTypescript, SiVercel } from "react-icons/si";
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
  capabilityGrid: [
    { title: "Systems Architecture", description: "Designing delivery systems with clear ownership and outcomes.", icon: FaProjectDiagram },
    { title: "Full-Stack Development", description: "Hands-on implementation for web apps, APIs, and automation.", icon: SiReact },
    { title: "AI/ML Integration", description: "Practical AI workflows connected to real business operations.", icon: HiOutlineSparkles },
    { title: "Technical Project Management", description: "Execution with governance, cadence, and risk control.", icon: FaNetworkWired },
    { title: "QA & Testing", description: "Quality-by-design through test strategy and release confidence.", icon: SiTestinglibrary }
  ],
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
  contract: {
    availability: "Open to full-time, contract, or consulting roles",
    title: "Let's Build Something",
    lead: "If you need someone who can align stakeholders, design the system, and deliver with QA rigor—I'm ready to help.",
    ctaLabel: "Start a Conversation",
    note: "Typical response time: within 48 hours.",
    subTitle: "What I Take On",
    areas: ["Systems Architecture", "Full-Stack Development", "AI/ML Integration", "Technical Project Management", "QA & Testing"]
  },
  projects: [
    {
      title: "Industrial Engineering Portfolio Delivery (SANDECH)",
      subtitle: "INDUSTRIAL PROGRAM DELIVERY",
      description: "Complex multi-discipline engineering program delivery with governance, sequencing, and executive reporting.",
      status: "SHIPPING",
      stack: ["Delivery", "Governance", "Risk"],
      caseStudy: {
        problem: "Program portfolio had high complexity, many dependencies, and weak reporting flow.",
        solution: "Established delivery cadence, risk governance, and executive communication rhythms.",
        impact: "Increased predictability, clearer decision-making, and stronger stakeholder trust."
      }
    },
    {
      title: "Enterprise Integration & Automation",
      subtitle: "SYSTEMS + WORKFLOW",
      description: "Integration and workflow orchestration connecting business process owners with engineering delivery.",
      status: "BUILDING",
      stack: ["APIs", "Automation", "Node.js"],
      caseStudy: {
        problem: "Disconnected systems caused manual handoffs and slow execution.",
        solution: "Mapped core workflows and integrated services through API-first automation.",
        impact: "Reduced operational friction and improved throughput across teams."
      }
    },
    {
      title: "QA & Reliability Delivery",
      subtitle: "QUALITY SYSTEMS",
      description: "QA strategy, automation, and defect triage practices to harden releases and reduce avoidable issues.",
      status: "IMPROVING",
      stack: ["QA", "Automation", "CI/CD"],
      caseStudy: {
        problem: "Releases were unstable with recurring post-release defects.",
        solution: "Introduced quality gates, test automation, and structured triage routines.",
        impact: "Higher release confidence with fewer regressions in production."
      }
    },
    {
      title: "Post-Merger Technical Integration",
      subtitle: "STRATEGIC INTEGRATION",
      description: "Multi-stakeholder post-merger integration planning for high-value, high-visibility initiatives.",
      status: "BUILDING",
      stack: ["Integration", "Architecture", "Execution"],
      caseStudy: {
        problem: "Merger created conflicting systems, ownership gaps, and delivery risk.",
        solution: "Defined integration architecture, decision forums, and staged execution plan.",
        impact: "Aligned leadership and teams around a practical path to integration outcomes."
      }
    }
  ],
  gameIntel: [
    "10+ years in technical delivery and integration",
    "Led QA automation and reliability initiatives",
    "Experience in industrial engineering programs",
    "Hands-on with Node.js, React, and TypeScript",
    "Built workflow automation across business systems",
    "Supports AI/ML integration into operations",
    "Worked in post-merger technical integration",
    "Strong cross-functional stakeholder alignment",
    "Comfortable with enterprise cloud platforms",
    "Focused on practical, shippable outcomes",
    "Bridges strategy and implementation",
    "Open to full-time, contract, and consulting"
  ]
};
