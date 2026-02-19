"use client";

import { useEffect, useMemo, useState } from "react";
import type { SiteContent } from "@/src/data/content";
import { useSiteContent } from "@/src/data/siteContentContext";

type TabKey =
  | "hero"
  | "about"
  | "focus"
  | "contract"
  | "stack"
  | "credentials"
  | "projects"
  | "theme"
  | "dashboard";

type AnalyticsEntry = { label: string; value: number };

type AnalyticsSummary = {
  totals: {
    events: number;
    pageviews: number;
    resumeDownloads: number;
    uniqueVisitors: number;
  };
  topPages: AnalyticsEntry[];
  topReferrers: AnalyticsEntry[];
  topSources: AnalyticsEntry[];
  topCountries: AnalyticsEntry[];
  topKeywords: AnalyticsEntry[];
  llmAgents: AnalyticsEntry[];
  timeline: { date: string; pageviews: number; resumeDownloads: number; visitors: number }[];
};

const ADMIN_SECRET = process.env.NEXT_PUBLIC_ADMIN_KEY ?? "Bianco256";

const tabs: { key: TabKey; label: string }[] = [
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "focus", label: "Current Focus" },
  { key: "contract", label: "Contact + Hiring" },
  { key: "stack", label: "Stack" },
  { key: "credentials", label: "Certifications" },
  { key: "projects", label: "Featured Work" },
  { key: "theme", label: "Theme" },
  { key: "dashboard", label: "Dashboard" }
];

function reorder<T>(items: T[], from: number, to: number) {
  const copy = [...items];
  const [item] = copy.splice(from, 1);
  copy.splice(to, 0, item);
  return copy;
}

function prettyJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}

