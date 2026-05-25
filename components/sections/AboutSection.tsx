"use client";

import RevealSection from "@/components/RevealSection";
import ScrollRevealText from "@/components/ScrollRevealText";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function AboutSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section aboutSection" id="about" staggerChildren>
      <h2 className="sectionTitle aboutTitle">How I Think</h2>
      <ScrollRevealText
        text={content.about.heading}
        className="thoughtLine"
        cinematic
        highlightWords={["build", "systems", "deliver", "ship", "products"]}
      />
      {content.about.paragraphs.map((paragraph, idx) => (
        <ScrollRevealText
          key={idx}
          text={paragraph}
          className="aboutBody"
          highlightWords={[
            "PMP",
            "PSM",
            "Six",
            "Sigma",
            "AI",
            "Inbenta",
            "Hypera",
            "B2B",
            "SaaS",
            "9+",
            "MVP",
            "LLMs",
            "FastAPI",
            "Python",
            "TypeScript",
            "React"
          ]}
        />
      ))}
    </RevealSection>
  );
}
