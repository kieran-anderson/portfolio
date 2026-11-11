# ka-design-system — Plan

**Status:** Figma fixes ✅ · Stop 1 ✅ · tokens, theme, icons ✅ · Stop 2 (Button) ✅ · Core basics ✅ · Navigation ✅ · Home sections ✅ · Case study ✅ · Playground ✅ · **🛑 Stop 3: ready to push to GitHub and publish Code Connect (Kieran runs these)**
**Figma source:** [Design system](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system) (file key `o88Kjupw7MOvSqAC8as9ye`)
**Goal:** Turn the Figma design system into a real React component library on GitHub that people and AI agents can read, use and build with correctly. Figma stays the source of truth for how things look; code is the source of truth for how they behave.

---

## 1. Decisions (from the interview)

| Topic | Decision | What it means in practice |
|---|---|---|
| Font | **Bundle Poppins** (Regular 400, Medium 500, SemiBold 600, Bold 700) via Fontsource | Works offline; no request to Google; nothing for apps to set up. |
| Default theme | **Follow the system**, with a manual override | Uses the visitor's device setting. Adding class `light` or `dark` on `<html>` forces a theme. |
| Dark mode colours | **Claude adds a `Dark` mode in Figma**; Kieran reviews | Figma stays the source; code reads the values from there. |
| Other Figma fixes | **Claude edits the file; Kieran checks** | Named version skipped (Figma's API can't create one; Kieran chose to rely on automatic version history). |
| Build order | Button → Core basics → Navigation → Home sections → Case study + Playground | All 28 components, in Figma page order. |
| Icons | **Export Kieran's 14 Figma icons** as React components | `<Icon name="arrow-right" />` draws exactly what's in Figma. No Lucide. |
| Button extras | **Add a Disabled state** (no extra sizes) | Needs the new `color/text/disabled` token. |
| Package name | **`ka-design-system`** | `import { Button } from "ka-design-system"` |
| Distribution | **Private GitHub repo, no npm** | Apps install with `npm install github:<your-username>/ka-design-system`. |
| Off-scale spacing (6px, 10px) | **Snap to the existing scale** | Each change is listed for review (6 → 4 or 8, 10 → 8 or 12, by eye). |
| Text props | **Main label = children**; other text = named props | `<Button>Get in touch</Button>`, `<PullQuote quote="…" attribution="…" />` |

## 2. Figma audit and fixes (done in Figma, by Claude, before theme code)

The order below is by priority. ★ = matters most for code and agents.

### Fix first
1. ★ **Add a `Dark` mode to the `Color` collection.** Add dark primitives (e.g. `color/grey/950`, dark tints) to `Primitives`, then point all 14 semantic tokens at them in Dark mode. Check text contrast reaches WCAG AA (4.5:1 body, 3:1 large text and icons).
2. ★ **Add the missing semantic tokens** with Light and Dark values: `color/focus/ring`, `color/feedback/error` (+ `color/text/on-error`), `color/text/disabled`, `color/surface/disabled`, `color/border/input`. Scope each one properly (fill, text, stroke).
3. ★ **Rename the `Style` property to `Variant`** on Button and Icon button. (`style` is reserved in React.)
4. ★ **Snap 6px and 10px spacing to the scale** in Text link, Logo, Nav link, Header, Mobile menu, Footer and Experiment tile. Bind radius 6 (Logo, Header, Mobile menu) and radius 2 (Pull quote) to radius tokens, or add `radius/xs` if no token fits. Kieran gets a before/after list.
5. **Add `State=Disabled`** to Button (all three variants), using the new disabled tokens.

### Fix next
6. **Bind every unbound gap and padding** to a `space/*` variable: Button, Header, Footer, Mobile menu and all case-study and playground components.
7. **Text styles:** apply `Label/Tag` to Tag labels; create `Label/Overline` and apply it in Section header, Next project and Case study hero. Hero intro's mixed Display Regular/Bold stays as it is (it's intentional and documented).
8. **Write a one-line description on every colour, spacing and radius variable** that says when to use it.

### Tidy-ups
9. Delete or describe the empty `Elevation/Rest` effect style.
10. Leave `Item 1/2/3` in Outcome summary as is (code uses `items={[…]}`), but note it in the description.

**After the fixes:** Claude re-runs the audit and reports the counts (unbound values, unstyled text, missing modes) before writing any theme code.

