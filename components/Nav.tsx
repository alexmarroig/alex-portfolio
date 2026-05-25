import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#core-stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/game", label: "Live CLI" },
  { href: "/Alex-Marroig-Resume-2026.pdf", label: "Resume", external: true },
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
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="navLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  {link.label}
                </a>
              );
            }
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
