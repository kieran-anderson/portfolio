import type { HTMLAttributes } from "react";
import { Divider } from "@/components/divider";
import { IconButton } from "@/components/icon-button";
import { TextLink } from "@/components/text-link";
import { Icon } from "@/icons";
import { cn } from "@/lib/utils";

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Contact email (shown as a mailto link). */
  email: string;
  /** LinkedIn profile URL. */
  linkedInHref: string;
  /** Heading. Default "Keep in touch". */
  title?: string;
  /** Line under the heading. Default "Feel free to reach out for collaboration or just to say hi!". */
  message?: string;
  /** Left legal line. Default "© {current year} Kieran Anderson". */
  copyright?: string;
  /** Right legal line. Default "Designed in Figma, built with AI". */
  credit?: string;
}

/**
 * Footer — divider, "Keep in touch" message, email link + LinkedIn button, and legal line.
 * Responsive (Figma's `Breakpoint` variants happen automatically): stacked on Mobile; message and contact side
 * by side from Tablet (≥ 768) up.
 *
 * @example <Footer email="hello@example.com" linkedInHref="https://www.linkedin.com/in/…" />
 */
export function Footer({
  email,
  linkedInHref,
  title = "Keep in touch",
  message = "Feel free to reach out for collaboration or just to say hi!",
  copyright = `© ${new Date().getFullYear()} Kieran Anderson`,
  credit = "Designed in Figma, built with AI",
  className,
  ...props
}: FooterProps) {
  return (
    <footer data-slot="footer" className={cn("bg-bg-page px-margin pb-40", className)} {...props}>
      <div className="mx-auto flex max-w-content flex-col gap-40">
        <Divider />
        <div className="flex flex-col gap-24 tablet:flex-row tablet:items-end tablet:justify-between">
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 text-text-primary">{title}</h2>
            <p className="text-body text-text-secondary">{message}</p>
          </div>
          <div className="flex items-center gap-16">
            <TextLink href={`mailto:${email}`}>{email}</TextLink>
            <IconButton asChild icon={<Icon name="linkedin" />} aria-label="LinkedIn">
              <a href={linkedInHref} target="_blank" rel="noreferrer" />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col text-caption text-text-tertiary tablet:flex-row tablet:justify-between">
          <p>{copyright}</p>
          <p>{credit}</p>
        </div>
      </div>
    </footer>
  );
}
