import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { getFeaturedPosts } from "@/lib/data/blog";

export default function BlogPreview() {
  const posts = getFeaturedPosts().slice(0, 3);
  const [hero, ...rest] = posts;

  if (!hero) return null;

  return (
    <section className="py-20 lg:py-28 bg-cream-dark border-t border-cream-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">
              The Blog
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-text-dark font-semibold">
              Know more, kill less
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 text-sm text-text-muted hover:text-forest transition-colors group"
          >
            All guides <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Hero post */}
          <Link
            href={`/blog/${hero.slug}`}
            className="lg:col-span-2 group relative rounded-2xl overflow-hidden min-h-[300px] flex items-end"
          >
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0e]/85 via-[#0d1a0e]/30 to-transparent" />

            <div className="relative p-6 sm:p-8">
              <span className="inline-block px-2.5 py-1 bg-sage/20 text-sage-light border border-sage/20 rounded-full text-xs font-semibold mb-3">
                {hero.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold leading-tight group-hover:text-sage-light transition-colors">
                {hero.title}
              </h3>
              <div className="mt-3 flex items-center gap-3 text-white/50 text-xs">
                <span className="flex items-center gap-1"><Clock size={11} />{hero.readTime} min</span>
                <span>·</span>
                <span>{hero.author}</span>
              </div>
            </div>
          </Link>

          {/* Secondary posts */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex-1 relative rounded-2xl overflow-hidden min-h-[140px] flex items-end"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0e]/80 to-transparent" />
                <div className="relative p-4 w-full">
                  <span className="text-[11px] text-white/50 font-medium uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="font-display text-base text-white font-semibold leading-tight mt-0.5 group-hover:text-sage-light transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-6 sm:hidden text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-forest font-medium">
            All guides <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
