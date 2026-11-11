import { Slot } from "@radix-ui/react-slot";
import { type AnchorHTMLAttributes, isValidElement, type ReactElement, type ReactNode, type Ref } from "react";
import { withContent } from "@/lib/slot";
import { cn } from "@/lib/utils";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The link text. Figma: `Label`. With `asChild`, pass your router link with the text inside it. */
  children: ReactNode;
  /** This link is the current page: bold text and the dot underneath. Figma: `State` = Active. Sets `aria-current="page"`. */
  active?: boolean;
  /** Render as your router's link: `<NavLink asChild active><Link to="/work">Work</Link></NavLink>`. */
  asChild?: boolean;
  ref?: Ref<HTMLAnchorElement>;
}

/** The label twice in one grid cell: the bold copy is invisible but reserves its width, so hover/active bold never shifts the layout. */
function StableLabel({ children }: { children: ReactNode }) {
  return (
    <span className="grid">
      <span className="col-start-1 row-start-1">{children}</span>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 font-bold">
        {children}
      </span>
    </span>
  );
}

/**
 * NavLink — header navigation item. Hover: bold + faint dot. Active (current page): bold + dot that pops in.
 *
 * Note: Figma's Hover/Active text gets 4px wider as it turns bold; in code the width is reserved up front so
 * neighbouring links don't move.
 *
 * @example <NavLink href="/work" active>Work</NavLink>
 */
export function NavLink({ active = false, asChild = false, className, children, ref, ...props }: NavLinkProps) {
  const classes = cn(
    "group inline-flex flex-col items-center gap-4 px-4 py-8 text-body text-text-secondary transition-colors duration-fast",
    "hover:font-bold hover:text-text-primary aria-[current=page]:font-bold aria-[current=page]:text-text-primary",
    className,
  );
  const dot = (
    <span
      aria-hidden="true"
      className="size-dot rounded-full bg-bg-inverse opacity-0 transition-opacity duration-fast group-hover:opacity-30 group-aria-[current=page]:animate-pop group-aria-[current=page]:opacity-100"
    />
  );
  const current = active ? ("page" as const) : undefined;
  if (asChild && isValidElement(children)) {
    const label = (children as ReactElement<{ children?: ReactNode }>).props.children;
    return (
      <Slot ref={ref} data-slot="nav-link" aria-current={current} className={classes} {...props}>
        {withContent(children, <><StableLabel>{label}</StableLabel>{dot}</>)}
      </Slot>
    );
  }
  return (
    <a ref={ref} data-slot="nav-link" aria-current={current} className={classes} {...props}>
      <StableLabel>{children}</StableLabel>
      {dot}
    </a>
  );
}
