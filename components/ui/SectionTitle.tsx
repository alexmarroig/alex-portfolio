export default function SectionTitle({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="sectionHeader">
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionLead">{lead}</p>
    </header>
  );
}
