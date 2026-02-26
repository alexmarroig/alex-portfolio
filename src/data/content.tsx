export type ProjectStatus = "BUILDING" | "SHIPPING" | "IMPROVING";

export type SiteContent = {
  hero: {
    intro: string;
    headline: string;
    subheadline: string;
    paragraph: string;
    humanLine: { icon: string; label: string }[];
    ctas: { label: string; href: string; variant: "primary" | "secondary" | "text" }[];
  };
  capabilityGrid: { title: string; description: string; icon: string }[];
  currentFocus: {
    lead: string;
    main: { title: string; summary: string; tags: string[]; status: ProjectStatus };
    supporting: { title: string; summary: string; tags: string[]; status: ProjectStatus }[];
  };
  stackCategories: {
    category: string;
    items: { name: string; note: string; icon: string }[];
  }[];
  certifications: { title: string; issuer: string; year: string; icon: string }[];
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
    asciiDiagram?: string;
    caseStudy: { problem: string; solution: string; impact: string };
  }[];
  gameIntel: string[];
};

export const siteContent: SiteContent = {
  hero: {
    intro: "Hey, I’m Alex de Freitas Marroig",
    headline: "AI-Driven Builder & Technical Leader.",
    subheadline: "Software Automation | AI Systems | Delivery Architecture",
    paragraph:
      "I bridge business strategy with deep technical execution—specializing in AI integration, software automation, and high-stakes systems architecture. I build autonomous agents and robust delivery pipelines that solve complex enterprise problems.",
    humanLine: [
      { icon: "FaHeart", label: "Husband" },
      { icon: "FaCross", label: "Faith-driven" },
      { icon: "FaHome", label: "Family-first" }
    ],
    ctas: [
      { label: "Launch Neural Terminal", href: "/game", variant: "primary" },
      { label: "Download Technical CV", href: "/api/analytics/resume-download?file=%2Falex_resume.pdf", variant: "secondary" },
      { label: "Direct Access", href: "/contact", variant: "text" }
    ]
  },
  capabilityGrid: [
    { title: "AI & Agentic Systems", description: "Architecting LLM-powered agents and autonomous workflows for enterprise efficiency.", icon: "HiOutlineSparkles" },
    { title: "Software Automation", description: "Building robust CI/CD, testing suites, and business process automation at scale.", icon: "RiRobot2Line" },
    { title: "Full-Stack AI Apps", description: "End-to-end development of modern web applications with integrated AI intelligence.", icon: "SiReact" },
    { title: "Technical Leadership", description: "Managing complex engineering projects with a focus on architecture and quality.", icon: "FaProjectDiagram" },
    { title: "Systems Integration", description: "Connecting disparate enterprise systems via custom APIs and middleware.", icon: "MdIntegrationInstructions" }
  ],
  currentFocus: {
    lead: "Obsessed with AI optimization and autonomous software engineering.",
    main: {
      title: "Agentic Workflow Orchestration",
      summary: "Developing a framework for multi-agent systems to handle complex technical project management tasks autonomously.",
      tags: ["AI Agents", "LangChain", "Node.js", "Python"],
      status: "BUILDING"
    },
    supporting: [
      {
        title: "AI-Powered QA Lab",
        summary: "Automating end-to-end testing using vision-language models for dynamic UI validation.",
        tags: ["VLM", "Playwright", "Automation"],
        status: "IMPROVING"
      },
      {
        title: "Enterprise LLM Gateway",
        summary: "Secure and scalable API layer for internal LLM consumption with cost tracking and safety guardrails.",
        tags: ["Azure OpenAI", "API Management", "Security"],
        status: "BUILDING"
      },
      {
        title: "Autonomous Delivery Pipelines",
        summary: "Building self-healing CI/CD pipelines that use AI to suggest fixes for build failures.",
        tags: ["DevOps", "AI", "GitHub Actions"],
        status: "IMPROVING"
      }
    ]
  },
  stackCategories: [
    {
      category: "AI & Automation",
      items: [
        { name: "OpenAI / Anthropic", note: "LLM Orchestration", icon: "HiOutlineSparkles" },
        { name: "Python / LangChain", note: "AI Workflows", icon: "SiPython" },
        { name: "Playwright", note: "Automation & QA", icon: "SiTestinglibrary" },
        { name: "GitHub Actions", note: "CI/CD Pipelines", icon: "SiGithubactions" }
      ]
    },
    {
      category: "Development",
      items: [
        { name: "Node.js / TypeScript", note: "Backend Systems", icon: "SiNodedotjs" },
        { name: "React / Next.js", note: "AI Interfaces", icon: "SiReact" },
        { name: "PostgreSQL", note: "Vector & Relational Data", icon: "SiPostgresql" },
        { name: "Vercel / Azure", note: "Cloud Infrastructure", icon: "SiVercel" }
      ]
    }
  ],
  certifications: [
    { title: "AI Strategy & Implementation", issuer: "Tech Institute", year: "2024", icon: "FaMedal" },
    { title: "Project Management Professional (PMP)", issuer: "PMI", year: "2023", icon: "FaShieldAlt" },
    { title: "Scrum Master (PSM I)", issuer: "Scrum.org", year: "2023", icon: "FaShieldAlt" }
  ],
  awards: [
    "Innovation Award for AI Automation — 2024",
    "SANDECH Top Performer Recognition — multiple years"
  ],
  about: {
    heading: "I don't just manage projects; I build the systems that deliver them.",
    paragraphs: [
      "With a foundation in Technical Project Management and a deep focus on Software Engineering, I thrive at the intersection of AI and operational efficiency.",
      "My mission is to replace manual complexity with intelligent automation, ensuring that every project is delivered with architectural integrity and top-tier quality.",
      "Whether it's architecting a multi-agent AI system or leading a cross-functional engineering team, I focus on shipping high-tech solutions that scale."
    ]
  },
  contract: {
    availability: "Seeking AI-focused Engineering & Leadership roles",
    title: "Hire a Technical Force Multiplier",
    lead: "If you need an expert who can architect AI systems, automate your delivery, and lead technical teams to success—let's talk.",
    ctaLabel: "Open Communication Channel",
    note: "AI agent monitoring active. Response within 24h.",
    subTitle: "Expertise On Demand",
    areas: ["AI System Design", "Software Automation", "Technical Leadership", "Full-Stack Development"]
  },
  projects: [
    {
      title: "Neural Project Orchestrator",
      subtitle: "AI AGENT SYSTEM",
      description: "An autonomous multi-agent system designed to manage Jira tickets, update documentation, and coordinate dev tasks.",
      status: "BUILDING",
      stack: ["Python", "OpenAI", "FastAPI", "React"],
      asciiDiagram: `
[ USER ] <-> [ API GATEWAY ]
               |
      [ AGENT ORCHESTRATOR ]
       /       |        \\
[ JIRA ]  [ GITHUB ]  [ DOCS ]
      `,
      caseStudy: {
        problem: "Manual project management overhead was slowing down engineering cycles by 30%.",
        solution: "Implemented an LLM-driven orchestrator that autonomously triages and assigns tasks.",
        impact: "Reduced PM overhead by 50% and increased sprint velocity."
      }
    },
    {
      title: "Auto-QA AI Engine",
      subtitle: "AUTOMATION PLATFORM",
      description: "Vision-AI powered testing platform that detects UI regressions without manual test scripts.",
      status: "SHIPPING",
      stack: ["Node.js", "Playwright", "GPT-4V"],
      asciiDiagram: `
[ UI RENDER ] -> [ VISION AI ]
                    |
           [ ANOMALY DETECTOR ]
                    |
          [ SLACK NOTIFICATION ]
      `,
      caseStudy: {
        problem: "Legacy test scripts were brittle and required constant manual updates.",
        solution: "Built a self-healing QA engine using vision models to validate UI state.",
        impact: "99% reduction in manual test maintenance."
      }
    },
    {
      title: "Enterprise AI Gateway",
      subtitle: "INFRASTRUCTURE",
      description: "Centralized hub for enterprise LLM access with built-in security, cost control, and performance monitoring.",
      status: "SHIPPING",
      stack: ["Azure", "TypeScript", "Redis"],
      asciiDiagram: `
[ APPS ] -> [ AI GATEWAY ] -> [ LLM PROVIDERS ]
               | (Auth/Log)
          [ DASHBOARD ]
      `,
      caseStudy: {
        problem: "Fragmented AI adoption led to security risks and unmanaged cloud costs.",
        solution: "Designed a secure gateway to standardize and monitor all AI traffic.",
        impact: "Zero security breaches and 25% cost saving on token usage."
      }
    }
  ],
  gameIntel: [
    "AI Expert: Building agentic workflows since 2023",
    "Automation King: Saved thousands of hours via custom scripts",
    "Technical Leader: Managed multi-million dollar tech portfolios",
    "Hands-on: Still commits code daily",
    "Focus: AI, Software Architecture, and High-Tech Delivery",
    "Goal: Lead the next wave of autonomous software engineering"
  ]
};
