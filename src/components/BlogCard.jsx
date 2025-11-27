import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>

        <Link href={`/blog/${blog.id}`}>
          <button className="btn btn-primary w-full">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
