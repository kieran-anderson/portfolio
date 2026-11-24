import type { HTMLAttributes, ReactNode } from "react";
import { Tag } from "@/components/tag";
import { type Tint, tintBg } from "@/lib/tint";
import { cn } from "@/lib/utils";

export interface CaseStudyMeta {
  /** Small uppercase label, e.g. "Role". */
  label: string;
  /** The value, e.g. "Lead product designer". */
  value: string;
}

export interface CaseStudyHeroProps extends HTMLAttributes<HTMLElement> {
  /** Client and year, shown as a tag, e.g. "Community Fibre · 2024". */
  client: string;
  /** Case study title (H1). Figma: `Title`. */
  title: string;
  /** One- or two-sentence summary. Figma: `Summary`. */
  summary: string;
  /** Facts row, e.g. Role / Timeline / Team / Platform. */
  meta?: CaseStudyMeta[];
  /** Cover background tint — same as the project's card. Figma: `Tint`. */
  tint: Tint;
  /** Cover image URL (e.g. a device mockup on transparent background). */
  coverSrc?: string;
  /** Describes the cover image. */
  coverAlt?: string;
  /** Or pass your own image element. Overrides `coverSrc`. */
  cover?: ReactNode;
  /** Cover shape. "default" is Figma's 1216×560; "tall" (about 1216×608) suits full-page screenshots. Default "default". */
  coverShape?: "default" | "tall";
}

/**
 * CaseStudyHero — top of every case study: client tag, H1, summary, facts row and a tinted cover (1216×560 shape).
 *
 * @example
 * <CaseStudyHero client="Community Fibre · 2024" title="Redesigning a help centre…" summary="…" tint="blue"
 *   meta={[{ label: "Role", value: "Lead product designer" }, { label: "Timeline", value: "6 months" }]} />
 */
export function CaseStudyHero({ client, title, summary, meta = [], tint, coverSrc, coverAlt = "", cover, coverShape = "default", className, ...props }: CaseStudyHeroProps) {
  return (
    <header data-slot="case-study-hero" className={cn("flex w-full flex-col gap-48", className)} {...props}>
      <div className="flex flex-col items-start gap-16">
        <Tag>{client}</Tag>
        <h1 className="max-w-title text-h1 text-text-primary">{title}</h1>
        <p className="max-w-reading text-body-lg text-text-secondary">{summary}</p>
      </div>
      {meta.length > 0 && (
        <dl className="flex flex-wrap gap-x-48 gap-y-24">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-4">
              <dt className="text-overline uppercase text-text-tertiary">{m.label}</dt>
              <dd className="text-body font-bold text-text-primary">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <div className={cn(coverShape === "tall" ? "aspect-cover-tall" : "aspect-cover", "w-full overflow-hidden rounded-card", tintBg[tint])}>
        {cover ?? (coverSrc ? <img src={coverSrc} alt={coverAlt} className="size-full object-cover" /> : null)}
      </div>
    </header>
  );
}
