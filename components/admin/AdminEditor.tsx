"use client";

import { useState } from "react";
import type { SiteContent } from "@/src/data/content";
import { useSiteContent } from "@/src/data/siteContentContext";

type TabKey = "hero" | "focus" | "about" | "projects" | "theme";

const tabs: { key: TabKey; label: string }[] = [
  { key: "hero", label: "Hero" },
  { key: "focus", label: "Current Focus" },
  { key: "about", label: "About + Contract" },
  { key: "projects", label: "Projetos" },
  { key: "theme", label: "Tema" }
];

function reorder<T>(items: T[], from: number, to: number) {
  const copy = [...items];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

export default function AdminEditor() {
  const { content, updateContent, theme, setThemeValue, resetAll } = useSiteContent();
  const [activeTab, setActiveTab] = useState<TabKey>("hero");
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <section className="section simplePage glassPanel adminPage">
      <div className="adminHeaderRow">
        <div>
          <h1>Admin Studio</h1>
          <p>Editor estilo menu/abas para ajustar cada seção do site.</p>
        </div>
        <div className="adminHeaderActions">
          <button className="btn btnGhost" onClick={resetAll}>Resetar alterações locais</button>
          <button className="btn btnText" onClick={logout}>Sair</button>
        </div>
      </div>

      <div className="adminStudioLayout">
        <aside className="adminSidebar" aria-label="Admin sections">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`adminSidebarItem ${activeTab === tab.key ? "isActive" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        <div className="adminPanel">
          {activeTab === "hero" ? (
            <>
              <h2>Hero</h2>
              <label className="adminLabel">Introdução</label>
              <input className="adminInput" value={content.hero.intro} onChange={(event) => updateContent({ hero: { intro: event.target.value } })} />
              <label className="adminLabel">Headline</label>
              <textarea className="adminInput adminTextArea" value={content.hero.headline} onChange={(event) => updateContent({ hero: { headline: event.target.value } })} />
              <label className="adminLabel">Subheadline</label>
              <input className="adminInput" value={content.hero.subheadline} onChange={(event) => updateContent({ hero: { subheadline: event.target.value } })} />
              <label className="adminLabel">Parágrafo</label>
              <textarea className="adminInput adminTextArea" value={content.hero.paragraph} onChange={(event) => updateContent({ hero: { paragraph: event.target.value } })} />
            </>
          ) : null}

          {activeTab === "focus" ? (
            <>
              <h2>Current Focus</h2>
              <label className="adminLabel">Lead</label>
              <textarea className="adminInput adminTextArea" value={content.currentFocus.lead} onChange={(event) => updateContent({ currentFocus: { lead: event.target.value } })} />
              <label className="adminLabel">Main title</label>
              <input className="adminInput" value={content.currentFocus.main.title} onChange={(event) => updateContent({ currentFocus: { main: { ...content.currentFocus.main, title: event.target.value } } })} />
              <label className="adminLabel">Main summary</label>
              <textarea className="adminInput adminTextArea" value={content.currentFocus.main.summary} onChange={(event) => updateContent({ currentFocus: { main: { ...content.currentFocus.main, summary: event.target.value } } })} />
            </>
          ) : null}

          {activeTab === "about" ? (
            <>
              <h2>About + Contract</h2>
              <label className="adminLabel">About heading</label>
              <textarea className="adminInput adminTextArea" value={content.about.heading} onChange={(event) => updateContent({ about: { heading: event.target.value } })} />
              <label className="adminLabel">Contract title</label>
              <input className="adminInput" value={content.contract.title} onChange={(event) => updateContent({ contract: { title: event.target.value } })} />
              <label className="adminLabel">Contract lead</label>
              <textarea className="adminInput adminTextArea" value={content.contract.lead} onChange={(event) => updateContent({ contract: { lead: event.target.value } })} />
              <label className="adminLabel">Availability text</label>
              <input className="adminInput" value={content.contract.availability} onChange={(event) => updateContent({ contract: { availability: event.target.value } })} />
            </>
          ) : null}

          {activeTab === "projects" ? (
            <>
              <h2>Projetos (drag and drop)</h2>
              <p className="adminHint">Arraste para ordenar. Clique no título para editar no JSON futuramente.</p>
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
            </>
          ) : null}

          {activeTab === "theme" ? (
            <>
              <h2>Tema</h2>
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
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
