import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

export default function QuizCTA() {
  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-forest">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1400&q=80&auto=format&fit=crop"
              alt="Tropical indoor plants"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-transparent" />
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-terra/10 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sage-light text-sm font-medium mb-6">
                <Sparkles size={14} />
                30-second quiz
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                Which plant is
                <br />
                <em className="text-sage-light">made for you?</em>
              </h2>
              <p className="mt-6 text-white/70 text-base leading-relaxed max-w-md">
                Tell us about your light conditions, lifestyle, and space — and we'll
                match you with the perfect plant from our encyclopedia.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quiz"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-forest hover:bg-cream rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                >
                  <Leaf size={16} />
                  Start the Plant Quiz
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mini stats */}
              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <div className="font-display text-2xl text-white font-bold">5</div>
                  <div className="text-white/50 text-xs">Quick questions</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="font-display text-2xl text-white font-bold">30s</div>
                  <div className="text-white/50 text-xs">Average time</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="font-display text-2xl text-white font-bold">100%</div>
                  <div className="text-white/50 text-xs">Free</div>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="hidden lg:flex justify-end">
              <div className="grid grid-cols-2 gap-4 w-72">
                {[
                  { name: "Monstera", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80&auto=format&fit=crop", level: "Easy" },
                  { name: "Fiddle Leaf", img: "https://images.unsplash.com/photo-1558618047-f8dbd7b54f2a?w=300&q=80&auto=format&fit=crop", level: "Hard" },
                  { name: "Pothos", img: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&q=80&auto=format&fit=crop", level: "Easy" },
                  { name: "Snake Plant", img: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&q=80&auto=format&fit=crop", level: "Easy" },
                ].map((plant, i) => (
                  <div
                    key={plant.name}
                    className="relative rounded-2xl overflow-hidden h-32 shadow-lg"
                    style={{ marginTop: i % 2 === 1 ? "2rem" : 0 }}
                  >
                    <Image src={plant.img} alt={plant.name} fill className="object-cover" sizes="140px" />
                    <div className="absolute inset-0 bg-forest-dark/30" />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-white text-xs font-semibold">{plant.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
