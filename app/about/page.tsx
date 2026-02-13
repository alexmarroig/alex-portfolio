export default function AboutPage() {
  return (
    <section className="simplePage glassPanel about" aria-labelledby="about-title">
      <header className="aboutHeader">
        <h1 id="about-title">How I Think</h1>
        <p className="aboutQuote">
          “I build ambitious systems that scale and ship—engineering, testing and business.”
        </p>
      </header>

      <p className="aboutBody">
        For 10+ years, I&apos;ve led projects across aerospace, finance, healthcare, manufacturing, and SaaS with a practical,
        delivery-first approach to systems and product execution.
      </p>
      <p className="aboutBody">
        I write code when needed, run QA with rigor, and manage teams through ambiguity. I&apos;m comfortable inside architecture
        reviews, sprint ceremonies, and executive planning sessions.
      </p>
      <p className="aboutBody">
        My edge is speaking both technical and business languages—aligning stakeholders, engineering teams, and operations so
        ambitious products are shipped with reliability.
      </p>
    </section>
  );
}
