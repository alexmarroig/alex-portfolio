import TechPill from "@/components/ui/TechPill";
import { coreStack } from "@/src/data/coreStack";

export default function CoreStack() {
  return (
    <div className="stackGrid" role="list" aria-label="Core stack categories">
      {coreStack.map((group) => (
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
