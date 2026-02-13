import type { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill, RiNodejsLine, RiReactjsLine, RiTailwindCssFill, RiVercelFill, RiWindowsFill } from "react-icons/ri";
import { SiGithub, SiPython, SiTypescript } from "react-icons/si";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

export type CoreStackCategory = {
  category: string;
  items: {
    label: string;
    icon: IconType;
  }[];
};

export const coreStack: CoreStackCategory[] = [
  {
    category: "Frontend",
    items: [
      { label: "Next.js", icon: RiNextjsFill },
      { label: "TypeScript", icon: SiTypescript },
      { label: "React", icon: RiReactjsLine },
      { label: "Node.js", icon: RiNodejsLine },
      { label: "TailwindCSS", icon: RiTailwindCssFill }
    ]
  },
  {
    category: "Automation & AI",
    items: [
      { label: "Python", icon: SiPython },
      { label: "PostgreSQL", icon: BiLogoPostgresql },
      { label: "Azure", icon: VscAzure },
      { label: "Power Automate", icon: VscAzureDevops }
    ]
  },
  {
    category: "Dev & Ops",
    items: [
      { label: "GitHub", icon: SiGithub },
      { label: "Vercel", icon: RiVercelFill },
      { label: "VS Code", icon: BiLogoVisualStudio },
      { label: "Windows", icon: RiWindowsFill }
    ]
  }
];
