import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/Container";
import FloatingTalk from "@/components/FloatingTalk";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Marroig — Technical PM | Systems Integrator | QA-minded Builder",
  description:
    "Technical Project Manager with 10+ years delivering systems integration, QA-led product delivery, and automation programs across regulated and industrial environments."
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
