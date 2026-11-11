import { Slot } from "@radix-ui/react-slot";
import type { AnchorHTMLAttributes, ReactNode, Ref } from "react";
import { withContent } from "@/lib/slot";
import { cn } from "@/lib/utils";

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Figma: `Size` = Default (header) / Small (mobile header, footer). Default "default". */
  size?: "default" | "small";
  /** Where the logo links to. Default "/" (Home). */
  href?: string;
  /** Render as your router's link: `<Logo asChild><Link to="/" /></Logo>`. */
  asChild?: boolean;
  /** Only used with `asChild`: the link element to render. */
  children?: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

/**
 * Logo — "K" mark + "Kieran Anderson" wordmark in a dark pill. Always links to Home.
 *
 * @example <Logo />
 * @example <Logo size="small" />
 */
export function Logo({ size = "default", href = "/", asChild = false, className, children, ref, ...props }: LogoProps) {
  const small = size === "small";
  const content = (
    <>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-md bg-surface-default font-bold text-text-primary",
          small ? "size-mark-sm text-caption" : "size-mark text-body",
        )}
      >
        K
      </span>
      <span className={small ? "text-body-sm font-bold" : "text-body-lg font-medium"}>Kieran Anderson</span>
    </>
  );
  const classes = cn(
    "inline-flex shrink-0 items-center gap-8 whitespace-nowrap rounded-full bg-bg-inverse text-text-inverse",
    small ? "py-4 pr-12 pl-4" : "py-8 pr-20 pl-8",
    className,
  );
  if (asChild) {
    return (
      <Slot ref={ref} data-slot="logo" aria-label="Kieran Anderson, home" className={classes} {...props}>
        {withContent(children, content)}
      </Slot>
    );
  }
  return (
    <a ref={ref} href={href} data-slot="logo" aria-label="Kieran Anderson, home" className={classes} {...props}>
      {content}
    </a>
  );
}
