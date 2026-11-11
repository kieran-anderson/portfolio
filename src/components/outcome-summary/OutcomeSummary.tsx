import type { HTMLAttributes } from "react";
import { Icon } from "@/icons";
import { type Tint, tintBg } from "@/lib/tint";
import { cn } from "@/lib/utils";

export interface OutcomeSummaryProps extends HTMLAttributes<HTMLElement> {
  /** The results, one per line (Figma shows three). Figma: `Item 1/2/3`. */
  items: string[];
  /** Same tint as the project. Figma: `Tint`. */
  tint: Tint;
  /** Heading. Default "Outcome". */
  title?: string;
}

/**
 * OutcomeSummary — wrap-up card with ticked results, on the project's tint. Reading width.
 *
 * @example <OutcomeSummary tint="blue" items={["Support calls down 32% in three months", "…"]} />
 */
export function OutcomeSummary({ items, tint, title = "Outcome", className, ...props }: OutcomeSummaryProps) {
  return (
    <section data-slot="outcome-summary" className={cn("flex w-full max-w-reading flex-col gap-20 rounded-card p-card-padding", tintBg[tint], className)} {...props}>
      <h3 className="text-h3 text-text-primary">{title}</h3>
      <ul className="flex flex-col gap-20">
        {items.map((item) => (
          <li key={item} className="flex gap-12 text-body text-text-primary">
            <Icon name="check" className="mt-2 shrink-0 text-icon-primary icon-md" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
