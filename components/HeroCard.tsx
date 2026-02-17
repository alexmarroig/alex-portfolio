import { siteContent } from "@/src/data/content";

export default function HeroCard() {
  const { hero } = siteContent;

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
      </a>
    </article>
  );
}
