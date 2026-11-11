import type { HTMLAttributes, ReactNode } from "react";
import { TextLink } from "@/components/text-link";
import { cn } from "@/lib/utils";

export interface AboutBlockProps extends HTMLAttributes<HTMLElement> {
  /** Heading. Default "About me". */
  title?: string;
  /** The paragraphs, as `<p>` elements (they get Body style and spacing automatically). */
  children: ReactNode;
  /** CV link URL. When set, shows "View my CV". Figma: `Show CV link`. */
  cvHref?: string;
  /** CV link text. Default "View my CV". */
  cvLabel?: string;
}

/**
 * AboutBlock — "About me" heading, paragraphs and an optional CV link, at reading width (800 max).
 * Use on Home and as the intro of the About page.
 *
 * @example
 * <AboutBlock cvHref="/cv.pdf">
 *   <p>Currently based in Glasgow…</p>
 *   <p>I have a strong interest in AI tooling…</p>
 * </AboutBlock>
 */
export function AboutBlock({ title = "About me", children, cvHref, cvLabel = "View my CV", className, ...props }: AboutBlockProps) {
  return (
    <section data-slot="about-block" className={cn("flex w-full max-w-reading flex-col items-start gap-16", className)} {...props}>
      <h2 className="text-h2 text-text-primary">{title}</h2>
      <div className="contents text-body text-text-secondary [&>p]:text-body [&>p]:text-text-secondary">{children}</div>
      {cvHref && <TextLink href={cvHref}>{cvLabel}</TextLink>}
    </section>
  );
}
