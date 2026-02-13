import { siteContent } from "@/src/data/content";

export default function HeroCard() {
  return (
    <article className="glassPanel heroMasterCard">
      <p className="heroName">{siteContent.hero.name}</p>
      <h1 className="heroRole">
        Technical Project Manager who <span className="heroHighlight">builds</span>, not just <span className="heroUnderline">manages</span>.
      </h1>

      <div className="heroNarrative">
        {siteContent.hero.narrative.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="heroHuman">{siteContent.hero.humanLayer}</p>

      <div className="heroActions" aria-label="Primary calls to action">
        {siteContent.hero.ctas.map((cta) => (
          <a key={cta.label} href={cta.href} className="btn btnPrimary" target={cta.external ? "_blank" : undefined} rel={cta.external ? "noreferrer" : undefined}>
            {cta.label}
          </a>
        ))}
      </div>

      <div className="credibilityBar" aria-label="Credibility highlights">
        {siteContent.hero.proofPoints.map((item) => (
          <span key={item} className="credibilityItem">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
