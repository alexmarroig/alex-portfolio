import type { ProjectStatus } from "@/src/data/content";

export default function StatusPill({ status }: { status: ProjectStatus }) {
  return <span className={`statusPill status-${status.toLowerCase().replace(/\s+/g, "-")}`}>{status}</span>;
}
