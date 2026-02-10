export type AppCard = {
  name: string;
  summary: string;
  status: 'Live' | 'In Progress' | 'Concept';
};

export const appCards: AppCard[] = [
  {
    name: 'Ethos',
    summary: 'A brand governance tool to keep voice, visuals, and content aligned.',
    status: 'Live',
  },
  {
    name: 'AstroLumen',
    summary: 'A lightweight astronomy explorer for tracking celestial events and forecasts.',
    status: 'In Progress',
  },
  {
    name: 'SignalBoard',
    summary: 'Placeholder: analytics snapshot app with role-based visibility.',
    status: 'Concept',
  },
  {
    name: 'OpsPilot',
    summary: 'Placeholder: operational dashboard for incident response and coordination.',
    status: 'Concept',
  },
];
