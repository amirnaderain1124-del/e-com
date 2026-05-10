import type { Metadata } from "next";
import { CartDrawer } from "@/components/cart-drawer";

export const metadata: Metadata = { title: "Cart" };

export default function CartPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-5xl font-black uppercase text-white">Cart</h1>
      <CartDrawer inline />
    </main>
  );
}
