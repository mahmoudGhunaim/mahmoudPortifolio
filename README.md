# Mahmoud Ghunaim — Portfolio

Personal portfolio for **Mahmoud Ghunaim**, Full-Stack Developer.
Single-page site with an interactive 3D hero, Lottie animations, English/Arabic (full RTL) and dark/light themes.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · @react-three/fiber + drei · dotLottie

---

## Quick start

Requires **Node.js 20.19+** (or 22.12+).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build at http://localhost:4173
```

Handy URL overrides (also useful for sharing): `?lang=ar`, `?lang=en`, `?theme=light`, `?theme=dark`.

---

## Project structure

```
public/
  lottie/            Local .lottie animations (loader, coding, training, skills, email)
  cv/                Mahmoud_Ghunaim_CV.pdf
  favicon.svg  apple-touch-icon.png  og-image.png  robots.txt
src/
  assets/projects/   Project preview images (placeholders)
  components/        Navbar, Toggles, LottiePlayer, LoadingScreen, Reveal, TiltCard, Section, Icons
  data/              ✏️ All editable content (bilingual)
    profile.ts       name, tagline, about, contact links, CV path
    experience.ts    work timeline
    training.ts      Software Consultancy & Oracle Fusion training
    projects.ts      project cards
    skills.ts        skill groups, soft skills, languages
  hooks/             useTheme, useMediaQuery, useInView, useActiveSection
  i18n/              en.ts / ar.ts UI strings + I18nProvider (lang + dir handling)
  sections/          Hero, About, Experience, Training, Projects, Skills, SoftSkills, Contact, Footer
  three/HeroScene.tsx  The 3D scene (lazy-loaded chunk)
  index.css          Theme tokens (CSS variables) + Tailwind setup
```

## Editing content

- **Text for sections** lives in `src/data/*.ts`. Every field is `{ en: '…', ar: '…' }`.
- **UI labels** (buttons, headings, labels) live in `src/i18n/en.ts` and `src/i18n/ar.ts`. Keep the same keys in both; TypeScript will complain if Arabic is missing a key.
- **Theme colours and fonts** are the CSS variables at the top of `src/index.css` (`:root` = dark, `[data-theme='light']` = light). Tailwind utilities such as `bg-bg`, `text-muted`, `text-accent-2` and `font-heading` read from them.
- **Lottie animations**: drop new `.lottie` files in `public/lottie/` and point `<LottiePlayer src="/lottie/…">` at them. Animations come from [LottieFiles](https://lottiefiles.com) (free Lottie Simple License).

## Placeholders to fill in

| What | Where |
| --- | --- |
| Training provider, dates, modules, skills | `src/data/training.ts` |
| Project screenshots (≈1200×750 `.webp`) | `src/assets/projects/` + imports in `projects.ts` |

## Performance & accessibility notes

- The 3D scene is its own lazy chunk. It loads only on screens ≥ 768px, with WebGL, and without *reduce motion*; it starts once the browser is idle. DPR is capped at 1.5, and rendering pauses when the hero is off-screen. Everything else gets a static SVG fallback.
- The dotLottie runtime and WASM are self-hosted and loaded on demand. Each animation mounts when it nears the viewport, pauses off-screen, and shows a still frame under *reduce motion*.
- Framer Motion features load asynchronously via `LazyMotion`.
- Semantic landmarks, a skip link, labelled controls, visible focus rings, and AA-contrast colour tokens in both themes.

---

## Deploy

The build is a static site in `dist/`. No server is needed.

### Vercel
1. Push the repo to GitHub, then **Add New → Project** on [vercel.com](https://vercel.com) and import it.
2. The framework preset **Vite** is detected automatically (build: `npm run build`, output: `dist`).

CLI alternative: `npx vercel` and then `npx vercel --prod`.

### Netlify
1. **Add new site → Import an existing project** on [netlify.com](https://netlify.com).
2. Build command: `npm run build` · Publish directory: `dist`.

CLI alternative: `npx netlify-cli deploy --build --prod`.

### Cloudflare Pages
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Framework preset: **Vite** (or build command `npm run build`, output `dist`).
3. Set the `NODE_VERSION` environment variable to `22` if the build image defaults to an older Node.

CLI alternative: `npm run build && npx wrangler pages deploy dist --project-name mahmoud-ghunaim`.

Live site: **https://mahmoud-ghunaim.pages.dev** (Cloudflare Pages project `mahmoud-ghunaim`).

**Automatic deploys:** `.github/workflows/deploy.yml` builds and deploys on every push to `main`. It needs one repository secret, `CLOUDFLARE_API_TOKEN` (a Cloudflare API token with *Cloudflare Pages: Edit*). Manual deploy: `npm run build && npx wrangler pages deploy dist --project-name mahmoud-ghunaim --branch main`. If you add a custom domain, update the canonical / `og:url` / `og:image` URLs in `index.html`.
