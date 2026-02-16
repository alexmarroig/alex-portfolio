"use client";

import RevealSection from "@/components/RevealSection";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function AboutSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section aboutSection" id="about" staggerChildren>
      <h2 className="sectionTitle aboutTitle">How I Think</h2>
      <p className="thoughtLine">{content.about.heading}</p>
      {content.about.paragraphs.map((paragraph) => (
        <p className="aboutBody" key={paragraph}>{paragraph}</p>
      ))}
    </RevealSection>
  );
}
