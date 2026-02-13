import type { IconType } from "react-icons";

type TechPillProps = {
  icon: IconType;
  label: string;
};

export default function TechPill({ icon: Icon, label }: TechPillProps) {
  return (
    <span className="techPill">
      <Icon className="techPillIcon" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
