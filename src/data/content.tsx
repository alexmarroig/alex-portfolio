export type ProjectStatus = "BUILDING" | "SHIPPING" | "MVP" | "CONCEPT";
export type ProjectCategory = "health" | "astrology" | "ai" | "products";

export type CompanyGroup = {
  label: string;
  description: string;
  companies: { name: string; sector?: string }[];
};

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
    category: ProjectCategory;
    icon: string;
    stack: string[];
    asciiDiagram?: string;
    caseStudy: { problem: string; solution: string; impact: string };
  }[];
  gameIntel: string[];
  companies: CompanyGroup[];
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
      { label: "Launch Live CLI", href: "/game", variant: "primary" },
      { label: "Download Resume", href: "/Alex-Marroig-Resume-2026.pdf", variant: "secondary" },
      { label: "Get in Touch", href: "/contact", variant: "text" }
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
    lead: "Building privacy-first AI systems and full-stack products that ship.",
    main: {
      title: "Ethos — Offline-First Clinical AI",
      summary: "Building a privacy-absolute clinical platform with local Whisper transcription, encrypted storage, and AI-assisted records for psychologists.",
      tags: ["Whisper AI", "Electron", "SQLCipher", "React Native"],
      status: "BUILDING"
    },
    supporting: [
      {
        title: "Inner Sky — Cross-Platform Astro Engine",
        summary: "Personal astrology app with real ephemeris calculations, editorial database, and native iOS/Android compilation via Capacitor.",
        tags: ["FastAPI", "Capacitor", "React", "Supabase"],
        status: "BUILDING"
      },
      {
        title: "Alfred CRM — AI Sales Intelligence",
        summary: "Multi-tenant CRM with AI-driven lead scoring, webhook ingestion, and automation hub via Activepieces.",
        tags: ["FastAPI", "PostgreSQL", "AI Scoring", "Docker"],
        status: "BUILDING"
      },
      {
        title: "VideoEdit Studio — AI Editing Pipeline",
        summary: "Automatic video editing controlled by AI: transcription, silence detection, subtitle generation, and smart rendering.",
        tags: ["Python", "Whisper AI", "FFmpeg", "Gradio"],
        status: "BUILDING"
      }
    ]
  },
  stackCategories: [
    {
      category: "AI & Automation",
      items: [
        { name: "OpenAI / Anthropic", note: "LLM Orchestration", icon: "SiOpenai" },
        { name: "Python / LangChain", note: "AI Workflows & RAG", icon: "SiLangchain" },
        { name: "Whisper AI", note: "Speech-to-Text Pipelines", icon: "MdAutoAwesome" },
        { name: "NLP & Semantic Search", note: "Inbenta-grade Conversational AI", icon: "RiRobot2Line" },
        { name: "Playwright", note: "Test Automation & QA", icon: "SiTestinglibrary" },
        { name: "Power Automate", note: "Enterprise RPA", icon: "RiFlowChart" }
      ]
    },
    {
      category: "Full-Stack Development",
      items: [
        { name: "TypeScript / Node.js", note: "Backend Systems", icon: "SiTypescript" },
        { name: "React / Next.js", note: "Modern Web UI", icon: "RiNextjsFill" },
        { name: "FastAPI / Python", note: "High-Performance APIs", icon: "SiFastapi" },
        { name: "React Native / Expo", note: "Cross-Platform Mobile", icon: "SiExpo" },
        { name: "Tailwind CSS", note: "Design Systems", icon: "SiTailwindcss" },
        { name: "GitHub Actions", note: "CI/CD Pipelines", icon: "SiGithubactions" }
      ]
    },
    {
      category: "Data & Infrastructure",
      items: [
        { name: "PostgreSQL", note: "Relational & Vector Data", icon: "SiPostgresql" },
        { name: "MongoDB / Redis", note: "NoSQL & Caching", icon: "SiMongodb" },
        { name: "Supabase", note: "Auth, Storage & Realtime", icon: "SiSupabase" },
        { name: "Docker", note: "Containerization", icon: "SiDocker" },
        { name: "Vercel / Azure", note: "Cloud Deployment", icon: "SiVercel" },
        { name: "Power BI / Tableau", note: "Analytics & BI", icon: "SiTableau" }
      ]
    },
    {
      category: "Product & Delivery",
      items: [
        { name: "Jira / Asana / ClickUp", note: "Project Tracking", icon: "SiJira" },
        { name: "Scrum / Agile (PSM I)", note: "Methodology", icon: "SiScrumalliance" },
        { name: "PMP / Six Sigma", note: "Quality & Delivery", icon: "FaMedal" },
        { name: "Product Discovery", note: "MVP & Customer Validation", icon: "FaRocket" },
        { name: "SAP / ServiceNow", note: "Enterprise Systems", icon: "SiSap" },
        { name: "Async / Remote-First", note: "Distributed Team Leadership", icon: "FaUsers" }
      ]
    }
  ],
  certifications: [
    { title: "Project Management Professional (PMP)", issuer: "Project Management Institute", year: "2023", icon: "FaProjectDiagram" },
    { title: "Professional Scrum Master (PSM I)", issuer: "Scrum.org", year: "2023", icon: "SiScrumalliance" },
    { title: "Six Sigma Green Belt", issuer: "Master Método", year: "2023", icon: "FaCogs" },
    { title: "Product Management", issuer: "PM3", year: "2023", icon: "FaRocket" },
    { title: "MBA — Project Management", issuer: "Fundação Getúlio Vargas (FGV)", year: "2020", icon: "FaUserGraduate" },
    { title: "B.Sc. Mechanical Engineering", issuer: "UFF · Brunel University London", year: "2016", icon: "FaUniversity" }
  ],
  awards: [
    "Promoted within 6 months at Hypera Pharma — Top Performance Recognition",
    "100% target achievement — Hypera Pharma greenfield integration (2022)",
    "Professional Excellence Award — Sandech Consultoria (2019, 2018)",
    "Petrobras SMS Audit — 2nd Place, 535 accident-free days (2018)",
    "Science Without Borders Scholar — Brunel University London (2015-2016)"
  ],
  about: {
    heading: "I don't just manage projects — I build the systems that deliver them.",
    paragraphs: [
      "PMP-certified Technical Product Manager with 9+ years scaling B2B SaaS, AI-driven platforms, and data-rich products across technology, healthcare, pharmaceuticals, and enterprise environments.",
      "Currently leading AI-powered conversational and semantic search products at Inbenta, owning discovery → MVP → delivery in a fully remote, async-first setup. Previously delivered post-M&A integrations at Hypera Pharma (Takeda, Sanofi, Boehringer), HR-tech rollouts at Smurfit WestRock, and IT governance at Notredame Hapvida.",
      "I combine deep technical fluency (TypeScript, Python, FastAPI, React, LLMs) with the discipline of a PMP, PSM I, and Six Sigma Green Belt — turning ambiguous problems into shipped products through hypothesis-driven experimentation and customer validation.",
      "I lead from the front: writing the code, owning the roadmap, and partnering cross-functionally with engineering, data, design, and business stakeholders to ship AI-enabled products that move the business."
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
      title: "Ethos",
      subtitle: "OFFLINE-FIRST CLINICAL PLATFORM",
      description: "Privacy-focused clinical workspace for psychologists. Local session transcription via Whisper, AI-assisted record generation with mandatory human validation, encrypted local storage, and integrated financial management.",
      status: "BUILDING",
      category: "health",
      icon: "ethos",
      stack: ["Electron", "React Native (Expo)", "Node.js", "Python", "Whisper AI", "SQLCipher", "Turborepo"],
      asciiDiagram: `
[ DESKTOP ] <-> [ MOBILE APP ]
       \\         /
    [ MONOREPO CORE ]
         |
  [ WHISPER LOCAL ]
         |
  [ SQLCipher DB ]`,
      caseStudy: {
        problem: "Psychologists handle extremely sensitive patient data but lack tools that guarantee absolute privacy without cloud dependency.",
        solution: "Built an offline-first platform with local Whisper transcription, AES-256-GCM encrypted SQLite, and human-validated AI record generation.",
        impact: "Zero data leaves the device. Full clinical workflow — transcription, records, finances — in one encrypted environment."
      }
    },
    {
      title: "Psicosite",
      subtitle: "INSTITUTIONAL WEBSITE",
      description: "Professional website for a clinical psychologist with Jungian approach. Includes a no-code editable local CMS, editorial blog, FAQ section, and WhatsApp scheduling integration.",
      status: "SHIPPING",
      category: "health",
      icon: "psicosite",
      stack: ["TanStack Start", "Keystatic CMS", "TypeScript", "Tailwind CSS", "Vercel"],
      caseStudy: {
        problem: "The client needed a professional online presence but had no technical knowledge to maintain a website or blog.",
        solution: "Deployed a headless CMS (Keystatic) enabling content editing without code, automatic Git-based deploys, and structured SEO.",
        impact: "Client autonomously publishes blog posts and edits content. SEO-optimized with Google Business integration driving new patient leads."
      }
    },
    {
      title: "Therapy Bio Hub",
      subtitle: "BIO-LINK PLATFORM",
      description: "Specialized bio-link and lead capture platform for mental health professionals. Visual drag-and-drop editor, behavioral analytics, and integrated contact CRM.",
      status: "BUILDING",
      category: "health",
      icon: "therapyBioHub",
      stack: ["Next.js 15", "React 19", "Supabase", "PostHog", "TypeScript", "Tailwind CSS"],
      caseStudy: {
        problem: "Generic link-in-bio tools lack features tailored to therapists — no lead forms, no clinical tone, no analytics that matter for private practice.",
        solution: "Purpose-built platform with visual block editor, interest forms with CRM, and behavioral analytics (scroll depth, CTA clicks).",
        impact: "Therapists get a conversion-optimized presence with custom domains and actionable insights on prospective patients."
      }
    },
    {
      title: "Inner Sky",
      subtitle: "PERSONAL ASTROLOGY APP",
      description: "Cross-platform astrology app (web + Android + iOS) with interactive birth chart, real-time transits, daily alignment, and relationship analysis (synastry). Custom backend with editorial interpretation database.",
      status: "BUILDING",
      category: "astrology",
      icon: "innerSky",
      stack: ["React + Vite", "Capacitor (iOS/Android)", "FastAPI (AstroAPI)", "Supabase", "shadcn/ui", "TypeScript"],
      asciiDiagram: `
[ WEB + MOBILE ]
      |
[ ASTRO API ]
      |
[ EDITORIAL DB ]`,
      caseStudy: {
        problem: "Existing astrology apps are superficial — no real ephemeris calculations, no editorial depth, no synastry engine.",
        solution: "Built a full-stack app with real astronomical calculations (Swiss Ephemeris), curated editorial interpretations, and native mobile compilation.",
        impact: "Professional-grade astrology tool with birth chart, transits, solar return, and relationship analysis — all in one app."
      }
    },
    {
      title: "Astrologydatabase",
      subtitle: "EDITORIAL CONTENT MICROSERVICE",
      description: "Microservice with a database of astrological rules, texts, and interpretations. Serves as the centralized editorial source (SSOT) consumed internally by Inner Sky via protected API.",
      status: "BUILDING",
      category: "astrology",
      icon: "astrologyDatabase",
      stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Python"],
      caseStudy: {
        problem: "Astrological interpretations were scattered across files with no structured access or versioning.",
        solution: "Created an isolated microservice with migrations, seed data, and internal API endpoints for editorial content retrieval.",
        impact: "Single source of truth for all interpretive text. Clean separation of concerns — frontend never touches editorial data directly."
      }
    },
    {
      title: "Destiny Code",
      subtitle: "AI-POWERED PREDICTIONS SAAS",
      description: "SaaS platform generating personalized predictions by combining real astrological calculation (pyswisseph), numerology, and LLM-driven narrative via OpenRouter. Containerized infrastructure with Redis caching.",
      status: "MVP",
      category: "astrology",
      icon: "destinyCode",
      stack: ["FastAPI", "pyswisseph", "OpenRouter (LLM)", "PostgreSQL", "Redis", "Next.js", "Docker"],
      asciiDiagram: `
[ USER ] -> [ NEXT.JS ]
               |
         [ FASTAPI ]
          /       \\
[ SWISSEPH ]  [ LLM ]
          \\       /
         [ REDIS ]`,
      caseStudy: {
        problem: "Astrological prediction platforms either use fake calculations or lack narrative quality and personalization.",
        solution: "Combined real Swiss Ephemeris calculations with numerology engine and LLM narrative generation, cached via Redis for performance.",
        impact: "Scientifically-grounded charts with AI-generated personalized narratives. Fast response times via intelligent caching layer."
      }
    },
    {
      title: "DreamDiary",
      subtitle: "AI DREAM JOURNAL",
      description: "Dream journaling app with human-in-the-loop symbolic analysis. The LLM proposes symbolic interpretations and the user confirms or refutes each one — only validated insights become permanent data.",
      status: "MVP",
      category: "ai",
      icon: "dreamDiary",
      stack: ["React + Vite", "Node.js + Express", "OpenAI API", "MongoDB", "JWT", "TypeScript"],
      asciiDiagram: `
[ JOURNAL ENTRY ]
       |
[ SUMMARIZER ]
       |
[ LLM ANALYSIS ]
       |
[ USER VALIDATES ]
       |
[ PERMANENT DATA ]`,
      caseStudy: {
        problem: "AI dream analysis tools blindly assign meanings without user consent, creating unreliable psychological data.",
        solution: "Implemented a validation loop where every AI-proposed symbol must be confirmed/refuted by the user before persisting.",
        impact: "Reliable dream analysis database built on user-validated interpretations. Gamification (streaks, achievements) drives daily engagement."
      }
    },
    {
      title: "VideoEdit Studio",
      subtitle: "AI VIDEO EDITING PIPELINE",
      description: "Automatic video editing studio controlled via chat or web interface (Gradio). Full pipeline: Whisper transcription, cut detection, rendering, subtitles, color filters, and animations.",
      status: "BUILDING",
      category: "ai",
      icon: "videoEditStudio",
      stack: ["Python", "Whisper AI", "Gradio", "FFmpeg", "CapCut API"],
      caseStudy: {
        problem: "Content creators spend hours on repetitive editing tasks — silence removal, subtitle generation, color grading.",
        solution: "Built an AI pipeline that transcribes, detects silences/stumbles, generates Hormozi-style subtitles, and renders final video automatically.",
        impact: "Hours of editing reduced to minutes. Multiple modes (single video, split screen, clips mix) with a learning feedback system."
      }
    },
    {
      title: "Life Discovery Engine",
      subtitle: "AI EXPERIENCE RECOMMENDER",
      description: "Monorepo platform with multiple AI engines for personalized experience, activity, and date recommendations. Includes AI concierge, adaptive user profiling, and continuous learning engine.",
      status: "CONCEPT",
      category: "ai",
      icon: "lifeDiscoveryEngine",
      stack: ["Python (multiple services)", "Turborepo", "React Native (mobile)", "Docker", "TypeScript"],
      caseStudy: {
        problem: "People struggle to discover meaningful experiences tailored to their evolving interests and context.",
        solution: "Designing a multi-engine AI platform with conversational concierge, adaptive user profiles, and a recommendation system that learns continuously.",
        impact: "Personalized discovery of activities and experiences through an AI that understands preferences and adapts over time."
      }
    },
    {
      title: "Alfred CRM",
      subtitle: "AI-POWERED SALES CRM",
      description: "Production-grade backend for a sales CRM with embedded AI. Multi-tenant support, AI-driven lead scoring, webhook ingestion (email, Slack), automated jobs, and automation hub via Activepieces.",
      status: "BUILDING",
      category: "products",
      icon: "alfredCRM",
      stack: ["FastAPI", "PostgreSQL", "APScheduler", "SQLAlchemy 2.0", "Pydantic v2", "Docker", "Alembic"],
      asciiDiagram: `
[ WEBHOOKS ] -> [ INGESTION ]
                     |
              [ AI SCORING ]
                     |
            [ NOTIFICATIONS ]
                     |
           [ ACTIVEPIECES HUB ]`,
      caseStudy: {
        problem: "SMB sales teams need AI-powered lead management but enterprise CRMs are too expensive and complex.",
        solution: "Built a multi-tenant CRM backend with pluggable AI provider, webhook ingestion, automated overdue notifications, and signed automation callbacks.",
        impact: "AI lead classification, automated follow-ups, and full tenant isolation — enterprise features at startup speed."
      }
    },
    {
      title: "Couple Closet",
      subtitle: "COUPLES LIFESTYLE APP",
      description: "Complete backend for a couples lifestyle app. Compatibility quizzes, personalized date recommendations, shared wishlist, and integrated Shopify store with synced catalog.",
      status: "MVP",
      category: "products",
      icon: "coupleCloset",
      stack: ["Node.js + TypeScript", "Express", "Prisma + PostgreSQL", "Shopify API", "JWT", "Zod", "Swagger"],
      caseStudy: {
        problem: "Couples apps are either too simple (shared lists) or too complex (therapy tools) — nothing bridges fun and commerce.",
        solution: "Built a feature-rich backend combining quizzes, AI date recommendations, shared wishlists, and a fully synced Shopify storefront.",
        impact: "Couples get personalized experiences plus a curated store. Full Swagger docs enable rapid frontend development."
      }
    },
    {
      title: "PetTech Review",
      subtitle: "AFFILIATE EDITORIAL PLATFORM",
      description: "Curated editorial site for pet tech and wellness product reviews with an affiliate business model. Maximum performance with Astro (static HTML), product comparisons, and trend radar.",
      status: "SHIPPING",
      category: "products",
      icon: "petTechReview",
      stack: ["Astro 4", "Tailwind CSS", "lucide-astro", "Static HTML"],
      caseStudy: {
        problem: "Pet owners lack trustworthy, performance-focused review sites that prioritize editorial quality over ad density.",
        solution: "Built a static Astro site with product battle comparisons, proper affiliate disclosure, trend radar, and newsletter capture.",
        impact: "Perfect Lighthouse scores with static HTML. Affiliate revenue through honest, editorial-quality pet tech curation."
      }
    },
  ],
  gameIntel: [
    "AI Expert: Building agentic workflows since 2023",
    "Automation King: Saved thousands of hours via custom scripts",
    "Technical Leader: Managed multi-million dollar tech portfolios",
    "Hands-on: Still commits code daily",
    "Focus: AI, Software Architecture, and High-Tech Delivery",
    "Goal: Lead the next wave of autonomous software engineering"
  ],
  companies: [
    {
      label: "Employers",
      description: "Companies where I've worked full-time",
      companies: [
        { name: "Inbenta", sector: "AI / SaaS" },
        { name: "Smurfit WestRock", sector: "Industrial" },
        { name: "Notredame Hapvida", sector: "Healthcare" },
        { name: "Hypera Pharma", sector: "Pharma" },
        { name: "Sandech", sector: "Consulting" }
      ]
    },
    {
      label: "Clients & Partners",
      description: "Enterprises I've delivered projects for",
      companies: [
        { name: "Petrobras", sector: "Energy" },
        { name: "Shell", sector: "Energy" },
        { name: "Raízen", sector: "Energy" },
        { name: "Ipiranga", sector: "Energy" },
        { name: "Vibra Energia", sector: "Energy" },
        { name: "TotalEnergies", sector: "Energy" },
        { name: "Neoenergia", sector: "Utilities" },
        { name: "PRIO", sector: "Oil & Gas" },
        { name: "Modec", sector: "Offshore" },
        { name: "BW Offshore", sector: "Offshore" },
        { name: "Ultracargo", sector: "Logistics" },
        { name: "BMW", sector: "Automotive" },
        { name: "VWFS", sector: "Auto Finance" },
        { name: "Nestlé", sector: "Consumer Goods" },
        { name: "Mondelez", sector: "Consumer Goods" },
        { name: "Citizens Bank", sector: "Banking" },
        { name: "CIBC", sector: "Banking" },
        { name: "RBC", sector: "Banking" },
        { name: "Getnet", sector: "Fintech" },
        { name: "DocuSign", sector: "SaaS" },
        { name: "PwC", sector: "Consulting" },
        { name: "Suhai Seguradora", sector: "Insurance" },
        { name: "Capemisa", sector: "Insurance" },
        { name: "Alterra", sector: "Insurance" }
      ]
    }
  ]
};
