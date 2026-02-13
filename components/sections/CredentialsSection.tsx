import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteContent } from "@/src/data/content";

export default function CredentialsSection() {
  return (
    <RevealSection className="section" id="credentials" staggerChildren>
      <SectionHeader title="Certifications & Awards" lead="Credentials that reflect disciplined execution and sustained delivery impact." />

      <div className="credentialsGrid">
        {siteContent.certifications.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="glassPanel credentialCard">
              <div className="credentialTop">
                <span className="credentialIcon"><Icon aria-hidden="true" /></span>
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

      <div className="awardsPanel glassPanel">
        <h3>Awards</h3>
        {siteContent.awards.map((award) => {
          const Icon = award.icon;
          return (
            <p key={award.title} className="awardLine"><Icon aria-hidden="true" /> <strong>{award.title}</strong> — {award.detail}</p>
          );
        })}
      </div>
    </RevealSection>
  );
}
