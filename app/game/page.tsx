"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSiteContent } from "@/src/data/siteContentContext";

type TerminalLine = {
  id: number;
  type: "input" | "output" | "system" | "error" | "accent";
  text: string;
};

const COMMANDS: Record<string, string> = {
  help: "Show available commands",
  projects: "List all active projects",
  "project <name>": "Deep dive into a specific project",
  skills: "Technical stack overview",
  focus: "What I'm building right now",
  experience: "Career highlights",
  contact: "How to reach me",
  hire: "Why you should hire me",
  "download cv": "Download my resume",
  clear: "Clear terminal",
};

const EASTER_EGGS = ["sudo hire alex", "hack", "matrix", "whoami", "ping"];

export default function TerminalGame() {
  const router = useRouter();
  const { content } = useSiteContent();
  const [lines, setLines] = useState<TerminalLine[]>(() => {
    const welcome: Omit<TerminalLine, "id">[] = [
      { type: "system", text: "╔══════════════════════════════════════════════════════════╗" },
      { type: "system", text: "║  NEURAL TERMINAL v6.0 — Alex Marroig's Portfolio CLI    ║" },
      { type: "system", text: "╚══════════════════════════════════════════════════════════╝" },
      { type: "output", text: "" },
      { type: "accent", text: "  Welcome, visitor. Type 'help' to see available commands." },
      { type: "output", text: "  Explore my projects, skills, and experience interactively." },
      { type: "output", text: "" },
      { type: "system", text: "  Quick start: projects | skills | hire | focus" },
      { type: "output", text: "" },
    ];
    return welcome.map((l, i) => ({ ...l, id: i + 1 }));
  });
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(10);

  const nextId = () => ++idRef.current;

  const addLines = useCallback((newLines: Omit<TerminalLine, "id">[]) => {
    setLines((prev) => [...prev, ...newLines.map((l) => ({ ...l, id: nextId() }))]);
  }, []);

  const typeOutput = useCallback(
    (outputLines: Omit<TerminalLine, "id">[]) => {
      setLines((prev) => [
        ...prev,
        ...outputLines.map((l) => ({ ...l, id: nextId() })),
      ]);
    },
    []
  );


  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const getProjectByName = (name: string) => {
    const lower = name.toLowerCase();
    return content.projects.find(
      (p) =>
        p.title.toLowerCase() === lower ||
        p.title.toLowerCase().includes(lower) ||
        p.icon.toLowerCase() === lower
    );
  };

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    addLines([{ type: "input", text: `> ${cmd}` }]);
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (!trimmed) return;

    if (trimmed === "help") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: "┌─ AVAILABLE COMMANDS ─────────────────────────────" },
        { type: "output", text: "│" },
      ];
      Object.entries(COMMANDS).forEach(([cmd, desc]) => {
        out.push({ type: "output", text: `│  ${cmd.padEnd(18)} ${desc}` });
      });
      out.push({ type: "output", text: "│" });
      out.push({ type: "system", text: `│  Easter eggs: ${EASTER_EGGS.join(", ")}` });
      out.push({ type: "output", text: "└──────────────────────────────────────────────────" });
      typeOutput(out);
      return;
    }

    if (trimmed === "projects") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: `┌─ PROJECT ARCHIVE (${content.projects.length} projects) ──────────────` },
        { type: "output", text: "│" },
      ];
      content.projects.forEach((p) => {
        const statusColor = p.status === "SHIPPING" ? "●" : p.status === "BUILDING" ? "◐" : p.status === "MVP" ? "◑" : "○";
        out.push({
          type: "output",
          text: `│  ${statusColor} ${p.title.padEnd(24)} [${p.status}]  ${p.subtitle}`,
        });
      });
      out.push({ type: "output", text: "│" });
      out.push({ type: "system", text: "│  Use 'project <name>' for details. e.g: project ethos" });
      out.push({ type: "output", text: "└──────────────────────────────────────────────────" });
      typeOutput(out);
      return;
    }

    if (trimmed.startsWith("project ")) {
      const name = cmd.trim().slice(8);
      const project = getProjectByName(name);
      if (!project) {
        addLines([{ type: "error", text: `  ERROR: Project "${name}" not found. Try 'projects' to see all.` }]);
        return;
      }
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: `┌─ ${project.title.toUpperCase()} ─────────────────────────────` },
        { type: "output", text: `│  Type:    ${project.subtitle}` },
        { type: "output", text: `│  Status:  ${project.status}` },
        { type: "output", text: "│" },
        { type: "output", text: `│  ${project.description}` },
        { type: "output", text: "│" },
        { type: "system", text: "│  TECH STACK:" },
        { type: "output", text: `│  ${project.stack.join(" · ")}` },
        { type: "output", text: "│" },
        { type: "system", text: "│  CASE STUDY:" },
        { type: "output", text: `│  Problem:  ${project.caseStudy.problem}` },
        { type: "output", text: `│  Solution: ${project.caseStudy.solution}` },
        { type: "accent", text: `│  Impact:   ${project.caseStudy.impact}` },
        { type: "output", text: "└──────────────────────────────────────────────────" },
      ];
      typeOutput(out);
      return;
    }

    if (trimmed === "skills") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: "┌─ TECHNICAL STACK ────────────────────────────────" },
        { type: "output", text: "│" },
      ];
      content.stackCategories.forEach((cat) => {
        out.push({ type: "system", text: `│  ▸ ${cat.category.toUpperCase()}` });
        cat.items.forEach((item) => {
          out.push({ type: "output", text: `│    ${item.name.padEnd(22)} ${item.note}` });
        });
        out.push({ type: "output", text: "│" });
      });
      out.push({ type: "output", text: "└──────────────────────────────────────────────────" });
      typeOutput(out);
      return;
    }

    if (trimmed === "focus") {
      const { main, supporting } = content.currentFocus;
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: "┌─ CURRENT FOCUS ──────────────────────────────────" },
        { type: "output", text: `│  ${content.currentFocus.lead}` },
        { type: "output", text: "│" },
        { type: "system", text: `│  ★ PRIMARY: ${main.title}` },
        { type: "output", text: `│    ${main.summary}` },
        { type: "output", text: `│    Tags: ${main.tags.join(", ")}` },
        { type: "output", text: "│" },
        { type: "system", text: "│  ALSO BUILDING:" },
      ];
      supporting.forEach((s) => {
        out.push({ type: "output", text: `│    ◐ ${s.title}` });
        out.push({ type: "output", text: `│      ${s.summary}` });
      });
      out.push({ type: "output", text: "└──────────────────────────────────────────────────" });
      typeOutput(out);
      return;
    }

    if (trimmed === "experience") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: "┌─ CAREER HIGHLIGHTS ──────────────────────────────" },
        { type: "output", text: "│" },
        { type: "system", text: "│  ▸ 9+ years in complex project management" },
        { type: "output", text: "│    Led 80+ projects: post-M&A, digital transformation, AI" },
        { type: "output", text: "│" },
        { type: "system", text: "│  ▸ AI Product & Technical Operations" },
        { type: "output", text: "│    Building LLM-powered products, RAG pipelines," },
        { type: "output", text: "│    autonomous agents, and full-stack AI applications" },
        { type: "output", text: "│" },
        { type: "system", text: "│  ▸ Full-Stack Engineering" },
        { type: "output", text: "│    TypeScript, Python, React, Next.js, FastAPI," },
        { type: "output", text: "│    PostgreSQL, Docker, Supabase, Vercel" },
        { type: "output", text: "│" },
        { type: "system", text: "│  ▸ Certifications" },
      ];
      content.certifications.forEach((cert) => {
        out.push({ type: "output", text: `│    ✓ ${cert.title} (${cert.issuer}, ${cert.year})` });
      });
      out.push({ type: "output", text: "│" });
      out.push({ type: "system", text: "│  ▸ Awards" });
      content.awards.forEach((award) => {
        out.push({ type: "output", text: `│    ★ ${award}` });
      });
      out.push({ type: "output", text: "└──────────────────────────────────────────────────" });
      typeOutput(out);
      return;
    }

    if (trimmed === "contact") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: "┌─ CONTACT ────────────────────────────────────────" },
        { type: "output", text: "│" },
        { type: "output", text: "│  Email:    alex.c.marroig@gmail.com" },
        { type: "output", text: "│  LinkedIn: linkedin.com/in/alexmarroig" },
        { type: "output", text: "│  GitHub:   github.com/alexmarroig" },
        { type: "output", text: "│" },
        { type: "system", text: "│  Status: Available for high-impact work" },
        { type: "output", text: "└──────────────────────────────────────────────────" },
      ];
      typeOutput(out);
      return;
    }

    if (trimmed === "hire") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "accent", text: "┌─ WHY HIRE ALEX ──────────────────────────────────" },
        { type: "output", text: "│" },
        { type: "system", text: "│  I don't just manage projects — I build the systems" },
        { type: "system", text: "│  that deliver them." },
        { type: "output", text: "│" },
        { type: "output", text: "│  ✦ 9+ years leading complex technical projects" },
        { type: "output", text: "│  ✦ 13 active products spanning AI, SaaS, and mobile" },
        { type: "output", text: "│  ✦ Full-stack builder: Python, TypeScript, React, FastAPI" },
        { type: "output", text: "│  ✦ AI-native: Whisper, LLMs, RAG, autonomous agents" },
        { type: "output", text: "│  ✦ Ships fast: from concept to production independently" },
        { type: "output", text: "│" },
        { type: "accent", text: "│  I bridge business strategy with deep technical execution." },
        { type: "accent", text: "│  Give me a complex problem and I'll architect the solution," },
        { type: "accent", text: "│  build the prototype, and lead the team to ship it." },
        { type: "output", text: "│" },
        { type: "system", text: "│  → Type 'contact' to start a conversation" },
        { type: "system", text: "│  → Type 'download cv' for the full resume" },
        { type: "output", text: "└──────────────────────────────────────────────────" },
      ];
      typeOutput(out);
      return;
    }

    if (trimmed === "download cv") {
      addLines([{ type: "system", text: "  Downloading resume..." }]);
      window.open("/alex_resume.pdf", "_blank");
      return;
    }

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    if (trimmed === "sudo hire alex") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "system", text: "  [sudo] password for recruiter: ********" },
        { type: "accent", text: "  ✓ HIRING PROCESS INITIATED" },
        { type: "accent", text: "  ✓ CANDIDATE APPROVED: Alex Marroig" },
        { type: "accent", text: "  ✓ DEPLOYING EXCELLENCE TO YOUR TEAM..." },
        { type: "output", text: "" },
        { type: "system", text: "  Just kidding. But seriously — let's talk: alex.c.marroig@gmail.com" },
      ];
      typeOutput(out);
      return;
    }

    if (trimmed === "hack") {
      const out: Omit<TerminalLine, "id">[] = [
        { type: "system", text: "  Accessing mainframe..." },
        { type: "system", text: "  Bypassing firewall [████████████████] 100%" },
        { type: "system", text: "  Decrypting talent database..." },
        { type: "accent", text: "  ACCESS GRANTED." },
        { type: "output", text: "" },
        { type: "accent", text: "  FOUND: 1 exceptional candidate matching all criteria." },
        { type: "output", text: "  Name: Alex Marroig | Threat Level: High Value" },
        { type: "output", text: "" },
        { type: "system", text: "  Recommendation: HIRE IMMEDIATELY" },
      ];
      typeOutput(out);
      return;
    }

    if (trimmed === "matrix") {
      const chars = "01アイウエオカキクケコ";
      const out: Omit<TerminalLine, "id">[] = [];
      for (let i = 0; i < 8; i++) {
        let line = "  ";
        for (let j = 0; j < 50; j++) {
          line += chars[Math.floor(Math.random() * chars.length)];
        }
        out.push({ type: "system", text: line });
      }
      out.push({ type: "output", text: "" });
      out.push({ type: "accent", text: "  Wake up, recruiter... The Matrix has you." });
      out.push({ type: "output", text: "  Follow the white rabbit → type 'hire'" });
      typeOutput(out);
      return;
    }

    if (trimmed === "whoami") {
      addLines([
        { type: "output", text: "  You are: RECRUITER (guest access)" },
        { type: "system", text: "  Permissions: READ_ALL | HIRE_CANDIDATE | DOWNLOAD_CV" },
      ]);
      return;
    }

    if (trimmed === "ping") {
      addLines([
        { type: "system", text: "  PING alex-marroig.dev (127.0.0.1) 56 bytes" },
        { type: "output", text: "  64 bytes: time=0.042ms — CANDIDATE IS RESPONSIVE" },
        { type: "accent", text: "  Status: Online and ready for opportunities" },
      ]);
      return;
    }

    if (trimmed === "exit" || trimmed === "quit") {
      addLines([{ type: "system", text: "  Returning to portfolio..." }]);
      setTimeout(() => router.push("/"), 800);
      return;
    }

    addLines([
      { type: "error", text: `  Command not found: '${cmd.trim()}'` },
      { type: "output", text: "  Type 'help' for available commands." },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processCommand(input);
    setInput("");
    setSuggestions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const allCmds = [...Object.keys(COMMANDS).map((c) => c.split(" ")[0]), ...EASTER_EGGS];
      const matches = allCmds.filter((c) => c.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
        setSuggestions([]);
      } else if (matches.length > 1) {
        setSuggestions(matches.slice(0, 5));
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="section simplePage terminalPage" onClick={handleContainerClick}>
      <div className="terminalShell">
        <div className="terminalChromeBar">
          <div className="chromeDots">
            <span className="chromeDot red" />
            <span className="chromeDot yellow" />
            <span className="chromeDot green" />
          </div>
          <div className="chromeTitle">alex@portfolio:~</div>
          <button className="chromeExit" onClick={() => router.push("/")}>
            EXIT
          </button>
        </div>

        <div className="terminalOutput" ref={scrollRef}>
          {lines.map((line) => (
            <div key={line.id} className={`termLine termLine-${line.type}`}>
              {line.text || " "}
            </div>
          ))}

          {suggestions.length > 0 && (
            <div className="termSuggestions">
              {suggestions.map((s) => (
                <span key={s} className="termSuggestion">{s}</span>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="termInputRow">
            <span className="termPrompt">{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="termInput"
              autoFocus
              spellCheck={false}
              autoComplete="off"
              placeholder="type a command..."
            />
          </form>
        </div>

        <div className="terminalStatusBar">
          <span>SESSION: ACTIVE</span>
          <span>COMMANDS: {history.length}</span>
          <span>NODE: MARROIG-AI</span>
          <span className="termStatusOnline">● ONLINE</span>
        </div>
      </div>

      <style jsx>{`
        .terminalPage {
          max-width: 960px;
          margin: 40px auto;
          padding: 0 20px;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .terminalShell {
          width: 100%;
          background: rgba(2, 4, 10, 0.98);
          border: 1px solid rgba(73, 241, 255, 0.3);
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.9),
            0 0 60px rgba(73, 241, 255, 0.08),
            inset 0 1px 0 rgba(73, 241, 255, 0.1);
          display: flex;
          flex-direction: column;
          height: min(700px, 80vh);
        }

        .terminalChromeBar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(8, 12, 24, 0.95);
          border-bottom: 1px solid rgba(73, 241, 255, 0.15);
          gap: 14px;
        }
        .chromeDots {
          display: flex;
          gap: 7px;
        }
        .chromeDot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }
        .chromeDot.red { background: #ff5f57; }
        .chromeDot.yellow { background: #ffbd2e; }
        .chromeDot.green { background: #28c840; }
        .chromeTitle {
          flex: 1;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(73, 241, 255, 0.7);
          letter-spacing: 0.05em;
        }
        .chromeExit {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 4px 12px;
          background: rgba(255, 62, 166, 0.1);
          border: 1px solid rgba(255, 62, 166, 0.3);
          border-radius: 4px;
          color: #ff3ea6;
          cursor: pointer;
          letter-spacing: 0.1em;
          transition: all 0.2s;
        }
        .chromeExit:hover {
          background: rgba(255, 62, 166, 0.2);
          border-color: #ff3ea6;
        }

        .terminalOutput {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px 12px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          line-height: 1.7;
          scroll-behavior: smooth;
        }
        .terminalOutput::-webkit-scrollbar {
          width: 5px;
        }
        .terminalOutput::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminalOutput::-webkit-scrollbar-thumb {
          background: rgba(73, 241, 255, 0.2);
          border-radius: 3px;
        }

        .termLine {
          white-space: pre-wrap;
          word-break: break-word;
        }
        .termLine-input {
          color: #fff;
          font-weight: 600;
          margin-top: 8px;
        }
        .termLine-output {
          color: rgba(238, 242, 255, 0.75);
        }
        .termLine-system {
          color: #49f1ff;
        }
        .termLine-error {
          color: #ef4444;
        }
        .termLine-accent {
          color: #ff3ea6;
          font-weight: 500;
        }

        .termSuggestions {
          display: flex;
          gap: 10px;
          margin: 6px 0;
          flex-wrap: wrap;
        }
        .termSuggestion {
          font-size: 0.72rem;
          padding: 2px 8px;
          background: rgba(73, 241, 255, 0.08);
          border: 1px solid rgba(73, 241, 255, 0.2);
          border-radius: 3px;
          color: #49f1ff;
        }

        .termInputRow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding-top: 8px;
        }
        .termPrompt {
          color: #49f1ff;
          font-weight: 700;
          font-size: 1rem;
          text-shadow: 0 0 8px rgba(73, 241, 255, 0.5);
        }
        .termInput {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: #fff;
          caret-color: #49f1ff;
        }
        .termInput::placeholder {
          color: rgba(73, 241, 255, 0.3);
        }
        .termInput:disabled {
          opacity: 0.5;
        }

        .terminalStatusBar {
          display: flex;
          gap: 20px;
          padding: 8px 16px;
          background: rgba(8, 12, 24, 0.95);
          border-top: 1px solid rgba(73, 241, 255, 0.12);
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.05em;
        }
        .termStatusOnline {
          margin-left: auto;
          color: #22c55e;
        }

        @media (max-width: 768px) {
          .terminalPage {
            padding: 10px;
            margin: 20px auto;
          }
          .terminalShell {
            height: min(600px, 85vh);
            border-radius: 8px;
          }
          .terminalOutput {
            padding: 16px 12px 8px;
            font-size: 0.72rem;
          }
          .termLine {
            white-space: pre-wrap;
            overflow-wrap: break-word;
          }
        }
      `}</style>
    </section>
  );
}
