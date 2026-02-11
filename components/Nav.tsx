import Link from "next/link";

export default function Nav() {
  return (
    <header className="navShell">
      <div className="navInner">
        <Link href="/" className="navBrand">
          Alex Marroig
        </Link>

        <div className="navGroup">
          <Link href="/about" className="navLink">
            About
          </Link>
          <Link href="/contact" className="navLink">
            Contact
          </Link>
          <a href="mailto:alex.c.marroig@gmail.com" className="btn btnPrimary navCta">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
