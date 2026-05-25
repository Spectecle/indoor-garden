"use client";

import { useState } from "react";
import {
  ShoppingBag,
  RefreshCw,
  CheckCircle,
  XCircle,
  SkipForward,
  Zap,
  Link2,
  AlertTriangle,
  ExternalLink,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "all",
  "Planters & Pots",
  "Soil & Fertilizers",
  "Grow Lights",
  "Tools & Accessories",
  "Watering",
  "Books & Guides",
];

interface FetchedProduct {
  name: string;
  asin: string;
  status: "added" | "skipped";
}

interface FetchResult {
  fetched: number;
  added: number;
  skipped: number;
  errors: string[];
  products: FetchedProduct[];
}

const PA_API_CONFIGURED =
  typeof process !== "undefined" &&
  !!process.env?.AMAZON_PA_ENABLED;

export default function AffiliateToolsClient() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["all"]);
  const [maxPerCategory, setMaxPerCategory] = useState(8);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FetchResult | null>(null);
  const [error, setError] = useState("");
  const [paApiEnabled] = useState(false); // server-side env not visible here

  function toggleCategory(cat: string) {
    if (cat === "all") {
      setSelectedCategories(["all"]);
      return;
    }
    const next = selectedCategories.filter((c) => c !== "all");
    if (next.includes(cat)) {
      const removed = next.filter((c) => c !== cat);
      setSelectedCategories(removed.length === 0 ? ["all"] : removed);
    } else {
      setSelectedCategories([...next, cat]);
    }
  }

  async function runFetch() {
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch("/api/admin/fetch-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categories: selectedCategories, maxPerCategory }),
      });

      const data = await res.json() as FetchResult & { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Fetch failed");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Affiliate tools</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Auto-fetch trending indoor garden products from Amazon</p>
      </div>

      {/* PA API status */}
      <div className={cn(
        "border rounded-2xl p-5 mb-6",
        paApiEnabled
          ? "bg-emerald-400/5 border-emerald-400/20"
          : "bg-[#1a1400] border-amber-400/20"
      )}>
        <div className="flex items-start gap-3">
          <div className={cn(
            "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5",
            paApiEnabled ? "bg-emerald-400/10" : "bg-amber-400/10"
          )}>
            {paApiEnabled ? (
              <Zap size={14} className="text-emerald-400" />
            ) : (
              <AlertTriangle size={14} className="text-amber-400" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            {paApiEnabled ? (
              <>
                <p className="text-emerald-400 font-semibold text-sm">PA API connected</p>
                <p className="text-[#4a5e4a] text-xs mt-0.5">Live Amazon product data with real titles, images, and prices.</p>
              </>
            ) : (
              <>
                <p className="text-amber-400 font-semibold text-sm">PA API not configured — using curated fallback</p>
                <p className="text-[#5a4e3a] text-xs mt-1 leading-relaxed">
                  The fetch will add 30+ hand-picked, verified indoor garden products from a curated ASIN list.
                  To enable live Amazon data, add your PA API credentials to <code className="text-amber-400/80 bg-amber-400/10 px-1 rounded text-[11px]">.env</code>.
                </p>
                <div className="mt-3 bg-[#0a0a00] border border-amber-400/10 rounded-xl p-3 space-y-1">
                  <p className="text-[#5a4e3a] text-xs font-mono">AMAZON_PA_ENABLED=true</p>
                  <p className="text-[#5a4e3a] text-xs font-mono">AMAZON_PA_ACCESS_KEY=&quot;your-access-key&quot;</p>
                  <p className="text-[#5a4e3a] text-xs font-mono">AMAZON_PA_SECRET_KEY=&quot;your-secret-key&quot;</p>
                  <p className="text-[#5a4e3a] text-xs font-mono">AMAZON_PA_PARTNER_TAG=&quot;indoorgarden-20&quot;</p>
                </div>
                <a
                  href="https://affiliate-program.amazon.com/home/account/tag/manage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2.5 text-amber-400/80 hover:text-amber-400 text-xs font-medium transition-colors"
                >
                  Get PA API credentials
                  <ExternalLink size={10} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fetch configuration */}
      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6 mb-6">
        <h2 className="text-white font-semibold text-sm mb-5">Fetch configuration</h2>

        <div className="mb-5">
          <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-3">
            Categories to fetch
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-medium border transition-all",
                    isSelected
                      ? "bg-[#1a2e1a] border-[#2C5F2E] text-[#7AA95C]"
                      : "bg-[#0a0f0a] border-[#1a221a] text-[#4a5e4a] hover:border-[#2C5F2E] hover:text-[#7AA95C]"
                  )}
                >
                  {cat === "all" ? "All categories" : cat}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">
            Max products per category
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={2}
              max={20}
              step={2}
              value={maxPerCategory}
              onChange={(e) => setMaxPerCategory(parseInt(e.target.value))}
              className="flex-1 accent-[#2C5F2E]"
            />
            <span className="text-white text-sm font-semibold w-6 text-right">{maxPerCategory}</span>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6 mb-6">
        <h2 className="text-white font-semibold text-sm mb-4">How it works</h2>
        <div className="space-y-3">
          {[
            { icon: ShoppingBag, label: "Fetch", desc: "Searches Amazon for top-rated indoor garden products in each category" },
            { icon: SkipForward, label: "Deduplicate", desc: "Products already in your shop (matched by ASIN or slug) are skipped automatically" },
            { icon: CheckCircle, label: "Draft", desc: "New products are saved as drafts — invisible to visitors until you publish them" },
            { icon: Link2, label: "Affiliate tag", desc: `Every URL is pre-tagged with your affiliate tag (indoorgarden-20)` },
            { icon: Clock, label: "Daily cron", desc: "Runs automatically every day at 2am UTC via /api/cron/fetch-products" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-7 h-7 bg-[#1a2e1a] border border-[#2a3e2a] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={12} className="text-[#7AA95C]" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-[#3a4e3a] text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 mb-4 flex items-start gap-2">
          <XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6 mb-6">
          <h2 className="text-white font-semibold text-sm mb-4">Fetch results</h2>

          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Fetched", value: result.fetched, color: "text-[#7a8e7a]" },
              { label: "Added as drafts", value: result.added, color: "text-emerald-400" },
              { label: "Already existed", value: result.skipped, color: "text-[#4a5e4a]" },
            ].map(({ label, value, color }) => (
              <div key={label} className="bg-[#0a0f0a] border border-[#141c14] rounded-xl p-3 text-center">
                <p className={cn("text-2xl font-bold", color)}>{value}</p>
                <p className="text-[#3a4e3a] text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          {result.errors.length > 0 && (
            <div className="mb-4">
              <p className="text-amber-400 text-xs font-semibold mb-2">Warnings</p>
              {result.errors.map((e, i) => (
                <p key={i} className="text-[#5a4e3a] text-xs">{e}</p>
              ))}
            </div>
          )}

          <div className="space-y-1.5 max-h-64 overflow-y-auto">
            {result.products.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5 py-1.5">
                {p.status === "added" ? (
                  <CheckCircle size={13} className="text-emerald-400 flex-shrink-0" />
                ) : (
                  <SkipForward size={13} className="text-[#3a4e3a] flex-shrink-0" />
                )}
                <span className="flex-1 text-xs text-[#6a7e6a] truncate">{p.name}</span>
                <span className="text-[11px] font-mono text-[#2a3e2a]">{p.asin}</span>
                <span className={cn(
                  "text-[11px] font-semibold px-1.5 py-0.5 rounded",
                  p.status === "added"
                    ? "text-emerald-400 bg-emerald-400/10"
                    : "text-[#3a4e3a] bg-[#141c14]"
                )}>
                  {p.status === "added" ? "Draft" : "Skip"}
                </span>
              </div>
            ))}
          </div>

          {result.added > 0 && (
            <div className="mt-4 pt-4 border-t border-[#1a221a]">
              <a
                href="/admin/products"
                className="inline-flex items-center gap-2 text-[#7AA95C] hover:text-[#b5c9a5] text-sm font-semibold transition-colors"
              >
                Review {result.added} new draft{result.added !== 1 ? "s" : ""} in Products →
              </a>
            </div>
          )}
        </div>
      )}

      {/* Run button */}
      <button
        onClick={runFetch}
        disabled={loading}
        className="flex items-center gap-2.5 bg-[#2C5F2E] hover:bg-[#3a7a3c] disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
      >
        <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
        {loading ? "Fetching products..." : "Fetch products now"}
      </button>
      <p className="text-[#2a3e2a] text-xs mt-2">
        Products are saved as drafts. Go to /admin/products to review and publish.
      </p>
    </div>
  );
}
