import type { BlockImage, CaseStudyMeta, Tint } from "ka-design-system";

/** Everything one case study page needs. Fill one of these per project. */
export interface CaseStudy {
  tint: Tint;
  client: string;
  title: string;
  summary: string;
  meta: CaseStudyMeta[];
  /** Cover image. Leave out to show just the tinted panel. `href` makes it a link that opens in a new tab. */
  cover?: BlockImage & { href?: string; shape?: "default" | "tall" };
  problem: { heading: string; body: string };
  /** Figure under "The problem" (full width). No image → the block is left out. */
  figure1: { image?: BlockImage; caption: string };
  approach: { heading: string; body: string };
  steps: { number: string; title: string; description: string }[];
  quote: { text: string; attribution: string };
  /** Two images side by side. Needs both images, otherwise the block is left out. */
  figure2: { images?: [BlockImage, BlockImage]; caption: string };
  stats: { value: string; label: string }[];
  outcomes: string[];
  next: { title: string; tint: Tint; href: string };
}
