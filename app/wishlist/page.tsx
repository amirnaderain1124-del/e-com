import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Wishlist" };

export default function WishlistPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-black uppercase text-white">Wishlist</h1>
      <p className="mt-3 text-zinc-400">Saved platform gear. Connect Clerk user IDs for persistent wishlists.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
