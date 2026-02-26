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
      <div className="terminalLayout">
        {/* Left Sidebar - Agent Library */}
        <aside className="terminalSidePanel left">
          <div className="panelHeader">NEURAL_LIBRARY</div>
          <div className="agentList">
            <div className="agentItem active">
              <div className="agentDot" />
              <div className="agentInfo">
                <span className="agentName">AlexProfileAgent</span>
                <span className="agentStatus">READY</span>
              </div>
            </div>
            <div className="agentItem">
              <div className="agentDot busy" />
              <div className="agentInfo">
                <span className="agentName">AutomationEngine</span>
                <span className="agentStatus">OPTIMIZING</span>
              </div>
            </div>
            <div className="agentItem">
              <div className="agentDot" />
              <div className="agentInfo">
                <span className="agentName">ArchitectAgent</span>
                <span className="agentStatus">IDLE</span>
              </div>
            </div>
          </div>
          <div className="panelFooter">CORE_VERSION: 1.0.4</div>
        </aside>

        {/* Main Terminal */}
        <div className="terminalWindow glassPanel">
          <div className="terminalHeader">
            <div className="terminalStatus">
              <span className="terminalDot online" />
              <span className="statusText">SYSTEM: OPTIMIZED</span>
            </div>
            <div className="terminalTitle">NEURAL TERMINAL v4.0.2 // EVALUATION_MODE</div>
            <div className="terminalMeta">
              <span className="metaLabel">SEC_LVL:</span>
              <span className="metaValue">RECRUITER_ACCESS</span>
            </div>
          </div>

          <div className="terminalBody">
            <div className="terminalScanline" />
            <div className="terminalOutput">
              {messages.map((m, i) => (
                <div key={i} className={`terminalLine type-${m.type}`}>
                  <span className="linePrefix">{m.type === 'user' ? '>' : '[SYS]'}</span>
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

          <div className="terminalFooter">
            <div className="footerItem">LATENCY: 14ms</div>
            <div className="footerItem">LOAD: 22%</div>
            <div className="footerItem">ENCRYPTION: VERIFIED</div>
          </div>
        </div>

        {/* Right Sidebar - Node Params */}
        <aside className="terminalSidePanel right">
          <div className="panelHeader">NODE_PARAMS</div>
          <div className="paramsList">
            <div className="paramGroup">
              <label>DESIGNATION</label>
              <div className="paramBox">RecruiterAssessmentNode</div>
            </div>
            <div className="paramGroup">
              <label>PRIMARY_MODEL</label>
              <div className="paramBox">gpt-4o-technical-v2</div>
            </div>
            <div className="paramGroup">
              <label>DIRECTIVE_PROMPT</label>
              <div className="paramBox small">
                Evaluate candidate Alex for Technical Leadership and AI Automation roles.
              </div>
            </div>
          </div>
          <div className="panelFooter">VERIFIED: TRUE</div>
        </aside>
      </div>

      <style jsx>{`
        .terminalPage {
          max-width: 1400px;
          margin: 40px auto;
          padding: 0 20px;
          position: relative;
        }
        .terminalLayout {
          display: grid;
          grid-template-columns: 240px 1fr 240px;
          gap: 20px;
          align-items: start;
        }
        .terminalSidePanel {
          background: rgba(4, 6, 15, 0.85);
          border: 1px solid rgba(73, 241, 255, 0.2);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          height: 650px;
        }
        .panelHeader {
          padding: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #49f1ff;
          border-bottom: 1px solid rgba(73, 241, 255, 0.2);
          letter-spacing: 0.1em;
        }
        .panelFooter {
          margin-top: auto;
          padding: 10px;
          font-size: 0.6rem;
          color: rgba(73, 241, 255, 0.4);
          border-top: 1px solid rgba(73, 241, 255, 0.1);
        }

        /* Left Side */
        .agentList {
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .agentItem {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .agentItem.active {
          background: rgba(73, 241, 255, 0.08);
          border-color: rgba(73, 241, 255, 0.3);
        }
        .agentDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        .agentDot.busy {
          background: #f59e0b;
          box-shadow: 0 0 8px #f59e0b;
        }
        .agentInfo {
          display: flex;
          flex-direction: column;
        }
        .agentName {
          font-size: 0.75rem;
          color: #eef2ff;
        }
        .agentStatus {
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.4);
        }

        /* Right Side */
        .paramsList {
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .paramGroup label {
          display: block;
          font-size: 0.65rem;
          color: rgba(73, 241, 255, 0.6);
          margin-bottom: 6px;
        }
        .paramBox {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(73, 241, 255, 0.1);
          padding: 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: #ff3ea6;
        }
        .paramBox.small {
          font-size: 0.65rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.7);
        }

        .terminalWindow {
          background: rgba(4, 6, 15, 0.96);
          border: 1px solid rgba(73, 241, 255, 0.4);
          border-radius: 8px;
          overflow: hidden;
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.8),
            0 0 40px rgba(73, 241, 255, 0.1),
            inset 0 0 20px rgba(73, 241, 255, 0.05);
          display: flex;
          flex-direction: column;
          height: 650px;
        }
        .terminalHeader {
          background: rgba(10, 15, 30, 0.9);
          padding: 12px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(73, 241, 255, 0.2);
          font-family: var(--font-mono);
        }
        .terminalStatus {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .terminalDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .terminalDot.online {
          background: #22c55e;
          box-shadow: 0 0 10px #22c55e;
          animation: terminalPulse 2s infinite;
        }
        .statusText {
          font-size: 0.65rem;
          color: #22c55e;
          letter-spacing: 0.1em;
        }
        .terminalTitle {
          font-size: 0.7rem;
          color: rgba(73, 241, 255, 0.8);
          letter-spacing: 0.15em;
          font-weight: 700;
        }
        .terminalMeta {
          display: flex;
          gap: 6px;
          font-size: 0.65rem;
        }
        .metaLabel { color: rgba(255, 255, 255, 0.4); }
        .metaValue { color: #ff3ea6; }

        .terminalBody {
          padding: 24px;
          font-family: var(--font-mono);
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          background-image:
            radial-gradient(circle at center, rgba(73, 241, 255, 0.03) 0%, transparent 70%);
        }
        .terminalScanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.1) 50%
          ), linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.01),
            rgba(0, 255, 0, 0.005),
            rgba(0, 0, 255, 0.01)
          );
          background-size: 100% 4px, 3px 100%;
          pointer-events: none;
          z-index: 10;
          opacity: 0.4;
        }

        .terminalOutput {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 16px;
          padding-right: 10px;
        }
        .terminalOutput::-webkit-scrollbar {
          width: 4px;
        }
        .terminalOutput::-webkit-scrollbar-thumb {
          background: rgba(73, 241, 255, 0.2);
          border-radius: 2px;
        }

        .terminalLine {
          margin-bottom: 8px;
          line-height: 1.5;
          white-space: pre-wrap;
          font-size: 0.85rem;
          display: flex;
          gap: 12px;
        }
        .linePrefix {
          color: rgba(255, 255, 255, 0.2);
          user-select: none;
          font-size: 0.7rem;
          padding-top: 2px;
        }

        .type-system { color: #49f1ff; }
        .type-user { color: #ff3ea6; font-weight: bold; }
        .type-error { color: #ef4444; }
        .type-success { color: #22c55e; }
        .type-ai {
          color: #eef2ff;
          border-left: 2px solid #49f1ff;
          padding-left: 14px;
          margin-left: 4px;
          background: rgba(73, 241, 255, 0.05);
          padding-top: 4px;
          padding-bottom: 4px;
        }

        .terminalInputLine {
          display: flex;
          gap: 12px;
          align-items: center;
          border-top: 1px solid rgba(73, 241, 255, 0.1);
          padding-top: 16px;
        }
        .terminalPrompt {
          color: #49f1ff;
          white-space: nowrap;
          font-size: 0.85rem;
          text-shadow: 0 0 8px rgba(73, 241, 255, 0.4);
        }
        .terminalInput {
          flex: 1;
          background: transparent;
          border: none;
          color: #fff;
          font-family: inherit;
          font-size: 0.85rem;
          outline: none;
        }

        .terminalFooter {
          background: rgba(10, 15, 30, 0.95);
          padding: 8px 18px;
          display: flex;
          gap: 20px;
          border-top: 1px solid rgba(73, 241, 255, 0.2);
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.4);
        }

        @keyframes terminalPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @media (max-width: 1100px) {
          .terminalLayout {
            grid-template-columns: 1fr;
          }
          .terminalSidePanel {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .terminalBody {
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
}
