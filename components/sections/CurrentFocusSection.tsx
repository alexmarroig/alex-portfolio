"use client";

import RevealSection from "@/components/RevealSection";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import StatusPill from "@/components/ui/StatusPill";
import Tag from "@/components/ui/Tag";
import { useSiteContent } from "@/src/data/siteContentContext";

export default function CurrentFocusSection() {
  const { content } = useSiteContent();
  const { currentFocus } = content;

  return (
    <RevealSection className="section" id="current-focus">
      <SectionTitle title="Current Focus" lead={currentFocus.lead} />

      <div className="focusLayout">
        <Card className="focusCard focusCardPrimary">
          <div className="focusCardHead">
            <h3>{currentFocus.main.title}</h3>
            <StatusPill status={currentFocus.main.status} />
          </div>
          <p>{currentFocus.main.summary}</p>
          <div className="tagRow">
            {currentFocus.main.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </Card>

        <div className="focusGridClean">
          {currentFocus.supporting.map((item) => (
            <Card className="focusCard" key={item.title}>
              <div className="focusCardHead">
                <h3>{item.title}</h3>
                <StatusPill status={item.status} />
              </div>
              <p>{item.summary}</p>
              <div className="tagRow">
                {item.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
