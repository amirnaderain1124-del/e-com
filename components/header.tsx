"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { useCart } from "@/lib/cart";

export function Header() {
  const count = useCart((state) => state.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black tracking-wide text-white">
          IRON<span className="text-red-600">APEX</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-300 md:flex">
          <Link href="/products">Shop</Link>
          <Link href="/blog">Training notes</Link>
          <Link href="/sponsorship">Sponsorship</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="rounded-full p-2 text-zinc-300 hover:bg-white/10 hover:text-white">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/account" aria-label="Account" className="rounded-full p-2 text-zinc-300 hover:bg-white/10 hover:text-white">
            <UserRound className="h-5 w-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative rounded-full p-2 text-zinc-300 hover:bg-white/10 hover:text-white">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 ? <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">{count}</span> : null}
          </Link>
          <button aria-label="Open menu" className="rounded-full p-2 text-zinc-300 hover:bg-white/10 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
