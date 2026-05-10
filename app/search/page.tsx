import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = params.q?.toLowerCase() ?? "";
  const results = products.filter((product) => [product.name, product.category, product.tags.join(" ")].join(" ").toLowerCase().includes(q));
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-black uppercase text-white">Smart search</h1>
      <form className="mt-6 flex max-w-2xl gap-2">
        <input name="q" defaultValue={q} placeholder="Search by lift, gear, material, or category" className="min-h-12 flex-1 rounded border border-white/10 bg-black px-4 text-white" />
        <button className="rounded bg-red-600 px-5 font-black text-white">Search</button>
      </form>
      <p className="mt-4 text-zinc-400">Autocomplete and AI intent expansion ready for vector search integration.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {(q ? results : products).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
