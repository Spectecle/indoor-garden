"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Lock, Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Incorrect password. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0f0a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div className="w-8 h-8 bg-[#2C5F2E] rounded-lg flex items-center justify-center">
            <Leaf size={16} className="text-white" />
          </div>
          <span className="text-white font-semibold text-lg">Indoor Garden</span>
          <span className="text-[#3a3f3a] text-sm ml-1">Admin</span>
        </div>

        <div className="bg-[#111511] border border-[#1e261e] rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-[#1a2e1a] border border-[#2a3e2a] rounded-xl flex items-center justify-center">
              <Lock size={15} className="text-[#7AA95C]" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-base leading-tight">Admin access</h1>
              <p className="text-[#5a6b5a] text-xs">Enter your password to continue</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-[#0d120d] border border-[#1e261e] rounded-xl px-4 py-3 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors pr-11"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3a4a3a] hover:text-[#7AA95C] transition-colors"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {error && (
              <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-[#2C5F2E] hover:bg-[#3a7a3c] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              {loading ? "Checking..." : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-[#3a4a3a] text-xs mt-6">
          Indoor Garden · Admin Console
        </p>
      </div>
    </div>
  );
}
