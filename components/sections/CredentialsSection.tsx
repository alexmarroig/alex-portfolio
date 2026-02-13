import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteContent } from "@/src/data/content";

export default function CredentialsSection() {
  return (
    <RevealSection className="section" id="credentials" staggerChildren>
      <SectionHeader title="Certifications & Recognition" lead="Credentials reflecting structured execution, agile discipline, and high-impact delivery." />

      <div className="credentialsGrid">
        {siteContent.certifications.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="glassPanel credentialCard credentialShine">
              <div className="credentialTop">
                <span className="credentialIcon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="credentialIssuer">{item.issuer}</p>
                </div>
              </div>
              <span className="credentialYear">{item.date}</span>
            </article>
          );
        })}
      </div>
    </RevealSection>
  );
}
