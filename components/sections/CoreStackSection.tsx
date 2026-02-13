import RevealSection from "@/components/RevealSection";
import Card from "@/components/ui/Card";
import IconBadge from "@/components/ui/IconBadge";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteContent } from "@/src/data/content";

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack">
      <SectionTitle title="Technology & Systems Stack" lead="A practical stack for delivery, reliability, and hands-on implementation." />

      <div className="stackCategoryGrid">
        {siteContent.stackCategories.map((group) => (
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
