import HeroCard from "@/components/HeroCard";
import RevealSection from "@/components/RevealSection";
import CapabilityGridSection from "@/components/sections/CapabilityGridSection";

export default function HeroSection() {
  return (
    <>
      <RevealSection className="section heroSection">
        <HeroCard />
      </RevealSection>
      <CapabilityGridSection />
    </>
  );
}
