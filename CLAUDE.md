# CLAUDE.md — ka-design-system

Instructions for any AI agent (Claude or another) that **uses** this design system to build UI, or **extends** it. Read all of this before writing code. If this file and your own habits disagree, this file wins.

> **Status:** planning. Components marked *planned* don't exist yet. Check `src/index.ts` for what's actually exported. The full plan is in `PLAN.md`.

## What this is

`ka-design-system` is Kieran Anderson's React component library. It's built from the Figma file [Design system](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system) (file key `o88Kjupw7MOvSqAC8as9ye`).
Stack: Vite (library mode) · React · TypeScript · Tailwind CSS v4 · shadcn/ui (restyled to these tokens) · Storybook · Figma Code Connect.

**Figma is the source of truth for appearance; this repo is the source of truth for behaviour and API.**

## Using the system (building an app or page)

```bash
npm install github:<github-username>/ka-design-system   # private repo; username to be filled in
```
```tsx
import "ka-design-system/styles.css";   // once, at the app root: tokens, theme, Poppins
import { Button, Icon } from "ka-design-system";

<Button variant="primary" icon={<Icon name="arrow-right" />}>Get in touch</Button>
```

### Golden rules
1. **Use a component if one exists.** Check the component table below and Storybook before writing your own markup. Never rebuild a Button out of a `<button>` with classes.
2. **Use tokens, never raw values.** No hex colours, no `rgb()`, no arbitrary Tailwind values like `p-[13px]` or `text-[#333]`. Use token classes: `bg-surface-default`, `text-text-secondary`, `border-border-divider`, `gap-16`, `p-24`, `rounded-md`. If no token fits, **stop and ask**. Don't invent one.
3. **Dark mode is automatic.** Semantic tokens change value in dark mode. Don't add `dark:` overrides with other colours. Use `dark:` only to swap *which semantic token* is used, and only when Figma does the same.
4. **Pick tokens by meaning, not by look.** `color/text/primary` is for body text, even if `color/bg/inverse` happens to be the same colour. Read the token descriptions in `src/styles/tokens.css`.
5. **Typography comes from text styles.** Use the type classes (`text-display`, `text-h1`, `text-h2`, `text-h3`, `text-body-lg`, `text-body`, `text-body-sm`, `text-caption`, `text-label-button`, `text-label-tag`, `text-link`) instead of setting size, line height and weight separately. Sizes respond to the breakpoint on their own.
6. **Spacing scale:** 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 (px). Layout tokens: `layout-margin`, `layout-gutter`, `content-width` (1216 on Desktop), `reading-width` (800), `section`, `section-sm`, `card-padding`, `card-gap`.
7. **Icons:** only `<Icon name="…" />` from this package (24px, 1.75 stroke). Available names: `arrow-right`, `arrow-left`, `arrow-up-right`, `external`, `mail`, `linkedin`, `menu`, `close`, `plus`, `check`, `play`, `filter`, `sparkle`, `download`. No other icon libraries.
8. **Accessibility is not optional.** Icon-only buttons need `aria-label`. Keep the visible focus ring. Respect `prefers-reduced-motion` (the motion tokens already do).

### Theme
- Default: follows the device (light/dark). Force a theme with `class="light"` or `class="dark"` on `<html>`.
- Tints for projects: `blue`, `mint`, `peach`. Use one tint per project, consistently across its card, hero, outcome summary and next-project card.

## Prop naming rules (Figma → React)

| Figma | React |
|---|---|
| Property name | camelCase prop (`Show caption` → `showCaption`, `Tint` → `tint`) |
| Variant value | lower-case kebab string (`Primary` → `"primary"`, `Coming soon` → `"coming-soon"`) |
| Main label text (Button, Tag, Nav link, Text link) | `children` |
| Other text properties | named string props (`title`, `caption`, `quote`…) |
| `Show X` boolean + `X` slot | single optional prop `x` (pass it to show, omit to hide) |
| `State` Hover / Pressed / Focus | not a prop: automatic CSS states |
| `State` Selected / Active / Disabled / Coming soon | boolean props `selected` / `active` / `disabled` / `comingSoon` |
| `Breakpoint` | not a prop: responds to screen size |

Linkable components (Button, Text link, Nav link, Logo) take `asChild` to render as your router's `<Link>` or an `<a>`.

## Component table

API column = intended props. ✅ built · 🟡 planned. Figma links: `https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=<id with - instead of :>`

