"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PreviewLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1a0e] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-2xl">🪴</span>
          <span
            className="text-white/80 text-xs uppercase tracking-[0.3em]"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Indoor Garden
          </span>
        </div>

        <h1
          className="text-white text-center mb-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.75rem", fontWeight: 500 }}
        >
          Preview Access
        </h1>
        <p className="text-white/40 text-center text-sm mb-8" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Enter the password to preview the site.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoFocus
            className="bg-white/5 border border-white/10 rounded-lg px-5 py-3.5 text-white placeholder-white/30 outline-none focus:border-[#7AA95C]/60 transition-all text-sm"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          />
          {error && (
            <p className="text-red-400/70 text-xs text-center">Incorrect password.</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#2C5F2E] hover:bg-[#3D7A40] text-white rounded-lg px-7 py-3.5 text-sm font-medium transition-all disabled:opacity-50"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            {loading ? "..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
