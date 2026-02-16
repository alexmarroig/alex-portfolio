"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Mode = "idle" | "playing" | "finished";
type TargetKind = "normal" | "bonus" | "trap";

type Position = { x: number; y: number };

type TargetState = {
  x: number;
  y: number;
  kind: TargetKind;
  id: number;
};

type LevelConfig = {
  level: number;
  moveMs: number;
  duration: number;
  trapChance: number;
  bonusChance: number;
};

const BEST_SCORE_KEY = "alex-portfolio-neon-reactor-best-score-v2";
const GAME_DURATION_SECONDS = 45;
const COMBO_OVERDRIVE_TRIGGER = 8;
const OVERDRIVE_DURATION_MS = 5000;

const LEVELS: LevelConfig[] = [
  { level: 1, moveMs: 820, duration: 1.3, trapChance: 0.06, bonusChance: 0.08 },
  { level: 2, moveMs: 700, duration: 1.1, trapChance: 0.1, bonusChance: 0.1 },
  { level: 3, moveMs: 570, duration: 0.95, trapChance: 0.14, bonusChance: 0.12 },
  { level: 4, moveMs: 450, duration: 0.82, trapChance: 0.18, bonusChance: 0.14 },
  { level: 5, moveMs: 360, duration: 0.72, trapChance: 0.22, bonusChance: 0.16 }
];

function randomPosition(): Position {
  return {
    x: Math.floor(Math.random() * 84) + 3,
    y: Math.floor(Math.random() * 74) + 6
  };
}

function getLevelFromScore(score: number): LevelConfig {
  if (score >= 220) return LEVELS[4];
  if (score >= 150) return LEVELS[3];
  if (score >= 90) return LEVELS[2];
  if (score >= 40) return LEVELS[1];
  return LEVELS[0];
}

function getNextTargetKind(level: LevelConfig): TargetKind {
  const roll = Math.random();
  if (roll <= level.trapChance) return "trap";
  if (roll <= level.trapChance + level.bonusChance) return "bonus";
  return "normal";
}

