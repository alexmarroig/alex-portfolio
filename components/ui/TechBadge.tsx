import type { IconType } from "react-icons";

type TechBadgeProps = {
  label: string;
  icon?: IconType;
  compact?: boolean;
};

export default function TechBadge({ label, icon: Icon, compact }: TechBadgeProps) {
  return (
    <span className={`techBadge ${compact ? "isCompact" : ""}`} aria-label={label}>
      {Icon ? <Icon className="techBadgeIcon" aria-hidden="true" /> : null}
      <span>{label}</span>
    </span>
  );
}
