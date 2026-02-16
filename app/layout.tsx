import type { Metadata } from "next";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import Container from "@/components/Container";
import FloatingTalk from "@/components/FloatingTalk";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import { SiteContentProvider } from "@/src/data/siteContentContext";
import "./globals.css";

const siteUrl = "https://alexmarroig.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alex Marroig — Technical PM | Systems Integrator | QA-minded Builder",
  description:
    "Technical Project Manager with 10+ years delivering systems integration, QA-led product delivery, and automation programs across regulated and industrial environments.",
  keywords: [
    "Technical Project Manager",
    "Systems Integrator",
    "QA Automation",
    "Delivery Architecture",
    "M&A integration",
    "Alex Marroig"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Alex Marroig — Technical PM Portfolio",
    description:
      "Technical PM focused on integration, quality, architecture, and practical delivery across enterprise programs.",
    url: siteUrl,
    siteName: "Alex Marroig Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Marroig — Technical PM Portfolio",
    description:
      "Systems integrator and QA-minded builder delivering high-impact technical programs."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex de Freitas Marroig",
  jobTitle: "Technical Project Manager",
  url: siteUrl,
  email: "mailto:alex.c.marroig@gmail.com",
  sameAs: ["https://www.linkedin.com/in/alexmarroig/", "https://github.com/alexmarroig"],
  knowsAbout: [
    "Systems Integration",
    "QA Automation",
    "Program Delivery",
    "Solution Architecture",
    "M&A Technical Due Diligence"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alex Marroig Portfolio",
  url: siteUrl,
  inLanguage: "en",
  publisher: {
    "@type": "Person",
    name: "Alex de Freitas Marroig"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="siteBody">
        <SiteContentProvider>
          <LoadingOverlay />
          <Nav />
          <Container>{children}</Container>
          <Footer />
          <FloatingTalk />
        </SiteContentProvider>
      </body>
    </html>
  );
}
