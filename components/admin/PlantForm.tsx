"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlantData {
  id?: string;
  slug?: string;
  name?: string;
  scientificName?: string;
  tagline?: string;
  description?: string;
  image?: string;
  heroImage?: string;
  category?: string;
  tags?: string[];
  careLevel?: string;
  light?: string;
  water?: string;
  humidity?: string;
  temperature?: string;
  petSafe?: boolean;
  airPurifying?: boolean;
  growthRate?: string;
  maxHeight?: string;
  nativeRegion?: string;
  featured?: boolean;
  published?: boolean;
}

const CATEGORIES = ["Foliage", "Succulents & Cacti", "Tropical", "Herbs", "Air Plants", "Hanging", "Flowering"];
const CARE_LEVELS = ["Easy", "Medium", "Hard"];
const LIGHT_LEVELS = ["Low", "Medium", "Bright indirect", "Full sun"];
const WATER_FREQ = ["Once a week", "Every 10 days", "Every 2 weeks", "Monthly", "Every 5-7 days", "Every 3-4 days"];
const HUMIDITY = ["Low", "Medium", "High"];
const GROWTH_RATES = ["Slow", "Moderate", "Fast"];

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

export default function PlantForm({ plant }: { plant?: PlantData }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: plant?.name || "",
    slug: plant?.slug || "",
    scientificName: plant?.scientificName || "",
    tagline: plant?.tagline || "",
    description: plant?.description || "",
    image: plant?.image || "",
    heroImage: plant?.heroImage || "",
    category: plant?.category || CATEGORIES[0],
    tags: plant?.tags?.join(", ") || "",
    careLevel: plant?.careLevel || "Easy",
    light: plant?.light || "Medium",
    water: plant?.water || "Once a week",
    humidity: plant?.humidity || "Medium",
    temperature: plant?.temperature || "60–80°F",
    petSafe: plant?.petSafe || false,
    airPurifying: plant?.airPurifying || false,
    growthRate: plant?.growthRate || "Moderate",
    maxHeight: plant?.maxHeight || "",
    nativeRegion: plant?.nativeRegion || "",
    featured: plant?.featured || false,
    published: plant?.published !== false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(key: string, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
    };

    const url = plant?.id ? `/api/admin/plants/${plant.id}` : "/api/admin/plants";
    const method = plant?.id ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/plants");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Failed to save");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl">
      <div className="space-y-6">
        {/* Basic info */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Basic information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => { set("name", e.target.value); if (!plant?.id) set("slug", slugify(e.target.value)); }}
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => set("slug", e.target.value)}
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Scientific name</label>
              <input
                type="text"
                value={form.scientificName}
                onChange={(e) => set("scientificName", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm italic placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Tagline</label>
              <input
                type="text"
                value={form.tagline}
                onChange={(e) => set("tagline", e.target.value)}
                placeholder="One-sentence hook"
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                rows={4}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors resize-none"
              />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Card image URL</label>
              <input
                type="url"
                value={form.image}
                onChange={(e) => set("image", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Hero image URL</label>
              <input
                type="url"
                value={form.heroImage}
                onChange={(e) => set("heroImage", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Category</label>
              <select value={form.category} onChange={(e) => set("category", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Tags</label>
              <input type="text" value={form.tags} onChange={(e) => set("tags", e.target.value)} placeholder="Low light, Pet safe" className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Native region</label>
              <input type="text" value={form.nativeRegion} onChange={(e) => set("nativeRegion", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Max height</label>
              <input type="text" value={form.maxHeight} onChange={(e) => set("maxHeight", e.target.value)} placeholder="3 feet" className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
          </div>
        </div>

        {/* Care requirements */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Care requirements</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { key: "careLevel", label: "Care level", options: CARE_LEVELS },
              { key: "light", label: "Light", options: LIGHT_LEVELS },
              { key: "water", label: "Watering", options: WATER_FREQ },
              { key: "humidity", label: "Humidity", options: HUMIDITY },
              { key: "growthRate", label: "Growth rate", options: GROWTH_RATES },
            ].map(({ key, label, options }) => (
              <div key={key}>
                <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">{label}</label>
                <select value={(form as Record<string, unknown>)[key] as string} onChange={(e) => set(key, e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors">
                  {options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Temperature</label>
              <input type="text" value={form.temperature} onChange={(e) => set("temperature", e.target.value)} placeholder="60–80°F" className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
          </div>

          <div className="mt-4 flex gap-6">
            {[
              { key: "petSafe", label: "Pet safe" },
              { key: "airPurifying", label: "Air purifying" },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" checked={(form as Record<string, unknown>)[key] as boolean} onChange={(e) => set(key, e.target.checked)} className="sr-only" />
                  <div className={cn("w-9 h-5 rounded-full transition-colors", (form as Record<string, unknown>)[key] ? "bg-[#2C5F2E]" : "bg-[#1a221a]")}>
                    <div className={cn("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform", (form as Record<string, unknown>)[key] ? "translate-x-4" : "translate-x-0.5")} />
                  </div>
                </div>
                <span className="text-white text-sm">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Settings</h2>
          <div className="space-y-3">
            {([
              { key: "featured", label: "Featured", desc: "Show in homepage featured plants" },
              { key: "published", label: "Published", desc: "Visible in the encyclopedia" },
            ] as const).map(({ key, label, desc }) => (
              <label key={key} className="flex items-center gap-4 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" checked={form[key]} onChange={(e) => set(key, e.target.checked)} className="sr-only" />
                  <div className={cn("w-10 h-5 rounded-full transition-colors", form[key] ? "bg-[#2C5F2E]" : "bg-[#1a221a]")}>
                    <div className={cn("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform", form[key] ? "translate-x-5" : "translate-x-0.5")} />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{label}</p>
                  <p className="text-[#3a4e3a] text-xs">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{error}</p>}

        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()} className="flex items-center gap-2 text-[#4a5e4a] hover:text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#111611] transition-colors">
            <ArrowLeft size={14} /> Cancel
          </button>
          <button type="submit" disabled={saving} className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
            <Save size={14} />
            {saving ? "Saving..." : plant?.id ? "Save changes" : "Add plant"}
          </button>
        </div>
      </div>
    </form>
  );
}
