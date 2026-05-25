import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">Edit Post</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">{post.title}</p>
      </div>
      <BlogForm
        post={{
          ...post,
          tags: JSON.parse(post.tags as string) as string[],
          publishedAt: post.publishedAt.toISOString().split("T")[0],
        }}
      />
    </div>
  );
}
