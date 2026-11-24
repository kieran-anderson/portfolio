import type { HTMLAttributes, ReactNode } from "react";
import { TextLink } from "@/components/text-link";
import { type Tint, tintBg } from "@/lib/tint";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  /** Project name (bold). Figma: `Project`. */
  project: string;
  /** Client, shown after the project name, e.g. "– Community Fibre". Figma: `Client`. */
  client?: string;
  /** One or two sentences. Figma: `Description`. */
  description: string;
  /** Background tint. Use the same tint everywhere for this project. Figma: `Tint`. */
  tint: Tint;
  /** "live" shows a "Read case study" link; "coming-soon" shows a non-clickable label. Figma: `Status`. Default "live". */
  status?: "live" | "coming-soon";
  /** Case study URL (needed when status is "live"). */
  href?: string;
  /** Link text. Default "Read case study". */
  linkLabel?: string;
  /** Project image URL. Sits flush to the bottom edge. */
  imageSrc?: string;
  /** Describes the image. Use "" if it's purely decorative. */
  imageAlt?: string;
  /** Or pass your own image element (e.g. an optimised framework image). Overrides `imageSrc`. */
  image?: ReactNode;
}

/**
 * ProjectCard — case-study card on a project tint: title + client, description, link, and an image flush to the bottom.
 * Hover (whole card): lifts 6px, tilts −0.5°, shadow appears, image zooms 3%. Reduced-motion users get no movement.
 * The whole card is clickable via its link, but only the link is announced to screen readers.
 *
 * @example
 * <ProjectCard project="Help pages" client="– Community Fibre" description="A redesign of …"
 *   tint="blue" href="/work/help-pages" imageSrc="/help.jpg" imageAlt="Help centre home page" />
 */
export function ProjectCard({
  project,
  client,
  description,
  tint,
  status = "live",
  href,
  linkLabel = "Read case study",
  imageSrc,
  imageAlt = "",
  image,
  className,
  ...props
}: ProjectCardProps) {
  const live = status === "live";
  return (
    <article
      data-slot="project-card"
      data-status={status}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card px-card-padding pt-card-padding",
        "transition-all duration-base ease-out hover:card-lift hover:shadow-elevation-hover",
        tintBg[tint],
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-12 pb-24">
        <h3 className="flex flex-wrap gap-x-8 text-h3 text-text-primary">
          <span>{project}</span>
          {client && <span className="font-normal">{client}</span>}
        </h3>
        <p className="text-body-sm text-text-secondary">{description}</p>
        {live ? (
          // The link's ::after covers the whole card (title, text and image) so the card is clickable; focus ring stays
          // on the link. z-10 keeps it above the image, whose hover zoom would otherwise sit on top and swallow clicks.
          <TextLink href={href} className="self-start after:absolute after:inset-0 after:z-10">
            {linkLabel}
          </TextLink>
        ) : (
          <TextLink comingSoon className="self-start">Coming soon!</TextLink>
        )}
      </div>
      <div className="relative aspect-card w-full overflow-hidden rounded-t-media bg-surface-default">
        {image ??
          (imageSrc ? (
            <img src={imageSrc} alt={imageAlt} className="size-full object-cover transition-transform duration-base ease-out group-hover:scale-103" />
          ) : null)}
      </div>
    </article>
  );
}
