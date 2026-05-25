"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostData {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  category?: string;
  tags?: string[];
  author?: string;
  authorAvatar?: string;
  publishedAt?: string;
  readTime?: number;
  featured?: boolean;
  published?: boolean;
}

const CATEGORIES = [
  "Care Guides",
  "Plant Spotlights",
  "Troubleshooting",
  "Inspiration",
  "Beginner Tips",
  "Advanced Growing",
];

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

export default function BlogForm({ post }: { post?: PostData }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    image: post?.image || "",
    category: post?.category || CATEGORIES[0],
    tags: post?.tags?.join(", ") || "",
    author: post?.author || "Indoor Garden Team",
    authorAvatar: post?.authorAvatar || "",
    publishedAt: post?.publishedAt || new Date().toISOString().split("T")[0],
    readTime: post?.readTime?.toString() || "5",
    featured: post?.featured || false,
    published: post?.published !== false,
  });
  const [preview, setPreview] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set(key: string, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      readTime: parseInt(form.readTime) || 5,
    };

    const url = post?.id ? `/api/admin/blog/${post.id}` : "/api/admin/blog";
    const method = post?.id ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/blog");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Failed to save");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl">
      <div className="space-y-6">
        {/* Meta */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Post details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => { set("title", e.target.value); if (!post?.id) set("slug", slugify(e.target.value)); }}
                required
                className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Slug *</label>
              <input type="text" value={form.slug} onChange={(e) => set("slug", e.target.value)} required className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Category</label>
              <select value={form.category} onChange={(e) => set("category", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Excerpt</label>
              <textarea value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)} rows={2} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors resize-none" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Hero image URL</label>
              <input type="url" value={form.image} onChange={(e) => set("image", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Tags</label>
              <input type="text" value={form.tags} onChange={(e) => set("tags", e.target.value)} placeholder="Houseplants, Beginner, Care" className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Author</label>
              <input type="text" value={form.author} onChange={(e) => set("author", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Read time (min)</label>
              <input type="number" min="1" value={form.readTime} onChange={(e) => set("readTime", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
            <div>
              <label className="block text-[#4a5e4a] text-xs font-semibold uppercase tracking-wider mb-2">Publish date</label>
              <input type="date" value={form.publishedAt} onChange={(e) => set("publishedAt", e.target.value)} className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#2C5F2E] transition-colors" />
            </div>
          </div>
        </div>

        {/* Content editor */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-sm">Content</h2>
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="flex items-center gap-2 text-[#4a5e4a] hover:text-[#7AA95C] text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-[#1a2e1a] transition-colors"
            >
              <Eye size={12} />
              {preview ? "Edit" : "Preview"}
            </button>
          </div>

          {preview ? (
            <div
              className="prose prose-invert prose-sm max-w-none min-h-[400px] text-[#9ab88a] leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: form.content
                  .replace(/^# (.+)$/gm, "<h1>$1</h1>")
                  .replace(/^## (.+)$/gm, "<h2>$1</h2>")
                  .replace(/^### (.+)$/gm, "<h3>$1</h3>")
                  .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\*(.+?)\*/g, "<em>$1</em>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/^/, "<p>")
                  .replace(/$/, "</p>"),
              }}
            />
          ) : (
            <textarea
              value={form.content}
              onChange={(e) => set("content", e.target.value)}
              rows={20}
              placeholder="Write your article in Markdown..."
              className="w-full bg-[#0a0f0a] border border-[#1a221a] rounded-xl px-4 py-3 text-white text-sm font-mono placeholder-[#3a4a3a] focus:outline-none focus:border-[#2C5F2E] transition-colors resize-none leading-relaxed"
            />
          )}
        </div>

        {/* Settings */}
        <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl p-6">
          <h2 className="text-white font-semibold text-sm mb-5">Settings</h2>
          <div className="space-y-3">
            {([
              { key: "featured", label: "Featured", desc: "Show in homepage blog preview" },
              { key: "published", label: "Published", desc: "Visible on the public blog" },
            ] as const).map(({ key, label, desc }) => (
              <label key={key} className="flex items-center gap-4 cursor-pointer">
                <div className="relative">
                  <input type="checkbox" checked={form[key]} onChange={(e) => set(key, e.target.checked)} className="sr-only" />
                  <div className={cn("w-10 h-5 rounded-full transition-colors", form[key] ? "bg-[#2C5F2E]" : "bg-[#1a221a]")}>
                    <div className={cn("absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform", form[key] ? "translate-x-5" : "translate-x-0.5")} />
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

        {error && <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{error}</p>}

        <div className="flex items-center gap-3">
          <button type="button" onClick={() => router.back()} className="flex items-center gap-2 text-[#4a5e4a] hover:text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-[#111611] transition-colors">
            <ArrowLeft size={14} /> Cancel
          </button>
          <button type="submit" disabled={saving} className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
            <Save size={14} />
            {saving ? "Saving..." : post?.id ? "Save changes" : "Publish post"}
          </button>
        </div>
      </div>
    </form>
  );
}
