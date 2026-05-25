export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import PlantForm from "@/components/admin/PlantForm";

export default async function EditPlantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const plant = await prisma.plant.findUnique({ where: { id } });
  if (!plant) notFound();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Edit Plant</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">{plant.name}</p>
      </div>
      <PlantForm plant={{ ...plant, tags: JSON.parse(plant.tags as string) as string[] }} />
    </div>
  );
}
