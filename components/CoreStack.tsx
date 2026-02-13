import { FaAws, FaReact } from "react-icons/fa";
import { RiNodejsLine, RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiPython } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { MdApi, MdSettingsSuggest } from "react-icons/md";
import { BsMicrosoft } from "react-icons/bs";

const stackItems = [
  { label: "Node.js", icon: RiNodejsLine },
  { label: "Python", icon: SiPython },
  { label: "SQL", icon: SiMysql },
  { label: "Power Platform", icon: BsMicrosoft },
  { label: "Azure", icon: VscAzure },
  { label: "AWS", icon: FaAws },
  { label: "React", icon: FaReact },
  { label: "Next.js", icon: RiNextjsFill },
  { label: "APIs", icon: MdApi },
  { label: "Automation", icon: MdSettingsSuggest }
];

export default function CoreStack() {
  return (
    <div className="stackIconGrid" role="list" aria-label="Technology stack">
      {stackItems.map((item) => {
        const Icon = item.icon;
        return (
          <article className="glassPanel stackIconCard" key={item.label} role="listitem">
            <span className="stackIconWrap">
              <Icon aria-hidden="true" />
            </span>
            <h3>{item.label}</h3>
          </article>
        );
      })}
    </div>
  );
}
