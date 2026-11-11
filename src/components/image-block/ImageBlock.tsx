import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface BlockImage {
  /** Image URL. */
  src: string;
  /** Describes the image (what it shows and why it matters). */
  alt: string;
}

export interface ImageBlockProps extends HTMLAttributes<HTMLElement> {
  /**
   * Figma: `Layout`. "full-width" = content width (1216), "inset" = reading width (800) centred,
   * "side-by-side" = two equal columns (stacks on Mobile). Default "full-width".
   */
  layout?: "full-width" | "inset" | "side-by-side";
  /** One image, or two for "side-by-side". */
  images: BlockImage[];
  /** Optional caption under the image(s). Figma: `Show caption` + `Caption`. */
  caption?: string;
}

const shape = { "full-width": "aspect-wide", inset: "aspect-inset", "side-by-side": "aspect-pair" } as const;

/**
 * ImageBlock — case-study image(s) with an optional caption, on rounded `radius/card` corners.
 *
 * @example <ImageBlock layout="inset" images={[{ src: "/old.png", alt: "The old help centre" }]} caption="Figure 1 — …" />
 */
export function ImageBlock({ layout = "full-width", images, caption, className, ...props }: ImageBlockProps) {
  const list = layout === "side-by-side" ? images.slice(0, 2) : images.slice(0, 1);
  return (
    <figure
      data-slot="image-block"
      className={cn("flex w-full flex-col gap-12", layout === "inset" && "mx-auto max-w-reading", className)}
      {...props}
    >
      <div className={cn("grid gap-32", layout === "side-by-side" && "tablet:grid-cols-2")}>
        {list.map((img) => (
          <div key={img.src} className={cn("w-full overflow-hidden rounded-card bg-surface-default", shape[layout])}>
            <img src={img.src} alt={img.alt} className="size-full object-cover" />
          </div>
        ))}
      </div>
      {caption && <figcaption className={cn("text-caption text-text-tertiary", layout === "inset" && "text-center")}>{caption}</figcaption>}
    </figure>
  );
}
