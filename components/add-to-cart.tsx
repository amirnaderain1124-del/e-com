"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";

export function AddToCart({ product, sticky = false }: { product: Product; sticky?: boolean }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const addItem = useCart((state) => state.addItem);
  const label = useMemo(() => `Add ${product.name} to cart`, [product.name]);

  return (
    <div className={sticky ? "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 p-3 backdrop-blur md:hidden" : "space-y-5"}>
      {!sticky ? (
        <>
          <div>
            <p className="mb-2 text-sm font-bold uppercase text-zinc-400">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((entry) => (
                <button
                  key={entry}
                  type="button"
                  onClick={() => setSize(entry)}
                  className={`rounded border px-3 py-2 text-sm font-bold ${size === entry ? "border-red-500 bg-red-600 text-white" : "border-white/10 bg-white/5 text-zinc-200"}`}
                >
                  {entry}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-bold uppercase text-zinc-400">Color</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((entry) => (
                <button
                  key={entry}
                  type="button"
                  onClick={() => setColor(entry)}
                  className={`rounded border px-3 py-2 text-sm font-bold ${color === entry ? "border-red-500 bg-red-600 text-white" : "border-white/10 bg-white/5 text-zinc-200"}`}
                >
                  {entry}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : null}
      <button
        aria-label={label}
        type="button"
        onClick={() => addItem({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0], size, color })}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-red-600 px-5 font-black text-white hover:bg-red-500"
      >
        <ShoppingBag className="h-5 w-5" />
        Add to cart
      </button>
    </div>
  );
}
