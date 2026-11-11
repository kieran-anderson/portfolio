/** Project tints. Use the same tint for one project everywhere: card, case study hero, outcome, next-project. */
export type Tint = "blue" | "mint" | "peach";

/** Background class for each tint (light and dark handled by the tokens). */
export const tintBg: Record<Tint, string> = {
  blue: "bg-surface-blue",
  mint: "bg-surface-mint",
  peach: "bg-surface-peach",
};
