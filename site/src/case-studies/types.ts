import type { BlockImage, CaseStudyMeta, Tint } from "ka-design-system";

/**
 * One block of the story, shown in the order listed. Each maps to one design-system component:
 * text → Text block, steps → Process steps, quote → Pull quote, stats → Key stats, image → Image block.
 */
export type StorySection =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "steps"; steps: { number: string; title: string; description: string }[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "stats"; stats: { value: string; label: string }[] }
  /** Images not added yet → the block is left out. "side-by-side" needs two. */
  | { type: "image"; layout: "full-width" | "inset" | "side-by-side"; images?: BlockImage[]; caption?: string };

/** Everything one case study page needs. Fill one of these per project. */
export interface CaseStudy {
  tint: Tint;
  client: string;
  title: string;
  summary: string;
  meta: CaseStudyMeta[];
  /** Cover image. Leave out to show just the tinted panel. `href` makes it a link that opens in a new tab. */
  cover?: BlockImage & { href?: string; shape?: "default" | "tall" };
  /** Headline numbers, shown straight under the hero. */
  stats: { value: string; label: string }[];
  problem: { heading: string; body: string };
  /** The rest of the story, after "The problem". */
  story: StorySection[];
  outcomes: string[];
  next: { title: string; tint: Tint; href: string };
}
