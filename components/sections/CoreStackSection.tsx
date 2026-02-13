import CoreStack from "@/components/CoreStack";
import RevealSection from "@/components/RevealSection";

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack">
      <h2 className="sectionTitle">Technology & Systems Stack</h2>
      <p className="sectionLead">Core technologies I use across product delivery, integrations, automation, and AI systems.</p>
      <CoreStack />
    </RevealSection>
  );
}
