import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Container from "@/components/Container";
import FloatingTalk from "@/components/FloatingTalk";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Alex Marroig — AI Product Manager | Technical PM | AI-Driven SaaS",
  description:
    "AI Product Manager | Technical PM | AI-Driven SaaS — building and scaling complex products across B2B SaaS and enterprise environments."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
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
