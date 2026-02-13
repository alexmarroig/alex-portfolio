import { siteContent } from "@/src/data/content";

export default function HeroCard() {
  const { hero } = siteContent;

  return (
    <article className="heroOpenLayout" aria-label="Intro hero section">
      <p className="heroIntroLine">
        Hey, I’m <span>Alex</span> de Freitas <span>Marroig</span>
      </p>

      <h1 className="heroOpenTitle">
        Technical Project Manager who <span className="heroBuildsGradient">builds</span>, not just manages.
      </h1>

      <p className="heroSubHeadline">{hero.subheadline}</p>
      <p className="heroPositioning">{hero.paragraph}</p>

      <p className="humanLine">
        {hero.humanLine.map(({ icon: Icon, label }, index) => (
          <span key={label}>
            <Icon aria-hidden="true" /> {label}
            {index < hero.humanLine.length - 1 ? " • " : ""}
          </span>
        ))}
      </p>

      <div className="heroActions" aria-label="Primary calls to action">
        {hero.ctas.map((cta) => (
          <a key={cta.label} href={cta.href} className={`btn ${cta.variant === "primary" ? "btnPrimary" : cta.variant === "secondary" ? "btnGhost" : "btnText"}`}>
            {cta.label}
          </a>
        ))}
      </div>

      <a href="#current-focus" className="heroScrollIndicator" aria-label="Scroll to current focus">
        <span>SCROLL</span>
        <i />
      </a>
    </article>
  );
}
