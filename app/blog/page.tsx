import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/products";

export const metadata: Metadata = { title: "Lifting Guides" };

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-black uppercase text-white">Training articles</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
            <div className="relative aspect-video"><Image src={post.image} alt={post.title} fill sizes="33vw" className="object-cover" /></div>
            <div className="p-5"><h2 className="text-xl font-black text-white">{post.title}</h2><p className="mt-2 text-zinc-400">{post.excerpt}</p></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
