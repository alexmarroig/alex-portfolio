import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";

const areas = [
  "Systems Architecture",
  "Full-Stack Development",
  "AI/ML Integration",
  "Technical Project Management",
  "QA & Testing"
];

export default function ContractSection() {
  return (
    <RevealSection className="section contractSection" id="contract" staggerChildren>
      <div className="contractStatus" role="status" aria-label="Availability">
        <span className="contractDot" aria-hidden="true" />
        Open to full-time, contract, or consulting roles
      </div>
      <h2 className="sectionTitle contractTitle">Let&apos;s Build Something</h2>
      <p className="contractLead">
        If you need someone who can align stakeholders, design the system, and deliver with QA rigor—I&apos;m ready to help.
      </p>
      <a href="mailto:alex.c.marroig@gmail.com" className="contractCta">
        Start a Conversation
      </a>
      <p className="contractNote">Typical response time: within 48 hours.</p>

      <div className="contractDivider" aria-hidden="true" />

      <h3 className="contractSubTitle">What I Take On</h3>
      <div className="contractChipRow">
        {areas.map((item, index) => (
          <RevealItem order={index} key={item}>
            <span className="contractChip">{item}</span>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
