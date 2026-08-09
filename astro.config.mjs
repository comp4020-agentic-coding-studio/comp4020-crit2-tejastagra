import { defineConfig } from "astro/config";

// Served from comp4020-agentic-coding-studio.github.io/comp4020-crit2-tejastagra/,
// so every internal link and asset needs this base — Astro (unlike the old Vite
// config here) doesn't default to relative URLs.
export default defineConfig({
  base: "/comp4020-crit2-tejastagra/",
});
