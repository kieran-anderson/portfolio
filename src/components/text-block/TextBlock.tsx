import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TextBlockProps extends HTMLAttributes<HTMLElement> {
  /** Optional section heading (H2). Figma: `Show heading` + `Heading`. */
  heading?: string;
  /** The story text. A string, or `<p>` paragraphs (Body/Large style, spaced 16). Figma: `Body`. */
  children: ReactNode;
}

/**
 * TextBlock — long-form case-study text at reading width (800). Space blocks with `gap-section-sm`.
 *
 * @example <TextBlock heading="The problem"><p>Customers couldn’t find answers…</p></TextBlock>
 */
export function TextBlock({ heading, children, className, ...props }: TextBlockProps) {
  return (
    <section data-slot="text-block" className={cn("flex w-full max-w-reading flex-col gap-16 text-body-lg text-text-secondary", className)} {...props}>
      {heading && <h2 className="text-h2 text-text-primary">{heading}</h2>}
      {typeof children === "string" ? <p>{children}</p> : children}
    </section>
  );
}
