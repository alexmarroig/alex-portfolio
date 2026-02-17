import RevealSection from "@/components/RevealSection";
import { siteContent } from "@/src/data/content";

export default function CapabilityGridSection() {
  return (
    <RevealSection className="section capabilitySection" id="capability-grid">
      <div className="capabilityGrid" role="list" aria-label="Capability grid">
        {siteContent.capabilityGrid.map((item) => {
          const Icon = item.icon;
          return (
            <article className="capabilityTile" key={item.title} role="listitem">
              <div className="capabilityTileHead">
                <span className="capabilityIcon"><Icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </RevealSection>
  );
}
