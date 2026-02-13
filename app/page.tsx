import AboutSection from "@/components/sections/AboutSection";
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
      <CoreStackSection />
      <CredentialsSection />
      <SelectedWorkSection />
      <AboutSection />
      <ContractSection />
    </>
  );
}
