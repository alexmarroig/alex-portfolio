export default function HeroCard() {
  return (
    <article className="heroOpenLayout" aria-label="Intro hero section">
      <p className="heroIntroLine">Hey, I’m Alex de Freitas Marroig.</p>

      <h1 className="heroOpenTitle">
        <span>Technical Project</span>
        <span>Manager who</span>
        <span>
          <span className="heroBuildsGradient">builds</span>.
        </span>
      </h1>

      <p className="heroSubHeadline">Engineering rigor. Business acumen. Systems that scale.</p>

      <p className="heroPositioning">
        I operate at the intersection of business strategy and hands-on engineering. From industrial-scale project delivery to
        AI-driven automation, I structure complexity, solve deeply technical problems, and lead execution across regulated and
        high-stakes environments.
      </p>

      <div className="heroActions" aria-label="Primary calls to action">
        <a href="/alex-de-freitas-marroig-resume.pdf" className="btn btnPrimary">
          Download Resume (PDF)
        </a>
        <a href="mailto:alex.c.marroig@gmail.com" className="btn btnGhost">
          Start a Conversation
        </a>
      </div>

      <div className="heroScrollIndicator" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </article>
  );
}
