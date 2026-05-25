import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data/products";

export default function ShopPreview() {
  const products = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">
              The Shop
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-text-dark font-semibold">
              Gear that actually works
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:flex items-center gap-1.5 text-sm text-text-muted hover:text-forest transition-colors group"
          >
            Browse all
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group bg-white rounded-2xl overflow-hidden border border-cream-border hover:border-sage hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-square bg-cream-dark overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {product.bestSeller && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-terra text-white rounded-lg text-[11px] font-bold tracking-wide uppercase">
                      #1 Pick
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ExternalLink size={12} className="text-forest" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-[11px] text-text-muted font-medium uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h3 className="font-semibold text-text-dark text-sm leading-snug group-hover:text-forest transition-colors line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className={i < Math.round(product.rating) ? "text-earth fill-earth" : "text-cream-border"}
                    />
                  ))}
                  <span className="text-[11px] text-text-muted ml-1">
                    ({product.reviewCount.toLocaleString()})
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-forest text-sm">{product.priceRange}</span>
                  <span className="text-[11px] text-text-muted">Amazon →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-cream-border">
          <p className="text-xs text-text-muted">
            Affiliate links — we earn a small commission at no extra cost to you.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-cream-border text-text-body hover:border-forest hover:text-forest rounded-xl text-sm font-medium transition-all group"
          >
            All products <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
