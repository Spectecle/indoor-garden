"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Eye, EyeOff, Trash2, Pencil, Leaf, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Plant {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  category: string;
  careLevel: string;
  featured: boolean;
  published: boolean;
  tags: string[];
}

const CARE_COLORS: Record<string, string> = {
  Easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Hard: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function PlantsClient({ plants: initial }: { plants: Plant[] }) {
  const [plants, setPlants] = useState(initial);
  const [search, setSearch] = useState("");

  const filtered = plants.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.scientificName.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  async function togglePublished(id: string, published: boolean) {
    await fetch(`/api/admin/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !published }),
    });
    setPlants((prev) => prev.map((p) => (p.id === id ? { ...p, published: !published } : p)));
  }

  async function deletePlant(id: string) {
    if (!confirm("Delete this plant? This cannot be undone.")) return;
    await fetch(`/api/admin/plants/${id}`, { method: "DELETE" });
    setPlants((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Plants</h1>
          <p className="text-[#4a5e4a] text-sm mt-1">{plants.length} entries in encyclopedia</p>
        </div>
        <Link
          href="/admin/plants/new"
          className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={15} />
          Add plant
        </Link>
      </div>

      <div className="relative mb-6">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3a4e3a]" />
        <input
          type="text"
          placeholder="Search plants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#0d120d] border border-[#1a221a] rounded-xl pl-9 pr-4 py-2.5 text-white text-sm placeholder-[#3a4e3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
        />
      </div>

      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[2fr_1fr_1fr_100px_80px_100px] px-5 py-3 border-b border-[#1a221a]">
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Plant</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Category</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Care level</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Featured</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-center">Status</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-right">Actions</span>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#3a4e3a]">
            <Leaf size={28} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No plants found</p>
          </div>
        )}

        {filtered.map((plant) => (
          <div
            key={plant.id}
            className="grid grid-cols-[2fr_1fr_1fr_100px_80px_100px] px-5 py-4 border-b border-[#141c14] last:border-0 hover:bg-[#0f150f] transition-colors items-center"
          >
            <div className="min-w-0 pr-4">
              <p className="text-white text-sm font-medium truncate">{plant.name}</p>
              <p className="text-[#4a5e4a] text-xs italic">{plant.scientificName}</p>
            </div>

            <span className="text-[#5a6e5a] text-xs">{plant.category}</span>

            <span className={cn("text-xs font-semibold px-2 py-1 rounded-lg border inline-flex w-fit", CARE_COLORS[plant.careLevel] || CARE_COLORS.Easy)}>
              {plant.careLevel}
            </span>

            <div>
              {plant.featured ? (
                <span className="flex items-center gap-1 text-[11px] text-[#7AA95C] bg-[#1a2e1a] border border-[#2a3e2a] px-2 py-1 rounded-lg w-fit">
                  <Star size={9} className="fill-[#7AA95C]" /> Featured
                </span>
              ) : (
                <span className="text-[#3a4e3a] text-xs">—</span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => togglePublished(plant.id, plant.published)}
                className={cn(
                  "flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors",
                  plant.published
                    ? "bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20"
                    : "bg-[#1a1a1a] text-[#4a4a4a] hover:bg-[#222]"
                )}
              >
                {plant.published ? <Eye size={10} /> : <EyeOff size={10} />}
                {plant.published ? "Live" : "Draft"}
              </button>
            </div>

            <div className="flex items-center justify-end gap-1">
              <Link
                href={`/encyclopedia/${plant.slug}`}
                target="_blank"
                className="p-2 text-[#3a4e3a] hover:text-[#7AA95C] hover:bg-[#1a2e1a] rounded-lg transition-colors"
                title="View on site"
              >
                <Eye size={13} />
              </Link>
              <Link
                href={`/admin/plants/${plant.id}`}
                className="p-2 text-[#3a4e3a] hover:text-[#b5c9a5] hover:bg-[#141c14] rounded-lg transition-colors"
              >
                <Pencil size={13} />
              </Link>
              <button
                onClick={() => deletePlant(plant.id)}
                className="p-2 text-[#3a4e3a] hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
