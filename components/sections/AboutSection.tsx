import ScrollRevealText from "@/components/ScrollRevealText";
import RevealSection from "@/components/RevealSection";

export default function AboutSection() {
  return (
    <RevealSection className="section aboutSection" id="about" staggerChildren>
      <h2 className="sectionTitle aboutTitle">How I Think</h2>
      <ScrollRevealText
        className="thoughtLine thoughtLineCinematic"
        text="I build systems that are ambitious in vision and disciplined in execution."
        highlightWords={["ambitious", "disciplined"]}
        cinematic
      />
      <p className="aboutQuote">
        “I am the Technical PM you call when AI has to work in production, not only in a notebook demo.”
      </p>
      <p className="aboutBody">
        I lead AI customer-service onboarding from discovery through delivery and QA, orchestrating product,
        engineering, and linguistic teams while staying hands-on with integrations and release quality.
      </p>
      <p className="aboutBody">
        Highlights include 30+ projects delivered, 10+ digital initiatives supported, and a post-M&A pharma
        integration involving factory migration, 200+ people transition, and 30+ regulated systems deployment.
      </p>
    </RevealSection>
  );
}
