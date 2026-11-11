import type { HTMLAttributes, MouseEventHandler, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends Omit<HTMLAttributes<HTMLElement>, "onClick"> {
  /** The tag text. Figma: `Label`. */
  children: ReactNode;
  /**
   * Filter chips only: whether this tag is selected (dark fill, small bounce).
   * Figma: `State` = Selected. Passing `selected` or `onClick` makes the tag a toggle button.
   */
  selected?: boolean;
  /** Makes the tag a clickable filter chip. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: Ref<HTMLElement>;
}

/**
 * Tag — pill label for disciplines (static) and filter chips (clickable, can be selected).
 *
 * - Static: `<Tag>UX research</Tag>` renders plain text in a pill.
 * - Filter chip: `<Tag selected={active} onClick={toggle}>UX research</Tag>` renders a toggle button (`aria-pressed`).
 *
 * Note: Figma's Selected tag is 2px shorter because it drops its outline; in code the outline stays (same colour
 * as the fill) so chips don't jump when selected.
 */
export function Tag({ selected, onClick, className, children, ref, ...props }: TagProps) {
  const interactive = selected !== undefined || onClick !== undefined;
  const classes = cn(
    "inline-flex items-center whitespace-nowrap rounded-full border px-16 py-8 text-label-tag",
    "border-border-divider bg-surface-default text-text-secondary",
    interactive && "cursor-pointer transition-colors duration-fast ease-out hover:border-border-strong",
    selected && "animate-pop border-bg-inverse bg-bg-inverse text-text-inverse hover:border-bg-inverse",
    className,
  );
  if (!interactive) {
    return (
      <span ref={ref as Ref<HTMLSpanElement>} data-slot="tag" className={classes} {...props}>
        {children}
      </span>
    );
  }
  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      data-slot="tag"
      aria-pressed={selected ?? false}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
