import AboutSection from "@/components/sections/AboutSection";
import CompaniesMarqueeSection from "@/components/sections/CompaniesMarqueeSection";
import ContractSection from "@/components/sections/ContractSection";
import CoreStackSection from "@/components/sections/CoreStackSection";
import CurrentFocusSection from "@/components/sections/CurrentFocusSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CurrentFocusSection />
      <CompaniesMarqueeSection />
      <CoreStackSection />
      <CredentialsSection />
      <SelectedWorkSection />
      <AboutSection />
      <ContractSection />
    </>
  );
}
