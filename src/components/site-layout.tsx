'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import CommandPalette from '@/components/command-palette';
import { navItems } from '@/lib/navigation';

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100">
            Alex Portfolio
          </Link>

          <nav className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-zinc-100">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-border p-2 text-zinc-300 transition hover:text-zinc-100 md:hidden"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <span className="sr-only">Menu</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>

            <CommandPalette />
          </div>
        </div>

        {isMobileMenuOpen ? (
          <nav id="mobile-navigation" className="border-t border-border bg-background md:hidden">
            <div className="shell flex flex-col py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-sm text-zinc-300 hover:text-zinc-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main className="shell py-12">{children}</main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        <div className="shell">Built with Next.js. Focused on clean product engineering.</div>
      </footer>
    </div>
  );
}
