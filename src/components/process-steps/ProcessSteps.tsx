import type { HTMLAttributes } from "react";
import { ProcessStep, type ProcessStepProps } from "@/components/process-step";
import { cn } from "@/lib/utils";

export interface ProcessStepsProps extends HTMLAttributes<HTMLOListElement> {
  /** The stages in order (usually four). */
  steps: Pick<ProcessStepProps, "number" | "title" | "description">[];
}

/**
 * ProcessSteps — the design process as a numbered list. Figma's `Layout` variants happen automatically:
 * one column on Mobile (gap 32), two columns from Tablet (32 across, 40 down).
 *
 * @example <ProcessSteps steps={[{ number: "01", title: "Discover", description: "…" }, …]} />
 */
export function ProcessSteps({ steps, className, ...props }: ProcessStepsProps) {
  return (
    <ol data-slot="process-steps" className={cn("grid w-full gap-32 tablet:grid-cols-2 tablet:gap-y-40", className)} {...props}>
      {steps.map((s) => (
        <li key={s.number}>
          <ProcessStep {...s} />
        </li>
      ))}
    </ol>
  );
}
