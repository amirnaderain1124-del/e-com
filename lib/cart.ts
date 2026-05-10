"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  currency: "AED" | "USD" | "EUR" | "GBP";
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string, size?: string, color?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string, color?: string) => void;
  clear: () => void;
  setCurrency: (currency: CartState["currency"]) => void;
};

const key = (item: Pick<CartItem, "id" | "size" | "color">) => `${item.id}-${item.size ?? ""}-${item.color ?? ""}`;

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      currency: "AED",
      addItem: (item, quantity = 1) =>
        set((state) => {
          const itemKey = key(item);
          const existing = state.items.find((entry) => key(entry) === itemKey);
          if (existing) {
            return { items: state.items.map((entry) => (key(entry) === itemKey ? { ...entry, quantity: entry.quantity + quantity } : entry)) };
          }
          return { items: [...state.items, { ...item, quantity }] };
        }),
      removeItem: (id, size, color) => set((state) => ({ items: state.items.filter((item) => key(item) !== key({ id, size, color })) })),
      updateQuantity: (id, quantity, size, color) =>
        set((state) => ({
          items: state.items.map((item) => (key(item) === key({ id, size, color }) ? { ...item, quantity: Math.max(1, quantity) } : item))
        })),
      clear: () => set({ items: [] }),
      setCurrency: (currency) => set({ currency })
    }),
    { name: "iron-apex-cart" }
  )
);
