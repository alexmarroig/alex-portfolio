import ScrollRevealText from "@/components/ScrollRevealText";
import RevealSection from "@/components/RevealSection";

export default function AboutSection() {
  return (
    <RevealSection className="section aboutSection" id="about" staggerChildren>
      <h2 className="sectionTitle aboutTitle">How I Think</h2>
      <ScrollRevealText
        className="thoughtLine thoughtLineCinematic"
        text="I combine strategic delivery leadership with hands-on engineering to make critical systems work in the field."
        highlightWords={["strategic", "hands-on", "critical"]}
        cinematic
      />
      <p className="aboutQuote">
        “I&apos;m the Technical PM who writes code and makes systems work in the field, not just the lab.”
      </p>
      <p className="aboutBody">
        I operate at the seam between business and engineering—translating ambiguity into plans, architecture, and measurable
        execution. I&apos;ve led mission-critical programs across aerospace test operations, enterprise AI onboarding, and
        regulated pharma delivery.
      </p>
      <p className="aboutBody">
        My background includes portfolio-level ownership across large programs, M&A due diligence and integration support,
        and cross-industry system integration in pharma, manufacturing, tech, and energy environments.
      </p>
      <p className="aboutBody">
        QA is core to how I build: clear acceptance criteria, practical instrumentation, release gates, and post-launch
        validation. That discipline keeps teams fast without sacrificing reliability.
      </p>
    </RevealSection>
  );
}
