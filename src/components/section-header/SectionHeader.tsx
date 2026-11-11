import type { ElementType, HTMLAttributes } from "react";
import { TextLink } from "@/components/text-link";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Small uppercase line above the title. Figma: `Overline`. */
  overline: string;
  /** The section title (H2 style). Figma: `Title`. */
  title: string;
  /** Optional link on the right, e.g. `{ label: "View all", href: "/work" }`. Figma: `Show action`. */
  action?: { label: string; href: string };
  /** Heading level for the title. Default "h2" (looks the same at any level). */
  as?: ElementType;
}

/**
 * SectionHeader — overline + H2 title with an optional Text link aligned to the bottom right.
 * Used above Work, Playground and case-study sections.
 *
 * @example <SectionHeader overline="Selected work" title="Case studies" action={{ label: "View all", href: "/work" }} />
 */
export function SectionHeader({ overline, title, action, as: Heading = "h2", className, ...props }: SectionHeaderProps) {
  return (
    <div data-slot="section-header" className={cn("flex w-full items-end justify-between gap-16", className)} {...props}>
      <div className="flex flex-col gap-8">
        <p className="text-overline uppercase text-text-tertiary">{overline}</p>
        <Heading className="text-h2 text-text-primary">{title}</Heading>
      </div>
      {action && <TextLink href={action.href}>{action.label}</TextLink>}
    </div>
  );
}
