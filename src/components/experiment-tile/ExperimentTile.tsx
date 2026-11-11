import type { HTMLAttributes } from "react";
import { iconButtonVariants } from "@/components/icon-button";
import { Tag } from "@/components/tag";
import { TextLink } from "@/components/text-link";
import { Icon, type IconName } from "@/icons";
import { type Tint, tintBg } from "@/lib/tint";
import { cn } from "@/lib/utils";

export interface ExperimentTileProps extends HTMLAttributes<HTMLElement> {
  /** Experiment name. Figma: `Title`. */
  title: string;
  /** One or two sentences. Figma: `Description`. */
  description: string;
  /** Small tags above the title, e.g. ["AI", "Prototype"]. */
  tags?: string[];
  /** "image" shows a glyph (or your image); "video" shows a play button. Figma: `Media`. Default "image". */
  media?: "image" | "video";
  /** Background tint of the media area when there's no image. Default "mint". */
  tint?: Tint;
  /** Optional image or video still for the media area. */
  mediaSrc?: string;
  /** Describes the image. Use "" if decorative. */
  mediaAlt?: string;
  /** Icon shown on the tint when there's no image. Default "sparkle". */
  glyph?: IconName;
  /** Where the tile links to. */
  href: string;
  /** Link text. Default "Try it" (image) or "Watch demo" (video). */
  linkLabel?: string;
}

/**
 * ExperimentTile — Playground experiment card for a 3-column grid: media area, tags, title, description, link.
 * Hover (whole tile): tilts 2°, grows 2%, outline darkens, shadow appears, the glyph wiggles.
 * The whole tile is clickable via its link.
 *
 * @example <ExperimentTile title="Prompt-to-component" description="…" tags={["AI", "Prototype"]} href="/playground/prompt" />
 */
export function ExperimentTile({
  title,
  description,
  tags = [],
  media = "image",
  tint = "mint",
  mediaSrc,
  mediaAlt = "",
  glyph = "sparkle",
  href,
  linkLabel,
  className,
  ...props
}: ExperimentTileProps) {
  return (
    <article
      data-slot="experiment-tile"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-border-divider bg-surface-default",
        "transition-all duration-base ease-out hover:rotate-2 hover:scale-102 hover:border-border-strong hover:shadow-elevation-hover",
        className,
      )}
      {...props}
    >
      <div className={cn("relative flex aspect-3/2 w-full items-center justify-center overflow-hidden", tintBg[tint])}>
        {mediaSrc && <img src={mediaSrc} alt={mediaAlt} className="absolute inset-0 size-full object-cover" />}
        {media === "video" ? (
          <span aria-hidden="true" className={cn(iconButtonVariants({ variant: "filled" }), "relative")}>
            <Icon name="play" />
          </span>
        ) : (
          !mediaSrc && <Icon name={glyph} className="text-icon-primary group-hover:animate-wiggle" />
        )}
      </div>
      <div className="flex flex-col items-start gap-8 p-card-padding">
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-8" aria-label="Tags">
            {tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        )}
        <h3 className="text-h3 text-text-primary">{title}</h3>
        <p className="text-body-sm text-text-secondary">{description}</p>
        <TextLink href={href} size="small" className="after:absolute after:inset-0">
          {linkLabel ?? (media === "video" ? "Watch demo" : "Try it")}
        </TextLink>
      </div>
    </article>
  );
}
