import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";
import { siteContent } from "@/src/data/content";

export default function CurrentFocusSection() {
  return (
    <RevealSection className="section" id="current-focus">
      <h2 className="sectionTitle">Current Focus</h2>
      <p className="sectionLead">Execution priorities where I deliver immediate leverage.</p>

      <div className="focusVerticalStack">
        {siteContent.currentFocus.map((item, index) => (
          <RevealItem order={index} key={item.title}>
            <article className="glassPanel focusVerticalCard">
              <div className="focusVerticalHead">
                <h3>{item.title}</h3>
                <span className={`focusStatus ${item.status === "ACTIVE" ? "statusActive" : "statusFoundational"}`}>{item.status}</span>
              </div>
              <p>{item.description}</p>
            </article>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
