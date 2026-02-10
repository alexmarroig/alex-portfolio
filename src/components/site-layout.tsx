import Link from 'next/link';
import { ReactNode } from 'react';
import CommandPalette from '@/components/command-palette';
import { navItems } from '@/lib/navigation';

export default function SiteLayout({ children }: { children: ReactNode }) {
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
          <CommandPalette />
        </div>
      </header>

      <main className="shell py-12">{children}</main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted">
        <div className="shell">Built with Next.js. Focused on clean product engineering.</div>
      </footer>
    </div>
  );
}
