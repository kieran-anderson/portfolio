import type { HTMLAttributes, ReactNode } from "react";
import { Avatar } from "@/components/avatar";
import { Tag } from "@/components/tag";
import { cn } from "@/lib/utils";

export interface HeroIntroProps extends HTMLAttributes<HTMLElement> {
  /**
   * The big statement (Display style). Wrap the emphasised words in `<strong>` to make them bold,
   * like Figma's Display/Bold: `<>I'm Kieran, <strong>Senior product designer</strong> at …</>`.
   */
  statement: ReactNode;
  /** Supporting line under the statement. `<strong>` makes words bold (Body/Bold). */
  previously?: ReactNode;
  /** Discipline tags under the text, e.g. ["Product design", "UX research"]. */
  disciplines?: string[];
  /** Portrait photo URL (shown black and white). */
  portraitSrc?: string;
  /** Describes the portrait, e.g. "Kieran Anderson". */
  portraitAlt: string;
}

/**
 * HeroIntro — the Home page intro: statement, supporting line, discipline tags and portrait.
 * Responsive (Figma's `Breakpoint` variants happen automatically):
 * Mobile: 96px portrait on top, text below · Tablet: text left, 160px portrait top-right (gap 32) · Desktop: 220px portrait top-right (gap 64).
 * Put it inside a container of `max-w-content`.
 *
 * @example
 * <HeroIntro
 *   statement={<>I'm Kieran, <strong>Senior product designer</strong> at Barclays.</>}
 *   disciplines={["Product design", "UX research"]}
 *   portraitSrc="/me.jpg" portraitAlt="Kieran Anderson"
 * />
 */
export function HeroIntro({ statement, previously, disciplines = [], portraitSrc, portraitAlt, className, ...props }: HeroIntroProps) {
  return (
    <section
      data-slot="hero-intro"
      className={cn("flex w-full flex-col gap-24 tablet:flex-row-reverse tablet:items-start tablet:gap-32 desktop:gap-64", className)}
      {...props}
    >
      <Avatar
        src={portraitSrc}
        alt={portraitAlt}
        size="medium"
        className="tablet:size-portrait-md desktop:size-avatar-lg"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-24">
        <h1 className="text-display text-text-primary [&_strong]:font-bold">{statement}</h1>
        {previously && <p className="text-body text-text-secondary [&_strong]:font-bold">{previously}</p>}
        {disciplines.length > 0 && (
          <ul className="flex flex-wrap gap-8" aria-label="Disciplines">
            {disciplines.map((d) => (
              <li key={d}>
                <Tag>{d}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
