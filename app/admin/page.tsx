import type { Metadata } from "next";
import { BarChart3, Boxes, FileText, Package, Ticket, Users } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Admin Dashboard" };

const cards = [
  ["Revenue", "AED 148,920", BarChart3],
  ["Orders", "382 processing", Package],
  ["Inventory", "11 low-stock SKUs", Boxes],
  ["Users", "2,418 athletes", Users],
  ["Coupons", "6 active codes", Ticket],
  ["Blog", "14 training articles", FileText]
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-red-500">Admin</p>
      <h1 className="mt-2 text-5xl font-black uppercase text-white">Command center</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(([title, value, Icon]) => (
          <article key={title as string} className="metal-panel rounded-lg p-6">
            <Icon className="h-6 w-6 text-red-500" />
            <p className="mt-5 text-sm uppercase text-zinc-500">{title as string}</p>
            <p className="text-3xl font-black text-white">{value as string}</p>
          </article>
        ))}
      </div>
      <section className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
        <div className="grid grid-cols-5 border-b border-white/10 px-4 py-3 text-sm font-bold uppercase text-zinc-400">
          <span>Product</span><span>Category</span><span>Stock</span><span>Price</span><span>Status</span>
        </div>
        {products.map((product) => (
          <div key={product.id} className="grid grid-cols-5 px-4 py-4 text-sm text-zinc-300">
            <span className="font-bold text-white">{product.name}</span>
            <span>{product.category}</span>
            <span>{product.stock}</span>
            <span>AED {product.price}</span>
            <span className="text-green-400">Live</span>
          </div>
        ))}
      </section>
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {["Product CRUD", "Order processing", "Sponsorship submissions"].map((title) => (
          <div key={title} className="rounded-lg border border-white/10 bg-black p-5">
            <h2 className="font-black text-white">{title}</h2>
            <p className="mt-2 text-sm text-zinc-400">Server actions and Prisma mutations are ready to connect to authenticated admin forms.</p>
          </div>
        ))}
      </section>
    </main>
  );
}
