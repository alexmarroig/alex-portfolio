"use client";

import { useEffect, useState } from "react";
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
  | "dashboard"
  | "settings";

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
  loginLogs: { date: string; country: string; userAgent: string; visitorId: string }[];
  timeline: { date: string; pageviews: number; resumeDownloads: number; visitors: number }[];
};


const tabs: { key: TabKey; label: string }[] = [
  { key: "hero", label: "Hero" },
  { key: "about", label: "About" },
  { key: "focus", label: "Current Focus" },
  { key: "contract", label: "Contact + Hiring" },
  { key: "stack", label: "Stack" },
  { key: "credentials", label: "Certifications" },
  { key: "projects", label: "Featured Work" },
  { key: "theme", label: "Theme" },
  { key: "dashboard", label: "Dashboard" },
  { key: "settings", label: "Settings" }
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

export default function AdminClientPage() {
  const { content, updateContent, theme, setThemeValue, resetAll } = useSiteContent();
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

  const [newPassword, setNewPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");


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
      const response = await fetch("/api/admin/lab-analytics");
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

  async function handlePasswordChange() {
    setPasswordStatus("Alterando...");
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword })
      });
      const data = await res.json();
      if (data.ok) {
        setPasswordStatus("Senha alterada com sucesso!");
        setNewPassword("");
      } else {
        setPasswordStatus(`Erro: ${data.message}`);
      }
    } catch {
      setPasswordStatus("Erro ao conectar com o servidor.");
    }
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
              <p className="adminHint">Métricas de visualização e logs de acesso administrativo.</p>
              <button className="btn btnPrimary" onClick={loadAnalytics} disabled={analyticsLoading}>
                {analyticsLoading ? "Carregando..." : "Atualizar dashboard"}
              </button>
              {analyticsError ? <p className="adminError">{analyticsError}</p> : null}

              {analytics ? (
                <>
                  <div className="adminGrid">
                    <div className="glassPanel" style={{ padding: '15px' }}>
                      <h3>Pageviews</h3>
                      <p style={{ fontSize: '2rem' }}>{analytics.totals.pageviews}</p>
                    </div>
                    <div className="glassPanel" style={{ padding: '15px' }}>
                      <h3>Downloads</h3>
                      <p style={{ fontSize: '2rem' }}>{analytics.totals.resumeDownloads}</p>
                    </div>
                    <div className="glassPanel" style={{ padding: '15px' }}>
                      <h3>Visitantes</h3>
                      <p style={{ fontSize: '2rem' }}>{analytics.totals.uniqueVisitors}</p>
                    </div>
                  </div>

                  <div className="glassPanel" style={{ marginTop: '20px', padding: '15px' }}>
                    <h3>Logs de Acesso Admin</h3>
                    <ul className="adminProjectList">
                      {analytics.loginLogs.map((log, i) => (
                        <li key={i} className="adminProjectItem" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{log.date}</span>
                          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{log.userAgent.slice(0, 50)}...</span>
                          <span className="tag">{log.country}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="adminGrid" style={{ marginTop: '20px' }}>
                    <div>
                      <h3>Top páginas</h3>
                      <ul>{analytics.topPages.map((item) => <li key={`page-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                    <div>
                      <h3>Top países</h3>
                      <ul>{analytics.topCountries.map((item) => <li key={`country-${item.label}`}>{item.label}: {item.value}</li>)}</ul>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}

          {activeTab === "settings" ? (
            <>
              <h2>Configurações</h2>
              <div className="glassPanel" style={{ padding: '20px' }}>
                <h3>Alterar Senha Admin</h3>
                <label className="adminLabel">Nova Senha</label>
                <input
                  type="password"
                  className="adminInput"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  className="btn btnPrimary"
                  style={{ marginTop: '15px' }}
                  onClick={handlePasswordChange}
                  disabled={newPassword.length < 6}
                >
                  Salvar Nova Senha
                </button>
                {passwordStatus && <p style={{ marginTop: '10px' }}>{passwordStatus}</p>}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
