import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";
import { absoluteUrl } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ checkoutUrl: "/checkout?demo=true", message: "Stripe is not configured. Add STRIPE_SECRET_KEY for live checkout." });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const line_items = products.slice(0, 1).map((product) => ({
    quantity: 1,
    price_data: {
      currency: product.currency.toLowerCase(),
      product_data: { name: product.name, images: [product.images[0]], description: product.description },
      unit_amount: product.price * 100
    }
  }));

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: absoluteUrl("/account?checkout=success"),
    cancel_url: absoluteUrl("/cart?checkout=cancelled"),
    shipping_address_collection: { allowed_countries: ["AE", "SA", "QA", "KW", "BH", "OM"] }
  });

  return NextResponse.redirect(session.url ?? absoluteUrl("/checkout"));
}
