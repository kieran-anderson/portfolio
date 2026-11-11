import type { ElementType } from "react";

/** One navigation link. */
export interface NavItem {
  /** Visible text, e.g. "Work". */
  label: string;
  /** Where it goes, e.g. "/work". */
  href: string;
}

/** Shared props for components that render site links. */
export interface SiteLinkProps {
  /**
   * Component used for internal links. Default is a plain `<a>`. Pass your router's link if it accepts `href`
   * (e.g. Next.js `Link`). For routers that use `to`, wrap it: `linkAs={(p) => <RouterLink to={p.href} {...p} />}`.
   */
  linkAs?: ElementType;
}
