import { NextRequest, NextResponse } from "next/server";
import { readProjects, writeProjects } from "@/lib/projects-store";
import { IncomeProject } from "@/lib/types";

export async function GET() {
  const projects = await readProjects();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    name?: string;
    model?: string;
    monthlyGoal?: number;
    cadence?: IncomeProject["cadence"];
  };

  if (!body.name || !body.model || !body.monthlyGoal || !body.cadence) {
    return NextResponse.json({ message: "Dados inválidos" }, { status: 400 });
  }

  const projects = await readProjects();

  const nextProject: IncomeProject = {
    id: crypto.randomUUID(),
    name: body.name,
    model: body.model,
    monthlyGoal: body.monthlyGoal,
    monthlyRevenue: 0,
    cadence: body.cadence,
    createdAt: new Date().toISOString()
  };

  const updated = [nextProject, ...projects];
  await writeProjects(updated);

  return NextResponse.json(nextProject, { status: 201 });
}
