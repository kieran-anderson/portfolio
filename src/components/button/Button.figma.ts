// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-62
// source=src/components/button/Button.tsx
// component=Button
/**
 * Code Connect template: Figma "Button" (node 6:62) → <Button>. Shown in Dev Mode and to agents via the Figma MCP.
 * Hover / Pressed / Focus are CSS states in code, so only State=Disabled becomes a prop.
 */
import figma from "figma";

const instance = figma.selectedInstance;
const { renderProp } = figma.helpers.react;

const variant = instance.getEnum("Variant", { Primary: "primary", Secondary: "secondary", Ghost: "ghost" });
const disabled = instance.getEnum("State", { Default: false, Hover: false, Pressed: false, Focus: false, Disabled: true });
const label = instance.getString("Label");
const showIcon = instance.getBoolean("Show icon");
const icon = showIcon ? instance.getInstanceSwap("Icon")?.executeTemplate().example : undefined;

export default {
  example: figma.code`<Button${variant === "primary" ? "" : renderProp("variant", variant)}${disabled ? renderProp("disabled", true) : ""}${icon ? renderProp("icon", icon) : ""}>${label}</Button>`,
  imports: ['import { Button } from "ka-design-system"'],
  id: "ka-button",
  metadata: { nestable: true },
};
