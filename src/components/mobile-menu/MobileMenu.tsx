import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/button";
import type { NavItem, SiteLinkProps } from "@/components/header/types";
import { IconButton } from "@/components/icon-button";
import { Logo } from "@/components/logo";
import { TextLink } from "@/components/text-link";
import { Icon } from "@/icons";
import { cn } from "@/lib/utils";

export interface MobileMenuProps extends SiteLinkProps {
  /** The main pages, e.g. Work / About / Playground. */
  links: NavItem[];
  /** The current page's href; that link is marked as current for screen readers. */
  activeHref?: string;
  /** Contact email shown at the bottom (as a mailto link). */
  email: string;
  /** Call to action at the bottom. Default: "Get in touch" → "/contact". */
  cta?: NavItem;
  /** Controlled open state (optional). Leave out to let the menu manage itself. */
  open?: boolean;
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Extra classes for the menu toggle button. */
  className?: string;
}

/**
 * MobileMenu — the menu toggle plus the full-screen menu it opens (used by Header below 768px).
 * Accessible dialog: focus moves into it, Esc closes it, and focus returns to the toggle.
 * The panel slides down and the links rise in 40ms apart; reduced-motion users get no animation.
 *
 * @example <MobileMenu links={links} email="hello@example.com" />
 */
export function MobileMenu({ links, activeHref, email, cta = { label: "Get in touch", href: "/contact" }, linkAs: L = "a", open, onOpenChange, className }: MobileMenuProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <IconButton variant="outline" icon={<Icon name="menu" />} aria-label="Open menu" className={className} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          data-slot="mobile-menu"
          aria-describedby={undefined}
          className="fixed inset-0 z-50 flex flex-col gap-40 overflow-y-auto bg-bg-page px-margin pt-16 pb-32 text-text-primary data-[state=open]:animate-menu-in"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div className="flex items-center justify-between">
            <Logo size="small" />
            <Dialog.Close asChild>
              <IconButton icon={<Icon name="close" />} aria-label="Close menu" />
            </Dialog.Close>
          </div>
          <nav aria-label="Main">
            <ul className="flex flex-col gap-20">
              {links.map((l, i) => (
                <li key={l.href} className="animate-rise" style={{ animationDelay: `${(i + 1) * 40}ms` }}>
                  <L href={l.href} aria-current={l.href === activeHref ? "page" : undefined} className="text-h1 text-text-primary">
                    {l.label}
                  </L>
                </li>
              ))}
            </ul>
          </nav>
          <div className={cn("mt-auto flex flex-col items-start gap-16")}>
            <TextLink href={`mailto:${email}`}>{email}</TextLink>
            <Button asChild icon={<Icon name="arrow-right" />}>
              <L href={cta.href}>{cta.label}</L>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
