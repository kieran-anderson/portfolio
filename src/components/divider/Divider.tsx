import type { HTMLAttributes, Ref } from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  ref?: Ref<HTMLHRElement>;
}

/**
 * Divider — 1px hairline that stretches to fill its container. Decorative separation between content.
 *
 * @example <Divider />
 */
export function Divider({ className, ref, ...props }: DividerProps) {
  return <hr ref={ref} data-slot="divider" className={cn("h-px w-full shrink-0 border-0 bg-border-divider", className)} {...props} />;
}
