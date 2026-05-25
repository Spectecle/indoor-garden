import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  blogPosts,
  getFeaturedPosts,
  getAllBlogCategories,
} from "@/lib/data/blog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog — Plant Care Guides",
  description:
    "Expert guides on indoor plant care — from overwatering rescue to bathroom jungles, propagation, pest control, and more.",
};

function BlogCard({
  post,
  large = false,
}: {
  post: (typeof blogPosts)[0];
  large?: boolean;
}) {
  if (large) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative rounded-2xl overflow-hidden block shadow-sm hover:shadow-xl transition-all duration-500"
      >
        <div className="relative h-72 sm:h-96 bg-cream-dark">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="inline-block px-3 py-1 bg-sage/90 text-white rounded-full text-xs font-semibold mb-3">
              {post.category}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-semibold leading-tight group-hover:text-sage-light transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-white/70 text-sm leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-4 text-white/60 text-xs">
              <div className="flex items-center gap-1.5">
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                {post.author}
              </div>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime} min read
              </span>
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative h-44 overflow-hidden bg-cream-dark">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-forest rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-lg text-text-dark font-semibold leading-snug group-hover:text-forest transition-colors line-clamp-2 flex-1">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-text-body leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 pt-3 border-t border-cream-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.authorAvatar}
              alt={post.author}
              width={24}
              height={24}
              className="rounded-full"
            />
            <div>
              <p className="text-xs font-medium text-text-dark">{post.author}</p>
              <p className="text-xs text-text-muted flex items-center gap-1">
                <Clock size={10} />
                {post.readTime} min
              </p>
            </div>
          </div>
          <ArrowRight
            size={15}
            className="text-text-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </div>
    </Link>
  );
}

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category ?? "";

  const filtered = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

  const featured = getFeaturedPosts();
  const categories = getAllBlogCategories();

  const [hero, ...rest] = featured;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Hero Header */}
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
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sage-light text-xs font-medium mb-4">
              <BookOpen size={12} />
              Plant Care Library
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-white font-semibold">
              Grow <em className="text-sage-light">Smarter</em>
            </h1>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Expert care guides, troubleshooting advice, and inspiration for
              every indoor gardener.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
              <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="#FDFAF4" />
            </svg>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <Link
              href="/blog"
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                !selectedCategory
                  ? "bg-forest text-white"
                  : "bg-white border border-cream-border text-text-body hover:border-forest"
              )}
            >
              All Posts
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
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

          {/* Featured / Hero Post */}
          {!selectedCategory && hero && (
            <div className="mb-12">
              <h2 className="font-display text-2xl text-text-dark font-semibold mb-6">
                Editor's Pick
              </h2>
              <BlogCard post={hero} large />
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            <h2 className="font-display text-2xl text-text-dark font-semibold mb-6">
              {selectedCategory || "All Articles"}
              <span className="ml-3 text-sm font-body font-normal text-text-muted">
                ({filtered.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
