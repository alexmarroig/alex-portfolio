import RevealSection from "@/components/RevealSection";
import { siteContent } from "@/src/data/content";

export default function CredentialsSection() {
  return (
    <RevealSection className="section" id="credentials" staggerChildren>
      <h2 className="sectionTitle">Credentials & Recognition</h2>
      <p className="sectionLead">{siteContent.credentials.subtitle}</p>

      <div className="credentialsGrid">
        {[...siteContent.credentials.certs, ...siteContent.credentials.awards].map((item) => {
          const Icon = item.icon;
          const isAward = siteContent.credentials.awards.some((award) => award.title === item.title);
          return (
            <article key={`${item.title}-${item.issuer}`} className={`glassPanel credentialCard ${isAward ? "awardCard" : "certCard"}`}>
              <div className="credentialTop">
                <span className="credentialIcon"><Icon aria-hidden="true" /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="credentialIssuer">{item.issuer}</p>
                </div>
              </div>
              <span className="credentialYear">{item.year}</span>
              <p className="credentialCopy">{item.description}</p>
            </article>
          );
        })}
      </div>
    </RevealSection>
  );
}
