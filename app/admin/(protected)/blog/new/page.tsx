import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPostPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white text-2xl font-bold">New Post</h1>
        <p className="text-[#4a5e4a] text-sm mt-1">Write a new blog article</p>
      </div>
      <BlogForm />
    </div>
  );
}
