import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Sun,
  Droplets,
  Thermometer,
  Wind,
  Shield,
  TrendingUp,
  ChevronRight,
  Leaf,
  CheckCircle,
  AlertTriangle,
  Star,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPlantBySlug, plants } from "@/lib/data/plants";
import { products } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface PlantPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return plants.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PlantPageProps): Promise<Metadata> {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);
  if (!plant) return {};
  return {
    title: plant.name,
    description: plant.tagline,
  };
}

function CareCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-cream-border flex flex-col gap-2">
      <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center", color)}>
        <Icon size={16} className="text-white" />
      </div>
      <div className="text-xs text-text-muted font-medium">{label}</div>
      <div className="font-semibold text-text-dark text-sm">{value}</div>
    </div>
  );
}

export default async function PlantDetailPage({ params }: PlantPageProps) {
  const { slug } = await params;
  const plant = getPlantBySlug(slug);

  if (!plant) notFound();

  const relatedProducts = products.filter((p) =>
    p.relatedPlants.includes(plant.slug)
  ).slice(0, 3);

  const relatedPlants = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Breadcrumb */}
        <div className="bg-cream-dark border-b border-cream-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/encyclopedia" className="hover:text-forest transition-colors">Encyclopedia</Link>
              <ChevronRight size={12} />
              <span className="text-text-dark font-medium">{plant.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-forest relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              {/* Text */}
              <div className="pb-12">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold",
                      plant.careLevel === "Easy" && "badge-easy",
                      plant.careLevel === "Medium" && "badge-medium",
                      plant.careLevel === "Hard" && "badge-hard"
                    )}
                  >
                    {plant.careLevel} care
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs">
                    {plant.category}
                  </span>
                  {plant.petSafe && (
                    <span className="px-3 py-1 bg-sage/20 text-sage-light rounded-full text-xs font-semibold">
                      🐾 Pet Safe
                    </span>
                  )}
                  {plant.airPurifying && (
                    <span className="px-3 py-1 bg-sage/20 text-sage-light rounded-full text-xs font-semibold">
                      💨 Air Purifying
                    </span>
                  )}
                </div>

                <h1 className="font-display text-4xl sm:text-5xl text-white font-semibold leading-tight">
                  {plant.name}
                </h1>
                <p className="mt-2 text-sage-light text-base italic">
                  {plant.scientificName}
                </p>
                <p className="mt-5 text-white/70 text-base leading-relaxed max-w-md">
                  {plant.tagline}
                </p>

                {/* Quick stats */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Sun size={14} className="text-earth-light" />
                    {plant.light}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Droplets size={14} className="text-sage-light" />
                    {plant.water}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Thermometer size={14} className="text-terra-light" />
                    {plant.temperature}
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <TrendingUp size={14} className="text-earth-light" />
                    {plant.growthRate} growth
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-80 rounded-t-3xl overflow-hidden self-end">
                <Image
                  src={plant.heroImage}
                  alt={plant.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
              <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#FDFAF4" />
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <section>
                <h2 className="font-display text-2xl text-text-dark font-semibold mb-4">
                  About {plant.name}
                </h2>
                <p className="text-text-body leading-relaxed">{plant.description}</p>
              </section>

              {/* Care Guide */}
              <section>
                <h2 className="font-display text-2xl text-text-dark font-semibold mb-6">
                  Complete Care Guide
                </h2>
                <div className="space-y-5">
                  {(
                    [
                      { key: "watering", icon: Droplets, label: "Watering", color: "bg-sage" },
                      { key: "light", icon: Sun, label: "Light", color: "bg-earth" },
                      { key: "soil", icon: Leaf, label: "Soil", color: "bg-forest" },
                      { key: "fertilizing", icon: TrendingUp, label: "Fertilizing", color: "bg-terra" },
                      { key: "repotting", icon: CheckCircle, label: "Repotting", color: "bg-sage" },
                      { key: "pruning", icon: Shield, label: "Pruning", color: "bg-forest" },
                    ] as const
                  ).map(({ key, icon: Icon, label, color }) => (
                    <div
                      key={key}
                      className="bg-white rounded-2xl p-5 border border-cream-border"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center", color)}>
                          <Icon size={14} className="text-white" />
                        </div>
                        <h3 className="font-semibold text-text-dark text-sm">{label}</h3>
                      </div>
                      <p className="text-sm text-text-body leading-relaxed pl-10">
                        {plant.careGuide[key]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Problems */}
              <section>
                <h2 className="font-display text-2xl text-text-dark font-semibold mb-6">
                  Common Problems & Solutions
                </h2>
                <div className="space-y-4">
                  {plant.commonProblems.map((problem) => (
                    <div
                      key={problem.problem}
                      className="bg-white rounded-2xl p-5 border border-cream-border"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle size={16} className="text-terra flex-shrink-0" />
                        <h3 className="font-semibold text-text-dark text-sm">
                          {problem.problem}
                        </h3>
                      </div>
                      <p className="text-sm text-text-body leading-relaxed pl-6">
                        {problem.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pro Tips */}
              <section>
                <h2 className="font-display text-2xl text-text-dark font-semibold mb-4">
                  Pro Tips
                </h2>
                <div className="bg-sage-pale rounded-2xl p-6 space-y-3">
                  {plant.proTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-text-body">
                      <Star size={15} className="text-sage flex-shrink-0 mt-0.5" />
                      {tip}
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="font-display text-2xl text-text-dark font-semibold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {plant.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-cream-border overflow-hidden"
                    >
                      <div className="p-5">
                        <h3 className="font-semibold text-text-dark text-sm mb-2 flex items-start gap-2">
                          <span className="text-forest text-base font-bold leading-none mt-0.5">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm text-text-body leading-relaxed pl-5">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Care Cards */}
              <div>
                <h3 className="font-display text-lg text-text-dark font-semibold mb-4">
                  Quick Care Reference
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <CareCard icon={Sun} label="Light" value={plant.light} color="bg-earth" />
                  <CareCard icon={Droplets} label="Water" value={plant.water} color="bg-sage" />
                  <CareCard
                    icon={Wind}
                    label="Humidity"
                    value={plant.humidity}
                    color="bg-forest"
                  />
                  <CareCard
                    icon={Thermometer}
                    label="Temp"
                    value={plant.temperature.split("(")[0].trim()}
                    color="bg-terra"
                  />
                </div>

                {/* Additional info */}
                <div className="mt-3 bg-white rounded-2xl border border-cream-border divide-y divide-cream-border">
                  {[
                    { label: "Growth Rate", value: plant.growthRate },
                    { label: "Max Height", value: plant.maxHeight },
                    { label: "Native Region", value: plant.nativeRegion },
                    {
                      label: "Toxic to Pets",
                      value: plant.petSafe ? "Non-toxic ✓" : "Toxic — keep away",
                    },
                    {
                      label: "Air Purifying",
                      value: plant.airPurifying ? "Yes — NASA approved" : "No",
                    },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between px-4 py-3 text-sm"
                    >
                      <span className="text-text-muted">{label}</span>
                      <span
                        className={cn(
                          "font-medium text-right",
                          label === "Toxic to Pets" && !plant.petSafe
                            ? "text-terra"
                            : "text-text-dark"
                        )}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Products */}
              {relatedProducts.length > 0 && (
                <div>
                  <h3 className="font-display text-lg text-text-dark font-semibold mb-4">
                    Recommended Products
                  </h3>
                  <div className="space-y-3">
                    {relatedProducts.map((product) => (
                      <a
                        key={product.id}
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-cream-border hover:border-forest hover:shadow-sm transition-all group"
                      >
                        <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0 bg-cream-dark">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-text-dark truncate group-hover:text-forest transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-text-muted">{product.priceRange}</p>
                        </div>
                        <ShoppingBag size={14} className="text-text-muted flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-text-muted text-center">
                    Amazon affiliate links
                  </p>
                </div>
              )}

              {/* Related Plants */}
              {relatedPlants.length > 0 && (
                <div>
                  <h3 className="font-display text-lg text-text-dark font-semibold mb-4">
                    More {plant.category} Plants
                  </h3>
                  <div className="space-y-3">
                    {relatedPlants.map((related) => (
                      <Link
                        key={related.id}
                        href={`/encyclopedia/${related.slug}`}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-cream-border hover:border-forest hover:shadow-sm transition-all group"
                      >
                        <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0 bg-cream-dark">
                          <Image
                            src={related.image}
                            alt={related.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-text-dark group-hover:text-forest transition-colors">
                            {related.name}
                          </p>
                          <p className="text-xs text-text-muted">{related.careLevel} care</p>
                        </div>
                        <ChevronRight size={14} className="text-text-muted flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
