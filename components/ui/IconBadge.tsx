import type { IconType } from "react-icons";

export default function IconBadge({ icon: Icon, label, note }: { icon: IconType; label: string; note?: string }) {
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
