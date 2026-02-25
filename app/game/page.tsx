"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSiteContent } from "@/src/data/siteContentContext";

type Message = {
  text: string;
  type: "system" | "user" | "error" | "ai" | "success";
};

export default function NeuralTerminal() {
  const router = useRouter();
  const { content } = useSiteContent();
  const [messages, setMessages] = useState<Message[]>([
    { text: "NEURAL TERMINAL v4.0.2 - CONNECTION ESTABLISHED", type: "system" },
    { text: "IDENTITY VERIFIED: ALEX DE FREITAS MARROIG", type: "system" },
    { text: "STATUS: NEURAL PROFILE SYNCED", type: "system" },
    { text: "", type: "system" },
    { text: "Welcome, Evaluator. You are now connected to the candidate's neural interface.", type: "system" },
    { text: "Type 'help' to see available commands or 'train' to begin the AI assessment.", type: "system" }
  ]);
  const [input, setInput] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [trainingStep, setTrainingStep] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, type: Message["type"] = "system") => {
    setMessages((prev) => [...prev, { text, type }]);
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().trim();
    addMessage(`> ${cmd}`, "user");

    if (isTraining) {
      handleTraining(cleanCmd);
      return;
    }

    switch (cleanCmd) {
      case "help":
        addMessage("Available commands:", "system");
        addMessage("  profile  - Show Alex's professional summary", "system");
        addMessage("  skills   - List technical systems & AI stack", "system");
        addMessage("  projects - List high-impact work case studies", "system");
        addMessage("  train    - Enter AI Optimization Lab (Recruiter Narrative)", "system");
        addMessage("  download - Retrieve technical CV", "system");
        addMessage("  clear    - Flush terminal buffer", "system");
        addMessage("  exit     - Terminate session and return home", "system");
        break;

      case "profile":
        addMessage(`IDENTITY: ${content.hero.headline}`, "success");
        addMessage(content.hero.paragraph, "ai");
        break;

      case "skills":
        addMessage("TECHNICAL STACK DEPLOYED:", "success");
        content.stackCategories.forEach(cat => {
          addMessage(`[${cat.category}]`, "system");
          addMessage(`  ${cat.items.map(i => i.name).join(", ")}`, "ai");
        });
        break;

      case "projects":
        addMessage("PROJECT ARCHIVE:", "success");
        content.projects.forEach(p => {
          addMessage(`${p.title} [${p.status}]`, "system");
          addMessage(`  ${p.description}`, "ai");
        });
        break;

      case "train":
        startTraining();
        break;

      case "download":
        addMessage("REDIRECTING TO CV REPOSITORY...", "success");
        window.open("/alex_resume.pdf", "_blank");
        break;

      case "clear":
        setMessages([]);
        break;

      case "exit":
        addMessage("TERMINATING SESSION...", "error");
        setTimeout(() => router.push("/"), 1000);
        break;

      default:
        addMessage(`Unknown command: '${cleanCmd}'. Type 'help' for available directives.`, "error");
    }
  };

  const startTraining = () => {
    setIsTraining(true);
    setTrainingStep(1);
    addMessage("--- AI OPTIMIZATION LAB INITIALIZED ---", "success");
    addMessage("The Alex-AI neural network is currently running at high variance (Temperature: 1.0).", "system");
    addMessage("Stabilization required for interview assessment.", "system");
    addMessage("STEP 1: Enter desired TEMPERATURE (Value between 0.0 and 1.0). Lower is more focused.", "system");
  };

  const handleTraining = (cmd: string) => {
    const val = parseFloat(cmd);

    if (trainingStep === 1) {
      if (isNaN(val) || val < 0 || val > 1) {
        addMessage("Invalid input. Temperature must be 0.0 to 1.0.", "error");
        return;
      }
      addMessage(`Temperature set to ${val}. Stability increasing...`, "success");
      setTrainingStep(2);
      addMessage("STEP 2: Enter TOP-P value (Value between 0.0 and 1.0). 0.1 for high precision.", "system");
    } else if (trainingStep === 2) {
      if (isNaN(val) || val < 0 || val > 1) {
        addMessage("Invalid input. Top-P must be 0.0 to 1.0.", "error");
        return;
      }
      addMessage(`Top-P set to ${val}. Neural weights re-aligned.`, "success");
      setTrainingStep(3);
      addMessage("SYSTEM STABLE. ASSESSMENT READY.", "success");
      addMessage("ALEX-AI PROMPT: Why should we hire you as our Technical/AI Leader?", "system");
      addMessage("Type 'answer' to generate response.", "system");
    } else if (trainingStep === 3 && cmd === "answer") {
      addMessage("ALEX-AI: I combine 10+ years of technical project management with deep, hands-on software automation and AI integration skills.", "ai");
      addMessage("ALEX-AI: I don't just 'manage'—I architect self-healing pipelines and agentic systems that reduce operational friction and deliver measurable results.", "ai");
      addMessage("ALEX-AI: My focus is on the next wave of autonomous engineering, where AI isn't a feature, but the core of the delivery system.", "ai");
      addMessage("ASSESSMENT COMPLETE. STABILITY: 100%", "success");
      setIsTraining(false);
      setTrainingStep(0);
      addMessage("Returning to standard terminal mode. Type 'help' for more.", "system");
    } else {
      addMessage("Laboratory error. Resetting...", "error");
      setIsTraining(false);
      setTrainingStep(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <section className="section simplePage terminalPage">
      <div className="terminalWindow glassPanel">
        <div className="terminalHeader">
          <div className="terminalDots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="terminalTitle">NEURAL TERMINAL - EVALUATION_MODE</div>
        </div>

        <div className="terminalBody">
          <div className="terminalOutput">
            {messages.map((m, i) => (
              <div key={i} className={`terminalLine type-${m.type}`}>
                {m.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="terminalInputLine">
            <span className="terminalPrompt">evaluator@alex-ai:~$</span>
            <input
              type="text"
              className="terminalInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>

      <style jsx>{`
        .terminalPage {
          max-width: 900px;
          margin: 40px auto;
        }
        .terminalWindow {
          background: rgba(4, 6, 15, 0.95);
          border: 1px solid rgba(73, 241, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(73, 241, 255, 0.05);
        }
        .terminalHeader {
          background: rgba(255, 255, 255, 0.05);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .terminalDots {
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        .terminalTitle {
          flex: 1;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.1em;
        }
        .terminalBody {
          padding: 20px;
          font-family: var(--font-mono);
          height: 500px;
          display: flex;
          flex-direction: column;
        }
        .terminalOutput {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 10px;
        }
        .terminalLine {
          margin-bottom: 6px;
          line-height: 1.4;
          white-space: pre-wrap;
          font-size: 0.9rem;
        }
        .type-system { color: #88c0d0; }
        .type-user { color: #81a1c1; font-weight: bold; }
        .type-error { color: #bf616a; }
        .type-success { color: #a3be8c; }
        .type-ai { color: #d8dee9; border-left: 2px solid #5e81ac; padding-left: 10px; margin-left: 5px; }

        .terminalInputLine {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .terminalPrompt {
          color: #49f1ff;
          white-space: nowrap;
        }
        .terminalInput {
          flex: 1;
          background: transparent;
          border: none;
          color: #eef2ff;
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
        }
      `}</style>
    </section>
  );
}
