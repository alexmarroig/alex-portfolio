import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="socialRow" aria-label="Social links">
          <a href="https://www.linkedin.com/in/alexmarroig/" target="_blank" rel="noreferrer" className="socialLink">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href="https://github.com/alexmarroig" target="_blank" rel="noreferrer" className="socialLink">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
        </div>
        <p className="footerCopy">© 2026 Alex de Freitas Marroig</p>
        <p className="footerVersion">v2.0 · Interactive resume experience</p>
      </div>
    </footer>
  );
}
