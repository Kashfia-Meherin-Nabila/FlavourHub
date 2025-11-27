import blogData from '@/data/BlogData';

import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Latest Food Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
