import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#current-focus", label: "Mission Control" },
  { href: "/game", label: "Neural Terminal" },
  { href: "/contact", label: "Contact" }
];

export default function Nav() {
  return (
    <header className="navShell">
      <div className="navInner">
        <div className="navBrandGroup">
          <Link href="/" className="navBrand">Alex de Freitas Marroig</Link>
          <div className="systemStatusIndicator">
            <span className="statusDot" />
            <span className="statusText">SYSTEM STATUS: OPTIMAL</span>
          </div>
        </div>

        <nav className="navGroup" aria-label="Primary">
          {links.map((link) => {
            return (
              <Link key={link.href} href={link.href} className="navLink">
                {link.label}
              </Link>
            );
          })}
          <a className="availabilityBadge" href="mailto:alex.c.marroig@gmail.com">Available for High-Impact Work</a>
        </nav>
      </div>
    </header>
  );
}
