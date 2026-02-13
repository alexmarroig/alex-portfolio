import type { IconType } from "react-icons";
import { BiLogoAws, BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { FaDatabase, FaFlask } from "react-icons/fa";
import { RiNextjsFill, RiNodejsLine, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiFastapi, SiGithub, SiPython, SiTypescript } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

type StackItem = {
  label: string;
  icon: IconType;
};

export type CoreStackCategory = {
  category: string;
  items: StackItem[];
};

export const coreStack: CoreStackCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      { label: "Python", icon: SiPython },
      { label: "Node.js", icon: RiNodejsLine },
      { label: "FastAPI", icon: SiFastapi },
      { label: "Flask", icon: FaFlask },
      { label: "React", icon: RiReactjsLine },
      { label: "Next.js", icon: RiNextjsFill },
      { label: "TypeScript", icon: SiTypescript },
      { label: "C#", icon: SiDotnet },
      { label: ".NET", icon: SiDotnet },
      { label: "TailwindCSS", icon: RiTailwindCssFill }
    ]
  },
  {
    category: "Data & Platforms",
    items: [
      { label: "PostgreSQL", icon: BiLogoPostgresql },
      { label: "Databases", icon: FaDatabase },
      { label: "AWS", icon: BiLogoAws },
      { label: "Azure", icon: TbBrandAzure }
    ]
  },
  {
    category: "Dev Workflow",
    items: [
      { label: "GitHub", icon: SiGithub },
      { label: "VS Code", icon: BiLogoVisualStudio }
    ]
  }
];
