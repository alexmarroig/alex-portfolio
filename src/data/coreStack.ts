import type { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { RiNextjsFill, RiNodejsLine, RiOpenaiFill, RiReactjsLine, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiGithub, SiPython, SiTypescript } from "react-icons/si";

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
      { label: "React", icon: RiReactjsLine },
      { label: "TypeScript", icon: SiTypescript },
      { label: "TailwindCSS", icon: RiTailwindCssFill },
      { label: "Node.js", icon: RiNodejsLine }
    ]
  },
  {
    category: "AI & Data",
    items: [
      { label: "OpenAI", icon: RiOpenaiFill },
      { label: "Python", icon: SiPython },
      { label: "PostgreSQL", icon: BiLogoPostgresql }
    ]
  },
  {
    category: "Dev & Ops",
    items: [
      { label: "GitHub", icon: SiGithub },
      { label: "Vercel", icon: RiVercelFill },
      { label: "VS Code", icon: BiLogoVisualStudio }
    ]
  }
];
