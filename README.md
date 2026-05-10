# Iron Apex Ecommerce

Static ecommerce storefront built with HTML, CSS, and JavaScript. It is compatible with Netlify without a build step.

## Run locally

Open `index.html` in a browser, or run a simple static server:

```bash
npx serve .
```

## Deploy to Netlify

1. Push this folder to a Git repository.
2. Create a new Netlify site from the repository.
3. Use these build settings:
   - Build command: leave empty
   - Publish directory: `.`
4. Deploy.

The included `netlify.toml` already sets the publish directory and single-page fallback.

## Production payment options

This demo uses a front-end cart with `localStorage`. For real orders, connect one of:

- Stripe Checkout through Netlify Functions
- Snipcart
- Shopify Buy Button
- A custom backend API
