import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface PullQuoteProps extends HTMLAttributes<HTMLElement> {
  /** The quote, including quotation marks if you want them. Figma: `Quote`. */
  quote: string;
  /** Who said it / where it came from. Figma: `Attribution`. */
  attribution?: string;
}

/**
 * PullQuote — a key user quote or insight in Display type with an ink rule on the left. Reading width.
 *
 * @example <PullQuote quote="“I just want to fix my connection…”" attribution="Customer interview, round 2" />
 */
export function PullQuote({ quote, attribution, className, ...props }: PullQuoteProps) {
  return (
    <figure data-slot="pull-quote" className={cn("flex w-full max-w-reading gap-24", className)} {...props}>
      <span aria-hidden="true" className="w-4 shrink-0 rounded-full bg-bg-inverse" />
      <div className="flex flex-col gap-16">
        <blockquote className="text-display text-text-primary">{quote}</blockquote>
        {attribution && <figcaption className="text-body-sm text-text-tertiary">{attribution}</figcaption>}
      </div>
    </figure>
  );
}
