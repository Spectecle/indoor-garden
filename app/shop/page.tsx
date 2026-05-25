import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ShoppingBag,
  ExternalLink,
  Filter,
  Info,
  Package,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  products,
  productCategories,
  getBestSellers,
  type Product,
  type ProductCategory,
} from "@/lib/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Curated indoor gardening products — planters, soil, grow lights, and tools. All products link to Amazon for fast, trusted delivery.",
};

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={12}
            className={
              s <= Math.round(rating)
                ? "text-earth fill-earth"
                : "text-cream-border"
            }
          />
        ))}
      </div>
      <span className="text-xs text-text-muted">
        {rating} ({count.toLocaleString()})
      </span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-52 bg-cream-dark overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {product.bestSeller && (
            <span className="px-2.5 py-1 bg-terra text-white rounded-full text-xs font-semibold">
              Best Seller
            </span>
          )}
          {product.featured && (
            <span className="px-2.5 py-1 bg-forest text-white rounded-full text-xs font-semibold">
              Editor's Pick
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-text-muted font-medium mb-1">
          {product.category}
        </div>
        <h3 className="font-semibold text-text-dark text-base leading-snug flex-1 group-hover:text-forest transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-text-muted mt-0.5">{product.brand}</p>

        <p className="mt-2 text-sm text-text-body leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        <StarRating rating={product.rating} count={product.reviewCount} />

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-sage-pale text-forest text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mt-4 pt-4 border-t border-cream-border flex items-center justify-between gap-2">
          <span className="font-bold text-forest text-base">
            {product.priceRange}
          </span>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-center gap-1.5 px-4 py-2 bg-forest text-white hover:bg-forest-dark rounded-xl text-xs font-semibold transition-colors group/btn"
          >
            <ShoppingBag size={13} />
            Buy on Amazon
            <ExternalLink
              size={11}
              className="opacity-70 group-hover/btn:opacity-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

interface ShopPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category as ProductCategory | undefined;

  const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="bg-forest-dark pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=60&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sage-light text-xs font-medium mb-4">
                  <ShoppingBag size={12} />
                  Curated by plant experts
                </div>
                <h1 className="font-display text-4xl sm:text-5xl text-white font-semibold">
                  The Indoor Garden{" "}
                  <em className="text-sage-light">Shop</em>
                </h1>
                <p className="mt-3 text-white/70 max-w-lg text-base leading-relaxed">
                  Hand-picked tools, pots, soils, and lights — every product
                  researched and recommended by plant experts. Links to Amazon
                  for fast delivery and easy returns.
                </p>
              </div>

              {/* Affiliate Disclosure */}
              <div className="flex items-start gap-2 px-4 py-3 bg-white/10 rounded-xl max-w-xs">
                <Info size={14} className="text-white/50 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/60 leading-relaxed">
                  We may earn a small commission on purchases at no extra cost
                  to you. This helps us keep the site free.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
              <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#FDFAF4" />
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Category Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <span className="text-sm text-text-muted flex items-center gap-1.5">
              <Filter size={14} />
              Category:
            </span>
            <Link
              href="/shop"
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !selectedCategory
                  ? "bg-forest text-white"
                  : "bg-white border border-cream-border text-text-body hover:border-forest"
              )}
            >
              All Products
            </Link>
            {productCategories.map((cat) => (
              <Link
                key={cat}
                href={`/shop?category=${encodeURIComponent(cat)}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  selectedCategory === cat
                    ? "bg-forest text-white"
                    : "bg-white border border-cream-border text-text-body hover:border-forest"
                )}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Best Sellers Row */}
          {!selectedCategory && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-display text-2xl text-text-dark font-semibold">
                  Best Sellers
                </h2>
                <span className="px-3 py-1 bg-terra/10 text-terra rounded-full text-xs font-semibold">
                  Most popular
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {bestSellers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {/* Main Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl text-text-dark font-semibold">
                {selectedCategory || "All Products"}
              </h2>
              <span className="text-sm text-text-muted">
                {filtered.length} items
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-16 bg-cream-dark rounded-2xl p-8 border border-cream-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                {
                  icon: Package,
                  title: "Amazon Delivery",
                  desc: "All products ship via Amazon Prime for fast, reliable delivery",
                },
                {
                  icon: Star,
                  title: "Expert Curated",
                  desc: "Every product hand-picked and reviewed by our plant specialists",
                },
                {
                  icon: ShoppingBag,
                  title: "Trusted Returns",
                  desc: "Amazon's return policy protects every purchase",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-forest/10 rounded-2xl flex items-center justify-center mb-3">
                    <Icon size={20} className="text-forest" />
                  </div>
                  <h3 className="font-semibold text-text-dark text-sm">{title}</h3>
                  <p className="mt-1 text-xs text-text-muted leading-relaxed max-w-xs">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
