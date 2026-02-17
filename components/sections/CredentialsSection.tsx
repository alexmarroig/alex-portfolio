import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";

export default function CredentialsSection() {
  return (
    <RevealSection className="section" id="credentials" staggerChildren>
      <SectionTitle title="Credentials & Recognition" lead="Certifications and recognition from complex delivery environments." />

      <div className="credentialsRows">
        <div className="credentialsGrid">
          {siteContent.certifications.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="credentialCard">
                <div className="credentialTop">
                  <span className="credentialIcon"><Icon aria-hidden="true" /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="credentialIssuer">{item.issuer}</p>
                  </div>
                </div>
                <span className="credentialYear">{item.state}</span>
              </article>
            );
          })}
        </div>

        <div className="awardsGrid">
          {siteContent.awards.map((award) => {
            const Icon = award.icon;
            return (
              <article key={award.title} className="awardCard">
                <span className="credentialIcon"><Icon aria-hidden="true" /></span>
                <div>
                  <h3>{award.title}</h3>
                  <p>{award.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
