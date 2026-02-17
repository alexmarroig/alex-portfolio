import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";
"use client";

import RevealSection from "@/components/RevealSection";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import SectionTitle from "@/components/ui/SectionTitle";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function CoreStackSection() {
  const { content } = useSiteContent();

  return (
    <RevealSection className="section" id="core-stack">
      <SectionTitle title="Technology & Systems Stack" lead="A focused toolkit for shipping products, integrations, and reliable operations." />
      <div className="stackCategoryGrid">
        {siteContent.stackCategories.map((group) => (
          <article key={group.category} className="stackCategoryCard">
            <h3>{group.category}</h3>
            <div className="stackChipGrid">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="stackChip">
                    <Icon aria-hidden="true" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </article>
      <SectionTitle title="Technology & Systems Stack" lead="A practical stack for delivery, reliability, and hands-on implementation." />

      <div className="stackCategoryGrid">
        {content.stackCategories.map((group) => (
          <Card key={group.category} className="stackCategoryCard">
            <h3>{group.category}</h3>
            <div className="stackList">
              {group.items.map((item) => (
                <IconBadge key={item.name} icon={item.icon} label={item.name} note={item.note} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </RevealSection>
  );
}
