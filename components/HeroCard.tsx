import { siteContent } from "@/src/data/content";

export default function HeroCard() {
  const { hero } = siteContent;
"use client";

import { useSiteContent } from "@/src/data/siteContentContext";

export default function HeroCard() {
  const { content } = useSiteContent();
  const { hero } = content;

  return (
    <article className="heroOpenLayout" aria-label="Intro hero section">
      <p className="heroIntroLine">
        Hey, I’m <span>Alex</span> de Freitas Marroig
      </p>

      <h1 className="heroOpenTitle">
        Technical Project Manager who <span className="heroBuildsGradient">builds</span>, not just manages.
      </h1>

      <p className="heroSubline" aria-label="Core disciplines">
        {hero.subline.map((item, index) => (
          <span key={item}>
            {item}
            {index < hero.subline.length - 1 ? " • " : ""}
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

      <p className="heroPositioning">{hero.paragraph}</p>
      <p className="humanLine">{hero.humanLine}</p>

      <div className="heroActions" aria-label="Primary calls to action">
        <a href="#work" className="btn btnPrimary">View Selected Work</a>
        <a href="/alex-de-freitas-marroig-resume.pdf" className="btn btnGhost">Download Resume</a>
        <a href="/contact" className="btn btnText">Let&apos;s Talk</a>
      </div>

      <a href="#capability-grid" className="heroScrollIndicator" aria-label="Scroll to capability grid">
        <span>SCROLL</span>
        <i>⌄</i>
        {hero.ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            data-analytics={cta.href.includes("resume-download") ? "resume-download" : undefined}
            className={`btn ${cta.variant === "primary" ? "btnPrimary" : cta.variant === "secondary" ? "btnGhost" : "btnText"}`}
          >
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
