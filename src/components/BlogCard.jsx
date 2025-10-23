// src/components/BlogCard.jsx
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.id}`} className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
      <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
      <p className="text-gray-500 text-sm">{post.body.slice(0, 100)}...</p>
    </Link>
  );
}
