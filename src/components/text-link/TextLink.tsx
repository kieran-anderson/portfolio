import { Slot, Slottable } from "@radix-ui/react-slot";
import type { AnchorHTMLAttributes, ReactNode, Ref } from "react";
import { Icon } from "@/icons";
import { cn } from "@/lib/utils";

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The link text. Figma: `Label`. */
  children: ReactNode;
  /** Text size. Figma: `Size` = Default / Small. Default "default". */
  size?: "default" | "small";
  /**
   * Not available yet: shows the label with no arrow and is not clickable (rendered as text, not a link).
   * Figma: `State` = Coming soon.
   */
  comingSoon?: boolean;
  /** Render as your router's link: `<TextLink asChild><Link to="/work/x">Read case study</Link></TextLink>`. */
  asChild?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}

/**
 * TextLink — underlined SemiBold link with an arrow that nudges 4px right on hover.
 * Use for "Read case study"-style calls to action inside cards and sections.
 *
 * @example <TextLink href="/work/atlas">Read case study</TextLink>
 * @example <TextLink comingSoon>Coming soon!</TextLink>
 */
export function TextLink({ size = "default", comingSoon = false, asChild = false, className, children, ref, ...props }: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-8 text-text-primary underline",
    size === "small" ? "text-link-sm [&_svg]:icon-xs" : "text-link [&_svg]:icon-sm",
    "[&_svg]:shrink-0 [&_svg]:text-icon-primary",
    !comingSoon && "transition-all duration-fast ease-out hover:gap-12",
    className,
  );
  if (comingSoon) {
    return (
      <span data-slot="text-link" data-coming-soon="" aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }
  const Comp = asChild ? Slot : "a";
  return (
    <Comp ref={ref} data-slot="text-link" className={classes} {...props}>
      <Slottable>{children}</Slottable>
      <Icon name="arrow-right" />
    </Comp>
  );
}
