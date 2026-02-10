import Link from "next/link";

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
  opacity: 0.85
};

export default function Nav() {
  return (
    <header
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "14px 20px", display: "flex", gap: 16 }}>
        <Link href="/" style={{ ...linkStyle, fontWeight: 650, opacity: 1 }}>
          Alex Marroig
        </Link>
        <div style={{ marginLeft: "auto", display: "flex", gap: 14 }}>
          <Link href="/about" style={linkStyle}>About</Link>
          <Link href="/contact" style={linkStyle}>Contact</Link>
        </div>
      </div>
    </header>
  );
}
