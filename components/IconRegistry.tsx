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
  FaRegClock
} from "react-icons/fa";
import { SiReact, SiTestinglibrary, SiVercel, SiNodedotjs, SiTypescript, SiPython, SiPostgresql, SiGithubactions } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdIntegrationInstructions } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import { RiNextjsFill, RiRobot2Line } from "react-icons/ri";
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
  SiReact,
  SiTestinglibrary,
  SiVercel,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiPostgresql,
  HiOutlineSparkles,
  MdIntegrationInstructions,
  VscAzure,
  RiNextjsFill,
  RiRobot2Line,
  SiGithubactions
};

export type IconName = keyof typeof IconRegistry;

export function getIcon(name: string): IconType {
  return IconRegistry[name] || FaProjectDiagram;
}
