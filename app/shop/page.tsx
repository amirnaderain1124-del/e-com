import type { Metadata } from "next";
import { SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Olympic Weightlifting Gear",
  description: "Shop competition-grade lifting shoes, singlets, knee sleeves, wrist wraps, belts, apparel, chalk, and barbell accessories."
};

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const params = await searchParams;
  const query = params.q?.toLowerCase() ?? "";
  const selected = params.category;
  const visible = products.filter((product) => {
    const matchesCategory = !selected || product.categorySlug === selected;
    const matchesQuery = !query || [product.name, product.category, product.description, product.tags.join(" ")].join(" ").toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Shop</p>
          <h1 className="mt-2 text-5xl font-black uppercase text-white">Olympic lifting gear</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">Advanced filters, smart search, and complete-setup recommendations for serious strength athletes.</p>
        </div>
        <form action="/shop" className="flex min-w-0 gap-2">
          <input name="q" placeholder="Search shoes, sleeves, singlets..." className="min-h-12 w-full rounded border border-white/10 bg-black px-4 text-white outline-none md:w-80" />
          <button className="rounded bg-red-600 px-5 font-black text-white">Search</button>
        </form>
      </div>
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="metal-panel h-fit rounded-lg p-5">
          <div className="mb-4 flex items-center gap-2 font-black text-white">
            <SlidersHorizontal className="h-5 w-5 text-red-500" /> Advanced filters
          </div>
          <div className="grid gap-2">
            <a href="/shop" className="rounded px-3 py-2 text-sm font-bold text-zinc-300 hover:bg-white/10">All products</a>
            {categories.map((category) => (
              <a key={category.slug} href={`/shop?category=${category.slug}`} className={`rounded px-3 py-2 text-sm font-bold hover:bg-white/10 ${selected === category.slug ? "bg-red-600 text-white" : "text-zinc-300"}`}>
                {category.name}
              </a>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm text-zinc-400">
            <p className="font-bold text-white">Filters ready for:</p>
            <p>Size, stock status, price, material, athlete collection, training phase, and competition approval.</p>
          </div>
        </aside>
        <section>
          <div className="mb-4 flex justify-between text-sm text-zinc-400">
            <span>{visible.length} products</span>
            <span>Infinite scroll ready with cursor pagination</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
      </div>
    </main>
  );
}
