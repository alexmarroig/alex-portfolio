type BadgeProps = {
  label: string;
  hint?: string;
  className?: string;
};

export default function Badge({ label, hint, className = "chip" }: BadgeProps) {
  return (
    <span className={className} title={hint} aria-label={hint ? `${label}: ${hint}` : label}>
      {label}
    </span>
  );
}
