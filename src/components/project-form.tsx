"use client";

import { useState } from "react";
import { IncomeProject } from "@/lib/types";

const INITIAL_FORM = {
  name: "",
  model: "Assinatura",
  monthlyGoal: 1500,
  cadence: "Semanal"
};

export function ProjectForm({ onCreate }: { onCreate: (project: IncomeProject) => void }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, monthlyGoal: Number(form.monthlyGoal) })
    });

    setSubmitting(false);

    if (!response.ok) {
      return;
    }

    const created = (await response.json()) as IncomeProject;
    onCreate(created);
    setForm(INITIAL_FORM);
  }

  return (
    <form className="card grid" onSubmit={handleSubmit}>
      <h3 style={{ margin: 0 }}>Criar novo projeto</h3>
      <label>
        Nome do projeto
        <input
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          required
        />
      </label>
      <label>
        Modelo
        <select
          value={form.model}
          onChange={(event) => setForm((current) => ({ ...current, model: event.target.value }))}
        >
          <option>Assinatura</option>
          <option>Afiliado</option>
          <option>Produto digital</option>
          <option>SaaS</option>
        </select>
      </label>
      <label>
        Meta de renda mensal (R$)
        <input
          type="number"
          min={200}
          value={form.monthlyGoal}
          onChange={(event) => setForm((current) => ({ ...current, monthlyGoal: Number(event.target.value) }))}
        />
      </label>
      <label>
        Cadência de execução
        <select
          value={form.cadence}
          onChange={(event) => setForm((current) => ({ ...current, cadence: event.target.value as "Semanal" | "Quinzenal" | "Mensal" }))}
        >
          <option>Semanal</option>
          <option>Quinzenal</option>
          <option>Mensal</option>
        </select>
      </label>
      <button type="submit" disabled={submitting}>
        {submitting ? "Salvando..." : "Criar projeto"}
      </button>
    </form>
  );
}
