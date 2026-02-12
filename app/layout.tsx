import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/Container";
import FloatingTalk from "@/components/FloatingTalk";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex de Freitas Marroig — Technical PM | Systems Integrator | QA-minded Builder",
  description:
    "Technical Project Manager (PMP, PSM-I) with 10+ years delivering AI onboarding, systems integration, QA-led execution, and enterprise digital transformation across regulated industries."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="siteBody">
        <LoadingOverlay />
        <Nav />
        <Container>{children}</Container>
        <Footer />
        <FloatingTalk />
      </body>
    </html>
  );
}
