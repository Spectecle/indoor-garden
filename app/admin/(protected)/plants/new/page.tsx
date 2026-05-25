import PlantForm from "@/components/admin/PlantForm";

export default function NewPlantPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Add Plant</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Add a new plant to the encyclopedia</p>
      </div>
      <PlantForm />
    </div>
  );
}
