import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/** Mounts a page into the #root element of its HTML file. */
export function render(page: ReactNode) {
  const root = document.getElementById("root");
  if (!root) throw new Error("Missing #root element in the page's HTML");
  createRoot(root).render(<StrictMode>{page}</StrictMode>);
}
