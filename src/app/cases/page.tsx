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
          <article key={item.title} className="card space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <span className="text-sm text-accent">{item.impact}</span>
            </div>
            <p className="text-sm text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
