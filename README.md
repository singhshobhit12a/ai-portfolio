# Portfolio — Shobhit Singh

Personal portfolio site for an AI Engineer: production LLM/RAG work, projects, and experience. Built with **Next.js** (static export), **React**, **Tailwind CSS**, and **Framer Motion**.

## Prerequisites

- Node.js **20+**
- npm

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to the `out/` directory. This repo uses `output: "export"` so there is no Node server — suitable for **GitHub Pages**, Netlify, Cloudflare Pages, etc.

## Customize content

Edit **[`lib/site.config.ts`](lib/site.config.ts)**:

- **`siteUrl`** — live site URL for Open Graph (default: `https://singhshobhit12a.github.io/ai-portfolio`).
- **`githubUrl`** — your GitHub profile URL.
- Name, taglines, projects, experience, skills, and certifications are all defined there.

## Deploy on GitHub Pages (free)

Configured for repo **`ai-portfolio`** → **`https://singhshobhit12a.github.io/ai-portfolio`**. Change **`GITHUB_PAGES_REPO`** and **`siteUrl`** in [`lib/site.config.ts`](lib/site.config.ts) if your username or repo name differs (`next.config.ts` imports the repo name from there).

Production builds use `basePath` **`/ai-portfolio`** so assets load correctly under the project URL; **`npm run dev`** still serves at **`http://localhost:3000`**.

### Option A — GitHub Actions (recommended)

1. Create an **empty** GitHub repository named **`ai-portfolio`** ([github.com/new](https://github.com/new)): **no** README, **no** `.gitignore`, **no** license (avoids merge conflicts with this project).
2. Point `git` at your repo and push (this project already sets `origin` to `https://github.com/singhshobhit12a/ai-portfolio.git`; change the URL if needed):
   ```bash
   git remote -v
   git push -u origin main
   ```
3. **Settings → Pages** → **Build and deployment** → **Source**: **GitHub Actions** (not “Deploy from a branch” unless you use Option B).
4. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish; approve the **github-pages** environment the first time GitHub asks.
5. Site: **`https://singhshobhit12a.github.io/ai-portfolio`** (or `https://<your-username>.github.io/ai-portfolio` if the username differs).

### Option B — Branch `main`, folder root (manual upload)

1. **`npm run build`**
2. Copy **contents** of **`out/`** into the **repository root** on **`main`** (not a nested `out` folder).
3. **Settings → Pages** → **Deploy from a branch** → **`main`** / **`/`** (root).
4. Live at **`https://<username>.github.io/ai-portfolio`**.

### Option C — `gh-pages` branch

```bash
npm run build
npx gh-pages -d out
```

**Settings → Pages** → source **`gh-pages`**, folder **`/`** (root).

### User site only (`username.github.io`)

If the repo is **`username.github.io`** (no `/repo` path), remove the production `basePath` / `assetPrefix` logic from [`next.config.ts`](next.config.ts) and set **`siteUrl`** to `https://username.github.io`.

## Custom domain (optional)

In **Pages** settings, add your domain and follow GitHub’s DNS instructions. Set **`site.siteUrl`** in `lib/site.config.ts` to that domain.

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Local development server |
| `npm run build`| Static export → `out/`   |
| `npm run lint` | ESLint                   |

## License

Private / personal use.
