import Link from "next/link";

export default function ProjectCard(props: {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
}) {
  const { title, subtitle, href, tag } = props;

  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 14,
        padding: 16,
        display: "block"
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{tag}</div>
      </div>
      <div style={{ marginTop: 8, opacity: 0.85 }}>{subtitle}</div>
      <div style={{ marginTop: 12, fontSize: 13, opacity: 0.7 }}>View →</div>
    </Link>
  );
}
