import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Droplets,
  Sun,
  Shield,
  Filter,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  plants,
  getAllCategories,
  type Plant,
} from "@/lib/data/plants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Plant Encyclopedia",
  description:
    "Browse 500+ indoor plant profiles with expert care guides, watering schedules, light requirements, and Q&As.",
};

function PlantCard({ plant }: { plant: Plant }) {
  return (
    <Link
      href={`/encyclopedia/${plant.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative h-52 overflow-hidden bg-sage-pale">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges row */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span
            className={cn(
              "px-2.5 py-1 rounded-full text-xs font-semibold",
              plant.careLevel === "Easy" && "badge-easy",
              plant.careLevel === "Medium" && "badge-medium",
              plant.careLevel === "Hard" && "badge-hard"
            )}
          >
            {plant.careLevel}
          </span>
          {plant.petSafe && (
            <span className="px-2.5 py-1 bg-white/90 text-forest rounded-full text-xs font-semibold">
              🐾
            </span>
          )}
          {plant.airPurifying && (
            <span className="px-2.5 py-1 bg-white/90 text-sage rounded-full text-xs font-semibold">
              💨
            </span>
          )}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-text-muted font-medium mb-0.5">
          {plant.category}
        </div>
        <h3 className="font-display text-lg font-semibold text-text-dark group-hover:text-forest transition-colors leading-tight">
          {plant.name}
        </h3>
        <p className="text-xs text-text-muted italic mt-0.5">
          {plant.scientificName}
        </p>

        <p className="mt-2 text-sm text-text-body leading-relaxed line-clamp-2 flex-1">
          {plant.tagline}
        </p>

        <div className="mt-3 pt-3 border-t border-cream-border flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Sun size={12} className="text-earth" />
            {plant.light}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Droplets size={12} className="text-sage" />
            {plant.water}
          </div>
          <div className="ml-auto">
            <ArrowRight
              size={14}
              className="text-text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

interface EncyclopediaPageProps {
  searchParams: Promise<{ q?: string; category?: string; level?: string }>;
}

export default async function EncyclopediaPage({ searchParams }: EncyclopediaPageProps) {
  const params = await searchParams;
  const query = params.q?.toLowerCase() ?? "";
  const category = params.category ?? "";
  const level = params.level ?? "";

  const filtered = plants.filter((p) => {
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.scientificName.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query)) ||
      p.category.toLowerCase().includes(query);

    const matchesCategory = !category || p.category === category;
    const matchesLevel = !level || p.careLevel === level;

    return matchesQuery && matchesCategory && matchesLevel;
  });

  const categories = getAllCategories();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="bg-forest py-20 pt-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1920&q=60&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-semibold">
              Plant <em className="text-sage-light">Encyclopedia</em>
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Detailed profiles, care guides, and expert Q&As for every indoor plant.
            </p>

            {/* Search */}
            <form method="get" className="mt-8 max-w-lg mx-auto">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Search plants — Monstera, Fern, Low light…"
                  className="w-full pl-11 pr-4 py-4 bg-white rounded-2xl border border-transparent focus:outline-none focus:border-sage text-text-dark placeholder-text-muted shadow-lg text-sm"
                />
              </div>
            </form>
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none">
              <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="#FDFAF4" />
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-text-muted text-sm">
              <Filter size={15} />
              <span>Filter:</span>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Link
                href="/encyclopedia"
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all",
                  !category
                    ? "bg-forest text-white"
                    : "bg-white border border-cream-border text-text-body hover:border-forest hover:text-forest"
                )}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/encyclopedia?category=${cat}`}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all",
                    category === cat
                      ? "bg-forest text-white"
                      : "bg-white border border-cream-border text-text-body hover:border-forest hover:text-forest"
                  )}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Difficulty */}
            <div className="flex gap-2 ml-auto">
              {["Easy", "Medium", "Hard"].map((lvl) => (
                <Link
                  key={lvl}
                  href={`/encyclopedia?${category ? `category=${category}&` : ""}level=${lvl}`}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                    level === lvl
                      ? lvl === "Easy"
                        ? "badge-easy ring-1 ring-forest"
                        : lvl === "Medium"
                        ? "badge-medium ring-1 ring-earth"
                        : "badge-hard ring-1 ring-terra"
                      : "bg-white border border-cream-border text-text-body hover:border-forest"
                  )}
                >
                  {lvl}
                </Link>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-text-muted mb-6">
            {filtered.length} plant{filtered.length !== 1 ? "s" : ""} found
            {query && ` for "${query}"`}
            {category && ` in ${category}`}
          </p>

          {/* Plant Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="font-display text-2xl text-text-dark font-semibold">
                No plants found
              </h3>
              <p className="mt-2 text-text-muted">
                Try a different search term or browse all plants
              </p>
              <Link
                href="/encyclopedia"
                className="mt-4 inline-flex items-center gap-2 px-5 py-3 bg-forest text-white rounded-full text-sm font-medium"
              >
                View all plants
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
