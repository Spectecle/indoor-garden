"use client";

import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "coming-soon" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1a0e] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#2C5F2E]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#2C5F2E]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#2C5F2E]/10" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#2C5F2E]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Leaf accents */}
      <div className="absolute top-12 left-12 text-[#2C5F2E]/20 text-8xl select-none rotate-[-20deg]">🌿</div>
      <div className="absolute bottom-16 right-16 text-[#2C5F2E]/20 text-7xl select-none rotate-[30deg]">🌱</div>
      <div className="absolute top-1/3 right-10 text-[#2C5F2E]/10 text-5xl select-none rotate-[15deg]">🍃</div>
      <div className="absolute bottom-1/3 left-10 text-[#2C5F2E]/10 text-5xl select-none rotate-[-10deg]">🌿</div>

      <div className="relative z-10 max-w-xl w-full text-center">

        {/* Brand */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-3xl">🪴</span>
          <span
            className="text-white/90 text-sm uppercase font-light"
            style={{ fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "0.3em" }}
          >
            Indoor Garden
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white mb-4 leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: 500,
          }}
        >
          Something beautiful<br />
          <em style={{ color: "#7AA95C" }}>is growing.</em>
        </h1>

        <p
          className="text-white/50 mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem" }}
        >
          A curated guide to indoor plants, care tips,<br className="hidden sm:block" />
          and everything you need to grow with confidence.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-[#2C5F2E]/40" />
          <span className="text-[#7AA95C]/60 text-xs tracking-widest uppercase">Notify me when we launch</span>
          <div className="h-px w-16 bg-[#2C5F2E]/40" />
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3">
            <div className="text-3xl">🌱</div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem" }} className="text-white/90">
              You&apos;re on the list.
            </p>
            <p className="text-white/40 text-sm">We&apos;ll let you know the moment we go live.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-5 py-3.5 text-white placeholder-white/30 outline-none focus:border-[#7AA95C]/60 transition-all text-sm"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#2C5F2E] hover:bg-[#3D7A40] text-white rounded-lg px-7 py-3.5 text-sm font-medium transition-all disabled:opacity-50 whitespace-nowrap"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              {status === "loading" ? "..." : "Notify Me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400/70 text-xs mt-3">Something went wrong — try again.</p>
        )}

        <p className="text-white/20 text-xs mt-10" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          No spam. Just plants.
        </p>
      </div>
    </div>
  );
}
