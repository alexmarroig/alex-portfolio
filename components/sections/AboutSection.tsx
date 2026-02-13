import RevealSection from "@/components/RevealSection";
import { siteContent } from "@/src/data/content";

export default function AboutSection() {
  return (
    <RevealSection className="section aboutSection" id="about" staggerChildren>
      <h2 className="sectionTitle aboutTitle">How I Think</h2>
      <p className="thoughtLine">{siteContent.about.heading}</p>
      {siteContent.about.paragraphs.map((paragraph) => (
        <p className="aboutBody" key={paragraph}>{paragraph}</p>
      ))}
    </RevealSection>
  );
}
