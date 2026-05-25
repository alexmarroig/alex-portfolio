"use client";

import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function CompaniesMarqueeSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section companiesSection" id="companies">
      <SectionTitle
        title="Trusted by Industry Leaders"
        lead="Some of the largest companies in the world and in Brazil — Fortune 500 enterprises and major Brazilian groups I've delivered products and engineering projects for, across energy, banking, healthcare, pharma, automotive, and SaaS."
      />

      {content.companies.map((group, groupIdx) => {
        // Duplicate the array to create seamless infinite scroll
        const items = [...group.companies, ...group.companies];
        const animationDirection = groupIdx % 2 === 0 ? "marqueeLeft" : "marqueeRight";

        return (
          <div className="companiesGroup" key={group.label}>
            <div className="companiesGroupHeader">
              <h3 className="companiesGroupLabel">{group.label}</h3>
              <span className="companiesGroupDesc">{group.description}</span>
              <span className="companiesGroupCount">{group.companies.length}</span>
            </div>

            <div className="marqueeViewport">
              <div className={`marqueeTrack ${animationDirection}`}>
                {items.map((company, idx) => (
                  <div className="companyChip" key={`${company.name}-${idx}`}>
                    <span className="companyChipName">{company.name}</span>
                    {company.sector && (
                      <span className="companyChipSector">{company.sector}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </RevealSection>
  );
}
