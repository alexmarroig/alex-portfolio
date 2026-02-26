"use client";

import RevealSection from "@/components/RevealSection";
import { useSiteContent } from "@/src/data/siteContentContext";
import { getIcon } from "@/components/IconRegistry";

export default function CapabilityGridSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section capabilitySection" id="capability-grid">
      <div className="capabilityGrid" role="list" aria-label="Capability grid">
        {content.capabilityGrid.map((item) => {
          const Icon = getIcon(item.icon);
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
