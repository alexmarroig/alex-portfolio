"use client";

import RevealSection from "@/components/RevealSection";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import StatusPill from "@/components/ui/StatusPill";
import Tag from "@/components/ui/Tag";
import InbentaLogo from "@/components/InbentaLogo";
import { useSiteContent } from "@/src/data/siteContentContext";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function CurrentFocusSection() {
  const { content } = useSiteContent();
  const { currentFocus } = content;
  const { employer } = currentFocus;

  return (
    <RevealSection className="section currentFocusSectionV2" id="current-focus">
      <SectionTitle title="Current Focus" lead={currentFocus.lead} />

      {employer && (
        <article className="employerSpotlight" aria-label={`Currently working at ${employer.company}`}>
          <div className="employerSpotlightTop">
            <div className="employerLogoBlock">
              <div className="employerLogoWrap">
                <InbentaLogo variant="mark" className="employerLogoSvg" />
              </div>
              <div className="employerLiveBadge" aria-hidden="true">
                <span className="liveDot" />
                <span>LIVE</span>
              </div>
            </div>

            <div className="employerHeadBlock">
              <div className="employerCompanyRow">
                <span className="employerNowTag">
                  <FaBriefcase aria-hidden="true" />
                  Currently at
                </span>
                <div className="employerCompanyBrand">
                  <InbentaLogo
                    variant="full"
                    wordmarkColor="#1e1be8"
                    className="employerCompanyWordmark"
                  />
                </div>
                <span className="employerSince">{employer.since}</span>
              </div>
              <p className="employerRole">{employer.role}</p>
              <p className="employerSummary">{employer.summary}</p>
            </div>
          </div>

          <div className="employerInitiatives">
            <p className="employerInitiativesLabel">Key Initiatives</p>
            <ul className="employerInitiativesList">
              {employer.initiatives.map((init) => (
                <li key={init} className="employerInitiativeItem">
                  <FaCheckCircle aria-hidden="true" className="employerInitiativeIcon" />
                  <span>{init}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="employerTags">
            {employer.tags.map((tag) => (
              <span key={tag} className="employerTag">
                {tag}
              </span>
            ))}
          </div>
        </article>
      )}

      <div className="focusDivider">
        <span className="focusDividerLine" />
        <span className="focusDividerText">Building on the Side</span>
        <span className="focusDividerLine" />
      </div>

      <div className="focusLayoutV2">
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

        <div className="focusGridV2">
          {currentFocus.supporting.map((item) => (
            <Card className="focusCard focusCardSupport" key={item.title}>
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
