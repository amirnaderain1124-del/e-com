import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/products";

export const metadata: Metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-black uppercase text-white">Collections</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.slug} href={`/shop?category=${category.slug}`} className="metal-panel rounded-lg p-8 hover:border-red-500/50">
            <h2 className="text-2xl font-black text-white">{category.name}</h2>
            <p className="mt-2 text-zinc-400">Built for maximal performance under the bar.</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
