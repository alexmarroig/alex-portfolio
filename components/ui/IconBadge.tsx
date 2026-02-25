import { getIcon } from "@/components/IconRegistry";

export default function IconBadge({ icon, label, note }: { icon: string; label: string; note?: string }) {
  const Icon = getIcon(icon);
  return (
    <div className="iconBadge">
      <span className="iconBadgeIcon" aria-hidden="true">
        <Icon />
      </span>
      <div>
        <h4>{label}</h4>
        {note ? <p>{note}</p> : null}
      </div>
    </div>
  );
}
