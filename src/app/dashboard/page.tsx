import Link from "next/link";
import { ProjectsPanel } from "@/components/projects-panel";
import { readProjects } from "@/lib/projects-store";

export default async function DashboardPage() {
  const projects = await readProjects();

  return (
    <main className="grid" style={{ gap: 20 }}>
      <Link href="/" style={{ opacity: 0.8 }}>
        ← Voltar
      </Link>
      <h1 style={{ margin: 0 }}>Dashboard de execução</h1>
      <p style={{ marginTop: 0, opacity: 0.8 }}>
        Transforme ideias em ativos recorrentes com metas mensais e cadência de entrega.
      </p>
      <ProjectsPanel initialProjects={projects} />
    </main>
  );
}
