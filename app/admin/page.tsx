"use client";

import { useMemo, useState } from "react";
import type { SiteContent } from "@/src/data/content";
import { useSiteContent } from "@/src/data/siteContentContext";

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "mudar-essa-chave";

function reorder<T>(items: T[], from: number, to: number) {
  const copy = [...items];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

export default function AdminPage() {
  const { content, updateContent, theme, setThemeValue, resetAll } = useSiteContent();
  const [inputKey, setInputKey] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const unlockedByQuery = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("key") === ADMIN_SECRET;
  }, []);

  const canAccess = unlocked || unlockedByQuery;

  const lockError = inputKey.length > 0 && inputKey !== ADMIN_SECRET;

  if (!canAccess) {
    return (
      <section className="section simplePage glassPanel adminPage">
        <h1>Admin Lab (private)</h1>
        <p>Área privada para editar o site sem mexer em código.</p>
        <p>Dica: defina <code>NEXT_PUBLIC_ADMIN_KEY</code> no ambiente para proteger este painel.</p>

        <label className="adminLabel" htmlFor="adminKey">Chave de acesso</label>
        <input
          id="adminKey"
          className="adminInput"
          type="password"
          value={inputKey}
          onChange={(event) => setInputKey(event.target.value)}
          placeholder="Digite sua chave"
        />
        {lockError ? <p className="adminError">Chave inválida.</p> : null}
        <button className="btn btnPrimary" onClick={() => setUnlocked(inputKey === ADMIN_SECRET)}>
          Entrar
        </button>
      </section>
    );
  }

  return (
    <section className="section simplePage glassPanel adminPage">
      <h1>Admin Lab</h1>
      <p>Edite textos, cores e a ordem dos projetos com preview imediato.</p>

      <div className="adminGrid">
        <div>
          <h2>Hero</h2>
          <label className="adminLabel">Título</label>
          <textarea
            className="adminInput adminTextArea"
            value={content.hero.headline}
            onChange={(event) => updateContent({ hero: { headline: event.target.value } })}
          />

          <label className="adminLabel">Subtítulo</label>
          <input
            className="adminInput"
            value={content.hero.subheadline}
            onChange={(event) => updateContent({ hero: { subheadline: event.target.value } })}
          />

          <label className="adminLabel">Parágrafo</label>
          <textarea
            className="adminInput adminTextArea"
            value={content.hero.paragraph}
            onChange={(event) => updateContent({ hero: { paragraph: event.target.value } })}
          />
        </div>

        <div>
          <h2>About + Contact</h2>
          <label className="adminLabel">Heading (How I Think)</label>
          <textarea
            className="adminInput adminTextArea"
            value={content.about.heading}
            onChange={(event) => updateContent({ about: { heading: event.target.value } })}
          />

          <label className="adminLabel">Frase de contratação</label>
          <textarea
            className="adminInput adminTextArea"
            value={content.contract.lead}
            onChange={(event) => updateContent({ contract: { lead: event.target.value } })}
          />

          <label className="adminLabel">Texto de disponibilidade</label>
          <input
            className="adminInput"
            value={content.contract.availability}
            onChange={(event) => updateContent({ contract: { availability: event.target.value } })}
          />
        </div>
      </div>

      <div>
        <h2>Projetos (drag and drop)</h2>
        <p className="adminHint">Arraste para reorganizar a ordem em “Featured Work”.</p>
        <ul className="adminProjectList">
          {content.projects.map((project, index) => (
            <li
              key={`${project.title}-${index}`}
              draggable
              onDragStart={() => setDragIndex(index)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => {
                if (dragIndex === null || dragIndex === index) return;
                updateContent({ projects: reorder(content.projects, dragIndex, index) as SiteContent["projects"] });
                setDragIndex(null);
              }}
              className="adminProjectItem"
            >
              <span>{index + 1}. {project.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Theme</h2>
        <div className="adminThemeGrid">
          {([
            ["accent", "Accent"],
            ["accent2", "Accent 2"],
            ["bg", "Background"],
            ["bg2", "Background 2"],
            ["text", "Text"]
          ] as const).map(([key, label]) => (
            <label key={key} className="adminColorRow">
              <span>{label}</span>
              <input type="color" value={theme[key]} onChange={(event) => setThemeValue(key, event.target.value)} />
            </label>
          ))}
        </div>
      </div>

      <button className="btn btnGhost" onClick={resetAll}>Resetar tudo</button>
    </section>
  );
}
