import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="simplePage glassPanel">
      <h1>Contact</h1>

      <p>
        Open to full-time and part-time roles, contract projects, and advisory
        partnerships.
      </p>

      <ul className="contactList">
        <li>
          <FaEnvelope className="contactIcon" />
          <a href="mailto:alex.c.marroig@gmail.com">
            alex.c.marroig@gmail.com
          </a>
        </li>

        <li>
          <FaLinkedin className="contactIcon" />
          <a
            href="https://www.linkedin.com/in/alexmarroig/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/alexmarroig
          </a>
        </li>

        <li>
          <FaGithub className="contactIcon" />
          <a
            href="https://github.com/alexmarroig"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/alexmarroig
          </a>
        </li>
      </ul>
    </section>
  );
}
