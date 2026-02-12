import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";

const areas = ["Systems Architecture", "AI Integration", "Technical PM Delivery", "Technical Consulting", "Workflow Automation"];

export default function ContractSection() {
  return (
    <RevealSection className="section contractSection" id="contract" staggerChildren>
      <div className="contractStatus" role="status" aria-label="Open to contract work">
        <span className="contractDot" aria-hidden="true" />
        Open to Contract Work
      </div>
      <h2 className="sectionTitle contractTitle">Let’s Build Something</h2>
      <p className="contractLead">
        Looking for high-impact delivery with strong technical execution, QA rigor, and stakeholder clarity? I help
        teams ship and scale reliably.
      </p>
      <a href="mailto:alex.c.marroig@gmail.com" className="contractCta">
        Start a Conversation
      </a>
      <p className="contractNote">Response in up to 48 hours</p>

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
