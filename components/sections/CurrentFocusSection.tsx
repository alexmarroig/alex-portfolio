import SectionHeader from "@/components/ui/SectionHeader";
import StatusPill from "@/components/ui/StatusPill";
import TechBadge from "@/components/ui/TechBadge";
import RevealSection from "@/components/RevealSection";
import { siteContent } from "@/src/data/content";
import { techCatalog } from "@/src/data/techCatalog";

export default function CurrentFocusSection() {
  const main = siteContent.currentFocus.main;

  return (
    <RevealSection className="section" id="current-focus">
      <SectionHeader title="Current Focus" lead="A curated view of what I’m actively building, shipping, and targeting next." />

      <div className="focusCuratedGrid">
        <article className="glassPanel focusCuratedCard mainCard">
          <div className="focusHead">
            <h3>{main.title}</h3>
            <StatusPill status={main.status} />
          </div>
          <p>{main.summary}</p>
          <div className="badgeRow">
            {main.tags.map((tag) => (
              <TechBadge key={tag} {...techCatalog[tag]} />
            ))}
          </div>
        </article>

        {siteContent.currentFocus.supporting.map((item) => (
          <article key={item.title} className="glassPanel focusCuratedCard">
            <div className="focusHead">
              <h3>{item.title}</h3>
              <StatusPill status={item.status} />
            </div>
            <p>{item.summary}</p>
            <div className="badgeRow">
              {item.tags.map((tag) => (
                <TechBadge key={tag} {...techCatalog[tag]} compact />
              ))}
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
