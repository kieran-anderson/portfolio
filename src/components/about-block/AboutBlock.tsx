import type { HTMLAttributes, ReactNode } from "react";
import { TextLink } from "@/components/text-link";
import { cn } from "@/lib/utils";

export interface AboutBlockProps extends HTMLAttributes<HTMLElement> {
  /** Heading. Default "About me". */
  title?: string;
  /** The paragraphs, as `<p>` elements (they get Body style and spacing automatically). */
  children: ReactNode;
  /** CV link URL. When set, shows "View my CV", which opens in a new tab. Figma: `Show CV link`. */
  cvHref?: string;
  /** CV link text. Default "View my CV". */
  cvLabel?: string;
  /** Wide photo under the heading (1216×460 shape, cropped to fit, 20px corners). Leave out to show no photo. */
  imageSrc?: string;
  /** Describes the photo. */
  imageAlt?: string;
}

/**
 * AboutBlock — "About me" heading, an optional wide photo, paragraphs and an optional CV link, at full content width.
 * Heading and photo are 16 apart; the text starts 40 below them (Figma 8:224).
 * Use on Home and as the intro of the About page. The CV link opens in a new tab (screen readers are told so).
 *
 * @example
 * <AboutBlock cvHref="/cv.pdf" imageSrc="/images/about.jpg" imageAlt="Me on a cliff edge above a fjord">
 *   <p>Currently based in Glasgow…</p>
 *   <p>I have a strong interest in AI tooling…</p>
 * </AboutBlock>
 */
export function AboutBlock({ title = "About me", children, cvHref, cvLabel = "View my CV", imageSrc, imageAlt = "", className, ...props }: AboutBlockProps) {
  return (
    <section data-slot="about-block" className={cn("flex w-full flex-col items-start gap-40", className)} {...props}>
      <div className="flex w-full flex-col items-start gap-16">
        <h2 className="text-h2 text-text-primary">{title}</h2>
        {imageSrc && (
          <img src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" className="aspect-banner w-full rounded-xl object-cover" />
        )}
      </div>
      <div className="flex w-full flex-col items-start gap-16">
        <div className="contents text-body text-text-secondary [&>p]:text-body [&>p]:text-text-secondary">{children}</div>
        {cvHref && (
          <TextLink href={cvHref} target="_blank" rel="noopener noreferrer">
            {cvLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </TextLink>
        )}
      </div>
    </section>
  );
}
