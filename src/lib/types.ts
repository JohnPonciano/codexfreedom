export type MonetizationIdea = {
  id: string;
  title: string;
  model: "Assinatura" | "Afiliado" | "Produto digital" | "SaaS";
  startupCost: "Baixo" | "Médio" | "Alto";
  timeToFirstRevenue: string;
  recurringScore: number;
  whyItWorks: string;
  execution: string[];
};

export type IncomeProject = {
  id: string;
  name: string;
  model: string;
  monthlyGoal: number;
  monthlyRevenue: number;
  cadence: "Semanal" | "Quinzenal" | "Mensal";
  createdAt: string;
};
