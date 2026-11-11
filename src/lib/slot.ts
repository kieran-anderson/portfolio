import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

/**
 * For `asChild` components whose content is fixed (icon, logo): put `content` inside the user's element,
 * e.g. <IconButton asChild icon={…}><a href="…" /></IconButton> → <a href="…" class="…">{icon}</a>.
 */
export function withContent(child: ReactNode, content: ReactNode) {
  return isValidElement(child) ? cloneElement(child as ReactElement<{ children?: ReactNode }>, undefined, content) : child;
}
