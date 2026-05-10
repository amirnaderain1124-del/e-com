import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/products";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Lifting guide</p>
      <h1 className="mt-2 text-5xl font-black uppercase text-white">{post.title}</h1>
      <p className="mt-5 text-xl text-zinc-300">{post.excerpt}</p>
      <div className="prose prose-invert mt-10 max-w-none text-zinc-300">
        <p>Every product decision starts with platform demands: stability under fatigue, fast transitions, legal competition profiles, and durability through high-volume blocks.</p>
        <p>Use this guide to build a setup that supports heavy training without adding noise. Shoes provide force transfer, sleeves manage warmth and rebound, wraps protect the rack, and apparel should disappear once the bar is moving.</p>
      </div>
    </main>
  );
}
