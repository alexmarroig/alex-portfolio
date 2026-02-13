"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#current-focus", label: "Mission Control" },
  { href: "/contact", label: "Contact" },
  { href: "/game", label: "Play Game (Optional)" }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="navShell">
      <div className="navInner">
        <Link href="/" className="navBrand">
          Alex de Freitas Marroig
        </Link>

        <nav className="navGroup" aria-label="Primary">
          {links.map((link) => {
            const routePath = link.href.split("#")[0] || "/";
            const isActive = routePath === pathname;
            return (
              <Link key={link.href} href={link.href} className={`navLink ${isActive ? "isActive" : ""}`}>
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
