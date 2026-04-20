# AlexKpot Store

A small e-commerce front-end built with React and Vite, featuring a landing page of product categories (3D Prints, Notion Templates, VS Code Themes, Wallpapers) and Google sign-in powered by Firebase Authentication.

Built as a learning project to practice modern React, client-side routing, SCSS theming, and Firebase integration end-to-end.

## Tech stack

- **React 19** + **Vite 8** — fast HMR dev environment, modern React features
- **React Router v6** — nested routes, layout routes, client-side navigation
- **Firebase** — Authentication (Google sign-in) + Firestore (user documents)
- **Sass (SCSS)** — scoped component styles with a shared variables module
- **ESLint** — flat config with React Hooks and React Refresh rules

## Features

- Responsive category grid on the home page
- Layout route with shared navigation bar (`<Outlet />` pattern)
- Google sign-in popup flow with automatic user-document creation in Firestore
- Environment-driven Firebase config (no secrets committed)
- SVG icon + logo pipeline via `vite-plugin-svgr`

## Project structure

```
src/
  assets/              static images & SVGs
  components/          reusable UI (categories, category-item)
  routes/              page-level components (home, navigation, sign-in)
  utils/firebase/      Firebase init + auth/Firestore helpers
  _variables.scss      shared SCSS tokens
  App.jsx              route definitions
  main.jsx             app entry + BrowserRouter
```

## Running locally

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in your Firebase project values
cp .env.example .env.local

# 3. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Required environment variables

See `.env.example`. You'll need a Firebase project with **Authentication** (Google provider enabled) and **Firestore** turned on.

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Scripts

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite dev server             |
| `npm run build`   | Build the production bundle to `dist` |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint across the project         |

## Deployment

The repo ships with a `vercel.json` that configures SPA rewrites so client-side routes (e.g. `/sign-in`) resolve correctly when accessed directly.

To deploy on Vercel:

1. Import the repo from GitHub into Vercel.
2. Add the `VITE_FIREBASE_*` environment variables in **Project Settings → Environment Variables**.
3. Deploy. Vercel auto-detects Vite and runs `npm run build`.
4. In the Firebase console, add your production domain under **Authentication → Settings → Authorized domains**, otherwise Google sign-in will fail on the deployed site.

## Status

This is an ongoing learning project. The home page and sign-in flow are functional; the shop page is intentionally stubbed out as "coming soon" while the product/cart side is being built.

## Author

**Manuel Capote** — [@ManuelCapote](https://github.com/ManuelCapote)

## License

MIT — see [LICENSE](./LICENSE).
