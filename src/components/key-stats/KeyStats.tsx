import type { HTMLAttributes } from "react";
import { Stat, type StatProps } from "@/components/stat";
import { cn } from "@/lib/utils";

export interface KeyStatsProps extends HTMLAttributes<HTMLUListElement> {
  /** Usually three outcome metrics. */
  stats: Pick<StatProps, "value" | "label">[];
}

/**
 * KeyStats — outcome metrics on a white card. Figma's `Layout` variants happen automatically:
 * stacked on Mobile (gap 24), in a row from Tablet (gap 32).
 *
 * @example <KeyStats stats={[{ value: "−32%", label: "support calls in the first 3 months" }, …]} />
 */
export function KeyStats({ stats, className, ...props }: KeyStatsProps) {
  return (
    <ul
      data-slot="key-stats"
      className={cn("flex w-full flex-col gap-24 rounded-card bg-surface-default p-card-padding tablet:flex-row tablet:gap-32", className)}
      {...props}
    >
      {stats.map((s) => (
        <li key={s.value + s.label} className="flex-1">
          <Stat {...s} />
        </li>
      ))}
    </ul>
  );
}
