# Iron Apex Ecommerce

Premium full-stack ecommerce starter for Olympic weightlifting apparel, lifting accessories, and strength sports products.

## Stack

- Next.js 15 App Router, React, TypeScript, Tailwind CSS
- Framer Motion animations
- Prisma ORM with PostgreSQL
- Stripe Checkout route
- Clerk-ready authentication wrapper
- Zustand cart state
- Cloudinary/UploadThing-ready image configuration
- Vercel deployment config

## Local setup

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:migrate
npm run db:seed
npm run dev
```

For local UI-only development, the app runs with seeded in-code product data before PostgreSQL is connected.

## Demo credentials

- Admin: `admin@ironapex.ae`
- Test user: `athlete@ironapex.ae`
- Passwords are managed by Clerk/Auth.js once authentication is configured.

## Required environment variables

See `.env.example` for `DATABASE_URL`, Clerk keys, Stripe keys, Cloudinary name, UploadThing token, and app URL.

## Deployment

Vercel:

1. Import the GitHub repository.
2. Add environment variables from `.env.example`.
3. Attach a PostgreSQL database.
4. Run `npm run db:migrate && npm run db:seed`.
5. Deploy with the included `vercel.json`.

## Design system

- Logo concept: IRONAPEX wordmark with red barbell/A monogram.
- Palette: Carbon `#050505`, Gunmetal `#17191d`, Steel `#d8dce2`, Platform Red `#d71920`, Chalk White `#f5f5f5`.
- Typography: heavy uppercase display treatment for hero and commerce headings, compact sans-serif for UI.
- Components: hero banners, product cards, metallic panels, filter rail, cart drawer, sticky mobile CTA, admin metric cards.
