import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-sm text-zinc-400 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-black text-white">IRON<span className="text-red-600">APEX</span></p>
          <p className="mt-3">Premium Olympic lifting gear for lifters who treat the platform like a proving ground.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Shop</p>
          <div className="mt-3 grid gap-2">
            <Link href="/products">All products</Link>
            <Link href="/products?tag=competition">Competition-ready gear</Link>
            <Link href="/products?tag=best-seller">Best sellers</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Support</p>
          <div className="mt-3 grid gap-2">
            <Link href="/orders/track">Order tracking</Link>
            <Link href="/shipping">UAE shipping</Link>
            <Link href="/returns">Returns</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Performance Notes</p>
          <p className="mt-3">New product drops, meet prep articles, and athlete sponsorship opportunities.</p>
        </div>
      </div>
    </footer>
  );
}
