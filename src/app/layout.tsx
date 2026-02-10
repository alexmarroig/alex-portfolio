import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import SiteLayout from '@/components/site-layout';

export const metadata: Metadata = {
  title: 'Alex Portfolio',
  description: 'Portfolio of apps, case studies, and product experiments.',
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
