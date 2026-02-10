export type AppCard = {
  name: string;
  summary: string;
  status: 'Live' | 'In Progress' | 'Concept';
  stack: string[];
  role: string;
  year: string;
  href: {
    demo?: string;
    repo?: string;
  };
  highlights: string[];
};

export const appCards: AppCard[] = [
  {
    name: 'Ethos',
    summary: 'A brand governance tool to keep voice, visuals, and content aligned.',
    status: 'Live',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API'],
    role: 'Product Designer + Front-end Engineer',
    year: '2025',
    href: {
      demo: 'https://example.com/ethos-demo',
      repo: 'https://github.com/example/ethos',
    },
    highlights: [
      'Reduced review cycles with shared approval workflows.',
      'Built AI-assisted content checks for tone and consistency.',
      'Added reusable design tokens for brand-safe publishing.',
    ],
  },
  {
    name: 'AstroLumen',
    summary: 'A lightweight astronomy explorer for tracking celestial events and forecasts.',
    status: 'In Progress',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Nasa APIs'],
    role: 'Founder + Full-stack Developer',
    year: '2026',
    href: {
      demo: 'https://example.com/astrolumen',
      repo: 'https://github.com/example/astrolumen',
    },
    highlights: [
      'Created event timelines with location-based visibility windows.',
      'Improved data freshness via scheduled ingest and caching.',
      'Shipped an accessible dark-mode-first interface for field use.',
    ],
  },
  {
    name: 'SignalBoard',
    summary: 'Placeholder: analytics snapshot app with role-based visibility.',
    status: 'Concept',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    role: 'Product Strategy + UX',
    year: '2026',
    href: {
      demo: 'https://example.com/signalboard-concept',
      repo: 'https://github.com/example/signalboard',
    },
    highlights: [
      'Concepted KPI-first dashboard layouts for executive scanability.',
      'Designed role-based metric permissions for cross-functional teams.',
      'Outlined alerting flows to flag regressions early.',
    ],
  },
  {
    name: 'OpsPilot',
    summary: 'Placeholder: operational dashboard for incident response and coordination.',
    status: 'Concept',
    stack: ['React', 'Go', 'Redis'],
    role: 'Product Lead',
    year: '2026',
    href: {
      demo: 'https://example.com/opspilot-concept',
      repo: 'https://github.com/example/opspilot',
    },
    highlights: [
      'Defined incident playbooks to cut handoff delays.',
      'Mapped command-center views for rapid triage decisions.',
      'Planned postmortem exports for compliance documentation.',
    ],
  },
];
