import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { MonetizationIdea } from "@/lib/types";

export async function GET() {
  const ideasPath = path.join(process.cwd(), "data", "ideas.json");
  const raw = await fs.readFile(ideasPath, "utf-8");
  const ideas = JSON.parse(raw) as MonetizationIdea[];
  return NextResponse.json(ideas);
}
