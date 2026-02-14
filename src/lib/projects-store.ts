import { promises as fs } from "fs";
import path from "path";
import { IncomeProject } from "@/lib/types";

const projectsPath = path.join(process.cwd(), "data", "projects.json");

export async function readProjects(): Promise<IncomeProject[]> {
  const raw = await fs.readFile(projectsPath, "utf-8");
  return JSON.parse(raw) as IncomeProject[];
}

export async function writeProjects(projects: IncomeProject[]): Promise<void> {
  await fs.writeFile(projectsPath, JSON.stringify(projects, null, 2));
}
