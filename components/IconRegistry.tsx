import {
  FaProjectDiagram,
  FaNetworkWired,
  FaMedal,
  FaShieldAlt,
  FaAward,
  FaHeart,
  FaCross,
  FaHome,
  FaAws,
  FaJenkins,
  FaRegClock,
  FaChartLine,
  FaTasks,
  FaRocket,
  FaUsers
} from "react-icons/fa";
import {
  SiReact,
  SiTestinglibrary,
  SiVercel,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiGithubactions,
  SiDocker,
  SiSupabase,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiFastapi,
  SiOpenai,
  SiAnthropic,
  SiLangchain,
  SiJira,
  SiAsana,
  SiClickup,
  SiNotion,
  SiTableau,
  SiSap,
  SiScrumalliance,
  SiExpo
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdIntegrationInstructions, MdAutoAwesome } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import { RiNextjsFill, RiRobot2Line, RiFlowChart } from "react-icons/ri";
import { IconType } from "react-icons";

export const IconRegistry: Record<string, IconType> = {
  FaProjectDiagram,
  FaNetworkWired,
  FaMedal,
  FaShieldAlt,
  FaAward,
  FaHeart,
  FaCross,
  FaHome,
  FaAws,
  FaJenkins,
  FaRegClock,
  FaChartLine,
  FaTasks,
  FaRocket,
  FaUsers,
  SiReact,
  SiTestinglibrary,
  SiVercel,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiSupabase,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiFastapi,
  SiOpenai,
  SiAnthropic,
  SiLangchain,
  SiJira,
  SiAsana,
  SiClickup,
  SiNotion,
  SiTableau,
  SiSap,
  SiScrumalliance,
  SiExpo,
  HiOutlineSparkles,
  MdIntegrationInstructions,
  MdAutoAwesome,
  VscAzure,
  RiNextjsFill,
  RiRobot2Line,
  RiFlowChart,
  SiGithubactions
};

export type IconName = keyof typeof IconRegistry;

export function getIcon(name: string): IconType {
  return IconRegistry[name] || FaProjectDiagram;
}
