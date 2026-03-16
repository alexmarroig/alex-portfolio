"use client";

import { useState, useMemo } from "react";
import {
  INITIAL_TASKS,
  PipelineState,
  calculateTotalTime,
  calculateBaselineTime,
  toggleParallelize,
  toggleAutomate,
  calculateImprovement
} from "@/lib/pipelineOptimizer";

export default function PipelineOptimizerGame() {
  const [state, setState] = useState<PipelineState>({
    tasks: INITIAL_TASKS,
    parallelized: new Set(),
    automated: new Set(),
    orderChanged: false
  });

  const baselineTime = useMemo(
    () => calculateBaselineTime(state.tasks),
    [state.tasks]
  );

  const optimizedTime = useMemo(
    () => calculateTotalTime(state),
    [state]
  );

  const improvement = useMemo(
    () => calculateImprovement(baselineTime, optimizedTime),
    [baselineTime, optimizedTime]
  );

  return (
    <div className="pipelineGame">
      <h2 className="cardTitle">PIPELINE OPTIMIZATION LAB</h2>

      <p className="cardText">
        This deployment pipeline takes <strong>{baselineTime} minutes</strong> sequentially.
        Optimize it by marking tasks as parallelizable or automatable.
      </p>

      {/* Baseline vs Optimized */}
      <div className="pipelineComparison">
        <div className="comparisonColumn">
          <div className="comparisonLabel">BASELINE</div>
          <div className="comparisonTime">{baselineTime}m</div>
        </div>
        <div className="comparisonArrow">→</div>
        <div className="comparisonColumn optimized">
          <div className="comparisonLabel">OPTIMIZED</div>
          <div className="comparisonTime">{optimizedTime}m</div>
        </div>
        <div className="improvementBadge">
          <div className="improvementPercent">{improvement}%</div>
          <div className="improvementLabel">Faster</div>
        </div>
      </div>

      {/* Task List */}
      <div className="tasksList">
        <div className="tasksHeader">
          <span>TASK</span>
          <span>DURATION</span>
          <span>PARALLEL</span>
          <span>AUTO</span>
        </div>

        {state.tasks.map((task) => (
          <div key={task.id} className="taskRow">
            <div className="taskInfo">
              <div className="taskName">{task.name}</div>
              <div className="taskDesc">{task.description}</div>
            </div>

            <div className="taskDuration">
              {state.automated.has(task.id)
                ? (task.duration * 0.5).toFixed(1)
                : task.duration}
              m
            </div>

            <button
              className={`taskToggle ${
                state.parallelized.has(task.id) ? "active" : ""
              } ${!task.canParallelize ? "disabled" : ""}`}
              onClick={() => setState(toggleParallelize(state, task.id))}
              disabled={!task.canParallelize}
              title={task.canParallelize ? "Parallelize this task" : "Cannot parallelize"}
            >
              {state.parallelized.has(task.id) ? "∥" : "⊥"}
            </button>

            <button
              className={`taskToggle ${
                state.automated.has(task.id) ? "active" : ""
              } ${!task.canAutomate ? "disabled" : ""}`}
              onClick={() => setState(toggleAutomate(state, task.id))}
              disabled={!task.canAutomate}
              title={task.canAutomate ? "Automate this task" : "Cannot automate"}
            >
              {state.automated.has(task.id) ? "🤖" : "⚙️"}
            </button>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="gameResult">
        <p className="resultText">
          <strong>You optimized the pipeline:</strong> {baselineTime}m → {optimizedTime}m
          ({improvement}% reduction)
        </p>
        <p className="resultSubtext">
          {improvement >= 50
            ? "Excellent! Enterprise-grade optimization."
            : improvement >= 30
            ? "Good! Solid improvements achieved."
            : "Nice start. Try parallelizing more tasks."}
        </p>
      </div>

      <style jsx>{`
        .pipelineGame {
          width: 100%;
        }

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
          margin-bottom: 25px;
          font-size: 0.95rem;
        }

        .pipelineComparison {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 30px 0;
          padding: 20px;
          background: rgba(73, 241, 255, 0.05);
          border: 1px solid rgba(73, 241, 255, 0.2);
          border-radius: 4px;
        }

        .comparisonColumn {
          flex: 1;
          background: rgba(0, 0, 0, 0.3);
          padding: 15px;
          border-radius: 4px;
          border: 1px solid rgba(73, 241, 255, 0.1);
        }

        .comparisonColumn.optimized {
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.05);
        }

        .comparisonLabel {
          font-size: 0.65rem;
          color: rgba(73, 241, 255, 0.6);
          margin-bottom: 5px;
        }

        .comparisonTime {
          font-size: 1.5rem;
          color: #49f1ff;
          font-weight: bold;
        }

        .comparisonColumn.optimized .comparisonTime {
          color: #22c55e;
        }

        .comparisonArrow {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .improvementBadge {
          background: rgba(34, 197, 94, 0.1);
          border: 2px solid #22c55e;
          padding: 15px;
          border-radius: 4px;
          text-align: center;
          min-width: 80px;
        }

        .improvementPercent {
          font-size: 1.8rem;
          color: #22c55e;
          font-weight: bold;
        }

        .improvementLabel {
          font-size: 0.65rem;
          color: #22c55e;
          margin-top: 5px;
        }

        .tasksList {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(73, 241, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          margin: 25px 0;
        }

        .tasksHeader {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 15px;
          padding: 12px 15px;
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(73, 241, 255, 0.1);
          font-size: 0.65rem;
          color: rgba(73, 241, 255, 0.6);
          font-weight: bold;
        }

        .taskRow {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 15px;
          padding: 12px 15px;
          align-items: center;
          border-bottom: 1px solid rgba(73, 241, 255, 0.05);
          transition: background 0.2s ease;
        }

        .taskRow:hover {
          background: rgba(73, 241, 255, 0.05);
        }

        .taskInfo {
          min-width: 0;
        }

        .taskName {
          color: #49f1ff;
          font-weight: bold;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }

        .taskDesc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
        }

        .taskDuration {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          text-align: right;
        }

        .taskToggle {
          background: transparent;
          border: 1px solid rgba(73, 241, 255, 0.3);
          color: #49f1ff;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.85rem;
          transition: all 0.2s ease;
          font-weight: bold;
        }

        .taskToggle:hover:not(.disabled) {
          background: rgba(73, 241, 255, 0.1);
          border-color: #49f1ff;
        }

        .taskToggle.active {
          background: rgba(73, 241, 255, 0.2);
          border-color: #49f1ff;
          box-shadow: 0 0 10px rgba(73, 241, 255, 0.3);
        }

        .taskToggle.disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .gameResult {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          padding: 20px;
          border-radius: 4px;
          margin-top: 25px;
        }

        .resultText {
          color: #22c55e;
          font-size: 0.95rem;
          margin: 0 0 10px 0;
        }

        .resultSubtext {
          color: rgba(34, 197, 94, 0.8);
          font-size: 0.85rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
