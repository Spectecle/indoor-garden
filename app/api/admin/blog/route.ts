import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    await requireAuth();
    const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth();
    const data = await request.json();
    const post = await prisma.blogPost.create({
      data: {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt || "",
        content: data.content || "",
        image: data.image || "",
        category: data.category || "Care Guides",
        tags: JSON.stringify(data.tags || []),
        author: data.author || "Indoor Garden Team",
        authorAvatar: data.authorAvatar || "",
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : new Date(),
        readTime: parseInt(data.readTime) || 5,
        featured: data.featured || false,
        published: data.published !== false,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
