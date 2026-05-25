import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "500+ plant profiles with care guides",
  "Curated Amazon-affiliate products",
  "Expert Q&A encyclopedia",
  "Community-driven advice",
];

export default function AboutBanner() {
  return (
    <section className="py-20 lg:py-28 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden h-56 img-zoom shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1525498128493-380d1990a112?w=600&q=80&auto=format&fit=crop"
                    alt="Indoor plant wall"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-40 img-zoom shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80&auto=format&fit=crop"
                    alt="Tropical plants"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative rounded-2xl overflow-hidden h-40 img-zoom shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&q=80&auto=format&fit=crop"
                    alt="Plant care"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden h-56 img-zoom shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop"
                    alt="Green leaves"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-forest text-white rounded-2xl p-5 shadow-xl">
              <div className="font-display text-4xl font-bold">5★</div>
              <div className="text-sage-light text-sm mt-1">Community rated</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-terra font-medium text-sm mb-4">
              <span className="w-8 h-px bg-terra" />
              Our Mission
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-dark font-semibold leading-tight">
              Every home deserves
              <br />
              <em>to feel alive</em>
            </h2>
            <p className="mt-6 text-text-body leading-relaxed">
              Indoor Garden was born from a simple belief: plants transform spaces, and
              everyone deserves to know how to care for them. We distill the collective
              wisdom of botanists, plant lovers, Reddit threads, and horticultural
              research into practical, beautiful guides.
            </p>
            <p className="mt-4 text-text-body leading-relaxed">
              Whether you're killing your first cactus or building your hundredth
              terrarium, we meet you exactly where you are.
            </p>

            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-text-body">
                  <CheckCircle size={18} className="text-sage flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <Link
              href="/encyclopedia"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-forest text-white hover:bg-forest-dark rounded-full font-semibold text-sm transition-all duration-300 group"
            >
              Explore the Encyclopedia
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
