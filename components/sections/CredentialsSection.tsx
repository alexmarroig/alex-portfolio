"use client";

import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { useSiteContent } from "@/src/data/siteContentContext";
import { getIcon } from "@/components/IconRegistry";
import { FaTrophy } from "react-icons/fa";

// Per-credential accent palette (cycled by index, but mapped to icon kind)
const CREDENTIAL_ACCENTS: Record<string, { color: string; tag: string }> = {
  FaProjectDiagram: { color: "#49f1ff", tag: "Certified" },
  SiScrumalliance: { color: "#22c55e", tag: "Scrum" },
  FaCogs: { color: "#facc15", tag: "Lean" },
  FaRocket: { color: "#ff3ea6", tag: "Product" },
  FaUserGraduate: { color: "#c084fc", tag: "MBA" },
  FaUniversity: { color: "#fb923c", tag: "B.Sc." },
};

export default function CredentialsSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section credentialsSectionV2" id="credentials" staggerChildren>
      <SectionTitle
        title="Certifications & Awards"
        lead="Verified credentials with delivery recognition from enterprise and industrial environments."
      />

      <div className="credentialsGridV2">
        {content.certifications.map((item) => {
          const Icon = getIcon(item.icon);
          const accent = CREDENTIAL_ACCENTS[item.icon] ?? { color: "#49f1ff", tag: "Cert" };
          return (
            <article
              key={item.title}
              className="credentialCardV2"
              style={{ "--cred-accent": accent.color } as React.CSSProperties}
            >
              <div className="credentialIconV2" aria-hidden="true">
                <Icon />
              </div>
              <div className="credentialBody">
                <span className="credentialTag">{accent.tag}</span>
                <h3 className="credentialTitleV2">{item.title}</h3>
                <p className="credentialIssuer">{item.issuer}</p>
              </div>
              <span className="credentialYearV2">{item.year}</span>
            </article>
          );
        })}
      </div>

      <div className="awardsBlock">
        <div className="awardsBlockHeader">
          <span className="awardsBlockIcon" aria-hidden="true">
            <FaTrophy />
          </span>
          <h3 className="awardsBlockTitle">Recognitions & Honors</h3>
        </div>
        <ul className="awardsList" role="list">
          {content.awards.map((award) => (
            <li key={award} className="awardItem">
              <span className="awardBullet" aria-hidden="true" />
              <span className="awardText">{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  );
}
