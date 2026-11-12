# ka-design-system

Kieran Anderson's design system as React components, built from the [Figma file](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system).

```bash
npm install github:kieran-anderson/portfolio
```
```tsx
import "ka-design-system/styles.css";
import { Button, Icon } from "ka-design-system";

<Button icon={<Icon name="arrow-right" />}>Get in touch</Button>
```

- **Catalogue:** `npm run storybook` → http://localhost:6006
- **For AI agents:** read [CLAUDE.md](./CLAUDE.md) first.
- **Plan and progress:** [PLAN.md](./PLAN.md)

## Portfolio site

The live site lives in [`site/`](./site) and is built only from this system's components (Home is done; About, Case study and Playground pages come next).

- `npm run site:dev` → local preview with live reload
- `npm run site:build` → production files in `site/dist/` (static, host anywhere)
- Words, links and images: `site/src/content.ts`. Your photo goes at `site/public/images/portrait.jpg`, your CV at `site/public/cv.pdf`.
