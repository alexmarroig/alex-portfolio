export default function Tag({ label, className = "" }: { label: string; className?: string }) {
  return <span className={`tag ${className}`.trim()}>{label}</span>;
}
