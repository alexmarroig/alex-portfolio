import CoreStack from "@/components/CoreStack";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack">
      <SectionHeader title="Technical Stack" lead="Execution tooling across engineering delivery, cloud systems, and automation architecture." />
      <CoreStack />
    </RevealSection>
  );
}
