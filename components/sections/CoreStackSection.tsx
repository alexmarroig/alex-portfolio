import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";
import TechPill from "@/components/ui/TechPill";
import { coreStack } from "@/src/data/coreStack";

export default function CoreStackSection() {
  return (
    <RevealSection className="section" id="core-stack" staggerChildren>
      <h2 className="sectionTitle">Core Stack</h2>
      <p className="sectionLead">Core languages, frameworks, and cloud tooling I use to ship reliable systems.</p>
      <div className="stackGrid">
        {coreStack.map((group, index) => (
          <RevealItem order={index} key={group.category}>
            <article className="glassPanel stackCard">
              <h3 className="stackTitle">{group.category}</h3>
              <div className="techPillGroup">
                {group.items.map((item) => (
                  <TechPill key={item.label} icon={item.icon} label={item.label} />
                ))}
              </div>
            </article>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
