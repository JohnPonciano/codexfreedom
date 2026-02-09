"use client";

import { useMemo, useState } from "react";
import { IncomeProject } from "@/lib/types";
import { ProjectForm } from "@/components/project-form";

export function ProjectsPanel({ initialProjects }: { initialProjects: IncomeProject[] }) {
  const [projects, setProjects] = useState(initialProjects);

  const totalGoal = useMemo(
    () => projects.reduce((acc, project) => acc + project.monthlyGoal, 0),
    [projects]
  );

  return (
    <section className="grid" style={{ gap: 18 }}>
      <ProjectForm onCreate={(project) => setProjects((current) => [project, ...current])} />

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Pipeline de receita</h3>
        <p style={{ opacity: 0.8 }}>Meta mensal combinada: R$ {totalGoal.toLocaleString("pt-BR")}</p>
        <div className="grid">
          {projects.length === 0 ? (
            <p>Nenhum projeto ainda. Comece pelo primeiro para ganhar tração contínua.</p>
          ) : (
            projects.map((project) => (
              <article
                key={project.id}
                style={{ border: "1px solid #2d3a66", borderRadius: 12, padding: 12 }}
              >
                <strong>{project.name}</strong>
                <p style={{ marginBottom: 0, opacity: 0.8 }}>
                  {project.model} • {project.cadence} • Meta R$ {project.monthlyGoal.toLocaleString("pt-BR")}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
