import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ProcessStepProps extends HTMLAttributes<HTMLDivElement> {
  /** Step number as shown, e.g. "01". Figma: `Number`. */
  number: string;
  /** Stage name, e.g. "Discover". Figma: `Title`. */
  title: string;
  /** What happened in this stage. Figma: `Description`. */
  description: string;
}

/**
 * ProcessStep — one stage of the design process: numbered ink circle, title and description.
 * Usually used inside ProcessSteps.
 *
 * @example <ProcessStep number="01" title="Discover" description="12 customer interviews…" />
 */
export function ProcessStep({ number, title, description, className, ...props }: ProcessStepProps) {
  return (
    <div data-slot="process-step" className={cn("flex gap-20", className)} {...props}>
      <span aria-hidden="true" className="inline-flex size-40 shrink-0 items-center justify-center rounded-full bg-bg-inverse text-label-button text-text-inverse">
        {number}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-8">
        <h3 className="text-h3 text-text-primary">
          <span className="sr-only">Step {number}: </span>
          {title}
        </h3>
        <p className="text-body text-text-secondary">{description}</p>
      </div>
    </div>
  );
}
