export default function OrderTrackingPage() {
  return <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"><h1 className="text-5xl font-black uppercase text-white">Order tracking</h1><form className="mt-8 grid gap-3"><input placeholder="Order number" className="rounded border border-white/10 bg-black px-4 py-3 text-white" /><input placeholder="Email" className="rounded border border-white/10 bg-black px-4 py-3 text-white" /><button className="rounded bg-red-600 px-5 py-3 font-black text-white">Track order</button></form></main>;
}
