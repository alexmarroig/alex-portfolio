import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div>
          <p className="footerCopy">© 2026 Alex Marroig</p>
          <p className="footerTagline">Built for thoughtful product delivery</p>
          <p className="footerVersion">Building in Public v1.0</p>
        </div>

        <div className="socialRow" aria-label="Social links">
          <a href="https://github.com/alexmarroig" target="_blank" rel="noreferrer" className="socialLink" aria-label="GitHub">
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/alexmarroig/" target="_blank" rel="noreferrer" className="socialLink" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href="mailto:alex.c.marroig@gmail.com" className="socialLink" aria-label="Email Alex">
            <FaEnvelope aria-hidden="true" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