export default function AdminPage() {
  const { content, updateContent, theme, setThemeValue, resetAll } = useSiteContent();
  const [inputKey, setInputKey] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("hero");
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const [aboutParagraphsInput, setAboutParagraphsInput] = useState(prettyJson(content.about.paragraphs));
  const [focusTagsInput, setFocusTagsInput] = useState(prettyJson(content.currentFocus.main.tags));
  const [focusSupportingInput, setFocusSupportingInput] = useState(prettyJson(content.currentFocus.supporting));
  const [contractAreasInput, setContractAreasInput] = useState(prettyJson(content.contract.areas));
  const [stackInput, setStackInput] = useState(prettyJson(content.stackCategories));
  const [certificationsInput, setCertificationsInput] = useState(prettyJson(content.certifications.map((item) => ({ title: item.title, issuer: item.issuer, year: item.year }))));
  const [awardsInput, setAwardsInput] = useState(prettyJson(content.awards));

  const [jsonError, setJsonError] = useState<string>("");

  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [analyticsError, setAnalyticsError] = useState("");
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  const unlockedByQuery = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("key") === ADMIN_SECRET;
  }, []);

  const canAccess = unlocked || unlockedByQuery;
  const lockError = inputKey.length > 0 && inputKey !== ADMIN_SECRET;

  useEffect(() => {
    setAboutParagraphsInput(prettyJson(content.about.paragraphs));
    setFocusTagsInput(prettyJson(content.currentFocus.main.tags));
    setFocusSupportingInput(prettyJson(content.currentFocus.supporting));
    setContractAreasInput(prettyJson(content.contract.areas));
    setStackInput(prettyJson(content.stackCategories));
    setCertificationsInput(prettyJson(content.certifications.map((item) => ({ title: item.title, issuer: item.issuer, year: item.year }))));
    setAwardsInput(prettyJson(content.awards));
  }, [content]);

  async function loadAnalytics() {
    setAnalyticsLoading(true);
    setAnalyticsError("");

    try {
      const response = await fetch(`/api/admin/lab-analytics?key=${encodeURIComponent(ADMIN_SECRET)}`);
      const payload = (await response.json()) as { ok: boolean; analytics?: AnalyticsSummary; message?: string };

      if (!response.ok || !payload.ok || !payload.analytics) {
        throw new Error(payload.message ?? "Não foi possível carregar analytics.");
      }

      setAnalytics(payload.analytics);
    } catch (error) {
      setAnalytics(null);
      setAnalyticsError(error instanceof Error ? error.message : "Falha ao carregar analytics.");
    } finally {
      setAnalyticsLoading(false);
    }
  }

  function applyJsonUpdate(label: string, callback: () => void) {
    try {
      callback();
      setJsonError("");
    } catch {
      setJsonError(`JSON inválido em: ${label}.`);
    }
  }

  if (!canAccess) {
    return (
      <section className="section simplePage glassPanel adminPage">
        <h1>Admin Lab (private)</h1>
        <p>Área privada para editar todo o site sem mexer em código.</p>
        <p>
          Chave padrão atual: <code>Bianco256</code>. Recomendado: definir <code>NEXT_PUBLIC_ADMIN_KEY</code> no ambiente.
        </p>

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
      <div className="adminHeaderRow">
        <div>
          <h1>Admin Lab</h1>
          <p>Editor completo por abas + dashboard de audiência.</p>
        </div>
        <div className="adminHeaderActions">
          <button className="btn btnGhost" onClick={resetAll}>Resetar alterações locais</button>
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
          {jsonError ? <p className="adminError">{jsonError}</p> : null}

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

          {activeTab === "about" ? (
            <>
              <h2>About</h2>
              <label className="adminLabel">Heading</label>
              <textarea className="adminInput adminTextArea" value={content.about.heading} onChange={(event) => updateContent({ about: { heading: event.target.value } })} />
              <label className="adminLabel">Parágrafos (JSON string[])</label>
              <textarea className="adminInput adminTextArea" value={aboutParagraphsInput} onChange={(event) => setAboutParagraphsInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("About.paragraphs", () => {
                  const parsed = JSON.parse(aboutParagraphsInput) as string[];
                  if (!Array.isArray(parsed)) throw new Error();
                  updateContent({ about: { paragraphs: parsed } });
                })}
              >
                Salvar parágrafos
              </button>
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
              <label className="adminLabel">Main tags (JSON string[])</label>
              <textarea className="adminInput adminTextArea" value={focusTagsInput} onChange={(event) => setFocusTagsInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("CurrentFocus.main.tags", () => {
                  const parsed = JSON.parse(focusTagsInput) as string[];
                  if (!Array.isArray(parsed)) throw new Error();
                  updateContent({ currentFocus: { main: { ...content.currentFocus.main, tags: parsed } } });
                })}
              >
                Salvar tags do bloco principal
              </button>

              <label className="adminLabel">Cards secundários (JSON)</label>
              <textarea className="adminInput adminTextArea" value={focusSupportingInput} onChange={(event) => setFocusSupportingInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("CurrentFocus.supporting", () => {
                  const parsed = JSON.parse(focusSupportingInput) as SiteContent["currentFocus"]["supporting"];
                  if (!Array.isArray(parsed)) throw new Error();
                  updateContent({ currentFocus: { supporting: parsed } });
                })}
              >
                Salvar cards secundários
              </button>
            </>
          ) : null}

          {activeTab === "contract" ? (
            <>
              <h2>Contact + Hiring</h2>
              <label className="adminLabel">Availability</label>
              <input className="adminInput" value={content.contract.availability} onChange={(event) => updateContent({ contract: { availability: event.target.value } })} />
              <label className="adminLabel">Título</label>
              <input className="adminInput" value={content.contract.title} onChange={(event) => updateContent({ contract: { title: event.target.value } })} />
              <label className="adminLabel">Lead</label>
              <textarea className="adminInput adminTextArea" value={content.contract.lead} onChange={(event) => updateContent({ contract: { lead: event.target.value } })} />
              <label className="adminLabel">CTA label</label>
              <input className="adminInput" value={content.contract.ctaLabel} onChange={(event) => updateContent({ contract: { ctaLabel: event.target.value } })} />
              <label className="adminLabel">Nota</label>
              <input className="adminInput" value={content.contract.note} onChange={(event) => updateContent({ contract: { note: event.target.value } })} />
              <label className="adminLabel">Subtítulo</label>
              <input className="adminInput" value={content.contract.subTitle} onChange={(event) => updateContent({ contract: { subTitle: event.target.value } })} />
              <label className="adminLabel">Áreas (JSON string[])</label>
              <textarea className="adminInput adminTextArea" value={contractAreasInput} onChange={(event) => setContractAreasInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("Contract.areas", () => {
                  const parsed = JSON.parse(contractAreasInput) as string[];
                  if (!Array.isArray(parsed)) throw new Error();
                  updateContent({ contract: { areas: parsed } });
                })}
              >
                Salvar áreas
              </button>
            </>
          ) : null}

          {activeTab === "stack" ? (
            <>
              <h2>Technology & Systems Stack</h2>
              <p className="adminHint">Edite categorias e itens via JSON.</p>
              <label className="adminLabel">Stack categories (JSON)</label>
              <textarea className="adminInput adminTextArea" value={stackInput} onChange={(event) => setStackInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("stackCategories", () => {
                  const parsed = JSON.parse(stackInput) as SiteContent["stackCategories"];
                  if (!Array.isArray(parsed)) throw new Error();
                  updateContent({ stackCategories: parsed });
                })}
              >
                Salvar stack
              </button>
            </>
          ) : null}

          {activeTab === "credentials" ? (
            <>
              <h2>Certifications & Awards</h2>
              <label className="adminLabel">Certificações (JSON)</label>
              <textarea className="adminInput adminTextArea" value={certificationsInput} onChange={(event) => setCertificationsInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("certifications", () => {
                  const parsed = JSON.parse(certificationsInput) as { title: string; issuer: string; year: string }[];
                  if (!Array.isArray(parsed)) throw new Error();
                  const next = parsed.map((item, index) => ({
                    ...content.certifications[index],
                    ...item
                  }));
                  updateContent({ certifications: next as SiteContent["certifications"] });
                })}
              >
                Salvar certificações
              </button>

              <label className="adminLabel">Awards (JSON string[])</label>
              <textarea className="adminInput adminTextArea" value={awardsInput} onChange={(event) => setAwardsInput(event.target.value)} />
              <button
                className="btn btnGhost"
                onClick={() => applyJsonUpdate("awards", () => {
                  const parsed = JSON.parse(awardsInput) as string[];
                  if (!Array.isArray(parsed)) throw new Error();
                  updateContent({ awards: parsed });
                })}
              >
                Salvar awards
              </button>
            </>
          ) : null}

          {activeTab === "projects" ? (
            <>
              <h2>Featured Work (drag and drop)</h2>
              <p className="adminHint">Arraste para reorganizar. Os cards seguem essa ordem na home.</p>
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
                    <small>{project.status}</small>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {activeTab === "theme" ? (
            <>
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
            </>
          ) : null}

          {activeTab === "dashboard" ? (
            <>
              <h2>Dashboard de audiência</h2>
              <p className="adminHint">Métricas de visualização: volume, origem, país, referrer e horários (timeline diária).</p>
              <button className="btn btnPrimary" onClick={loadAnalytics} disabled={analyticsLoading}>
                {analyticsLoading ? "Carregando..." : "Atualizar dashboard"}
              </button>
              {analyticsError ? <p className="adminError">{analyticsError}</p> : null}

              {analytics ? (
                <>
                  <div className="adminGrid">
                    <div>
                      <h3>Total de eventos</h3>
                      <p>{analytics.totals.events}</p>
                    </div>
                    <div>
                      <h3>Pageviews</h3>
                      <p>{analytics.totals.pageviews}</p>
                    </div>
                    <div>
                      <h3>Downloads de currículo</h3>
                      <p>{analytics.totals.resumeDownloads}</p>
                    </div>
                    <div>
                      <h3>Visitantes únicos</h3>
                      <p>{analytics.totals.uniqueVisitors}</p>
                    </div>
                  </div>

                  <div className="adminGrid">
                    <div>
                      <h3>Top páginas</h3>
                      <ul>{analytics.topPages.map((item) => <li key={`page-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Top países</h3>
                      <ul>{analytics.topCountries.map((item) => <li key={`country-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Top referrers</h3>
                      <ul>{analytics.topReferrers.map((item) => <li key={`ref-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Top fontes</h3>
                      <ul>{analytics.topSources.map((item) => <li key={`source-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                  </div>

                  <div className="adminGrid">
                    <div>
                      <h3>Keywords</h3>
                      <ul>{analytics.topKeywords.map((item) => <li key={`keyword-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Agentes LLM</h3>
                      <ul>{analytics.llmAgents.map((item) => <li key={`llm-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Timeline (14 dias)</h3>
                      <ul>
                        {analytics.timeline.map((row) => (
                          <li key={row.date}>{row.date} — views: {row.pageviews}, visitors: {row.visitors}, downloads: {row.resumeDownloads}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
