"use client";

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

export default function GamePage() {
  const [mode, setMode] = useState<Mode>("idle");
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [time, setTime] = useState(30);
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
    setTime(30);
    setTarget(randomPosition());
  }

  function hitTarget() {
    if (mode !== "playing") return;
    setCombo((prev) => prev + 1);
    setScore((prev) => prev + multiplier);
    setTarget(randomPosition());
  }

  return (
    <section className="section simplePage glassPanel neonGamePage">
      <h1>Neon Reactor</h1>
      <p>Acerta o alvo em movimento. Quanto mais combo, mais rápido ele fica.</p>

      <div className="neonGameHud">
        <p><strong>Tempo:</strong> {time}s</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Combo:</strong> {combo}</p>
        <p><strong>Melhor:</strong> {bestScore}</p>
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
            <p>{mode === "finished" ? "Partida encerrada!" : "Pronto para jogar?"}</p>
            <button className="btn btnPrimary" onClick={startGame}>
              {mode === "finished" ? "Jogar de novo" : "Iniciar"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
