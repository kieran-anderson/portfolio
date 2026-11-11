import { Slot, Slottable } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";

/**
 * Styles per Figma variant (Button, node 6:62). Hover / Pressed / Focus are real CSS states here, not props.
 * Hover: icon nudges 4px (gap 8 → 12); Primary also lifts with Elevation/Hover. Pressed: 90% opacity.
 */
export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-8 whitespace-nowrap rounded-full px-24 py-12",
    "text-label-button transition-all duration-fast ease-out select-none",
    "hover:gap-12 active:opacity-90",
    "disabled:pointer-events-none disabled:cursor-not-allowed aria-disabled:pointer-events-none",
    "[&_svg]:shrink-0 [&_svg]:icon-sm",
  ],
  {
    variants: {
      variant: {
        /** Main call to action — one per view. */
        primary: [
          "bg-bg-inverse text-text-inverse [&_svg]:text-icon-inverse hover:shadow-elevation-hover",
          "disabled:bg-surface-disabled disabled:text-text-disabled disabled:[&_svg]:text-text-disabled disabled:shadow-none",
        ],
        /** Alternative action next to a Primary. Outline that fills on hover. */
        secondary: [
          "border-control border-border-strong bg-transparent text-text-primary [&_svg]:text-icon-primary",
          "hover:bg-bg-inverse hover:text-text-inverse hover:[&_svg]:text-icon-inverse",
          "disabled:border-text-disabled disabled:text-text-disabled disabled:[&_svg]:text-text-disabled",
        ],
        /** Low-emphasis action. Text only; white surface on hover. */
        ghost: [
          "bg-transparent text-text-primary [&_svg]:text-icon-primary hover:bg-surface-default",
          "disabled:text-text-disabled disabled:[&_svg]:text-text-disabled",
        ],
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Visual style. Figma: `Variant` = Primary / Secondary / Ghost. Default "primary". */
  variant?: "primary" | "secondary" | "ghost";
  /** The button label. Figma: `Label`. */
  children: ReactNode;
  /**
   * Optional icon shown after the label, e.g. `<Icon name="arrow-right" />`.
   * Figma: `Show icon` + `Icon` (instance swap). Omit to hide.
   */
  icon?: ReactNode;
  /** Greys the button out and blocks clicks. Figma: `State` = Disabled. */
  disabled?: boolean;
  /**
   * Render as your own element instead of <button> — usually a link:
   * `<Button asChild><a href="/contact">Get in touch</a></Button>`. Styling and icon are kept.
   */
  asChild?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

/**
 * Button — pill button for actions and calls to action.
 *
 * - One **primary** per view; **secondary** beside it for alternatives; **ghost** for low emphasis.
 * - For navigation use `asChild` with a link, so it's a real link for screen readers.
 *
 * @example <Button icon={<Icon name="arrow-right" />}>Get in touch</Button>
 * @example <Button variant="secondary" asChild><a href="/cv.pdf">Download CV</a></Button>
 */
export function Button({ variant, icon, asChild = false, className, children, type, ref, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      data-slot="button"
      data-variant={variant ?? "primary"}
      className={cn(buttonVariants({ variant }), className)}
      {...(asChild ? {} : { type: type ?? "button" })}
      {...props}
    >
      <Slottable>{children}</Slottable>
      {icon}
    </Comp>
  );
}
