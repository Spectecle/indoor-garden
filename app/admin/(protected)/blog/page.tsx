import { prisma } from "@/lib/prisma";
import BlogAdminClient from "@/components/admin/BlogAdminClient";
import { format } from "date-fns";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });
  const data = posts.map((p) => ({
    ...p,
    tags: JSON.parse(p.tags as string) as string[],
    publishedAt: format(p.publishedAt, "MMM d, yyyy"),
  }));
  return <BlogAdminClient posts={data} />;
}
