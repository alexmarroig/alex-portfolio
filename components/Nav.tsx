"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/#selected-work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#current-focus", label: "Current Focus" },
  { href: "/contact", label: "Contact" }
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
          <Link href="/" className="navLink">
            Home
          </Link>
          <Link href="/#about" className="navLink">
            About
          </Link>
          <Link href="/contact" className="navLink">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
