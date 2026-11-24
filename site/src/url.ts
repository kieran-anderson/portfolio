/**
 * Turns a site path like "/images/about.jpg" or "/#work" into one that works wherever the site is hosted.
 * Locally the site lives at "/", on GitHub Pages at "/portfolio/" — the build sets this (SITE_BASE, see vite.config.ts).
 */
export function url(path: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}