## 3. Stack (plain-language version)

| Piece | What it does for you |
|---|---|
| **Vite** (library mode) | Bundles the components into a package that other apps can install. |
| **React + TypeScript** | TypeScript makes every prop typed: editors and agents get autocomplete and an error if they pass `variant="primery"`. |
| **Tailwind CSS v4** | Styling with utility classes. Your tokens become class names (`bg-surface-default`, `text-text-secondary`, `gap-16`). There are no free-form colours. |
| **shadcn/ui** | Well-built, accessible component behaviour (keyboard, focus, screen readers), copied into the repo and **restyled with your tokens**. We own the code; nothing is locked to shadcn's look. |
| **Storybook** | The visual catalogue. Each component gets a page with every variant, a light/dark switch and a Mobile/Tablet/Desktop switch. |
| **Figma Code Connect** | A `Button.figma.tsx` beside each component, so Dev Mode and the Figma MCP show **your real code** instead of guessed code. |

Exact versions are pinned when they're installed (latest stable on that day) and recorded in `package.json`.

## 4. Repository layout

```
ka-design-system/            ← this folder ("KA Design")
├─ CLAUDE.md                 ← instructions for any agent using or extending the system
├─ PLAN.md                   ← this file
├─ README.md                 ← short human intro + install
├─ figma.config.json         ← Code Connect settings (no secrets)
├─ tokens/
│  ├─ figma-variables.json   ← raw export of Figma variables (generated, don't edit)
│  └─ build-tokens.ts        ← turns the JSON into CSS
├─ src/
│  ├─ styles/
│  │  ├─ tokens.css          ← generated: CSS variables for light, dark, responsive
│  │  ├─ theme.css           ← shadcn variable mapping + Tailwind @theme
│  │  └─ fonts.css           ← Poppins
│  ├─ icons/                 ← generated from the Figma Icon set (14 icons)
│  ├─ components/
│  │  └─ button/
│  │     ├─ Button.tsx
│  │     ├─ Button.stories.tsx
│  │     ├─ Button.figma.ts  ← Code Connect template
│  │     └─ index.ts
│  ├─ lib/utils.ts           ← cn() class helper (shadcn)
│  └─ index.ts               ← public exports
└─ .storybook/
```

## 5. Tokens and theming

- **Source:** Figma variables, read through the Figma connection. (Figma's Variables REST API needs an Enterprise plan, so a script can't fetch them directly. An agent with Figma access refreshes `tokens/figma-variables.json`, then `npm run tokens` rebuilds the CSS.)
- **Names:** CSS variables use the code names already in Figma (`--color-text-primary`, `--space-16`, `--radius-md`…). One name per value, everywhere.
- **Light/Dark/System:** `:root` = light; `@media (prefers-color-scheme: dark)` applies dark unless `<html class="light">`; `<html class="dark">` forces dark. Tailwind's `dark:` variant follows the same rule.
- **Responsive collection** (Mobile/Tablet/Desktop) → CSS variables that change at media-query breakpoints. Breakpoint widths are read from the Grid styles.
- **shadcn mapping:** shadcn's own variables (`--background`, `--primary`, `--ring`, …) point at your tokens. **🛑 Stop 1** shows this table before any theme code is written.
- **Motion:** durations and springs/eases become CSS variables plus Tailwind utilities; `prefers-reduced-motion` is respected.

## 6. How Figma becomes React (naming rules)

| Figma | React | Example |
|---|---|---|
| Property name | camelCase prop | `Tint` → `tint`, `Show caption` → `showCaption` |
| Variant values | lower-case, kebab-case strings | `Primary` → `"primary"`, `Coming soon` → `"coming-soon"` |
| Main text (`Label` on Button, Tag, Nav link, Text link) | `children` | `<Tag>Research</Tag>` |
| Other text properties | named string props | `Title` → `title`, `Caption` → `caption` |
| `Show X` boolean + `X` instance swap | one optional prop `x` | `Show icon` + `Icon` → `icon={<Icon name="plus" />}` |
| `State` = Hover / Pressed / Focus | **not a prop**; happens automatically in CSS | — |
| `State` = Selected / Active / Disabled / Coming soon | boolean props | `selected`, `active`, `disabled`, `comingSoon` |
| `Breakpoint` = Desktop / Tablet / Mobile | **not a prop**; layout responds to screen size | — |
| `Layout` (e.g. Row/Stack) where it's a design choice | prop | `layout="row"` |

