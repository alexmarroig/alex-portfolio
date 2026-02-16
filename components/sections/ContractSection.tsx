"use client";

import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function ContractSection() {
  const { content } = useSiteContent();
  const { contract } = content;

  return (
    <RevealSection className="section contractSection" id="contract" staggerChildren>
      <div className="contractStatus" role="status" aria-label="Availability">
        <span className="contractDot" aria-hidden="true" />
        {contract.availability}
      </div>
      <h2 className="sectionTitle contractTitle">{contract.title}</h2>
      <p className="contractLead">
        {contract.lead}
      </p>
      <a href="mailto:alex.c.marroig@gmail.com" className="contractCta">
        {contract.ctaLabel}
      </a>
      <p className="contractNote">{contract.note}</p>

      <div className="contractDivider" aria-hidden="true" />

      <h3 className="contractSubTitle">{contract.subTitle}</h3>
      <div className="contractChipRow">
        {contract.areas.map((item, index) => (
          <RevealItem order={index} key={item}>
            <span className="contractChip">{item}</span>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
