/**
 * Case study page — built only from ka-design-system components, in the order of Figma's Case study template
 * (Desktop 13:591, Tablet 13:732, Mobile 13:873). Sections are `section-sm` apart (56 Desktop, 40 Tablet, 32 Mobile).
 * Content comes from a `CaseStudy` object, so every case study shares this one layout.
 */
import {
  CaseStudyHero,
  ImageBlock,
  KeyStats,
  NextProject,
  OutcomeSummary,
  ProcessSteps,
  PullQuote,
  TextBlock,
} from "ka-design-system";
import { SiteLayout } from "../SiteLayout";
import type { CaseStudy } from "./types";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const s = study;
  return (
    <SiteLayout gapClassName="gap-section-sm">
      <CaseStudyHero
        client={s.client}
        title={s.title}
        summary={s.summary}
        meta={s.meta}
        tint={s.tint}
        cover={s.cover ? <Cover {...s.cover} /> : undefined}
      />

      <TextBlock heading={s.problem.heading}>{s.problem.body}</TextBlock>
      {s.figure1.image && <ImageBlock layout="full-width" images={[s.figure1.image]} caption={s.figure1.caption} />}

      <TextBlock heading={s.approach.heading}>{s.approach.body}</TextBlock>
      <ProcessSteps steps={s.steps} />

      <PullQuote quote={s.quote.text} attribution={s.quote.attribution} />
      {s.figure2.images && <ImageBlock layout="side-by-side" images={s.figure2.images} caption={s.figure2.caption} />}

      <KeyStats stats={s.stats} />
      <OutcomeSummary items={s.outcomes} tint={s.tint} />
      <NextProject title={s.next.title} tint={s.next.tint} href={s.next.href} />
    </SiteLayout>
  );
}

/**
 * The hero cover. Screenshots are pinned to the top so the page header in the shot is never cropped off.
 * With `href`, the whole image links to the live site in a new tab (screen readers are told so); the focus ring
 * is drawn inside the image because the cover panel clips anything outside its rounded corners.
 */
function Cover({ src, alt, href }: NonNullable<CaseStudy["cover"]>) {
  const img = <img src={src} alt={alt} fetchPriority="high" className="size-full object-cover object-top" />;
  if (!href) return img;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block size-full rounded-card focus-visible:-outline-offset-4">
      {img}
      <span className="sr-only"> (opens the live site in a new tab)</span>
    </a>
  );
}
