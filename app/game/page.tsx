"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { siteContent } from "@/src/data/content";

const GRID = 6;

type Pos = { x: number; y: number };

function keyFor(pos: Pos) {
  return `${pos.x}-${pos.y}`;
}

function buildIntelPositions() {
  const positions: Pos[] = [];
  const used = new Set<string>(["0-0"]);

  while (positions.length < 12) {
    const p = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
    const key = keyFor(p);
    if (!used.has(key)) {
      used.add(key);
      positions.push(p);
    }
  }

  return positions;
}

export default function GamePage() {
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [player, setPlayer] = useState<Pos>({ x: 0, y: 0 });
  const [intelPositions, setIntelPositions] = useState<Pos[]>([]);
  const [collected, setCollected] = useState<number[]>([]);
  const [revealed, setRevealed] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  const launchScore = useMemo(() => Math.round((collected.length / 12) * 100), [collected.length]);

  useEffect(() => {
    if (!started) return;

    const onKey = (event: KeyboardEvent) => {
      const k = event.key.toLowerCase();
      if (!["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d"].includes(k)) return;
      event.preventDefault();

      setPlayer((prev) => {
        let next = { ...prev };
        if (k === "arrowup" || k === "w") next.y = Math.max(0, prev.y - 1);
        if (k === "arrowdown" || k === "s") next.y = Math.min(GRID - 1, prev.y + 1);
        if (k === "arrowleft" || k === "a") next.x = Math.max(0, prev.x - 1);
        if (k === "arrowright" || k === "d") next.x = Math.min(GRID - 1, prev.x + 1);
        return next;
      });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started]);

  useEffect(() => {
    if (!started) return;
    intelPositions.forEach((pos, idx) => {
      if (player.x === pos.x && player.y === pos.y && !collected.includes(idx)) {
        setCollected((prev) => [...prev, idx]);
        setRevealed((prev) => [...prev, siteContent.gameIntel[idx]]);
      }
    });
  }, [player, intelPositions, collected, started]);

  const startMission = () => {
    setStarted(true);
    setPlayer({ x: 0, y: 0 });
    setIntelPositions(buildIntelPositions());
    setCollected([]);
    setRevealed([]);
  };
import { useEffect, useMemo, useState } from "react";

type Mode = "idle" | "playing" | "finished";

type Position = { x: number; y: number };

function randomPosition(): Position {
  return {
    x: Math.floor(Math.random() * 82) + 4,
    y: Math.floor(Math.random() * 72) + 6
  };
}

const BEST_SCORE_KEY = "alex-portfolio-neon-reactor-best-score";
const ROUND_SECONDS = 30;

export default function GamePage() {
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [time, setTime] = useState(ROUND_SECONDS);
  const [target, setTarget] = useState<Position>({ x: 50, y: 50 });
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem(BEST_SCORE_KEY);
    if (raw) setBestScore(Number(raw));
  }, []);

  useEffect(() => {
    if (mode !== "playing") return;
    if (time <= 0) {
      setMode("finished");
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem(BEST_SCORE_KEY, String(score));
      }
      return;
    }

    const timer = setTimeout(() => setTime((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [mode, time, score, bestScore]);

  useEffect(() => {
    if (mode !== "playing") return;
    const movementInterval = setInterval(() => setTarget(randomPosition()), Math.max(220, 850 - combo * 18));
    return () => clearInterval(movementInterval);
  }, [mode, combo]);

  const multiplier = useMemo(() => Math.max(1, Math.floor(combo / 5) + 1), [combo]);

  function startGame() {
    setMode("playing");
    setScore(0);
    setCombo(0);
    setTime(ROUND_SECONDS);
    setTarget(randomPosition());
  }

  function hitTarget() {
    if (mode !== "playing") return;
    setCombo((prev) => prev + 1);
    setScore((prev) => prev + multiplier);
    setTarget(randomPosition());
  }

  if (loading) {
    return (
      <section className="gameSplash">
        <div className="gameSplashGrid" />
        <div className="gameSplashCard">
          <div className="gameSpinner" />
          <p>Loading…</p>
        </div>
      </section>
    );
  }

  if (!started) {
    return (
      <section className="section gameOnboarding">
        <h1>Mission: Recruit Alex</h1>
        <p>
          Gather intel about Alex before launching your recruitment rocket. The more intel you collect, the further your rocket will fly.
          Collect all 12 intel items to reach orbit.
        </p>
        <p>Controls: Arrow keys or WASD. Objective: collect intel items about skills, experience, and projects.</p>
        <div className="heroActions">
          <button className="btn btnPrimary" onClick={startMission}>Start Mission</button>
          <Link href="/" className="btn btnGhost">Back to Portfolio</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section gameWrap">
      <h1>Mission: Recruit Alex</h1>
      <p className="sectionLead">Intel collected: {collected.length}/12 • Launch readiness: {launchScore}%</p>
      <div className="gameGrid" role="grid" aria-label="Intel field">
        {Array.from({ length: GRID * GRID }).map((_, idx) => {
          const x = idx % GRID;
          const y = Math.floor(idx / GRID);
          const intelIndex = intelPositions.findIndex((pos) => pos.x === x && pos.y === y);
          const hasIntel = intelIndex >= 0;
          const isCollected = hasIntel && collected.includes(intelIndex);
          const isPlayer = player.x === x && player.y === y;

          return (
            <div key={idx} className={`cell ${isPlayer ? "player" : ""} ${hasIntel && !isCollected ? "intel" : ""}`}>
              {isPlayer ? "A" : hasIntel && !isCollected ? "✦" : ""}
            </div>
          );
        })}
      </div>

      <div className="heroActions">
        <button className="btn btnGhost" onClick={startMission}>Reset Mission</button>
        <button className="btn btnPrimary">Launch ({launchScore}%)</button>
      </div>

      <div className="intelLog">
        {revealed.length === 0 ? <p>Collect intel to reveal Alex highlights.</p> : revealed.map((fact) => <p key={fact}>• {fact}</p>)}
    <section className="section simplePage glassPanel neonGamePage">
      <h1>Neon Reactor</h1>
      <p>Hit the moving target. The higher your combo, the faster it gets.</p>

      <div className="neonGameHud">
        <p><strong>Time:</strong> {time}s</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Combo:</strong> {combo}</p>
        <p><strong>Best:</strong> {bestScore}</p>
      </div>

      <div className="neonArena" role="application" aria-label="Game arena">
        {mode === "playing" ? (
          <button
            className="neonTarget"
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
            onClick={hitTarget}
            aria-label="Target"
          />
        ) : (
          <div className="neonOverlay">
            <p>{mode === "finished" ? "Round complete!" : "Ready to play?"}</p>
            <button className="btn btnPrimary" onClick={startGame}>
              {mode === "finished" ? "Play again" : "Start"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
