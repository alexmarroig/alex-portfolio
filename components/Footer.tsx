export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="socialRow" aria-label="Social links">
          <a href="https://www.linkedin.com/in/alexmarroig/" target="_blank" rel="noreferrer" className="socialLink">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="socialLink">
            GitHub
          </a>
          <a href="mailto:alex.c.marroig@gmail.com" className="socialLink">
            Email
          </a>
        </div>
        <p className="footerCopy">© {new Date().getFullYear()} Alex Marroig. Built for thoughtful product delivery.</p>
      </div>
    </footer>
  );
}
