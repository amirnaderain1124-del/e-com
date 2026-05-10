"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/lib/products";

export function CartDrawer({ inline = false }: { inline?: boolean }) {
  const { items, removeItem, updateQuantity, currency } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={inline ? "rounded-lg border border-white/10 bg-zinc-950 p-5" : ""}>
      <div className="space-y-4">
        {items.length === 0 ? <p className="text-zinc-400">Your cart is ready for meet-day gear.</p> : null}
        {items.map((item) => (
          <article key={`${item.id}-${item.size}-${item.color}`} className="grid grid-cols-[72px_1fr_auto] gap-3 border-b border-white/10 pb-4">
            <div className="relative h-20 w-20 overflow-hidden rounded bg-zinc-900">
              <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <Link href={`/products/${item.slug}`} className="font-bold text-white">{item.name}</Link>
              <p className="text-sm text-zinc-500">{item.size} / {item.color}</p>
              <p className="mt-1 font-black text-zinc-200">{formatMoney(item.price, currency)}</p>
              <div className="mt-2 inline-flex items-center rounded border border-white/10">
                <button className="p-2" onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-8 text-center text-sm font-bold">{item.quantity}</span>
                <button className="p-2" onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id, item.size, item.color)} aria-label="Remove item" className="self-start rounded p-2 text-zinc-400 hover:bg-white/10 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-lg font-black text-white">
          <span>Total</span>
          <span>{formatMoney(total, currency)}</span>
        </div>
        <Link href="/checkout" className="flex min-h-12 items-center justify-center rounded bg-red-600 px-5 font-black text-white">Secure checkout</Link>
      </div>
    </div>
  );
}
