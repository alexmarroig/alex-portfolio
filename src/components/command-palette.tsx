'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '@/lib/navigation';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCmdK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
      if (isCmdK) {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return navItems;
    return navItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md border border-border px-2.5 py-1 text-xs text-zinc-300 hover:border-zinc-500"
      >
        Ctrl+K
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-24" onClick={() => setOpen(false)}>
      <div
        className="w-full max-w-lg rounded-xl border border-border bg-zinc-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-border p-3">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
            placeholder="Search pages..."
            className="w-full rounded-md border border-border bg-zinc-950 px-3 py-2 text-sm outline-none ring-accent focus:ring-1"
          />
        </div>
        <ul className="max-h-80 overflow-auto p-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-zinc-100 hover:bg-zinc-800"
                >
                  {item.label}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-3 py-4 text-sm text-muted">No matching routes.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
