import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Clock,
  ChevronRight,
  ArrowLeft,
  ShoppingBag,
  Tag,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts, getPostBySlug } from "@/lib/data/blog";
import { plants, getPlantBySlug } from "@/lib/data/plants";
import { products, getProductBySlug } from "@/lib/data/products";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^# (.+)$/gm, '<h1 class="font-display text-3xl text-text-dark font-semibold mt-8 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl text-text-dark font-semibold mt-8 mb-3">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl text-text-dark font-semibold mt-6 mb-2">$1</h3>')
    .replace(/^\*\*(.+?)\*\*(.*)$/gm, '<p class="mb-3 text-text-body leading-relaxed"><strong class="font-semibold text-text-dark">$1</strong>$2</p>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-text-body leading-relaxed mb-1">• $1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 text-text-body leading-relaxed mb-1 list-decimal list-inside">$1</li>')
    .replace(/\n{2,}/g, '</p><p class="mb-4 text-text-body leading-relaxed">')
    .replace(/^(?!<[h|l|p])(.+)$/gm, '<p class="mb-4 text-text-body leading-relaxed">$1</p>');
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPlantData = post.relatedPlants
    .map((slug) => getPlantBySlug(slug))
    .filter(Boolean)
    .slice(0, 3);

  const relatedProductData = post.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean)
    .slice(0, 2);

  const morePosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream">
        {/* Breadcrumb */}
        <div className="bg-cream-dark border-b border-cream-border pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-1.5 text-xs text-text-muted">
              <Link href="/" className="hover:text-forest transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-text-dark font-medium line-clamp-1 max-w-xs">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 lg:h-[30rem] bg-cream-dark">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Article Header */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-border mb-8">
                <span className="inline-block px-3 py-1 bg-sage-pale text-forest rounded-full text-xs font-semibold mb-4">
                  {post.category}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl text-text-dark font-semibold leading-tight">
                  {post.title}
                </h1>
                <p className="mt-3 text-text-body leading-relaxed">{post.excerpt}</p>

                <div className="mt-5 flex flex-wrap items-center gap-4 pt-4 border-t border-cream-border">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.authorAvatar}
                      alt={post.author}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-text-dark">{post.author}</p>
                      <p className="text-xs text-text-muted">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted text-sm ml-auto">
                    <Clock size={14} />
                    {post.readTime} min read
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cream-border prose-botanical"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
              />

              {/* Tags */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Tag size={14} className="text-text-muted" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-cream-border text-text-muted rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Back to Blog */}
              <Link
                href="/blog"
                className="mt-8 inline-flex items-center gap-2 text-forest font-medium text-sm hover:underline"
              >
                <ArrowLeft size={14} />
                Back to all articles
              </Link>

              {/* More Posts */}
              {morePosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-display text-2xl text-text-dark font-semibold mb-6">
                    More Articles
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {morePosts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}`}
                        className="group bg-white rounded-xl overflow-hidden border border-cream-border hover:shadow-md transition-all"
                      >
                        <div className="relative h-28 overflow-hidden">
                          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="200px" />
                        </div>
                        <div className="p-3">
                          <p className="text-xs text-terra font-semibold mb-1">{p.category}</p>
                          <p className="text-xs font-semibold text-text-dark group-hover:text-forest transition-colors line-clamp-2">{p.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 mt-0">
              {/* Related Plants */}
              {relatedPlantData.length > 0 && (
                <div className="bg-white rounded-2xl border border-cream-border p-5">
                  <h3 className="font-display text-lg text-text-dark font-semibold mb-4">
                    Plants in This Article
                  </h3>
                  <div className="space-y-3">
                    {relatedPlantData.map(
                      (plant) =>
                        plant && (
                          <Link
                            key={plant.id}
                            href={`/encyclopedia/${plant.slug}`}
                            className="flex items-center gap-3 group"
                          >
                            <div className="w-12 h-12 relative rounded-xl overflow-hidden flex-shrink-0 bg-cream-dark">
                              <Image
                                src={plant.image}
                                alt={plant.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-text-dark group-hover:text-forest transition-colors">
                                {plant.name}
                              </p>
                              <p className="text-xs text-text-muted">
                                {plant.careLevel} care
                              </p>
                            </div>
                          </Link>
                        )
                    )}
                  </div>
                  <Link
                    href="/encyclopedia"
                    className="mt-4 block text-center text-xs text-forest font-medium hover:underline"
                  >
                    Browse all plants →
                  </Link>
                </div>
              )}

              {/* Shop Recommendations */}
              {relatedProductData.length > 0 && (
                <div className="bg-sage-pale rounded-2xl p-5">
                  <h3 className="font-display text-lg text-text-dark font-semibold mb-1">
                    Recommended Products
                  </h3>
                  <p className="text-xs text-text-muted mb-4">
                    Tools mentioned in this article
                  </p>
                  <div className="space-y-3">
                    {relatedProductData.map(
                      (product) =>
                        product && (
                          <a
                            key={product.id}
                            href={product.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="flex items-center gap-3 bg-white rounded-xl p-3 border border-cream-border hover:border-forest hover:shadow-sm transition-all group"
                          >
                            <div className="w-12 h-12 relative rounded-lg overflow-hidden flex-shrink-0 bg-cream-dark">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-text-dark group-hover:text-forest transition-colors line-clamp-2">
                                {product.name}
                              </p>
                              <p className="text-xs font-bold text-forest mt-0.5">
                                {product.priceRange}
                              </p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <ShoppingBag size={13} className="text-text-muted" />
                              <ExternalLink size={11} className="text-text-muted" />
                            </div>
                          </a>
                        )
                    )}
                  </div>
                  <p className="mt-3 text-xs text-text-muted text-center">
                    Amazon affiliate links
                  </p>
                </div>
              )}

              {/* Newsletter */}
              <div className="bg-forest rounded-2xl p-5">
                <h3 className="font-display text-lg text-white font-semibold">
                  Weekly plant tips
                </h3>
                <p className="text-white/70 text-xs mt-1 mb-4">
                  Join 50,000+ plant lovers. Every Thursday.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 text-sm focus:outline-none focus:border-sage mb-2"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-sage hover:bg-sage-light text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    Subscribe Free
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
