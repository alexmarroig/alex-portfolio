import Link from "next/link";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
};

export default function ProjectCard({ title, subtitle, href, tag }: ProjectCardProps) {
  return (
    <Link href={href} className="card">
      <div className="cardHeader">
        <div className="cardTitle">{title}</div>
        <span className="cardTag">{tag}</span>
      </div>
      <p className="cardSubtitle">{subtitle}</p>
      <div className="cardAction">View case study →</div>
    </Link>
  );
}
