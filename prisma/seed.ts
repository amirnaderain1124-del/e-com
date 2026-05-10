import { PrismaClient } from "@prisma/client";
import { categories, products, blogPosts } from "../lib/products";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@ironapex.ae" },
    update: {},
    create: { email: "admin@ironapex.ae", name: "Iron Apex Admin", role: "ADMIN" }
  });

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: { name: category.name },
      create: { name: category.name, slug: category.slug, description: `Competition-grade ${category.name.toLowerCase()} for serious athletes.` }
    });
  }

  for (const product of products) {
    const category = await prisma.category.findUniqueOrThrow({ where: { slug: product.categorySlug } });
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        details: product.details,
        categoryId: category.id,
        price: product.price,
        compareAtPrice: product.compareAt,
        currency: product.currency,
        tags: product.tags,
        isFeatured: Boolean(product.featured),
        isBestSeller: Boolean(product.bestSeller),
        images: { create: product.images.map((url, index) => ({ url, alt: product.name, sortOrder: index })) },
        variants: { create: product.sizes.flatMap((size) => product.colors.map((color) => ({ sku: `${product.id}-${size}-${color}`.replaceAll(" ", "-"), size, color, stock: Math.max(3, Math.floor(product.stock / product.sizes.length)) }))) },
        inventory: { create: { quantity: product.stock, lowStock: 5 } }
      }
    });
  }

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: { title: post.title, slug: post.slug, excerpt: post.excerpt, content: post.excerpt, coverImage: post.image, author: "Iron Apex Performance Desk", published: true, tags: ["weightlifting", "gear"] }
    });
  }

  await prisma.coupon.upsert({
    where: { code: "PLATFORM10" },
    update: {},
    create: { code: "PLATFORM10", description: "Launch discount for serious lifters", percentOff: 10, active: true }
  });
}

main().finally(async () => prisma.$disconnect());
