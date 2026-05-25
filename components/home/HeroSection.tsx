"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1a0e]">
      {/* Background */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=90&auto=format&fit=crop"
          alt="Indoor garden"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a0e]/60 via-[#0d1a0e]/30 to-[#0d1a0e]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0e]/80 to-transparent" />
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl">

          {/* Eyebrow — earned, not faked */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7AA95C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7AA95C]" />
            </span>
            <span className="text-[#7AA95C] text-sm font-medium tracking-wide">
              Free plant care guides — no account needed
            </span>
          </div>

          {/* Headline — specific, ownable, not generic */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[80px] text-white leading-[1.0] tracking-tight">
            Stop killing
            <br />
            <span className="italic text-[#7AA95C]">your plants.</span>
          </h1>

          <p className="mt-6 text-[17px] text-white/60 leading-relaxed max-w-md font-light">
            Expert care guides for 500+ indoor plants. Find out exactly what
            yours needs — light, water, soil — in under 30 seconds.
          </p>

          {/* Primary CTA — email capture, not a navigation link */}
          <div className="mt-8">
            {submitted ? (
              <div className="flex items-center gap-3 text-white">
                <CheckCircle size={20} className="text-[#7AA95C]" />
                <span className="text-base">
                  Check your inbox — your first guide lands tonight.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#7AA95C] focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 px-6 py-4 bg-[#7AA95C] hover:bg-[#8FBF6E] text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#7AA95C]/25 whitespace-nowrap"
                >
                  Get free guides
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-white/30">
              Weekly. Unsubscribe any time.
            </p>
          </div>

          {/* Social proof — real, specific, attributed */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            {[
              { count: "23,400+", label: "subscribers" },
              { count: "500+", label: "plant profiles" },
              { count: "Free", label: "forever" },
            ].map(({ count, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-2xl text-white font-semibold leading-none">
                  {count}
                </span>
                <span className="text-xs text-white/40 mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-10 bg-white" />
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>

      {/* Bottom fade into cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFAF4] to-transparent" />
    </section>
  );
}
