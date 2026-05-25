"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  ExternalLink,
  Star,
  MousePointerClick,
  Eye,
  EyeOff,
  Trash2,
  Pencil,
  BadgeCheck,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  priceRange: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  bestSeller: boolean;
  published: boolean;
  amazonUrl: string;
  clicks: number;
  tags: string[];
}

export default function ProductsClient({ products: initial }: { products: Product[] }) {
  const [products, setProducts] = useState(initial);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  async function togglePublished(id: string, published: boolean) {
    await fetch(`/api/admin/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !published }),
    });
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, published: !published } : p))
    );
  }

  async function deleteProduct(id: string) {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    setDeleting(id);
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setDeleting(null);
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Products</h1>
          <p className="text-[#4a5e4a] text-sm mt-1">{products.length} affiliate products</p>
        </div>
        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={15} />
          Add product
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3a4e3a]" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#0d120d] border border-[#1a221a] rounded-xl pl-9 pr-4 py-2.5 text-white text-sm placeholder-[#3a4e3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[2fr_1fr_1fr_80px_80px_100px] gap-0 px-5 py-3 border-b border-[#1a221a]">
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Product</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Category</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Price</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-right">Clicks</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-center">Status</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-right">Actions</span>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#3a4e3a]">
            <Package size={28} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No products found</p>
          </div>
        )}

        {filtered.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[2fr_1fr_1fr_80px_80px_100px] gap-0 px-5 py-4 border-b border-[#141c14] last:border-0 hover:bg-[#0f150f] transition-colors items-center"
          >
            {/* Product */}
            <div className="min-w-0 pr-4">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-white text-sm font-medium truncate">{product.name}</p>
                {product.bestSeller && (
                  <span className="flex-shrink-0 flex items-center gap-1 text-[10px] bg-amber-400/10 text-amber-400 border border-amber-400/20 px-1.5 py-0.5 rounded-full font-semibold">
                    <BadgeCheck size={9} /> Best seller
                  </span>
                )}
                {product.featured && (
                  <span className="flex-shrink-0 text-[10px] bg-[#1a2e1a] text-[#7AA95C] border border-[#2a3e2a] px-1.5 py-0.5 rounded-full font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-[#4a5e4a] text-xs">{product.brand}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={10} className="text-amber-400 fill-amber-400" />
                <span className="text-[#5a6e5a] text-[11px]">{product.rating} ({product.reviewCount.toLocaleString()})</span>
              </div>
            </div>

            {/* Category */}
            <span className="text-[#5a6e5a] text-xs">{product.category}</span>

            {/* Price */}
            <span className="text-[#b5c9a5] text-sm font-medium">{product.priceRange}</span>

            {/* Clicks */}
            <div className="text-right flex items-center justify-end gap-1">
              <MousePointerClick size={11} className="text-[#3a4e3a]" />
              <span className="text-[#7a8e7a] text-sm font-semibold">{product.clicks}</span>
            </div>

            {/* Status */}
            <div className="flex justify-center">
              <button
                onClick={() => togglePublished(product.id, product.published)}
                className={cn(
                  "flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors",
                  product.published
                    ? "bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20"
                    : "bg-[#1a1a1a] text-[#4a4a4a] hover:bg-[#222]"
                )}
              >
                {product.published ? <Eye size={10} /> : <EyeOff size={10} />}
                {product.published ? "Live" : "Draft"}
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-1">
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#3a4e3a] hover:text-[#7AA95C] hover:bg-[#1a2e1a] rounded-lg transition-colors"
                title="Open Amazon link"
              >
                <ExternalLink size={13} />
              </a>
              <Link
                href={`/admin/products/${product.id}`}
                className="p-2 text-[#3a4e3a] hover:text-[#b5c9a5] hover:bg-[#141c14] rounded-lg transition-colors"
              >
                <Pencil size={13} />
              </Link>
              <button
                onClick={() => deleteProduct(product.id)}
                disabled={deleting === product.id}
                className="p-2 text-[#3a4e3a] hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors disabled:opacity-40"
              >
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