| Component | Figma node | Status | API |
|---|---|---|---|
| Icon | 5:158 | 🟡 | `name` |
| Button | 6:62 | 🟡 | `variant: "primary"\|"secondary"\|"ghost"`, `children`, `icon?`, `disabled?`, `asChild?` |
| Text link | 6:99 | 🟡 | `children`, `size: "default"\|"small"`, `comingSoon?`, `asChild?` |
| Tag | 6:108 | 🟡 | `children`, `selected?` |
| Icon button | 6:139 | 🟡 | `icon`, `variant: "filled"\|"outline"`, `aria-label` (required) |
| Avatar | 6:148 | 🟡 | `src`, `alt`, `size: "small"\|"medium"\|"large"` |
| Divider | 6:149 | 🟡 | — |
| Logo | 6:158 | 🟡 | `size: "default"\|"small"`, `asChild?` |
| Nav link | 7:11 | 🟡 | `children`, `active?`, `asChild?` |
| Header | 7:75 | 🟡 | `links`, `activeHref?` (responsive) |
| Mobile menu | 7:76 | 🟡 | `open`, `onOpenChange`, `links` |
| Footer | 7:158 | 🟡 | contact + LinkedIn (responsive) |
| Hero intro | 8:47 | 🟡 | statement (mixed Display Regular/Bold) (responsive) |
| Section header | 8:48 | 🟡 | `overline`, `title`, `action?` |
| Project card | 8:217 | 🟡 | `project`, `client`, `description`, `tint`, `status: "live"\|"coming-soon"`, `image` |
| About block | 8:224 | 🟡 | `showCvLink?` |
| Case study hero | 9:65 | 🟡 | `title`, `summary`, `tint` |
| Text block | 9:66 | 🟡 | `heading?`, `children` (body) |
| Image block | 9:80 | 🟡 | `layout: "full-width"\|"inset"\|"side-by-side"`, `caption?` |
| Pull quote | 9:81 | 🟡 | `quote`, `attribution` |
| Stat | 9:86 | 🟡 | `value`, `label` |
| Process step | 9:99 | 🟡 | `number`, `title`, `description` |
| Process steps | 13:120 | 🟡 | `steps` (responsive layout) |
| Key stats | 13:141 | 🟡 | `stats` (responsive layout) |
| Outcome summary | 9:172 | 🟡 | `items` (3), `tint` |
| Next project | 9:261 | 🟡 | `title`, `tint`, `href` |
| Experiment tile | 11:96 | 🟡 | `title`, `description`, `media: "image"\|"video"` |
| Filter tabs | 11:99 | 🟡 | `options`, `value`, `onValueChange` |
| Embed block | 11:110 | 🟡 | `src`, `caption?` |

Update this table (status, API) whenever a component lands.

## Extending the system (adding or changing a component)

1. **Read Figma first**, with the Figma MCP: `get_design_context` and `get_screenshot` for the node, `get_variable_defs` for tokens. Use the component's Figma **description** as its docs text.
2. **Start from shadcn** when an equivalent exists (button, toggle, avatar, separator, sheet, tabs…), then restyle with tokens only. Delete shadcn's default colours and radii; don't layer on top of them.
3. Follow the **naming rules** above. Put a one-line JSDoc comment on every prop.
4. Files: `src/components/<name>/{Name.tsx, Name.stories.tsx, Name.figma.tsx, index.ts}`; export from `src/index.ts`.
5. **Storybook:** a story per Figma variant, with light/dark and breakpoint toolbars.
6. **Code Connect:** map every Figma property in `Name.figma.tsx`; run `npx figma connect parse` to check it. **Never run `figma connect publish`.** Kieran publishes.
7. **Check:** `npm run lint`, `npm run typecheck`, `npm run build`, `npm run check:tokens` (fails on raw values); compare a Storybook screenshot with Figma in light and dark.
8. Commit with Conventional Commits (`feat(tag): add Tag component`).

### Tokens
- Don't edit `src/styles/tokens.css` or `tokens/figma-variables.json` by hand. They're generated.
- To refresh tokens: read the variables from Figma (MCP), write `tokens/figma-variables.json`, run `npm run tokens`, review the diff.
- A missing token is a Figma change first. Raise it with Kieran.

## Commands (once set up)

| Command | Does |
|---|---|
| `npm run storybook` | Opens the catalogue at http://localhost:6006 |
| `npm run build` | Builds the package into `dist/` |
| `npm run tokens` | Regenerates CSS from `tokens/figma-variables.json` |
| `npm run check:tokens` | Fails on hard-coded colours or arbitrary values |
| `npm run lint` / `npm run typecheck` | Code quality checks |

## Hard limits for agents
- **Never handle secrets.** Don't ask for, read, write or commit passwords, Figma tokens, GitHub tokens or `.env` values. `.env*` files are git-ignored.
- **Never push, publish or release** (git push, `figma connect publish`, Figma library publish, npm publish) without Kieran saying so in the conversation. Prepare the command and explain it; he runs it.
- **Ask before editing the Figma file.** Save a named version first when you do.
- Kieran is a designer: explain decisions in plain language, not jargon.
