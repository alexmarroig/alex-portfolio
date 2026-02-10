import { appCards } from '@/data/apps';

export default function AppsPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="section-title">Apps</h1>
        <p className="mt-2 text-zinc-300">A snapshot of products I am building and refining.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {appCards.map((app) => (
          <article key={app.name} className="card space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-medium">{app.name}</h2>
              <span className="rounded border border-border px-2 py-1 text-xs text-zinc-300">{app.status}</span>
            </div>
            <p className="text-sm text-zinc-300">{app.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
