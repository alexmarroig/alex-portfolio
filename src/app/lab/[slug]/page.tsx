import Link from 'next/link';
import { notFound } from 'next/navigation';

type LabSlug = 'ecommerce' | 'scheduler' | 'inbox' | 'metrics-dashboard';

const demoContent: Record<LabSlug, { title: string; summary: string }> = {
  ecommerce: {
    title: 'E-commerce Demo',
    summary: 'Placeholder for storefront experiments, cart flows, and checkout UX.',
  },
  scheduler: {
    title: 'Scheduler Demo',
    summary: 'Placeholder for calendar planning, team availability, and booking workflows.',
  },
  inbox: {
    title: 'Inbox Demo',
    summary: 'Placeholder for triage patterns, filtering strategies, and communication tools.',
  },
  'metrics-dashboard': {
    title: 'Metrics Dashboard Demo',
    summary: 'Placeholder for KPI tracking, alerting, and executive reporting modules.',
  },
};

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = demoContent[slug as LabSlug];

  if (!content) {
    notFound();
  }

  return (
    <section className="space-y-5">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Lab Track</p>
      <h1 className="section-title">{content.title}</h1>
      <p className="max-w-2xl text-zinc-300">{content.summary}</p>
      <Link href="/lab" className="inline-block text-sm text-zinc-300 underline-offset-4 hover:underline">
        Back to Lab
      </Link>
    </section>
  );
}
