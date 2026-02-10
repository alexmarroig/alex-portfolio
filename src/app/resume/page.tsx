export default function ResumePage() {
  return (
    <section className="space-y-5">
      <h1 className="section-title">Resume</h1>

      <div className="card space-y-3">
        <h2 className="text-lg font-semibold">Resumo</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300 marker:text-zinc-500">
          <li>Desenvolvedor full-stack com foco em produtos web rápidos e acessíveis.</li>
          <li>+5 anos entregando aplicações com React, TypeScript e Node.js.</li>
          <li>Média de 30% de redução no tempo de entrega com automação e padrões reutilizáveis.</li>
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="text-lg font-semibold">Experiência</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300 marker:text-zinc-500">
          <li>
            Tech Company • Senior Frontend Engineer — liderou migração para App Router com ganho de
            22% no Lighthouse.
          </li>
          <li>
            Startup SaaS • Full-stack Developer — implementou dashboard analítico usado por 5k+
            usuários/mês.
          </li>
          <li>Consultoria • Developer — entregou 12 projetos com taxa de satisfação acima de 95%.</li>
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="text-lg font-semibold">Skills</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300 marker:text-zinc-500">
          <li>Frontend: React, Next.js, TypeScript, Tailwind CSS.</li>
          <li>Backend: Node.js, APIs REST, PostgreSQL, Prisma.</li>
          <li>Qualidade: testes automatizados, CI/CD, monitoramento e observabilidade.</li>
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="text-lg font-semibold">Resultados</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300 marker:text-zinc-500">
          <li>Aumento de conversão em 18% após otimização de fluxo de cadastro.</li>
          <li>Redução de erros em produção em 40% com cobertura de testes e linting robusto.</li>
          <li>Economia de ~10h/semana por time com melhorias no pipeline de deploy.</li>
        </ul>
      </div>

      <div className="card">
        <a
          href="/files/cv-placeholder.pdf"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100 underline underline-offset-4 hover:text-white"
          download
        >
          Download CV (placeholder)
        </a>
      </div>
    </section>
  );
}
