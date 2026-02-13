import RevealSection from "@/components/RevealSection";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";

export default function CredentialsSection() {
  return (
    <RevealSection className="section" id="credentials" staggerChildren>
      <SectionTitle title="Certifications & Awards" lead="Verified credentials with delivery recognition from enterprise and industrial environments." />

      <div className="credentialsGrid">
        {siteContent.certifications.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="credentialCard">
              <div className="credentialTop">
                <span className="credentialIcon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="credentialIssuer">{item.issuer}</p>
                </div>
              </div>
              <span className="credentialYear">{item.year}</span>
            </Card>
          );
        })}
      </div>

      <div className="awardsTicker" role="list" aria-label="Awards history">
        {siteContent.awards.map((award) => (
          <span key={award} role="listitem" className="tag">
            {award}
          </span>
        ))}
      </div>
    </RevealSection>
  );
}
