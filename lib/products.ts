export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAt?: number;
  currency: "AED" | "USD" | "EUR" | "GBP";
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  tags: string[];
  sizes: string[];
  colors: string[];
  description: string;
  details: string[];
  bestSeller?: boolean;
  featured?: boolean;
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

export const categories = [
  "Weightlifting shoes",
  "Singlets",
  "Knee sleeves",
  "Wrist wraps",
  "Belts",
  "Compression wear",
  "Oversized gym shirts",
  "Shorts",
  "Hoodies",
  "Chalk",
  "Gym bags",
  "Recovery tools",
  "Barbell accessories"
].map((name) => ({ name, slug: name.toLowerCase().replaceAll(" ", "-") }));

export const products: Product[] = [
  {
    id: "p1",
    slug: "apex-carbon-lifter",
    name: "Apex Carbon Lifter",
    category: "Weightlifting shoes",
    categorySlug: "weightlifting-shoes",
    price: 899,
    compareAt: 1049,
    currency: "AED",
    images: [img("photo-1599058917212-d750089bc07e"), img("photo-1583454110551-21f2fa2afe61")],
    rating: 4.9,
    reviewCount: 128,
    stock: 18,
    tags: ["competition", "maximal performance", "stable heel"],
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    colors: ["Black/Silver", "Red/Black"],
    description: "Built for maximal performance with a locked platform, aggressive strap geometry, and explosive pull stability.",
    details: ["22mm TPU heel", "Dual metatarsal straps", "Competition legal", "UAE delivery in 1-3 days"],
    bestSeller: true,
    featured: true
  },
  {
    id: "p2",
    slug: "competition-grade-singlet",
    name: "Competition Grade Singlet",
    category: "Singlets",
    categorySlug: "singlets",
    price: 349,
    currency: "AED",
    images: [img("photo-1571019613914-85f342c6a11e"), img("photo-1517836357463-d25dfeac3438")],
    rating: 4.8,
    reviewCount: 91,
    stock: 31,
    tags: ["IWF cut", "compression", "platform ready"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gunmetal", "Red"],
    description: "Competition-grade apparel engineered to stay locked during cleans, jerks, snatches, and heavy squats.",
    details: ["High-compression recycled nylon", "Flatlock seams", "No-slip leg grippers", "Weigh-in friendly profile"],
    bestSeller: true
  },
  {
    id: "p3",
    slug: "forge-7mm-knee-sleeves",
    name: "Forge 7mm Knee Sleeves",
    category: "Knee sleeves",
    categorySlug: "knee-sleeves",
    price: 289,
    currency: "AED",
    images: [img("photo-1517963879433-6ad2b056d712"), img("photo-1534367610401-9f5ed68180aa")],
    rating: 4.9,
    reviewCount: 216,
    stock: 44,
    tags: ["7mm neoprene", "squat support", "IPF style"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black/Red", "Black/Silver"],
    description: "Engineered for explosive pulls and heavy receiving positions with dense rebound and secure warmth.",
    details: ["Premium 7mm neoprene", "Tapered anatomical profile", "Sold as pair", "Heat-retaining lining"],
    featured: true
  },
  {
    id: "p4",
    slug: "cerakote-wrist-wraps",
    name: "Cerakote Wrist Wraps",
    category: "Wrist wraps",
    categorySlug: "wrist-wraps",
    price: 149,
    currency: "AED",
    images: [img("photo-1532029837206-abbe2b7620e3"), img("photo-1594737625785-a6cbdabd333c")],
    rating: 4.7,
    reviewCount: 63,
    stock: 67,
    tags: ["pressing", "front rack", "redline"],
    sizes: ["45cm", "60cm", "90cm"],
    colors: ["Redline", "Blackout"],
    description: "Rigid support for split jerks, heavy benches, and front-rack confidence without bulky stitching.",
    details: ["Industrial thumb loop", "Stiff elastic blend", "Left/right markers", "Fast break-in"]
  },
  {
    id: "p5",
    slug: "platform-leather-belt",
    name: "Platform Leather Belt",
    category: "Belts",
    categorySlug: "belts",
    price: 499,
    compareAt: 579,
    currency: "AED",
    images: [img("photo-1605296867304-46d5465a13f1"), img("photo-1581009146145-b5ef050c2e1e")],
    rating: 4.8,
    reviewCount: 74,
    stock: 22,
    tags: ["leather", "bracing", "squat"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Oxblood"],
    description: "A premium bracing belt for maximal attempts, built with dense leather and a quick-lock lever option.",
    details: ["10mm vegetable-tanned leather", "Competition depth", "Polished steel hardware", "Lifetime stitching warranty"]
  },
  {
    id: "p6",
    slug: "redline-oversized-pump-cover",
    name: "Redline Oversized Pump Cover",
    category: "Oversized gym shirts",
    categorySlug: "oversized-gym-shirts",
    price: 189,
    currency: "AED",
    images: [img("photo-1574680096145-d05b474e2155"), img("photo-1549060279-7e168fcee0c2")],
    rating: 4.6,
    reviewCount: 52,
    stock: 58,
    tags: ["oversized", "heavy cotton", "training"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Washed Black", "Metal Grey"],
    description: "Heavyweight training cotton with an aggressive oversized cut for warmups, pulls, and off-platform work.",
    details: ["240gsm cotton", "Dropped shoulder", "Pre-shrunk", "Screen-printed back hit"],
    featured: true
  }
];

export const blogPosts = [
  {
    slug: "choosing-weightlifting-shoes",
    title: "How to Choose Olympic Weightlifting Shoes",
    excerpt: "Heel height, strap tension, toe box volume, and platform feedback explained for serious lifters.",
    image: img("photo-1518611012118-696072aa579a")
  },
  {
    slug: "meet-day-gear-checklist",
    title: "Competition Day Gear Checklist",
    excerpt: "A practical packing list for weigh-in, warmups, attempts, recovery, and UAE federation events.",
    image: img("photo-1552674605-db6ffd4facb5")
  },
  {
    slug: "knee-sleeve-fit-guide",
    title: "Knee Sleeve Fit Guide",
    excerpt: "How tight is too tight, when to size down, and how to keep rebound without cutting circulation.",
    image: img("photo-1517963628607-235ccdd5476c")
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatMoney(value: number, currency = "AED") {
  return new Intl.NumberFormat("en-AE", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}

export function relatedProducts(product: Product) {
  return products.filter((item) => item.slug !== product.slug && (item.categorySlug === product.categorySlug || item.featured)).slice(0, 4);
}
