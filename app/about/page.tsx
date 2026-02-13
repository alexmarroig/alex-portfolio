const HIGHLIGHTS = [
  "10+ years across pharma, tech, oil & gas, and manufacturing.",
  "30+ projects delivered and 10+ digital transformation initiatives supported.",
  "Post-M&A integration in pharma: 200+ people transition and 30+ regulated systems rollout.",
] as const;

export default function AboutPage() {
  return (
    <section className="simplePage glassPanel about">
      <header className="aboutHeader">
        <h1>About Alex de Freitas Marroig</h1>

        <p className="aboutLead">
          Technical Project Manager (PMP, PSM-I) focused on AI delivery, systems
          integration, and QA-minded execution. I work at the intersection of
          product outcomes and technical reliability.
        </p>
      </header>

      <section className="aboutSection" aria-labelledby="highlights">
        <h2 id="highlights">Highlights</h2>

        <ul className="aboutList">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
