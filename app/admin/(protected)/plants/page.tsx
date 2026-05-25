export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import PlantsClient from "@/components/admin/PlantsClient";

export default async function AdminPlantsPage() {
  const plants = await prisma.plant.findMany({ orderBy: { name: "asc" } });
  return <PlantsClient plants={plants.map((p) => ({ ...p, tags: JSON.parse(p.tags as string) as string[] }))} />;
}
