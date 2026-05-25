import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplets, Sun, Shield, Wind } from "lucide-react";

const categories = [
  {
    name: "Tropical",
    count: 180,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80&auto=format&fit=crop",
    icon: "🌴",
    href: "/encyclopedia?category=Tropical",
  },
  {
    name: "Succulents",
    count: 120,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80&auto=format&fit=crop",
    icon: "🌵",
    href: "/encyclopedia?category=Succulent",
  },
  {
    name: "Ferns",
    count: 65,
    image: "https://images.unsplash.com/photo-1637776234034-5e84b6dfc2a8?w=400&q=80&auto=format&fit=crop",
    icon: "🌿",
    href: "/encyclopedia?category=Fern",
  },
  {
    name: "Flowering",
    count: 95,
    image: "https://images.unsplash.com/photo-1588614978574-bc762e3f44a1?w=400&q=80&auto=format&fit=crop",
    icon: "🌸",
    href: "/encyclopedia?category=Flowering",
  },
];

const features = [
  { icon: Droplets, label: "Watering guides", color: "text-sage" },
  { icon: Sun, label: "Light requirements", color: "text-earth" },
  { icon: Shield, label: "Pet toxicity info", color: "text-terra" },
  { icon: Wind, label: "Air quality ratings", color: "text-forest" },
];

export default function EncyclopediaTeaser() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-forest font-medium text-sm mb-3">
              <span className="w-8 h-px bg-forest" />
              Plant Encyclopedia
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-dark font-semibold leading-tight">
              Every plant.
              <br />
              Every <em>answer</em>.
            </h2>
            <p className="mt-5 text-text-body leading-relaxed">
              Our encyclopedia covers over 500 plant species — from the most beloved
              houseplants to rare collectibles. Each profile includes care guides,
              common problems, propagation tips, and Q&As written with real expertise.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm text-text-body">
                  <Icon size={16} className={color} />
                  {label}
                </div>
              ))}
            </div>
            <Link
              href="/encyclopedia"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white hover:bg-forest-dark rounded-full font-semibold text-sm transition-all duration-300 group"
            >
              Open the Encyclopedia
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Search visual */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-border">
            <div className="flex items-center gap-3 mb-4 p-3 bg-cream rounded-xl border border-cream-border">
              <span className="text-text-muted text-sm">🔍 Search: "low light bedroom plants"</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "Snake Plant", info: "Very low light • Monthly water • Bedroom safe", img: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=80&q=70&auto=format&fit=crop" },
                { name: "ZZ Plant", info: "Low light • Every 2 weeks • Office friendly", img: "https://images.unsplash.com/photo-1581578949510-fa7315c659b3?w=80&q=70&auto=format&fit=crop" },
                { name: "Pothos", info: "Any light • Every 2 weeks • Air purifying", img: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=80&q=70&auto=format&fit=crop" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors cursor-pointer">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                    <Image src={item.img} alt={item.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-text-dark">{item.name}</div>
                    <div className="text-xs text-text-muted mt-0.5">{item.info}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-text-muted">Showing 3 of 47 results</span>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden h-48 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="font-display text-lg text-white font-semibold">{cat.name}</div>
                <div className="text-white/60 text-xs">{cat.count} species</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
