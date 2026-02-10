export default function HomePage() {
  return (
    <section className="space-y-6">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Product Engineer</p>
      <h1 className="section-title max-w-3xl">
        Building practical software with clear UX, resilient architecture, and measurable outcomes.
      </h1>
      <p className="max-w-2xl text-zinc-300">
        This portfolio highlights apps, experiments, and case studies focused on solving business-critical
        problems with thoughtful implementation.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card">
          <p className="text-sm text-muted">Apps shipped</p>
          <p className="mt-2 text-2xl font-semibold">12+</p>
        </div>
        <div className="card">
          <p className="text-sm text-muted">Case studies</p>
          <p className="mt-2 text-2xl font-semibold">6</p>
        </div>
        <div className="card">
          <p className="text-sm text-muted">Years building</p>
          <p className="mt-2 text-2xl font-semibold">8</p>
        </div>
      </div>
    </section>
  );
}
