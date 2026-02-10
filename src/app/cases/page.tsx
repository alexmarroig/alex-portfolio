import { caseStudies } from '@/data/cases';

export default function CasesPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="section-title">Case Studies</h1>
        <p className="mt-2 text-zinc-300">Selected outcomes with product, design, and engineering context.</p>
      </div>

      <div className="grid gap-4">
        {caseStudies.map((item) => (
          <article key={item.title} className="card space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <span className="text-sm font-medium text-accent">{item.impact}</span>
            </div>

            <div className="grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-wide text-zinc-500">Context</h3>
                <p className="mt-1">{item.context}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wide text-zinc-500">Challenge</h3>
                <p className="mt-1">{item.challenge}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wide text-zinc-500">Solution</h3>
                <p className="mt-1">{item.solution}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wide text-zinc-500">Result</h3>
                <p className="mt-1 text-zinc-100">{item.result}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-wide text-zinc-500">Tags</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded border border-border px-2 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
