"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Eye, EyeOff, Trash2, Pencil, FileText, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  published: boolean;
  tags: string[];
}

export default function BlogAdminClient({ posts: initial }: { posts: Post[] }) {
  const [posts, setPosts] = useState(initial);
  const [search, setSearch] = useState("");

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase())
  );

  async function togglePublished(id: string, published: boolean) {
    await fetch(`/api/admin/blog/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !published }),
    });
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, published: !published } : p)));
  }

  async function deletePost(id: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-bold">Blog</h1>
          <p className="text-[#4a5e4a] text-sm mt-1">{posts.length} posts</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#2C5F2E] hover:bg-[#3a7a3c] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <Plus size={15} /> New post
        </Link>
      </div>

      <div className="relative mb-6">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#3a4e3a]" />
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#0d120d] border border-[#1a221a] rounded-xl pl-9 pr-4 py-2.5 text-white text-sm placeholder-[#3a4e3a] focus:outline-none focus:border-[#2C5F2E] transition-colors"
        />
      </div>

      <div className="bg-[#0d120d] border border-[#1a221a] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[3fr_1fr_1fr_80px_80px_100px] px-5 py-3 border-b border-[#1a221a]">
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Post</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Category</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Published</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider">Read time</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-center">Status</span>
          <span className="text-[#3a4e3a] text-xs font-semibold uppercase tracking-wider text-right">Actions</span>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#3a4e3a]">
            <FileText size={28} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No posts found</p>
          </div>
        )}

        {filtered.map((post) => (
          <div
            key={post.id}
            className="grid grid-cols-[3fr_1fr_1fr_80px_80px_100px] px-5 py-4 border-b border-[#141c14] last:border-0 hover:bg-[#0f150f] transition-colors items-center"
          >
            <div className="min-w-0 pr-4">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="text-white text-sm font-medium truncate">{post.title}</p>
                {post.featured && (
                  <span className="flex-shrink-0 flex items-center gap-1 text-[10px] text-[#7AA95C] bg-[#1a2e1a] border border-[#2a3e2a] px-1.5 py-0.5 rounded-full font-semibold">
                    <Star size={8} className="fill-[#7AA95C]" /> Featured
                  </span>
                )}
              </div>
              <p className="text-[#4a5e4a] text-xs">{post.author}</p>
            </div>

            <span className="text-[#5a6e5a] text-xs">{post.category}</span>
            <span className="text-[#4a5e4a] text-xs">{post.publishedAt}</span>

            <div className="flex items-center gap-1">
              <Clock size={11} className="text-[#3a4e3a]" />
              <span className="text-[#5a6e5a] text-xs">{post.readTime} min</span>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => togglePublished(post.id, post.published)}
                className={cn(
                  "flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors",
                  post.published
                    ? "bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20"
                    : "bg-[#1a1a1a] text-[#4a4a4a] hover:bg-[#222]"
                )}
              >
                {post.published ? <Eye size={10} /> : <EyeOff size={10} />}
                {post.published ? "Live" : "Draft"}
              </button>
            </div>

            <div className="flex items-center justify-end gap-1">
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="p-2 text-[#3a4e3a] hover:text-[#7AA95C] hover:bg-[#1a2e1a] rounded-lg transition-colors"
              >
                <Eye size={13} />
              </Link>
              <Link
                href={`/admin/blog/${post.id}`}
                className="p-2 text-[#3a4e3a] hover:text-[#b5c9a5] hover:bg-[#141c14] rounded-lg transition-colors"
              >
                <Pencil size={13} />
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="p-2 text-[#3a4e3a] hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
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
