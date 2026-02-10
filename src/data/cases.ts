export type CaseStudy = {
  title: string;
  impact: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: 'SaaS Onboarding Lift',
    impact: '+18% trial-to-paid conversion',
    context: 'Mid-market B2B SaaS with healthy traffic but low activation after signup.',
    challenge: 'New users stalled in setup and dropped before first value was reached.',
    solution:
      'Introduced role-based onboarding paths, progress checkpoints, and contextual tips tied to user intent.',
    result: 'Activation time dropped by 31% and trial-to-paid conversion increased by 18% in 8 weeks.',
    tags: ['Onboarding', 'Activation', 'Experimentation', 'B2B SaaS'],
  },
  {
    title: 'Checkout Optimization',
    impact: '-24% cart abandonment',
    context: 'DTC commerce flow across mobile and desktop with heavy traffic from paid channels.',
    challenge: 'Slow checkout screens and unclear error states caused users to abandon before payment.',
    solution:
      'Simplified checkout into fewer steps, improved field validation, and reduced blocking scripts for faster render.',
    result: 'Cart abandonment decreased by 24% and checkout completion time improved by 19%.',
    tags: ['E-commerce', 'Performance', 'UX Writing', 'Conversion'],
  },
  {
    title: 'Internal Tool Modernization',
    impact: '-35% task completion time',
    context: 'Operations team relied on a legacy internal tool with fragmented workflows and inconsistent data.',
    challenge: 'Agents needed to navigate multiple systems, increasing errors and handoff friction.',
    solution:
      'Rebuilt core flows in a unified interface, introduced reusable components, and automated repetitive data tasks.',
    result: 'Task completion time fell by 35% with fewer escalations and higher team satisfaction.',
    tags: ['Internal Tools', 'Workflow Design', 'Design System', 'Automation'],
  },
];
