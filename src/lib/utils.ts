import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Teach tailwind-merge our custom type classes, so `text-h1` (a font size) and `text-text-primary`
 * (a colour) are never treated as duplicates of each other.
 */
const twMerge = extendTailwindMerge<"icon" | "lift">({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display", "h1", "h2", "h3", "body-lg", "body", "body-sm", "caption", "link", "link-sm", "label-button", "label-tag", "overline"] },
      ],
      shadow: [{ shadow: ["elevation-hover", "focus-ring"] }],
      "border-w": [{ border: ["control"] }],
      icon: ["icon-xs", "icon-sm", "icon-md"],
      lift: ["card-lift"],
      size: [{ size: ["touch", "mark", "mark-sm", "avatar-lg", "portrait-md", "dot"] }],
    },
  },
});

/** Combine class names; later classes win over earlier conflicting ones. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
