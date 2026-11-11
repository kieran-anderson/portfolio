/* Visual check page: renders real components in every state, light and dark, for screenshot comparison with Figma.
   Hover / Pressed / Focus columns are forced by the screenshot script (browser dev tools), not faked with classes. */
import { createRoot } from "react-dom/client";
import "./visual.css";
import { Button, Icon } from "../../src";

const states = ["Default", "Hover", "Pressed", "Focus", "Disabled"] as const;
function Matrix({ theme }: { theme: "light" | "dark" }) {
  return (
    <section className={`${theme} bg-bg-page p-24`} data-theme-pane={theme}>
      <div className="flex flex-col gap-16">
        {(["primary", "secondary", "ghost"] as const).map((v) => (
          <div key={v} className="flex items-center gap-24">
            {states.map((s) => (
              <Button key={s} variant={v} disabled={s === "Disabled"} data-force={s.toLowerCase()} icon={<Icon name="arrow-right" />}>
                Get in touch
              </Button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
createRoot(document.getElementById("root")!).render(
  <div className="inline-flex flex-col">
    <Matrix theme="light" />
    <Matrix theme="dark" />
  </div>,
);
