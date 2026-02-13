import CoreStack from "@/components/CoreStack";
import RevealSection from "@/components/RevealSection";

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack">
      <h2 className="sectionTitle">Core Stack</h2>
      <p className="sectionLead">Frontend, automation, and delivery tooling I rely on to build dependable systems.</p>
      <CoreStack />
    </RevealSection>
  );
}
