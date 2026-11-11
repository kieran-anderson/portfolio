import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  /** The number, e.g. "−32%". Figma: `Value`. */
  value: string;
  /** What it measures, e.g. "support calls in the first 3 months". Figma: `Label`. */
  label: string;
}

/**
 * Stat — a single metric: big bold value with a short label. Usually used inside KeyStats.
 *
 * @example <Stat value="−32%" label="support calls in the first 3 months" />
 */
export function Stat({ value, label, className, ...props }: StatProps) {
  return (
    <div data-slot="stat" className={cn("flex flex-col gap-4", className)} {...props}>
      <p className="text-display font-bold text-text-primary">{value}</p>
      <p className="text-body-sm text-text-secondary">{label}</p>
    </div>
  );
}
