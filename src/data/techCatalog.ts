import type { IconType } from "react-icons";
import {
  SiConfluence,
  SiGoogleanalytics,
  SiHtml5,
  SiJira,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiSap,
  SiTypescript,
  SiTableau
} from "react-icons/si";
import { RiFileExcel2Line, RiFlowChart, RiNextjsFill } from "react-icons/ri";
import { FaDatabase, FaRobot, FaTasks, FaChartBar, FaRegLifeRing } from "react-icons/fa";
import { MdApi, MdInsights } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";

export type TechKey =
  | "API"
  | "MySQL/SQL"
  | "HTML/CSS"
  | "Power Apps"
  | "Power Automate"
  | "Google Analytics"
  | "NLP"
  | "RAG"
  | "Jira"
  | "Confluence"
  | "ClickUp"
  | "MS Project"
  | "Primavera P6"
  | "ServiceNow"
  | "SAP"
  | "Power BI"
  | "Tableau"
  | "VBA"
  | "Next.js"
  | "React"
  | "TypeScript"
  | "Node";

export const techCatalog: Record<TechKey, { label: string; icon?: IconType }> = {
  API: { label: "API", icon: MdApi },
  "MySQL/SQL": { label: "MySQL/SQL", icon: SiMysql },
  "HTML/CSS": { label: "HTML/CSS", icon: SiHtml5 },
  "Power Apps": { label: "Power Apps", icon: TbBrandVscode },
  "Power Automate": { label: "Power Automate", icon: RiFlowChart },
  "Google Analytics": { label: "Google Analytics", icon: SiGoogleanalytics },
  NLP: { label: "NLP", icon: MdInsights },
  RAG: { label: "RAG", icon: FaRobot },
  Jira: { label: "Jira", icon: SiJira },
  Confluence: { label: "Confluence", icon: SiConfluence },
  ClickUp: { label: "ClickUp", icon: FaTasks },
  "MS Project": { label: "MS Project", icon: FaDatabase },
  "Primavera P6": { label: "Primavera P6", icon: RiFileExcel2Line },
  ServiceNow: { label: "ServiceNow", icon: FaRegLifeRing },
  SAP: { label: "SAP", icon: SiSap },
  "Power BI": { label: "Power BI", icon: FaChartBar },
  Tableau: { label: "Tableau", icon: SiTableau },
  VBA: { label: "VBA", icon: RiFileExcel2Line },
  "Next.js": { label: "Next.js", icon: RiNextjsFill },
  React: { label: "React", icon: SiReact },
  TypeScript: { label: "TypeScript", icon: SiTypescript },
  Node: { label: "Node", icon: SiNodedotjs }
};
