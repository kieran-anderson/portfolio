import type { HTMLAttributes } from "react";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/utils";

export interface FilterTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Filter names, e.g. ["All", "AI tools", "Prototypes", "Motion", "Code"]. */
  options: string[];
  /** The selected option. */
  value: string;
  /** Called with the option the user picks. */
  onValueChange: (value: string) => void;
  /** Screen-reader name for the group. Default "Filter". */
  label?: string;
}

/**
 * FilterTabs — a wrapping row of Tag filter chips; exactly one is selected. Use above the Playground grid.
 * Each chip is a toggle button (`aria-pressed`) inside a labelled group.
 *
 * @example
 * const [filter, setFilter] = useState("All");
 * <FilterTabs options={["All", "AI tools", "Prototypes"]} value={filter} onValueChange={setFilter} />
 */
export function FilterTabs({ options, value, onValueChange, label = "Filter", className, ...props }: FilterTabsProps) {
  return (
    <div data-slot="filter-tabs" role="group" aria-label={label} className={cn("flex flex-wrap gap-8", className)} {...props}>
      {options.map((o) => (
        <Tag key={o} selected={o === value} onClick={() => onValueChange(o)}>
          {o}
        </Tag>
      ))}
    </div>
  );
}
