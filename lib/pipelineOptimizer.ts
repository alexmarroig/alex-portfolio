// lib/pipelineOptimizer.ts

export type PipelineTask = {
  id: string;
  name: string;
  duration: number; // in minutes
  canParallelize: boolean;
  canAutomate: boolean;
  description: string;
};

export type PipelineState = {
  tasks: PipelineTask[];
  parallelized: Set<string>; // IDs of parallelized tasks
  automated: Set<string>; // IDs of automated tasks (reduce duration to 0.5x)
  orderChanged: boolean;
};

export const INITIAL_TASKS: PipelineTask[] = [
  {
    id: "build",
    name: "Build",
    duration: 5,
    canParallelize: false,
    canAutomate: true,
    description: "Compile & bundle"
  },
  {
    id: "unit-test",
    name: "Unit Tests",
    duration: 3,
    canParallelize: true,
    canAutomate: true,
    description: "Run test suite"
  },
  {
    id: "lint",
    name: "Linting",
    duration: 2,
    canParallelize: true,
    canAutomate: true,
    description: "Code quality checks"
  },
  {
    id: "docs",
    name: "Docs",
    duration: 2,
    canParallelize: true,
    canAutomate: false,
    description: "API documentation"
  },
  {
    id: "security",
    name: "Security Scan",
    duration: 4,
    canParallelize: true,
    canAutomate: true,
    description: "Dependency & code scan"
  },
  {
    id: "e2e-test",
    name: "E2E Tests",
    duration: 6,
    canParallelize: false,
    canAutomate: true,
    description: "Full flow testing"
  },
  {
    id: "deploy",
    name: "Deploy",
    duration: 3,
    canParallelize: false,
    canAutomate: true,
    description: "Push to production"
  }
];

/**
 * Calculate total time for current pipeline configuration
 * Sequential baseline: sum all durations
 * With parallelization: longest path through DAG
 * With automation: multiply automatable tasks by 0.5
 */
export function calculateTotalTime(state: PipelineState): number {
  // For simplicity: sum durations, minus time saved by parallelization and automation
  let totalTime = 0;

  for (const task of state.tasks) {
    let duration = task.duration;

    // Automation reduces duration to 50%
    if (state.automated.has(task.id) && task.canAutomate) {
      duration *= 0.5;
    }

    // Parallelization is "free" - we don't add it, just track it
    if (!state.parallelized.has(task.id)) {
      totalTime += duration;
    }
  }

  // Add ~30% of parallelized tasks time (rough estimation of parallelization benefit)
  let parallelTime = 0;
  for (const taskId of state.parallelized) {
    const task = state.tasks.find(t => t.id === taskId);
    if (task) {
      let duration = task.duration;
      if (state.automated.has(task.id) && task.canAutomate) {
        duration *= 0.5;
      }
      parallelTime += duration * 0.3; // Only 30% of time added (parallel benefit)
    }
  }

  return Math.round((totalTime + parallelTime) * 10) / 10;
}

/**
 * Calculate baseline time (sequential, no optimization)
 */
export function calculateBaselineTime(tasks: PipelineTask[]): number {
  return tasks.reduce((sum, task) => sum + task.duration, 0);
}

/**
 * Toggle task parallelization
 */
export function toggleParallelize(state: PipelineState, taskId: string): PipelineState {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task?.canParallelize) return state;

  const newParallelized = new Set(state.parallelized);
  if (newParallelized.has(taskId)) {
    newParallelized.delete(taskId);
  } else {
    newParallelized.add(taskId);
  }

  return { ...state, parallelized: newParallelized };
}

/**
 * Toggle task automation
 */
export function toggleAutomate(state: PipelineState, taskId: string): PipelineState {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task?.canAutomate) return state;

  const newAutomated = new Set(state.automated);
  if (newAutomated.has(taskId)) {
    newAutomated.delete(taskId);
  } else {
    newAutomated.add(taskId);
  }

  return { ...state, automated: newAutomated };
}

/**
 * Calculate percentage improvement
 */
export function calculateImprovement(baseline: number, optimized: number): number {
  if (baseline === 0) return 0;
  return Math.round(((baseline - optimized) / baseline) * 100);
}
