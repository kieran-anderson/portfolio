import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import { withContent } from "@/lib/slot";
import { cn } from "@/lib/utils";

export const iconButtonVariants = cva(
  [
    "inline-flex size-touch shrink-0 items-center justify-center rounded-full",
    "transition-all duration-fast ease-out hover:shadow-elevation-hover",
    "[&_svg]:icon-md [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        /** Dark circle. Default. */
        filled: "bg-bg-inverse [&_svg]:text-icon-inverse",
        /** Hairline circle that turns white on hover. */
        outline: "border border-border-divider bg-transparent [&_svg]:text-icon-primary hover:border-border-strong hover:bg-surface-default",
      },
    },
    defaultVariants: { variant: "filled" },
  },
);

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** The icon, e.g. `<Icon name="linkedin" />`. Figma: `Icon` (instance swap). */
  icon: ReactNode;
  /** What the button does, read by screen readers, e.g. "LinkedIn" or "Open menu". Required: the button has no visible text. */
  "aria-label": string;
  /** Figma: `Variant` = Filled / Outline. Default "filled". */
  variant?: "filled" | "outline";
  /** Render as a link instead: `<IconButton asChild icon={…} aria-label="LinkedIn"><a href="…" /></IconButton>`. */
  asChild?: boolean;
  /** Only used with `asChild`: the link element to render. */
  children?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

/**
 * IconButton — 44px circular icon-only button (meets the touch-target size).
 * Use for social links, the menu toggle and carousel arrows.
 *
 * @example <IconButton icon={<Icon name="menu" />} aria-label="Open menu" variant="outline" />
 */
export function IconButton({ icon, variant, asChild = false, className, children, type, ref, ...props }: IconButtonProps) {
  const classes = cn(iconButtonVariants({ variant }), className);
  if (asChild) {
    return (
      <Slot ref={ref} data-slot="icon-button" className={classes} {...props}>
        {/* The child (e.g. <a href>) receives the styles; the icon goes inside it. */}
        {withContent(children, icon)}
      </Slot>
    );
  }
  return (
    <button ref={ref} type={type ?? "button"} data-slot="icon-button" className={classes} {...props}>
      {icon}
    </button>
  );
}

