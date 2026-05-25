import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplets, Sun } from "lucide-react";
import { getFeaturedPlants } from "@/lib/data/plants";
import { cn } from "@/lib/utils";

export default function FeaturedPlants() {
  const plants = getFeaturedPlants().slice(0, 4);
  const [hero, ...rest] = plants;

  if (!hero) return null;

  return (
    <section className="py-20 lg:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — minimal */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">
              Plant Encyclopedia
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-text-dark font-semibold">
              Where to start
            </h2>
          </div>
          <Link
            href="/encyclopedia"
            className="hidden sm:flex items-center gap-1.5 text-sm text-text-muted hover:text-forest transition-colors group"
          >
            All 500+ plants
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Hero plant — spans 3 columns */}
          <Link
            href={`/encyclopedia/${hero.slug}`}
            className="lg:col-span-3 group relative rounded-2xl overflow-hidden bg-sage-pale min-h-[420px] flex flex-col justify-end"
          >
            <Image
              src={hero.heroImage}
              alt={hero.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0e]/80 via-[#0d1a0e]/20 to-transparent" />

            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-semibold",
                  hero.careLevel === "Easy" ? "bg-sage/20 text-sage-light" :
                  hero.careLevel === "Medium" ? "bg-earth/20 text-earth-light" :
                  "bg-terra/20 text-terra-light"
                )}>
                  {hero.careLevel} care
                </span>
                {hero.petSafe && (
                  <span className="px-2.5 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                    🐾 Pet safe
                  </span>
                )}
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white font-semibold leading-tight">
                {hero.name}
              </h3>
              <p className="mt-2 text-white/60 text-sm max-w-xs">{hero.tagline}</p>
              <div className="mt-4 flex items-center gap-4 text-white/50 text-xs">
                <span className="flex items-center gap-1.5">
                  <Sun size={12} className="text-earth-light" />
                  {hero.light}
                </span>
                <span className="flex items-center gap-1.5">
                  <Droplets size={12} className="text-sage-light" />
                  {hero.water}
                </span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Care guide <ArrowRight size={14} />
              </div>
            </div>
          </Link>

          {/* 3 smaller plants — 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.slice(0, 3).map((plant) => (
              <Link
                key={plant.id}
                href={`/encyclopedia/${plant.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-sage-pale flex-1 min-h-[130px] flex items-end"
              >
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0e]/70 to-transparent" />
                <div className="relative p-4 flex items-end justify-between w-full">
                  <div>
                    <h3 className="font-display text-lg text-white font-semibold leading-tight">
                      {plant.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-0.5">{plant.light} · {plant.careLevel}</p>
                  </div>
                  <ArrowRight
                    size={15}
                    className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile — view all */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/encyclopedia"
            className="inline-flex items-center gap-2 text-sm text-forest font-medium"
          >
            View all 500+ plants <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
