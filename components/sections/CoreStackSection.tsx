import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";

export default function CoreStackSection() {
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
        ))}
      </div>
    </RevealSection>
  );
}
