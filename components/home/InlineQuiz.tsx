"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { getPlantBySlug } from "@/lib/data/plants";
import { cn } from "@/lib/utils";

const lightOptions = [
  { label: "Dark room", sub: "Barely any windows", value: "low", emoji: "🌑" },
  { label: "Indirect light", sub: "Bright but no direct sun", value: "medium", emoji: "⛅" },
  { label: "Bright window", sub: "South or west facing", value: "bright", emoji: "☀️" },
];

const results: Record<string, string> = {
  low: "zz-plant",
  medium: "monstera-deliciosa",
  bright: "aloe-vera",
};

const reasons: Record<string, string> = {
  low: "Stores water in its roots and survives near-darkness. Impossible to kill.",
  medium: "Thrives in indirect light. Grows fast and fills a room with personality.",
  bright: "Loves full sun, barely needs watering, and doubles as a first-aid kit.",
};

export default function InlineQuiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const resultSlug = selected ? results[selected] : null;
  const plant = resultSlug ? getPlantBySlug(resultSlug) : null;

  const handleSelect = (value: string) => {
    setSelected(value);
    setTimeout(() => setRevealed(true), 400);
  };

  return (
    <section className="py-20 lg:py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {!revealed ? (
          <div>
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sage-pale text-forest rounded-full text-xs font-semibold mb-4">
                <Sparkles size={12} />
                30-second plant match
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-dark font-semibold leading-tight">
                What's your light like?
              </h2>
              <p className="mt-3 text-text-muted text-base max-w-sm mx-auto">
                One question. We'll show you your perfect plant.
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {lightOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={cn(
                    "group relative flex flex-col items-center text-center p-7 rounded-2xl border-2 transition-all duration-200 cursor-pointer",
                    selected === opt.value
                      ? "border-forest bg-sage-pale scale-[0.98]"
                      : "border-cream-border bg-white hover:border-sage hover:shadow-lg hover:-translate-y-1"
                  )}
                >
                  <span className="text-4xl mb-3">{opt.emoji}</span>
                  <span className="font-semibold text-text-dark text-sm">{opt.label}</span>
                  <span className="text-xs text-text-muted mt-1">{opt.sub}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-xs text-text-muted mt-6">
              Want the full match?{" "}
              <Link href="/quiz" className="text-forest font-medium hover:underline">
                Take the complete quiz →
              </Link>
            </p>
          </div>
        ) : (
          /* Result */
          plant && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
              {/* Plant image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-forest rounded-full text-xs font-bold">
                    Your match ✦
                  </span>
                </div>
              </div>

              {/* Result text */}
              <div>
                <div className="inline-flex items-center gap-2 text-sage font-medium text-sm mb-3">
                  <Leaf size={14} />
                  Based on your light
                </div>

                <h2 className="font-display text-4xl sm:text-5xl text-text-dark font-semibold leading-tight">
                  {plant.name}
                </h2>
                <p className="italic text-text-muted mt-1">{plant.scientificName}</p>

                <p className="mt-5 text-text-body leading-relaxed text-base">
                  {resultSlug && reasons[selected!]}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/encyclopedia/${plant.slug}`}
                    className="group inline-flex items-center gap-2 px-5 py-3 bg-forest text-white hover:bg-forest-dark rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                  >
                    Full care guide
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <button
                    onClick={() => { setSelected(null); setRevealed(false); }}
                    className="px-5 py-3 border border-cream-border text-text-muted hover:border-forest hover:text-forest rounded-xl font-medium text-sm transition-all duration-200"
                  >
                    Try again
                  </button>
                </div>

                <p className="mt-4 text-xs text-text-muted">
                  Want a more precise match?{" "}
                  <Link href="/quiz" className="text-forest font-medium hover:underline">
                    Take the full quiz →
                  </Link>
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
