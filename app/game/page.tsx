"use client";

import { useEffect, useMemo, useState } from "react";

type GameMode = "idle" | "playing" | "finished";

const ROUND_SECONDS = 30;
const BEST_SCORE_KEY = "alex-neon-best-score";

function randomPosition() {
  return {
    x: Math.floor(Math.random() * 86) + 7,
    y: Math.floor(Math.random() * 72) + 12
  };
}

export default function GamePage() {
  const [mode, setMode] = useState<GameMode>("idle");
  const [time, setTime] = useState(ROUND_SECONDS);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [target, setTarget] = useState(randomPosition());

  useEffect(() => {
    const raw = localStorage.getItem(BEST_SCORE_KEY);
    if (!raw) return;
    const parsed = Number(raw);
    if (Number.isFinite(parsed)) setBestScore(parsed);
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

  return (
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
