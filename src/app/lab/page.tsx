import Link from 'next/link';

const labTiles = [
  { name: 'E-commerce', slug: 'ecommerce' },
  { name: 'Scheduler', slug: 'scheduler' },
  { name: 'Inbox', slug: 'inbox' },
  { name: 'Metrics Dashboard', slug: 'metrics-dashboard' },
] as const;

export default function LabPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="section-title">Lab</h1>
        <p className="mt-2 text-zinc-300">Prototype tracks for testing interaction and architecture ideas.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {labTiles.map((tile) => (
          <Link key={tile.slug} href={`/lab/${tile.slug}`} className="card block hover:border-zinc-500">
            <h2 className="text-lg font-medium">{tile.name}</h2>
            <p className="mt-2 text-sm text-zinc-300">Open {tile.name} demo placeholder.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
