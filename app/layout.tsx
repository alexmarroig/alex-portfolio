import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/Container";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Marroig — AI Product Manager | Technical PM | AI-Driven SaaS",
  description:
    "AI Product Manager | Technical PM | AI-Driven SaaS — building and scaling complex products across B2B SaaS and enterprise environments."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="siteBody">
        <Nav />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
