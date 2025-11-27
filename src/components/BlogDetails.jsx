"use client"
import { useParams } from 'react-router-dom';
import blogData from './path/to/blogData';
import Image from 'next/image';

function BlogDetails() {
  const { id } = useParams();
  const post = blogData.find((item) => item.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <Image
              src={blog.image}
              alt={blog.title}
              width={900}
              height={500}
              className="rounded-lg mb-6"
            />
      <p>{post.description}</p>
      <p>Category: {post.category}</p>
    </div>
  );
}

export default BlogDetails;
