import Link from "next/link";

export default function Nav() {
  return (
    <header className="navShell">
      <div className="navInner">
        <Link href="/" className="navBrand">
          Alex Marroig
        </Link>

        <nav className="navGroup" aria-label="Primary">
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
