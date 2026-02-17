import RevealSection from "@/components/RevealSection";
import SectionTitle from "@/components/ui/SectionTitle";
import StatusPill from "@/components/ui/StatusPill";
import Tag from "@/components/ui/Tag";
import { siteContent } from "@/src/data/content";

export default function CurrentFocusSection() {
  return (
    <RevealSection className="section" id="current-focus">
      <SectionTitle title="Current Focus" lead={siteContent.currentFocus.lead} />

      <div className="focusRows">
        {siteContent.currentFocus.items.map((item) => (
          <article className="focusRowCard" key={item.title}>
            <div className="focusRowHead">
              <h3>{item.title}</h3>
              <StatusPill status={item.status} />
            </div>
            <p>{item.summary}</p>
            <div className="tagRow">
              {item.tags.slice(0, 3).map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
