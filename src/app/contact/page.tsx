const contactLinks = {
  email: 'alex@example.com',
  linkedin: 'https://www.linkedin.com/in/alex',
  github: 'https://github.com/alex',
};

export default function ContactPage() {
  return (
    <section className="space-y-5">
      <h1 className="section-title">Contact</h1>

      <div className="card space-y-4 border border-zinc-800 bg-zinc-900/60 p-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-zinc-400">Disponível para oportunidades</p>
          <h2 className="text-xl font-semibold text-zinc-100">Vamos conversar</h2>
          <p className="max-w-2xl text-sm text-zinc-300">
            Aberto a colaborações em produtos digitais, freelas estratégicos e posições full-time remotas.
          </p>
        </div>

        <a
          href={`mailto:${contactLinks.email}`}
          className="inline-flex w-fit items-center rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-zinc-500 hover:text-white"
        >
          Vamos conversar
        </a>
      </div>

      <div className="card space-y-3 text-sm text-zinc-200">
        <p>
          Email:{' '}
          <a
            href={`mailto:${contactLinks.email}`}
            className="text-zinc-100 underline decoration-zinc-500 underline-offset-4 hover:decoration-zinc-300"
          >
            {contactLinks.email}
          </a>
        </p>
        <p>
          LinkedIn:{' '}
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-100 underline decoration-zinc-500 underline-offset-4 hover:decoration-zinc-300"
          >
            linkedin.com/in/alex
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-100 underline decoration-zinc-500 underline-offset-4 hover:decoration-zinc-300"
          >
            github.com/alex
          </a>
        </p>
        <p className="text-zinc-400">
          Tempo médio de resposta: até 24 horas úteis. Para facilitar, envie contexto do projeto, escopo e prazo.
        </p>
      </div>
    </section>
  );
}
