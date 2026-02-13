import RevealItem from "@/components/RevealItem";
import RevealSection from "@/components/RevealSection";

const focusColumns = [
  {
    title: "Open To",
    items: [
      "Technical Project Manager (Senior/IC)",
      "Product Leadership",
      "Contract Projects & Advisory"
    ]
  },
  {
    title: "Specialties",
    items: [
      "Production Systems Engineering",
      "Industrial IoT & AI",
      "Low-Code & RAG Pipelines",
      "Fleet Automation"
    ]
  },
  {
    title: "What Sets Me Apart",
    items: [
      "I bridge business outcomes and code-level execution.",
      "Cross-industry delivery from M&A integration to QA and automation programs.",
      "Fluent in Portuguese and English for global stakeholder alignment."
    ]
  }
] as const;

export default function CurrentFocusSection() {
  return (
    <RevealSection className="section" id="current-focus" staggerChildren>
      <h2 className="sectionTitle">Current Focus</h2>
      <p className="sectionLead">Where I can create immediate leverage for teams and products.</p>

      <div className="focusColumnsGrid">
        {focusColumns.map((column, index) => (
          <RevealItem order={index} key={column.title}>
            <article className="glassPanel focusColumnCard">
              <h3>{column.title}</h3>
              <ul className="focusColumnList">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </RevealItem>
        ))}
      </div>
    </RevealSection>
  );
}
