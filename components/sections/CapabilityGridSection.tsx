"use client";

import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { useSiteContent } from "@/src/data/siteContentContext";
import { getIcon } from "@/components/IconRegistry";

export default function CapabilityGridSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection
      className="section capabilitySectionV2"
      id="capability-grid"
      staggerChildren
    >
      <SectionTitle
        title="What I Bring to the Table"
        lead="Hands-on engineering plus enterprise-grade delivery — backed by 9+ years across pharma, energy, banking, and AI SaaS."
      />

      <div className="capabilityGridV2" role="list" aria-label="Capability grid">
        {content.capabilityGrid.map((item, idx) => {
          const Icon = getIcon(item.icon);
          const accent = item.accent ?? "#49f1ff";
          return (
            <article
              className="capabilityTileV2"
              key={item.title}
              role="listitem"
              style={{ "--cap-accent": accent, "--cap-delay": `${idx * 60}ms` } as React.CSSProperties}
            >
              <div className="capabilityTileGlow" aria-hidden="true" />

              <div className="capabilityTileTop">
                <span className="capabilityIconV2" aria-hidden="true">
                  <Icon />
                </span>
                {item.metric && (
                  <div className="capabilityMetric">
                    <span className="capabilityMetricValue">{item.metric}</span>
                    {item.metricLabel && (
                      <span className="capabilityMetricLabel">{item.metricLabel}</span>
                    )}
                  </div>
                )}
              </div>

              <h3 className="capabilityTitleV2">{item.title}</h3>
              <p className="capabilityDescV2">{item.description}</p>

              <span className="capabilityCornerMark" aria-hidden="true">
                ↗
              </span>
            </article>
          );
        })}
      </div>
    </RevealSection>
  );
}
