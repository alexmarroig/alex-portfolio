import TechPill from "@/components/ui/TechPill";
import { siteContent } from "@/src/data/content";

export default function CoreStack() {
  return (
    <div className="stackGrid" role="list" aria-label="Core stack categories">
      {siteContent.stackCategories.map((group) => (
        <article className="glassPanel stackCard" key={group.category} role="listitem">
          <h3 className="stackTitle">{group.category}</h3>
          <div className="techPillGroup">
            {group.items.map((item) => (
              <TechPill key={item.label} icon={item.icon} label={item.label} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
