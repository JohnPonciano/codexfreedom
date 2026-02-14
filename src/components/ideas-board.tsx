import { MonetizationIdea } from "@/lib/types";

export function IdeasBoard({ ideas }: { ideas: MonetizationIdea[] }) {
  return (
    <section className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
      {ideas.map((idea) => (
        <article className="card" key={idea.id}>
          <p style={{ margin: 0, opacity: 0.7 }}>{idea.model}</p>
          <h3 style={{ marginTop: 8 }}>{idea.title}</h3>
          <p style={{ margin: "8px 0" }}>{idea.whyItWorks}</p>
          <p style={{ margin: "8px 0" }}>Previsibilidade: {idea.recurringScore}/10</p>
          <p style={{ margin: "8px 0" }}>Primeira receita: {idea.timeToFirstRevenue}</p>
          <ol style={{ marginBottom: 0, paddingLeft: 18 }}>
            {idea.execution.map((step) => (
              <li key={step} style={{ marginBottom: 6 }}>
                {step}
              </li>
            ))}
          </ol>
        </article>
      ))}
    </section>
  );
}
