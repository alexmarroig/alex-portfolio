import Link from 'next/link';

import { appCards } from '@/data/apps';
import { caseStudies } from '@/data/cases';

const liveAppsCount = appCards.filter((app) => app.status === 'Live').length;

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Product Engineer</p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-zinc-100 sm:text-5xl">
          Eu crio produtos web que destravam crescimento e eficiência operacional.
        </h1>
        <p className="max-w-2xl text-zinc-300">
          Stack principal: Next.js, TypeScript e arquitetura orientada a produto para transformar problemas
          complexos em entregas claras, rápidas e mensuráveis.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/cases"
            className="rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-white"
          >
            Ver cases
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-zinc-400"
          >
            Entrar em contato
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-sm text-muted">Cases publicados</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{caseStudies.length}</p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-sm text-muted">Apps no portfólio</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{appCards.length}</p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <p className="text-sm text-muted">Produtos live</p>
          <p className="mt-2 text-2xl font-semibold text-zinc-100">{liveAppsCount}</p>
        </div>
      </div>
    </section>
  );
}
