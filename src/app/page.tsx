import Link from "next/link";
import { IdeasBoard } from "@/components/ideas-board";
import { MonetizationIdea } from "@/lib/types";
import { promises as fs } from "fs";
import path from "path";

async function getIdeas() {
  const ideasPath = path.join(process.cwd(), "data", "ideas.json");
  const raw = await fs.readFile(ideasPath, "utf-8");
  return JSON.parse(raw) as MonetizationIdea[];
}

export default async function HomePage() {
  const ideas = await getIdeas();

  return (
    <main className="grid" style={{ gap: 24 }}>
      <header className="card" style={{ padding: 24 }}>
        <p style={{ marginTop: 0, opacity: 0.7 }}>RendaLoop • Fullstack Next.js</p>
        <h1 style={{ margin: "8px 0 12px" }}>Nicho escolhido: Finanças para criadores e freelancers</h1>
        <p style={{ maxWidth: 720 }}>
          Agora o app está direcionado para um nicho único: pessoas que produzem conteúdo e profissionais autônomos
          que precisam de previsibilidade de renda mensal.
        </p>
        <Link href="/dashboard">
          <button>Abrir dashboard</button>
        </Link>
      </header>

      <section className="grid" style={{ gap: 10 }}>
        <h2 style={{ marginBottom: 0 }}>Modelos recomendados</h2>
        <p style={{ marginTop: 0, opacity: 0.8 }}>
          Curadoria prática para monetizar com recorrência no nicho de finanças para criadores.
        </p>
        <IdeasBoard ideas={ideas} />
      </section>
    </main>
  );
}
