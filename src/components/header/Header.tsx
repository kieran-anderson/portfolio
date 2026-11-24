import type { HTMLAttributes } from "react";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { cn } from "@/lib/utils";
import type { NavItem, SiteLinkProps } from "./types";

export interface HeaderProps extends HTMLAttributes<HTMLElement>, SiteLinkProps {
  /** The main pages, e.g. `[{ label: "Work", href: "/work" }, …]`. */
  links: NavItem[];
  /** The current page's href. Its Nav link shows as active. */
  activeHref?: string;
  /** Contact email, shown in the mobile menu. */
  email: string;
  /** Call to action at the end of the nav. Default: "Get in touch" → "/contact". */
  cta?: NavItem;
  /** Where the logo links to. Default "/". Set it when the site lives in a sub-folder, e.g. "/portfolio/". */
  homeHref?: string;
}

/**
 * Header — site header, 80px tall, side padding = `layout/margin`.
 * Responsive (Figma's `Breakpoint` variants happen automatically):
 * - Mobile (< 768): small Logo + menu toggle that opens MobileMenu.
 * - Tablet (≥ 768): Logo, Nav links 24px apart, "Get in touch" button.
 * - Desktop (≥ 1280): same, links 32px apart.
 *
 * @example <Header links={links} activeHref="/work" email="hello@example.com" />
 */
export function Header({ links, activeHref, email, cta = { label: "Get in touch", href: "/contact" }, homeHref = "/", linkAs: L = "a", className, ...props }: HeaderProps) {
  return (
    <header data-slot="header" className={cn("bg-bg-page px-margin", className)} {...props}>
      <div className="mx-auto flex h-80 max-w-content items-center justify-between">
        <Logo size="small" href={homeHref} className="tablet:hidden" />
        <Logo href={homeHref} className="hidden tablet:inline-flex" />
        <nav aria-label="Main" className="hidden items-center gap-24 tablet:flex desktop:gap-32">
          {links.map((l) => (
            <NavLink key={l.href} asChild active={l.href === activeHref}>
              <L href={l.href}>{l.label}</L>
            </NavLink>
          ))}
          <Button asChild>
            <L href={cta.href}>{cta.label}</L>
          </Button>
        </nav>
        <MobileMenu email={email} homeHref={homeHref} className="tablet:hidden" />
      </div>
    </header>
  );
}
