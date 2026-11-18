/**
 * SiteLayout — the frame every page shares: skip link, Header, <main> at content width, Footer.
 * Pages only supply their own sections. Spacing between sections is the page's choice:
 * Home uses `gap-section`; case studies use `gap-section-sm` (as in Figma).
 */
import type { ReactNode } from "react";
import { Button, Footer, Header, cn } from "ka-design-system";
import { contactCta, navLinks, site } from "./content";

export interface SiteLayoutProps {
  /** The page's sections. */
  children: ReactNode;
  /** Which header link shows as active. Default: none (the links jump to sections on Home). */
  activeHref?: string;
  /** Gap between sections, as a token class. Default "gap-section". */
  gapClassName?: string;
}

export function SiteLayout({ children, activeHref, gapClassName = "gap-section" }: SiteLayoutProps) {
  return (
    <>
      {/* Keyboard users can jump past the header. Hidden until it gets focus. */}
      <Button asChild className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-16 focus-visible:top-16 focus-visible:z-50">
        <a href="#main">Skip to content</a>
      </Button>

      <Header links={navLinks} activeHref={activeHref} email={site.email} cta={contactCta} />

      {/* Side margin, section-sm on top and section spacing below (56/96 Desktop, 40/64 Tablet, 32/48 Mobile). */}
      <main id="main" tabIndex={-1} className="bg-bg-page px-margin pb-section pt-section-sm outline-none">
        <div className={cn("mx-auto flex max-w-content flex-col", gapClassName)}>{children}</div>
      </main>

      <Footer id="contact" email={site.email} linkedInHref={site.linkedIn} />
    </>
  );
}
