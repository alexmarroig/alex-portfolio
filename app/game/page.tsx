"use client";

import { useEffect, useState } from "react";

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(20);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active || time <= 0) return;
    const t = setTimeout(() => setTime((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [active, time]);

  const start = () => {
    setScore(0);
    setTime(20);
    setActive(true);
  };

  return (
    <section className="section simplePage glassPanel">
      <h1>Play Game</h1>
      <p>Just for fun — because building should feel alive.</p>
      <p>Click the button as many times as you can in 20 seconds.</p>
      <p><strong>Score:</strong> {score} | <strong>Time:</strong> {time}s</p>
      <div className="heroActions">
        <button className="btn btnPrimary" onClick={start}>{active && time > 0 ? "Restart" : "Start"}</button>
        <button className="btn btnGhost" onClick={() => active && time > 0 && setScore((v) => v + 1)} disabled={!active || time <= 0}>
          Build +1
        </button>
      </div>
    </section>
  );
}