Links: components that can be links (Button, Text link, Nav link, Logo) accept `asChild`, so they wrap a router `<Link>` or an `<a>` without losing styling.

## 7. Build order and definition of done

**Order:** Button → Text link, Tag, Icon button, Avatar, Divider, Logo → Nav link, Header, Mobile menu, Footer → Hero intro, Section header, Project card, About block → Case study hero, Text block, Image block, Pull quote, Stat, Process step, Process steps, Key stats, Outcome summary, Next project → Experiment tile, Filter tabs, Embed block. Icon first, as a small dependency of Button.

**Each component is done when:**
1. It uses tokens only (a check fails the build on raw hex colours or arbitrary `[12px]`-style values).
2. Props follow §6; TypeScript types have a short comment on each prop (agents read these).
3. A Storybook page has every Figma variant, light and dark, plus Mobile/Tablet/Desktop where relevant, with the Figma description as the docs text.
4. A Code Connect file (`*.figma.tsx`) maps every Figma property and passes `figma connect parse` locally.
5. A screenshot comparison with Figma, light and dark, is checked by eye.
6. It's keyboard- and screen-reader-tested (focus ring visible, roles and labels correct). Icon button requires an `aria-label`.
7. It's listed in the CLAUDE.md component table.
8. It's committed.

## 8. Code Connect

- One `*.figma.ts` **template file** per component (Code Connect CLI v2 removed the old React `figma.connect()` format), pointing at its Figma node (IDs in CLAUDE.md).
- `figma.config.json` holds the Figma file URL; **no tokens are stored in the repo**.
- **Your plan:** Figma Professional supports Code Connect (one library and one framework). Mappings can't be created through the Figma MCP on Professional, so **you publish them** with `npx figma connect publish` and your own access token. Some Professional users reported in Oct 2026 that the Code Connect token permission was missing. If we hit that, it's a Figma support issue, and the files stay ready.
- **Before publishing:** the Figma file must be published as a team library.

## 9. Checkpoints: where Claude stops and waits

1. **🛑 Stop 1: theme mapping table.** shadcn variables ↔ your tokens, light and dark values side by side. No theme code until it's approved.
2. **🛑 Stop 2: Button.** Storybook vs Figma screenshots in light and dark, plus `Button.figma.tsx`.
3. **🛑 Stop 3: anything leaving your computer.** Pushing to GitHub, publishing Code Connect, publishing the Figma library. Claude prepares and explains; **you run sign-ins and publishing yourself.** Claude never asks for, stores or types passwords or tokens.

Between stops Claude works in long stretches and commits after each meaningful step (Conventional Commits: `feat(button): …`, `chore(tokens): …`).

## 10. Prerequisites and open items

- [ ] **Package downloads are blocked.** Your computer's workspace gets "403" from the npm registry, and the cloud workspace has no network, so nothing can be installed yet. **Fix:** in Claude's network settings, allow package installs (at least `registry.npmjs.org`). A new chat may be needed for the change to apply. Without it, the build can't start.
- [ ] GitHub: create an empty **private** repo `ka-design-system` under your account, and tell Claude your GitHub username (needed for the install line). `gh` isn't installed; you push yourself at Stop 3.
- [ ] Figma: publish the file as a library (needed for Code Connect).
- [ ] Breakpoint widths: read from Grid/Mobile, Tablet, Desktop during the token step.

## 11. Risks

- **Figma file edits** touch every component; the named version is the safety net.
- **Snapping 6/10px** changes the look slightly. Kieran reviews the list.
- **Code Connect on Professional** may be blocked by Figma (token permission), outside our control.
- **shadcn defaults** (e.g. its own radius or ring styles) can leak in. The token-only check and the Stop 2 comparison catch this.

## 12. Progress log

