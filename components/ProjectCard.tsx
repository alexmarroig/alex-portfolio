import Link from "next/link";

export default function ProjectCard(props: {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
}) {
  const { title, subtitle, href, tag } = props;

  return (
    <Link href={href} className="card">
      <div className="cardHeader">
        <div className="cardTitle">{title}</div>
        <span className="cardTag">{tag}</span>
      </div>
      <p className="cardSubtitle">{subtitle}</p>
      <div className="cardAction">View case study →</div>
        <div className="cardTag">{tag}</div>
      </div>
      <div className="cardSubtitle">{subtitle}</div>
      <div className="cardAction">View →</div>
    </Link>
  );
}
