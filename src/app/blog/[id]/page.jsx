import blogData from "@/data/BlogData";

import Image from "next/image";

export default function BlogDetails({ params }) {
  const blog = blogData.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <h1 className="text-center text-3xl mt-10">Blog Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

      <Image
        src={blog.image}
        alt={blog.title}
        width={900}
        height={500}
        className="rounded-lg mb-6"
      />

      <p className="text-lg text-gray-700 leading-relaxed">
        {blog.fullText}
      </p>
    </div>
  );
}
