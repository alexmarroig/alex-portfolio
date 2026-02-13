import CoreStack from "@/components/CoreStack";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack">
      <SectionHeader title="Technology & Systems Stack" lead="The platforms and tools I use to bridge project leadership and implementation depth." />
      <CoreStack />
    </RevealSection>
  );
}
