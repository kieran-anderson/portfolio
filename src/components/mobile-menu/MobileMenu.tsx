import * as Dialog from "@radix-ui/react-dialog";
import { IconButton } from "@/components/icon-button";
import { Logo } from "@/components/logo";
import { TextLink } from "@/components/text-link";
import { Icon } from "@/icons";

export interface MobileMenuProps {
  /** Contact email, shown under the logo as a mailto link. */
  email: string;
  /** Where the logo links to. Default "/". */
  homeHref?: string;
  /** Controlled open state (optional). Leave out to let the menu manage itself. */
  open?: boolean;
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Extra classes for the menu toggle button. */
  className?: string;
}

/**
 * MobileMenu — the menu toggle plus the full-screen menu it opens (used by Header below 768px).
 * Per Figma, the menu holds the logo, a close button and the contact email (no page links).
 * Accessible dialog: focus moves into it, Esc closes it, and focus returns to the toggle.
 * The panel slides down; reduced-motion users get no animation.
 *
 * @example <MobileMenu email="hello@example.com" />
 */
export function MobileMenu({ email, homeHref = "/", open, onOpenChange, className }: MobileMenuProps) {
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
            <Logo size="small" href={homeHref} />
            <Dialog.Close asChild>
              <IconButton icon={<Icon name="close" />} aria-label="Close menu" />
            </Dialog.Close>
          </div>
          <div className="flex flex-col items-start gap-16">
            <TextLink href={`mailto:${email}`}>{email}</TextLink>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
