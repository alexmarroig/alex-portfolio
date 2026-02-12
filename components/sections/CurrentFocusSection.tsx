import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";

export default function CurrentFocusSection() {
  return (
    <RevealSection className="section" id="current-focus" staggerChildren>
      <h2 className="sectionTitle">Current Focus</h2>
      <p className="sectionLead">Where I create the most value right now.</p>

      <div className="focusGrid">
        <RevealItem order={0}>
          <article className="glassPanel focusCard">
            <h3>Open To</h3>
            <ul className="focusList">
              <li className="focusBullet">Full-time roles</li>
              <li className="focusBullet">Contract projects</li>
              <li className="focusBullet">Advisory partnerships</li>
              <li className="focusBullet">Technical PM / TPM / AI delivery</li>
            </ul>
          </article>
        </RevealItem>

        <RevealItem order={1}>
          <article className="glassPanel focusCard">
            <h3>Specialties</h3>
            <ul className="focusList">
              <li className="focusBullet">Delivery under enterprise constraints</li>
              <li className="focusBullet">Onboarding & implementation</li>
              <li className="focusBullet">QA strategy and release validation</li>
              <li className="focusBullet">Systems integration + AI-enabled automation</li>
            </ul>
          </article>
        </RevealItem>

        <RevealItem order={2}>
          <article className="glassPanel focusCard">
            <h3>What Sets Me Apart</h3>
            <ul className="focusList">
              <li className="focusBullet">I bridge business and engineering to ship production-ready systems.</li>
              <li className="focusBullet">QA-minded delivery: I test, instrument, and validate—not only timelines.</li>
              <li className="focusBullet">Post-M&A + regulated validation execution under compliance pressure.</li>
              <li className="focusBullet">Cross-industry execution: pharma, tech, oil & gas, manufacturing.</li>
            </ul>
          </article>
        </RevealItem>
      </div>
    </RevealSection>
  );
}