export default function GamePage() {
  const [mode, setMode] = useState<Mode>("idle");
  const [time, setTime] = useState(GAME_DURATION_SECONDS);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [overdriveUntil, setOverdriveUntil] = useState(0);
  const [target, setTarget] = useState<TargetState>(() => ({ ...randomPosition(), kind: "normal", id: 0 }));
  const [flashMessage, setFlashMessage] = useState("Ready to lock target?");

  const audioCtxRef = useRef<AudioContext | null>(null);

  const level = useMemo(() => getLevelFromScore(score), [score]);
  const overdriveActive = overdriveUntil > Date.now();

  const multiplier = useMemo(() => {
    const comboMultiplier = Math.max(1, Math.floor(combo / 4) + 1);
    return overdriveActive ? comboMultiplier + 1 : comboMultiplier;
  }, [combo, overdriveActive]);

  const nextLevelGoal = useMemo(() => {
    if (level.level === 1) return 40;
    if (level.level === 2) return 90;
    if (level.level === 3) return 150;
    if (level.level === 4) return 220;
    return 300;
  }, [level.level]);

  const progressToNextLevel = useMemo(() => {
    const lowerBound = level.level === 1 ? 0 : level.level === 2 ? 40 : level.level === 3 ? 90 : level.level === 4 ? 150 : 220;
    const span = Math.max(1, nextLevelGoal - lowerBound);
    return Math.min(100, Math.max(0, ((score - lowerBound) / span) * 100));
  }, [level.level, nextLevelGoal, score]);

  const playTone = useCallback((freq: number, durationMs: number, type: OscillatorType = "sine") => {
    if (!soundOn) return;
    if (typeof window === "undefined") return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }

    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationMs / 1000);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000 + 0.02);
  }, [soundOn]);

  const spawnTarget = useCallback(() => {
    setTarget((prev) => ({ ...randomPosition(), kind: getNextTargetKind(level), id: prev.id + 1 }));
  }, [level]);

  const startGame = useCallback(() => {
    setMode("playing");
    setTime(GAME_DURATION_SECONDS);
    setScore(0);
    setCombo(0);
    setMisses(0);
    setOverdriveUntil(0);
    setFlashMessage("Acquired. Keep firing.");
    setTarget({ ...randomPosition(), kind: "normal", id: 1 });
    playTone(440, 100, "triangle");
  }, [playTone]);

  const finishGame = useCallback((message = "Session complete.") => {
    setMode("finished");
    setFlashMessage(message);
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem(BEST_SCORE_KEY, String(score));
      playTone(780, 220, "sawtooth");
    }
  }, [bestScore, playTone, score]);

  function handleTargetHit() {
    if (mode !== "playing") return;

    if (target.kind === "trap") {
      setMisses((value) => value + 1);
      setCombo(0);
      setScore((value) => Math.max(0, value - 8));
      setFlashMessage("Trap pulse! Stabilize...");
      playTone(180, 160, "square");
      spawnTarget();
      return;
    }

    const base = target.kind === "bonus" ? 8 : 4;
    const points = base * multiplier;

    setCombo((value) => {
      const nextCombo = value + 1;
      if (nextCombo >= COMBO_OVERDRIVE_TRIGGER) {
        setOverdriveUntil(Date.now() + OVERDRIVE_DURATION_MS);
        setFlashMessage("Overdrive online ⚡");
      }
      return nextCombo;
    });

    setScore((value) => value + points);
    setFlashMessage(target.kind === "bonus" ? `Critical +${points}` : `Hit +${points}`);
    playTone(target.kind === "bonus" ? 720 : 520, 90, "triangle");
    spawnTarget();
  }

  function handleArenaMiss() {
    if (mode !== "playing") return;
    setMisses((value) => value + 1);
    setCombo(0);
    setFlashMessage("Miss detected");
    playTone(220, 100, "square");
  }

  useEffect(() => {
    const raw = localStorage.getItem(BEST_SCORE_KEY);
    if (raw) setBestScore(Number(raw));
  }, []);

  useEffect(() => {
    if (mode !== "playing") return;

    const timer = setTimeout(() => {
      if (time <= 1) {
        finishGame("Clock reached zero.");
        return;
      }
      setTime((value) => value - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [finishGame, mode, time]);

  useEffect(() => {
    if (mode !== "playing") return;
    const movementInterval = setInterval(spawnTarget, level.moveMs);
    return () => clearInterval(movementInterval);
  }, [mode, level, spawnTarget]);

  useEffect(() => {
    if (mode !== "playing") return;
    if (misses >= 8) {
      finishGame("Reactor unstable: too many misses.");
    }
  }, [finishGame, misses, mode]);

  useEffect(() => {
    if (mode !== "playing") return;
    setFlashMessage(`Level ${level.level} engaged`);
    playTone(360 + level.level * 90, 70, "sine");
  }, [level.level, mode, playTone]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.code !== "Space") return;
      event.preventDefault();
      if (mode === "idle" || mode === "finished") {
        startGame();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, startGame]);

  return (
    <section className="section simplePage glassPanel neonGamePage">
      <div className="neonTopRow">
        <div>
          <h1>Neon Reactor // Level 1+</h1>
          <p>Arcade técnico com níveis, overdrive, alvo bônus e pulso-armadilha.</p>
        </div>
        <button className="btn btnGhost" onClick={() => setSoundOn((value) => !value)}>
          Sound: {soundOn ? "ON" : "OFF"}
        </button>
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

      <div className="neonGameHud">
        <p><strong>Tempo:</strong> {time}s</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Melhor:</strong> {bestScore}</p>
        <p><strong>Nível:</strong> {level.level}</p>
        <p><strong>Combo:</strong> {combo}</p>
        <p><strong>Multiplicador:</strong> x{multiplier}</p>
        <p><strong>Misses:</strong> {misses}/8</p>
        <p><strong>Status:</strong> {overdriveActive ? "Overdrive" : "Normal"}</p>
      </div>

      <div className="neonLevelMeter" aria-label="Level progress">
        <span style={{ width: `${progressToNextLevel}%` }} />
      </div>

      <p className="neonFlash" aria-live="polite">{flashMessage}</p>

      <div className={`neonArena ${overdriveActive ? "isOverdrive" : ""}`} role="application" aria-label="Game arena" onClick={handleArenaMiss}>
        {mode === "playing" ? (
          <button
            className={`neonTarget ${target.kind === "bonus" ? "isBonus" : ""} ${target.kind === "trap" ? "isTrap" : ""}`}
            style={{ left: `${target.x}%`, top: `${target.y}%`, animationDuration: `${level.duration}s` }}
            onClick={(event) => {
              event.stopPropagation();
              handleTargetHit();
            }}
            aria-label={`Target ${target.kind}`}
          >
            <span />
          </button>
        ) : (
          <div className="neonOverlay">
            <p>{mode === "finished" ? "Partida encerrada." : "Ready to lock target?"}</p>
            <button className="btn btnPrimary" onClick={startGame}>
              {mode === "finished" ? "Jogar novamente" : "Iniciar missão"}
            </button>
            <p className="neonHint">Dica: pressione espaço para iniciar.</p>
          </div>
        )}
      </div>

      <div className="neonGameHud">
        <p><strong>Tempo:</strong> {time}s</p>
        <p><strong>Score:</strong> {score}</p>
        <p><strong>Melhor:</strong> {bestScore}</p>
        <p><strong>Nível:</strong> {level.level}</p>
        <p><strong>Combo:</strong> {combo}</p>
        <p><strong>Multiplicador:</strong> x{multiplier}</p>
        <p><strong>Misses:</strong> {misses}/8</p>
        <p><strong>Status:</strong> {overdriveActive ? "Overdrive" : "Normal"}</p>
      </div>

      <div className="neonLevelMeter" aria-label="Level progress">
        <span style={{ width: `${progressToNextLevel}%` }} />
      </div>

      <p className="neonFlash" aria-live="polite">{flashMessage}</p>

      <div className={`neonArena ${overdriveActive ? "isOverdrive" : ""}`} role="application" aria-label="Game arena" onClick={handleArenaMiss}>
        {mode === "playing" ? (
          <button
            className={`neonTarget ${target.kind === "bonus" ? "isBonus" : ""} ${target.kind === "trap" ? "isTrap" : ""}`}
            style={{ left: `${target.x}%`, top: `${target.y}%`, animationDuration: `${level.duration}s` }}
            onClick={(event) => {
              event.stopPropagation();
              handleTargetHit();
            }}
            aria-label={`Target ${target.kind}`}
          >
            <span />
          </button>
        ) : (
          <div className="neonOverlay">
            <p>{mode === "finished" ? "Partida encerrada." : "Ready to lock target?"}</p>
            <button className="btn btnPrimary" onClick={startGame}>
              {mode === "finished" ? "Jogar novamente" : "Iniciar missão"}
            </button>
            <p className="neonHint">Dica: pressione espaço para iniciar.</p>
          </div>
        )}
      </div>
    </section>
  );
}
