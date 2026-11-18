import { StrictMode, useEffect, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/**
 * Arriving from another page with a link like "/#about": the browser tries to scroll before React has drawn
 * the page, so the section isn't there yet. Once it is, jump to it (instantly — no glide on page load).
 */
function ScrollToHashOnLoad() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);
  return null;
}

/** Mounts a page into the #root element of its HTML file. */
export function render(page: ReactNode) {
  const root = document.getElementById("root");
  if (!root) throw new Error("Missing #root element in the page's HTML");
  createRoot(root).render(
    <StrictMode>
      {page}
      <ScrollToHashOnLoad />
    </StrictMode>,
  );
}
