# Cognitrade | 1DES Blog (Cloudflare Worker)

A modern, serverless blog platform built with Cloudflare Workers, Wrangler, and TypeScript. This project delivers a fast, secure, and scalable blog solution, leveraging edge computing for optimal performance.

---

## Features

* **Serverless**: Powered by [Cloudflare Workers](https://workers.cloudflare.com/) for blazing-fast edge delivery.
* **TypeScript**: Strongly-typed codebase for improved reliability and maintainability.
* **Static Content**: Blog posts served as static files from the `public/` directory.
* **Sitemap & RSS**: Automatically generate `sitemap.xml` and RSS feeds.
* **Custom Components**: Reusable React-like components in the `src/components` directory.
* **SEO & Performance**: Built-in SEO optimizations and fast loading times.

---

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Project Structure](#project-structure)
* [Development](#development)
* [Building & Deployment](#building--deployment)
* [Scripts](#scripts)
* [Configuration](#configuration)
* [License](#license)

---

## Prerequisites

* [Node.js](https://nodejs.org/) v16+
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
* [Cloudflare Account](https://dash.cloudflare.com/) with Workers enabled
* [Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/)

---

## Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:the1des/cognitrade.git
   cd cognitrade
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Wrangler**
   Open `wrangler.jsonc` and update with your Cloudflare account ID, zone ID, and any environment-specific settings.

---

## Project Structure

```
blog-1des/
├─ .vscode/               # VSCode workspace settings
├─ .wrangler/             # Wrangler environment configs
├─ blog/                  # Markdown or JSON blog content
├─ public/                # Static assets and generated content
│  ├─ images/
│  ├─ img/
│  ├─ posts/
│  └─ robots.txt
├─ scripts/               # Utility scripts (e.g., generateBlogIndex.js)
├─ src/
│  ├─ components/         # Reusable UI components
│  │  ├─ footer.ts
│  │  ├─ head.ts
│  │  └─ navbar.ts
│  ├─ pages/              # Cloudflare Worker route handlers
│  │  ├─ blogIndex.ts     # Generated blog index file
│  │  ├─ home.ts          # Home page logic
│  │  ├─ notFound.ts      # 404 logic
│  │  ├─ post.ts          # Individual post rendering
│  │  ├─ posts.ts         # Posts listing
│  │  └─ sitemap.ts       # Sitemap generation
│  └─ index.ts            # Worker entry point
├─ test/                  # Unit and integration tests
├─ package.json
├─ tsconfig.json
├─ wrangler.jsonc         # Wrangler configuration
└─ README.md              # You are here!
```

---

## Development

To develop locally and view your changes:

```bash
npm run dev
```

This command does the following:

1. **Generates the blog index**
   It runs `scripts/generateBlogIndex.js`, which scans your `/blog` folder and creates the `blogIndex.ts` file used for rendering post listings.

2. **Starts the local server**
   Runs `wrangler dev` to serve your Worker at `http://127.0.0.1:8787`.

### ⚠️ Important

**Do not use `wrangler dev` directly**. It will not regenerate the blog index, and you may see outdated content.

Always use:

```bash
npm run dev
```

---

## Building & Deployment

This project uses the `wrangler deploy` command to publish to Cloudflare Workers.

### 1. Build (optional)

```bash
npm run build
```

This ensures the blog index and Worker bundle are ready. Useful before manual inspection or CI/CD.

### 2. Deploy

```bash
npm run deploy
```

This runs `generateBlogIndex.js` and then calls `wrangler deploy`.

---

## Scripts

* `npm run dev` – Generate blog index and run local development server
* `npm run build` – (Optional) Compile and prepare Worker and blog index
* `npm run deploy` – Generate blog index and deploy to Cloudflare
* `npm run generate:blog` – Run only the blog index generator script
* `npm run test` – Run unit tests using Vitest

---

## Configuration

* **`wrangler.jsonc`** – Contains Worker settings like account ID, routes, environment bindings, etc.
* **`tsconfig.json`** – TypeScript configuration
* **`public/robots.txt`** – Use `User-agent: *\nDisallow: /` to block indexing during development

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
