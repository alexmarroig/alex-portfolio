import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import SiteLayout from '@/components/site-layout';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  'http://localhost:3000';

const metadataBase = URL.canParse(siteUrl)
  ? new URL(siteUrl)
  : new URL('http://localhost:3000');

const siteTitle = 'Alex Portfolio';
const siteDescription =
  'Portfolio of apps, case studies, and product experiments.';

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteTitle,
    template: '%s | Alex Portfolio',
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
