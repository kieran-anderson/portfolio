import { type HTMLAttributes, useState } from "react";
import { IconButton } from "@/components/icon-button";
import { Icon } from "@/icons";
import { cn } from "@/lib/utils";

export interface EmbedBlockProps extends HTMLAttributes<HTMLElement> {
  /** Embed URL (Figma prototype embed, Loom, CodePen, YouTube…). */
  src: string;
  /** What the embed is, e.g. "Prototype: project card from a prompt". Used for the frame and the play button. */
  title: string;
  /** Optional caption under the player. Figma: `Caption`. */
  caption?: string;
  /** Optional still image shown before playing. */
  posterSrc?: string;
}

/**
 * EmbedBlock — 16:9 video or prototype embed on an ink background, reading width (800).
 * Shows a play button first and only loads the embed when pressed: faster pages, and no third-party
 * requests until the visitor chooses to play.
 *
 * @example <EmbedBlock src="https://www.loom.com/embed/…" title="Demo: project card from a prompt" caption="Demo — … (0:42)" />
 */
export function EmbedBlock({ src, title, caption, posterSrc, className, ...props }: EmbedBlockProps) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure data-slot="embed-block" className={cn("flex w-full max-w-reading flex-col gap-12", className)} {...props}>
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-card bg-bg-inverse">
        {playing ? (
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 size-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
          />
        ) : (
          <>
            {posterSrc && <img src={posterSrc} alt="" className="absolute inset-0 size-full object-cover" />}
            <IconButton
              variant="outline"
              icon={<Icon name="play" />}
              aria-label={`Play: ${title}`}
              onClick={() => setPlaying(true)}
              className="relative border-border-strong bg-surface-default shadow-elevation-hover"
            />
          </>
        )}
      </div>
      {caption && <figcaption className="text-caption text-text-tertiary">{caption}</figcaption>}
    </figure>
  );
}
