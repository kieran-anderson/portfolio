import { Slot } from "@radix-ui/react-slot";
import type { AnchorHTMLAttributes, ReactNode, Ref } from "react";
import { iconButtonVariants } from "@/components/icon-button";
import { Icon } from "@/icons";
import { withContent } from "@/lib/slot";
import { type Tint, tintBg } from "@/lib/tint";
import { cn } from "@/lib/utils";

export interface NextProjectProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Next case study's title, e.g. "Ops Docs Automation – Barclays". Figma: `Title`. */
  title: string;
  /** That project's tint. Figma: `Tint`. */
  tint: Tint;
  /** Link to the next case study. */
  href?: string;
  /** Overline text. Default "Next project". */
  overline?: string;
  /** Render as your router's link: `<NextProject asChild title="…" tint="mint"><Link href="/work/x" /></NextProject>`. */
  asChild?: boolean;
  children?: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

/**
 * NextProject — closing card linking to the next case study, on that project's tint.
 * The whole card is one link; the arrow circle is decoration. Hover: card and arrow lift with a shadow.
 *
 * @example <NextProject title="Ops Docs Automation – Barclays" tint="mint" href="/work/ops-docs" />
 */
export function NextProject({ title, tint, overline = "Next project", asChild = false, className, children, ref, ...props }: NextProjectProps) {
  const content = (
    <>
      <span className="flex min-w-0 flex-1 flex-col gap-8">
        <span className="text-overline uppercase text-text-tertiary">{overline}</span>
        <span className="text-h2 text-text-primary">{title}</span>
      </span>
      <span aria-hidden="true" className={cn(iconButtonVariants({ variant: "filled" }), "group-hover:shadow-elevation-hover")}>
        <Icon name="arrow-right" />
      </span>
    </>
  );
  const classes = cn(
    "group flex w-full items-center justify-between gap-24 rounded-card p-card-padding",
    "transition-all duration-base ease-out hover:-translate-y-4 hover:shadow-elevation-hover",
    tintBg[tint],
    className,
  );
  if (asChild) {
    return (
      <Slot ref={ref} data-slot="next-project" className={classes} {...props}>
        {withContent(children, content)}
      </Slot>
    );
  }
  return (
    <a ref={ref} data-slot="next-project" className={classes} {...props}>
      {content}
    </a>
  );
}
