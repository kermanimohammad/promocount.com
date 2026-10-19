# Promo Count

Static deal-discovery demo for [promocount.com](https://promocount.com).

Built with Next.js **static export** (`output: "export"`) so the site is plain HTML/CSS/JS and can run on **GitHub Pages** with no Node server.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Static build (same as GitHub Pages)

```bash
npm run build
npm run preview
```

The production files are written to the `out/` folder.

## GitHub Pages

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push to `main` (or run the **Deploy Promo Count to GitHub Pages** workflow)
3. Point DNS for `promocount.com` to GitHub Pages:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `kermanimohammad.github.io`
4. In Pages settings, set custom domain to `promocount.com` and enable HTTPS when available

A `CNAME` file is included under `public/` so it ships inside `out/`.

## eBay Production keyset (Marketplace Account Deletion)

GitHub Pages cannot run API routes. Use the **Cloudflare Worker** in `cloudflare/ebay-deletion/` for:

`https://promocount.com/api/ebay/marketplace-account-deletion`

See [cloudflare/ebay-deletion/README.md](./cloudflare/ebay-deletion/README.md).

## Stack

Next.js (static export), TypeScript, Tailwind CSS, shadcn/ui
