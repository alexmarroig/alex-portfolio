import TechBadge from "@/components/ui/TechBadge";
import { siteContent } from "@/src/data/content";
import { techCatalog } from "@/src/data/techCatalog";

export default function CoreStack() {
  return (
    <div className="stackGrid" role="list" aria-label="Core stack categories">
      {siteContent.stackCategories.map((group) => (
        <article className="glassPanel stackCard" key={group.category} role="listitem">
          <h3 className="stackTitle">{group.category}</h3>
          <div className="badgeRow">
            {group.items.map((item) => (
              <TechBadge key={item} {...techCatalog[item]} compact />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
