"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSiteContent } from "@/src/data/siteContentContext";
import { motion, AnimatePresence } from "framer-motion";
import PipelineOptimizerGame from "@/components/PipelineOptimizerGame";

type Tab = "home" | "profile" | "skills" | "credentials" | "projects" | "optimize";

export default function NeuralTerminal() {
  const router = useRouter();
  const { content } = useSiteContent();
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <div className="cardContent">
            <h2 className="cardTitle">SYSTEM STATUS: OPTIMIZED</h2>
            <p className="cardText">
              Welcome to the Neural Interface. Access the candidate&apos;s core modules via the sidebar.
            </p>
            <div className="statusGrid">
              <div className="statusItem">
                <span className="statusLabel">IDENTITY</span>
                <span className="statusValue">ALEX DE FREITAS MARROIG</span>
              </div>
              <div className="statusItem">
                <span className="statusLabel">SECURITY LEVEL</span>
                <span className="statusValue highlight">RECRUITER_ACCESS</span>
              </div>
              <div className="statusItem">
                <span className="statusLabel">LAST SYNC</span>
                <span className="statusValue">JUST NOW</span>
              </div>
            </div>
            <button className="actionButton" onClick={() => setActiveTab("profile")}>
              INITIALIZE NEURAL PROBE
            </button>
          </div>
        );

      case "profile":
        return (
          <div className="cardContent">
            <h2 className="cardTitle">NEURAL PROFILE: {content.hero.headline}</h2>
            <div className="profileBox">
              <p className="cardText">{content.hero.paragraph}</p>
            </div>
            <div className="metaInfo">
              <div className="tag">TECHNICAL LEADERSHIP</div>
              <div className="tag">AI AUTOMATION</div>
              <div className="tag">AGENTIC SYSTEMS</div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="cardContent">
            <h2 className="cardTitle">TECHNICAL STACK DEPLOYED</h2>
            <div className="skillsGrid">
              {content.stackCategories.map((cat, idx) => (
                <div key={idx} className="skillCategory">
                  <h3>{cat.category}</h3>
                  <div className="skillTags">
                    {cat.items.map((item, i) => (
                      <span key={i} className="skillTag">{item.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="cardContent">
            <h2 className="cardTitle">PROJECT ARCHIVE</h2>
            <div className="projectsList">
              {content.projects.map((p, idx) => (
                <div key={idx} className="projectCardItem">
                  <div className="projectHeader">
                    <span className="projectTitle">{p.title}</span>
                    <span className="projectStatus">{p.status}</span>
                  </div>
                  <p className="projectDesc">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "credentials":
        return (
          <div className="cardContent">
            <h2 className="cardTitle">CREDENTIALS & EXPERTISE</h2>

            <div className="credentialSection">
              <h3 className="sectionSubtitle">CERTIFICATIONS</h3>
              <div className="credentialsList">
                {content.certifications.map((cert, idx) => (
                  <div key={idx} className="credentialItem certified">
                    <div className="credBadge">✓</div>
                    <div className="credDetails">
                      <div className="credTitle">{cert.title}</div>
                      <div className="credMeta">{cert.issuer} — {cert.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="credentialSection">
              <h3 className="sectionSubtitle">RECOGNITION & AWARDS</h3>
              <div className="awardsList">
                {content.awards.map((award, idx) => (
                  <div key={idx} className="awardItem">
                    <div className="awardBadge">★</div>
                    <div className="awardText">{award}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "optimize":
        return <PipelineOptimizerGame />;
    }
  };

  return (
    <section className="section simplePage terminalPage">
      <div className="terminalLayout">
        {/* Left Sidebar - Navigation */}
        <aside className="terminalSidePanel left">
          <div className="panelHeader">NEURAL_NAVIGATION</div>
          <div className="navList">
            <button
              className={`navItem ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <div className="navDot" />
              <span className="navName">PROFILE_AGENT</span>
            </button>
            <button
              className={`navItem ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <div className="navDot" />
              <span className="navName">SKILLS_ENGINE</span>
            </button>
            <button
              className={`navItem ${activeTab === 'credentials' ? 'active' : ''}`}
              onClick={() => setActiveTab('credentials')}
            >
              <div className="navDot" />
              <span className="navName">CREDENTIALS</span>
            </button>
            <button
              className={`navItem ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <div className="navDot" />
              <span className="navName">PROJECT_ARCHIVE</span>
            </button>
            <button
              className={`navItem ${activeTab === 'optimize' ? 'active' : ''}`}
              onClick={() => setActiveTab('optimize')}
            >
              <div className="navDot" />
              <span className="navName">OPTIMIZATION_LAB</span>
            </button>
            <div className="navSeparator" />
            <button
              className="navItem"
              onClick={() => window.open("/alex_resume.pdf", "_blank")}
            >
              <div className="navDot download" />
              <span className="navName">DOWNLOAD_CV</span>
            </button>
            <button
              className="navItem exit"
              onClick={() => router.push("/")}
            >
              <div className="navDot busy" />
              <span className="navName">EXIT_INTERFACE</span>
            </button>
          </div>
          <div className="panelFooter">CORE_VERSION: 2.0.0</div>
        </aside>

        {/* Main Interface Area */}
        <div className="terminalWindow glassPanel">
          <div className="terminalHeader">
            <div className="terminalStatus">
              <span className="terminalDot online" />
              <span className="statusText">SYSTEM: {activeTab.toUpperCase()}</span>
            </div>
            <div className="terminalTitle">NEURAL TERMINAL v5.0.0 // {activeTab.toUpperCase()}</div>
            <div className="terminalMeta">
              <span className="metaLabel">SEC:</span>
              <span className="metaValue">VERIFIED</span>
            </div>
          </div>

          <div className="terminalBody">
            <div className="terminalScanline" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="mainContentScroll"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="terminalFooter">
            <div className="footerItem">LATENCY: 12ms</div>
            <div className="footerItem">NODE: MARROIG-AI-01</div>
            <div className="footerItem">ENCRYPTION: AES-256</div>
          </div>
        </div>

        {/* Right Sidebar - Node Params */}
        <aside className="terminalSidePanel right">
          <div className="panelHeader">NODE_DATA</div>
          <div className="paramsList">
            <div className="paramGroup">
              <label>ACTIVE_MODULE</label>
              <div className="paramBox">{activeTab.toUpperCase()}_MOD</div>
            </div>
            <div className="paramGroup">
              <label>PRIMARY_MODEL</label>
              <div className="paramBox">gpt-4o-pro</div>
            </div>
            <div className="paramGroup">
              <label>DIRECTIVE</label>
              <div className="paramBox small">
                Interactive assessment of candidate Alex de Freitas Marroig.
              </div>
            </div>
            <div className="paramGroup">
              <label>UPTIME</label>
              <div className="paramBox">99.999%</div>
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

        /* Navigation List */
        .navList {
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .navItem {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid transparent;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
          cursor: pointer;
          color: #eef2ff;
          font-family: inherit;
        }
        .navItem:hover {
          background: rgba(73, 241, 255, 0.05);
          border-color: rgba(73, 241, 255, 0.1);
        }
        .navItem.active {
          background: rgba(73, 241, 255, 0.1);
          border-color: rgba(73, 241, 255, 0.4);
          box-shadow: inset 0 0 10px rgba(73, 241, 255, 0.1);
        }
        .navDot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #49f1ff;
          box-shadow: 0 0 8px #49f1ff;
        }
        .navDot.busy { background: #ef4444; box-shadow: 0 0 8px #ef4444; }
        .navDot.download { background: #ff3ea6; box-shadow: 0 0 8px #ff3ea6; }

        .navName {
          font-size: 0.7rem;
          letter-spacing: 0.05em;
        }
        .navSeparator {
          height: 1px;
          background: rgba(73, 241, 255, 0.1);
          margin: 10px 0;
        }

        /* Right Side Params */
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

        /* Main Window */
        .terminalWindow {
          background: rgba(4, 6, 15, 0.96);
          border: 1px solid rgba(73, 241, 255, 0.4);
          border-radius: 8px;
          overflow: hidden;
          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.8),
            0 0 40px rgba(73, 241, 255, 0.1);
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
          padding: 30px;
          font-family: var(--font-mono);
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          background-image:
            radial-gradient(circle at center, rgba(73, 241, 255, 0.03) 0%, transparent 70%);
          overflow: hidden;
        }
        .mainContentScroll {
          flex: 1;
          overflow-y: auto;
          z-index: 20;
        }
        .mainContentScroll::-webkit-scrollbar {
          width: 4px;
        }
        .mainContentScroll::-webkit-scrollbar-thumb {
          background: rgba(73, 241, 255, 0.2);
          border-radius: 2px;
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

        /* Card Elements */
        .cardTitle {
          color: #49f1ff;
          font-size: 1.2rem;
          margin-bottom: 20px;
          border-left: 3px solid #ff3ea6;
          padding-left: 15px;
          letter-spacing: 0.05em;
        }
        .cardText {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .profileBox {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 4px;
          border: 1px solid rgba(73, 241, 255, 0.1);
        }
        .statusGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin: 25px 0;
        }
        .statusItem {
          background: rgba(0, 0, 0, 0.3);
          padding: 15px;
          border: 1px solid rgba(73, 241, 255, 0.1);
          border-radius: 4px;
        }
        .statusLabel {
          display: block;
          font-size: 0.6rem;
          color: rgba(73, 241, 255, 0.6);
          margin-bottom: 5px;
        }
        .statusValue {
          font-size: 0.85rem;
          color: #fff;
        }
        .statusValue.highlight { color: #ff3ea6; }

        .actionButton {
          background: #49f1ff;
          color: #000;
          border: none;
          padding: 12px 24px;
          font-family: inherit;
          font-weight: bold;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 4px;
          box-shadow: 0 0 15px rgba(73, 241, 255, 0.3);
        }
        .actionButton:hover {
          background: #fff;
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(73, 241, 255, 0.5);
        }

        .metaInfo {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .tag {
          font-size: 0.65rem;
          padding: 4px 10px;
          background: rgba(73, 241, 255, 0.1);
          border: 1px solid rgba(73, 241, 255, 0.3);
          color: #49f1ff;
          border-radius: 100px;
        }

        .skillsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .skillCategory h3 {
          font-size: 0.8rem;
          color: #ff3ea6;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .skillTags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skillTag {
          font-size: 0.75rem;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .projectsList {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .projectCardItem {
          background: rgba(255, 255, 255, 0.03);
          padding: 15px;
          border-radius: 4px;
          border: 1px solid rgba(73, 241, 255, 0.05);
        }
        .projectHeader {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .projectTitle {
          color: #49f1ff;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .projectStatus {
          font-size: 0.65rem;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .projectDesc {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .terminalFooter {
          background: rgba(10, 15, 30, 0.95);
          padding: 8px 18px;
          display: flex;
          gap: 20px;
          border-top: 1px solid rgba(73, 241, 255, 0.2);
          font-size: 0.6rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .credentialSection {
          margin-bottom: 30px;
        }
        .sectionSubtitle {
          font-size: 0.75rem;
          color: #ff3ea6;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .credentialsList {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .credentialItem {
          display: flex;
          gap: 15px;
          padding: 12px;
          border-radius: 4px;
          border-left: 3px solid transparent;
        }
        .credentialItem.certified {
          background: rgba(34, 197, 94, 0.05);
          border-left-color: #22c55e;
        }
        .credBadge {
          font-size: 1.2rem;
          line-height: 1.3;
          min-width: 30px;
          color: #22c55e;
        }
        .credDetails {
          flex: 1;
        }
        .credTitle {
          color: #fff;
          font-weight: bold;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        .credMeta {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.75rem;
        }
        .awardsList {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .awardItem {
          display: flex;
          gap: 15px;
          padding: 12px;
          border-radius: 4px;
          background: rgba(255, 62, 166, 0.05);
          border-left: 3px solid #ff3ea6;
        }
        .awardBadge {
          font-size: 1.2rem;
          line-height: 1.3;
          min-width: 30px;
          color: #ff3ea6;
        }
        .awardText {
          flex: 1;
          color: #fff;
          font-size: 0.9rem;
        }

        @media (max-width: 1100px) {
          .terminalLayout {
            grid-template-columns: 1fr;
          }
          .terminalSidePanel.right {
            display: none;
          }
          .terminalSidePanel.left {
            height: auto;
          }
          .navList {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .navItem {
            width: auto;
            flex: 1;
            min-width: 150px;
          }
        }
        @media (max-width: 768px) {
          .terminalBody {
            padding: 20px;
          }
          .skillsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
