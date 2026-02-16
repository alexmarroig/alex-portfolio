"use client";

import { useSiteContent } from "@/src/data/siteContentContext";

export default function HeroCard() {
  const { content } = useSiteContent();
  const { hero } = content;

  return (
    <article className="heroOpenLayout" aria-label="Intro hero section">
      <p className="heroIntroLine">
        {hero.intro}
      </p>

      <h1 className="heroOpenTitle">
        {hero.headline.includes("builds") ? (
          <>
            {hero.headline.split("builds")[0]}
            <span className="heroBuildsGradient">builds</span>
            {hero.headline.split("builds")[1]}
          </>
        ) : (
          hero.headline
        )}
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