### 11 Nov 2026: Figma fixes (all done, re-audited clean)
- **Dark mode added** to `Color` (Light 3:1 / Dark 27:0). New dark primitives: `grey/300 #b9bdb8`, `grey/400 #9a9e99`, `grey/500 #7d817c`, `grey/750 #2a2e2a`, `grey/850 #1c1f1c`, `grey/950 #121412`, `tint/blue-dark #1b2a3d`, `tint/mint-dark #183229`, `tint/peach-dark #36291d`, `red/300 #f97066`, `red/600 #b42318`.

  | Token | Light | Dark |
  |---|---|---|
  | bg/page | grey/50 | grey/950 |
  | bg/inverse | ink | grey/50 |
  | surface/default | white | grey/850 |
  | surface/blue · mint · peach | tint/* | tint/*-dark |
  | surface/disabled 🆕 | grey/200 | grey/750 |
  | text/primary | grey/900 | grey/50 |
  | text/secondary | grey/800 | grey/300 |
  | text/tertiary | grey/700 | grey/400 |
  | text/inverse | white | ink |
  | text/disabled 🆕 | grey/500 | grey/500 |
  | text/on-error 🆕 | white | ink |
  | icon/primary · icon/inverse | ink · white | grey/50 · ink |
  | border/divider | grey/200 | grey/750 |
  | border/strong | ink | grey/50 |
  | border/input 🆕 | grey/500 | grey/500 |
  | focus/ring 🆕 | ink | grey/50 |
  | feedback/error 🆕 | red/600 | red/300 |

- **Contrast (WCAG AA) passes in both modes.** Lowest readable pair: text/tertiary on surface/peach, dark = 5.18:1. border/input ≥ 3.48:1 (needs 3:1).
- **Focus/Ring** effect colours are now bound to bg/page + focus/ring, so they follow the theme.
- **72 variables** have usage descriptions.
- **Style → Variant** renamed on Button and Icon button. **Button Disabled** added (15 variants: 3 × Default/Hover/Pressed/Focus/Disabled).
- **Snaps (for Kieran to eyeball):** Text link gap 6→8 and hover 10→12 (keeps the 4px arrow nudge) · Logo gap 10→8, padding 10→8 (Default) and 6→4 (Small), so the mark sits evenly in the pill · Logo mark radius 6→radius/md (8) · Experiment tile tag-row gap 6→8 · Pull quote rule radius 2→radius/full (looks identical on a 4px bar).
- **Text styles:** Label/Tag applied to Tag; new **Label/Overline** (Poppins Medium 13, +2%, uppercase) applied to Section header, Next project and Case study hero meta labels.
- **Bindings:** ~180 gaps, paddings and radii linked to tokens. Re-audit: 0 unbound spacing/radius, 0 hex colours, 0 unstyled text on all pages. **Accepted exceptions:** the Logo "K" mark (artwork) and Hero intro's intentionally mixed text.
- **Breakpoints** from the grid frames: Tablet ≥ 768px, Desktop ≥ 1280px.

### 11 Nov 2026: Stop 1 approved → tokens, theme, icons
- Stop 1 table approved as shown; `muted` → `surface/disabled` (Claude's recommendation).
- `tokens/figma-variables.json` exported from Figma. `tokens/build-tokens.mjs` (no dependencies) generates `src/styles/tokens.css` (plain CSS: light, dark, system, Mobile/Tablet/Desktop) and `src/styles/tailwind-theme.css` (Tailwind's defaults switched off; only our tokens exist; numbers are pixels; `tablet:`/`desktop:` breakpoints).
- `src/styles/theme.css`: approved shadcn mapping, `dark:` variant, focus ring, reduced motion, duration utilities.
- `src/icons/Icon.tsx`: the 14 Figma icons as one `<Icon name="…" />` component (stroke = currentColor).
- `scripts/check-tokens.mjs`: fails on hex/rgb colours, arbitrary `-[…]` values and inline px.
- **Verified in a headless browser** (`docs/verification/tokens-light-dark.png`): all 20 colour tokens match Figma in light and dark (40 checks); system-dark, forced `.light` and forced `.dark` all resolve correctly; responsive values correct at 375 / 800 / 1300px; all 14 icons draw.
- **To verify once packages install:** Tailwind accepts the `@custom-variant dark { … @slot }` block form and `--spacing: initial` (switches off numeric spacing).

### 11 Nov 2026: Packages installed → Button (Stop 2)
- Installed (pinned): React 19.3, Vite 8.3, Tailwind 4.3, Storybook 10.6 (+ docs, themes, a11y), TypeScript **6.0** (7.0 is the new native compiler; Storybook and type generation don't support it yet), Code Connect CLI 2.1, cva, clsx, tailwind-merge, Radix Slot, Fontsource Poppins (Latin set only: CSS went from 689 kB to 119 kB).
- **Tailwind checks passed:** the `dark:` variant follows class + system; `tablet:`/`desktop:` at 768/1280; off-scale `p-3`, `gap-6` and `sm:` are not generated; Tailwind's default colours are gone.
- **Button** (`src/components/button`) built on shadcn's Button pattern (cva + Radix Slot), restyled to tokens. Props: `variant`, `children`, `icon`, `disabled`, `asChild`. Stories: Playground, each variant, Disabled, AsLink, AllVariants.
- **Matches Figma** (`docs/verification/button-figma-vs-code.png`): 160×44 on Mobile/Tablet like Figma (46 on Desktop in both, because Label/Button grows to 15/22). Colours, hover lift and 4px icon nudge, 90% pressed and disabled match in light and dark. Fixes found by comparing: icon is 18px inside buttons (`icon-sm`, line weight kept at 1.75); Secondary outline restored (`cn()` was dropping `border-control`).
- **Code Connect:** CLI v2 no longer accepts React `figma.connect()` files, so `Button.figma.ts` and `Icon.figma.ts` are written as v2 **templates**. `npm run figma:parse` passes. Button's snippet embeds the swapped icon's own snippet, e.g. `<Button icon={<Icon name="arrow-right" />}>Get in touch</Button>`.
- **Storybook** builds; telemetry is off. Verified in a browser: the Light/Dark toolbar switches `<html class>`, and Poppins loads.
- **Figma issue found:** the Focus/Ring effect doesn't render in Figma. Spread shadows don't draw on these frames, and turning on Clip content cut off the pill ends, so that was reverted. Code shows the ring correctly. Options are in the Stop 2 message.
- The `node_modules` folder was installed by Claude's Linux workspace. If you ever run `npm` directly in Terminal on your Mac, run `npm install` first so the Mac versions of the build tools are fetched.

### 11 Nov 2026: Stop 2 approved → focus ring in Figma, Core basics
- Stop 2 approved, including option 1: Button's three Focus variants now have a real **"Focus ring"** layer (absolute, 2px `focus/ring` stroke, 2px gap, `radius/full`) instead of the effect that Figma doesn't draw. The Focus/Ring effect style is kept and described as reference only.
- **Built:** Text link, Tag, Icon button, Avatar, Divider, Logo, each with stories, a Code Connect template, and a CLAUDE.md row. Comparison: `docs/verification/core-figma-vs-code.png`, Mobile mode, light and dark. All sizes match Figma within 1px of text rendering.
- New named sizes in `theme.css`: `icon-xs` 16, `icon-md` 20, `size-touch` 44, `size-mark` 28, `size-mark-sm` 22, `size-avatar-lg` 220, plus `animate-pop` (Tag bounce).
- **Small deliberate differences from Figma:**
  - **Tag Selected:** Figma's is 2px shorter because it drops its outline. Code keeps the outline in the fill colour so chips don't jump. *Figma fix (optional):* add a `bg/inverse` 1px stroke to Tag/Selected.
  - **Avatar:** code shows initials when there's no photo. In Figma, switching the Initials layer on in an instance didn't render it, so the fallback can't be previewed there.
  - **Hover springs** (snappy, bouncy) are approximated in CSS with `ease-out` and the duration tokens.

### 11 Nov 2026: Navigation
- **Built:** Nav link, Header, Mobile menu, Footer, with stories (viewport presets), Code Connect templates and CLAUDE.md rows. Added `@radix-ui/react-dialog` 1.3.1 for the accessible menu: focus moves to Close, Esc closes, focus returns to the toggle.
- **Comparison** at 360 / 768 / 1280 plus the open menu, light and dark: `docs/verification/nav-figma-vs-code-*.png`, `mobile-menu-figma-vs-code.png`. Header is 80px at every width and Footer is 211px on Desktop, both exactly as in Figma.
- **Responsive:** Figma's `Breakpoint` variants are automatic. Header switches to small Logo + toggle below 768; nav gap is 24 on Tablet, 32 on Desktop. Footer goes side by side from 768 (Figma has no Tablet footer, so Tablet uses the Desktop layout).
- **Deliberate differences:** Nav link reserves its bold width, so hovering doesn't shift neighbours (Figma grows 4px). The menu's spring/gentle stagger is approximated with a 40ms CSS delay and `ease-out`.
- **Privacy:** Header, Mobile menu and Footer require `email` (and `linkedInHref`) as props. Your real address is never written into the library; stories use `hello@example.com`.
- New: `size-dot` (6px), `animate-menu-in`, `animate-rise`. The token check now allows Tailwind state selectors such as `data-[state=open]:` while still blocking made-up values.

### 11 Nov 2026: Home sections
- **Built:** Hero intro, Section header, Project card, About block, with stories, Code Connect templates and CLAUDE.md rows. Comparison: `docs/verification/home-figma-vs-code-desktop.png` (+ `home-code-mobile.png`). Hero is exactly 1216×332 on Desktop and 688×424 on Tablet, like Figma; the statement wraps identically.
- **Project card:** the whole card is clickable through its link, but only the link is read out, so it stays accessible. Hover lifts 6px, tilts −0.5°, adds the shadow and zooms the image 3%. In a grid, use `gap-gutter` (32 on Desktop) so cards are Figma's 592px wide.
- **Hero portrait:** the Avatar is 96 / 160 / 220 by breakpoint. Mobile puts the portrait on top; Tablet and up put it on the right.
- **Figma fix to consider:** the Project card image's 12px top corners aren't a radius token. Code uses a named `radius-media`. Option: add `radius/media = 12` in Figma and bind it.
- **Bug found and fixed:** `cn()` didn't know the named sizes clashed with each other, so the Hero portrait came out 220px on Mobile. Named sizes are now registered (this is in the CLAUDE.md rules).

### 11 Nov 2026: Case study components
- **Built:** Case study hero, Text block, Image block, Pull quote, Stat, Process step, Process steps, Key stats, Outcome summary, Next project, with stories (shared sample content from Figma in `case-study-hero/demo.ts`, offline placeholder images), Code Connect templates and CLAUDE.md rows.
- **Comparison** (`docs/verification/case-study-figma-vs-code.png`, Desktop, light and dark): every component measures the same as Figma at 1280. Inset captions are centred like Figma (found by comparing).
- **Automatic responsive layouts:** Process steps (2 columns → 1) and Key stats (row → stack) replace Figma's `Layout` variants. Outcome summary's Item 1/2/3 became `items`.
- **Accessibility:** meta facts are a description list; process steps are an ordered list (screen readers hear "Step 01: Discover"); quotes use `figure`/`blockquote`; Next project is one link with a decorative arrow (no link-inside-a-link).
- **Not built yet (motion):** "reveal on scroll" (images fade and rise 24px; stats count up) needs a small scroll-trigger helper. Proposed as a follow-up; until then, content simply appears.
- New: shared `Tint` type, `max-w-title` (900), `aspect-cover`/`wide`/`inset`/`pair`.

### 11 Nov 2026: Playground → all 28 components built
- **Built:** Experiment tile, Filter tabs, Embed block. Comparison: `docs/verification/playground-figma-vs-code.png`. Tiles are 384×477 (Figma 478); the embed is 800 wide. Tested in a browser: Play loads the embed, and filter chips report `aria-pressed`.
- **Embed block** loads the third-party player only after Play is pressed (speed and privacy).
- **Experiment tile glyph** is 24px: the Figma instance frame is 48px, but the drawing inside stays 24.
- **Bug found and fixed:** after the tints moved to `src/lib/tint.ts`, Tailwind wasn't scanning `src/lib`, so the mint and peach backgrounds were missing (Case study and Project card included). `@source "../lib"` was added, and `npm run check` now fails if any tint class is missing from the built CSS.
- **iCloud issue:** your Documents folder is synced by iCloud, which created " 2" conflict copies of build folders and one git file while builds ran. Source files weren't affected. I deleted most of them; one (`.git/index 2`) remains and is ignored by git. **Recommendation:** move the project out of iCloud (e.g. `~/Developer/ka-design-system`) before regular use.
- **Design question (open):** in dark mode, Embed block's player uses `bg/inverse`, so it turns light grey. A video frame is usually dark in both themes. Options: keep it (as Figma), or add a token such as `color/media/backdrop` (ink in both modes).
- `package.json` now has a `prepare` script, so `npm install github:<user>/ka-design-system` builds `dist/` automatically.

### 11 Nov 2026: Moved out of iCloud
- The project now lives at `~/Portfolio/KA Design` (not synced by iCloud). All 8 commits, 28 components and `node_modules` moved intact. The last leftover copy (`.git/index 2`) was removed. A full check passes, and no new duplicate copies appeared after a build.
- Connect **this** folder in future chats (the old `Documents/KA Design` is now empty of the project).
