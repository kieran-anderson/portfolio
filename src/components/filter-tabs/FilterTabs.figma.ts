// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=11-99
// source=src/components/filter-tabs/FilterTabs.tsx
// component=FilterTabs
/** Code Connect template: Figma "Filter tabs" (11:99) → <FilterTabs>. */
import figma from "figma";

export default {
  example: figma.code`<FilterTabs
  options={["All", "AI tools", "Prototypes", "Motion", "Code"]}
  value={filter}
  onValueChange={setFilter}
/>`,
  imports: ['import { FilterTabs } from "ka-design-system"'],
  id: "ka-filter-tabs",
  metadata: { nestable: true },
};
