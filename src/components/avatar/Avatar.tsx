import { type HTMLAttributes, type Ref, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  small: { box: "size-40", text: "text-caption" },
  medium: { box: "size-96", text: "text-h3" },
  large: { box: "size-avatar-lg", text: "text-h1" },
} as const;

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Photo URL. Shown in black and white. If missing or it fails to load, the initials show instead. */
  src?: string;
  /** Describes the person, e.g. "Kieran Anderson". Required for accessibility. */
  alt: string;
  /** Figma: `Size` = Small (40) / Medium (96) / Large (220). Default "medium". */
  size?: "small" | "medium" | "large";
  /** Fallback letters, e.g. "KA". Defaults to the first letters of `alt`. */
  initials?: string;
  ref?: Ref<HTMLSpanElement>;
}

/**
 * Avatar — circular black-and-white portrait with an initials fallback on the blue tint.
 *
 * @example <Avatar src="/me.jpg" alt="Kieran Anderson" size="large" />
 */
export function Avatar({ src, alt, size = "medium", initials, className, ref, ...props }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  const s = sizes[size];
  const letters = initials ?? alt.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const showPhoto = src && !failed;
  return (
    <span
      ref={ref}
      data-slot="avatar"
      role={showPhoto ? undefined : "img"}
      aria-label={showPhoto ? undefined : alt}
      className={cn("inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-blue text-text-primary", s.box, className)}
      {...props}
    >
      {showPhoto ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} className="size-full object-cover grayscale" />
      ) : (
        <span aria-hidden="true" className={cn(s.text, "font-bold", size === "small" && "font-normal")}>
          {letters}
        </span>
      )}
    </span>
  );
}
