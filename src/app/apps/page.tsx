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
          <article key={app.name} className="card space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-lg font-medium">{app.name}</h2>
                <span className="rounded border border-border px-2 py-1 text-xs text-zinc-300">{app.status}</span>
              </div>

              <p className="text-sm text-zinc-300">{app.summary}</p>
            </div>

            <dl className="grid gap-2 text-sm md:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-zinc-500">Role</dt>
                <dd className="text-zinc-100">{app.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-zinc-500">Year</dt>
                <dd className="text-zinc-100">{app.year}</dd>
              </div>
            </dl>

            <div>
              <h3 className="text-xs uppercase tracking-wide text-zinc-500">Stack</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {app.stack.map((item) => (
                  <span key={item} className="rounded border border-border px-2 py-1 text-xs text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wide text-zinc-500">Highlights</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {app.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-1 text-sm">
              {app.href.demo ? (
                <a
                  className="text-accent underline underline-offset-4 hover:opacity-80"
                  href={app.href.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View demo
                </a>
              ) : null}
              {app.href.repo ? (
                <a
                  className="text-accent underline underline-offset-4 hover:opacity-80"
                  href={app.href.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
