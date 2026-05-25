"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Link2, Wand2, Save, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductData {
  id?: string;
  slug?: string;
  name?: string;
  brand?: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  category?: string;
  priceRange?: string;
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  amazonUrl?: string;
  amazonAsin?: string | null;
  affiliateTag?: string;
  featured?: boolean;
  bestSeller?: boolean;
  published?: boolean;
}

const CATEGORIES = [
  "Planters & Pots",
  "Soil & Fertilizers",
  "Tools & Accessories",
  "Grow Lights",
  "Books & Guides",
  "Watering",
];

const AFFILIATE_TAG = "indoorgarden-20";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function buildAmazonUrl(asin: string, tag: string) {
  return `https://www.amazon.com/dp/${asin}?tag=${tag}`;
}

export default function ProductForm({ product }: { product?: ProductData }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: product?.name || "",
    slug: product?.slug || "",
    brand: product?.brand || "",
    description: product?.description || "",
    shortDescription: product?.shortDescription || "",
    image: product?.image || "",
    category: product?.category || CATEGORIES[0],
    priceRange: product?.priceRange || "",
    rating: product?.rating?.toString() || "4.5",
    reviewCount: product?.reviewCount?.toString() || "0",
    tags: product?.tags?.join(", ") || "",
    amazonUrl: product?.amazonUrl || "",
    amazonAsin: product?.amazonAsin || "",
    affiliateTag: product?.affiliateTag || AFFILIATE_TAG,
    featured: product?.featured || false,
    bestSeller: product?.bestSeller || false,
    published: product?.published !== false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(key: string, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleNameChange(name: string) {
    set("name", name);
    if (!product?.id) set("slug", slugify(name));
  }

  function buildUrlFromAsin() {
    if (!form.amazonAsin) return;
    set("amazonUrl", buildAmazonUrl(form.amazonAsin.trim(), form.affiliateTag));
  }

  function extractAsinFromUrl(url: string) {
    const match = url.match(/\/dp\/([A-Z0-9]{10})/i);
    if (match) {
      set("amazonAsin", match[1]);
      // Rebuild clean affiliate URL from the ASIN
      set("amazonUrl", buildAmazonUrl(match[1], form.affiliateTag));
    } else {
      // Append affiliate tag if not present
      if (!url.includes("tag=")) {
        const separator = url.includes("?") ? "&" : "?";
        set("amazonUrl", `${url}${separator}tag=${form.affiliateTag}`);
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      rating: parseFloat(form.rating) || 0,
      reviewCount: parseInt(form.reviewCount) || 0,
    };

    const url = product?.id ? `/api/admin/products/${product.id}` : "/api/admin/products";
    const method = product?.id ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/products");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Failed to save");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl">
      <div className="space-y-6">
        {/* Basic info */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Basic information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">
                Product name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="MKONO Ceramic Planter Set"
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => set("slug", e.target.value)}
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Brand *</label>
              <input
                type="text"
                value={form.brand}
                onChange={(e) => set("brand", e.target.value)}
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Category</label>
              <select
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Price range</label>
              <input
                type="text"
                value={form.priceRange}
                onChange={(e) => set("priceRange", e.target.value)}
                placeholder="$25–$35"
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Rating</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={form.rating}
                onChange={(e) => set("rating", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Review count</label>
              <input
                type="number"
                min="0"
                value={form.reviewCount}
                onChange={(e) => set("reviewCount", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Short description</label>
              <input
                type="text"
                value={form.shortDescription}
                onChange={(e) => set("shortDescription", e.target.value)}
                placeholder="One-sentence summary shown in cards"
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Full description</label>
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                rows={4}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors resize-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Image URL</label>
              <input
                type="url"
                value={form.image}
                onChange={(e) => set("image", e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">
                Tags <span className="font-normal text-[#3a4a3a]">(comma-separated)</span>
              </label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => set("tags", e.target.value)}
                placeholder="Ceramic, Modern, Drainage"
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Amazon affiliate */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Link2 size={14} className="text-[#7AA95C]" />
            <h2 className="text-white font-semibold text-sm">Amazon affiliate</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Affiliate tag</label>
              <input
                type="text"
                value={form.affiliateTag}
                onChange={(e) => set("affiliateTag", e.target.value)}
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">
                ASIN
                <span className="ml-1.5 font-normal text-[#3a4a3a] normal-case">10-character Amazon product ID</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={form.amazonAsin}
                  onChange={(e) => set("amazonAsin", e.target.value.toUpperCase())}
                  placeholder="B08XYZ1234"
                  maxLength={10}
                  className="flex-1 bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
                />
                <button
                  type="button"
                  onClick={buildUrlFromAsin}
                  disabled={!form.amazonAsin}
                  className="flex items-center gap-2 bg-[#1a2e1a] hover:bg-[#2a3e2a] disabled:opacity-40 text-[#7AA95C] text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
                >
                  <Wand2 size={13} />
                  Auto-build URL
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Amazon URL *</label>
              <input
                type="url"
                value={form.amazonUrl}
                onChange={(e) => {
                  set("amazonUrl", e.target.value);
                  extractAsinFromUrl(e.target.value);
                }}
                placeholder="https://www.amazon.com/dp/B08XYZ1234?tag=indoorgarden-20"
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
              <p className="text-[#2a3e2a] text-xs mt-1.5">
                Paste any Amazon URL — the affiliate tag will be auto-injected. Or enter an ASIN above and click Auto-build.
              </p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Settings</h2>
          <div className="space-y-3">
            {(
              [
                { key: "featured", label: "Featured", desc: "Show in homepage featured section" },
                { key: "bestSeller", label: "Best seller", desc: "Mark with best seller badge" },
                { key: "published", label: "Published", desc: "Visible on the public site" },
              ] as const
            ).map(({ key, label, desc }) => (
              <label key={key} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={form[key]}
                    onChange={(e) => set(key, e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "w-10 h-5 rounded-full transition-colors",
                      form[key] ? "bg-[#2C5F2E]" : "bg-[#1a221a]"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform",
                        form[key] ? "translate-x-5" : "translate-x-0.5"
                      )}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{label}</p>
                  <p className="text-[#3a4e3a] text-xs">{desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#4a5e4a] hover:text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#111611] transition-colors"
          >
            <ArrowLeft size={14} />
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            <Save size={14} />
            {saving ? "Saving..." : product?.id ? "Save changes" : "Add product"}
          </button>
        </div>
      </div>
    </form>
  );
}
