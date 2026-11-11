/* Visual check page: renders real components in every state, light and dark, for screenshot comparison with Figma.
   Elements marked data-force="hover|pressed|focus" get that state forced by the screenshot script (browser dev tools). */
import { createRoot } from "react-dom/client";
import "./visual.css";
import { Avatar, Button, Divider, Footer, Header, Icon, IconButton, Logo, MobileMenu, NavLink, Tag, TextLink } from "../../src";
import { demoEmail, demoLinkedIn, demoLinks } from "../../src/components/header/demo";

const noop = () => {};
function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex w-max items-center gap-24">{children}</div>;
}
function Pane({ theme, page }: { theme: "light" | "dark"; page: string }) {
  return (
    <section className={`${theme} flex flex-col gap-16 bg-bg-page p-24`} data-theme-pane={theme}>
      {page === "button" &&
        (["primary", "secondary", "ghost"] as const).map((v) => (
          <Row key={v}>
            {(["default", "hover", "pressed", "focus", "disabled"] as const).map((s) => (
              <Button key={s} variant={v} disabled={s === "disabled"} data-force={s} icon={<Icon name="arrow-right" />}>Get in touch</Button>
            ))}
          </Row>
        ))}
      {page === "nav" && (
        <>
          <Row>
            <NavLink href="#">Work</NavLink>
            <NavLink href="#" data-force="hover">Work</NavLink>
            <NavLink href="#" active>Work</NavLink>
          </Row>
          <div className="-mx-24">
            <Header links={demoLinks} activeHref="/work" email={demoEmail} />
          </div>
          <div className="-mx-24 -mb-24">
            <Footer email={demoEmail} linkedInHref={demoLinkedIn} copyright="© 2026 Kieran Anderson" />
          </div>
        </>
      )}
      {page === "menu" && <MobileMenu links={demoLinks} activeHref="/work" email={demoEmail} open />}
      {page === "core" && (
        <>
          <Row>
            <TextLink href="#">Read case study</TextLink>
            <TextLink href="#" data-force="hover">Read case study</TextLink>
            <TextLink comingSoon>Coming soon!</TextLink>
            <TextLink href="#" size="small">Read case study</TextLink>
            <TextLink href="#" size="small" data-force="hover">Read case study</TextLink>
            <TextLink size="small" comingSoon>Coming soon!</TextLink>
          </Row>
          <Row>
            <Tag onClick={noop}>UX research</Tag>
            <Tag onClick={noop} data-force="hover">UX research</Tag>
            <Tag selected onClick={noop}>UX research</Tag>
          </Row>
          <Row>
            <IconButton icon={<Icon name="linkedin" />} aria-label="LinkedIn" />
            <IconButton icon={<Icon name="linkedin" />} aria-label="LinkedIn" data-force="hover" />
            <IconButton icon={<Icon name="linkedin" />} aria-label="LinkedIn" variant="outline" />
            <IconButton icon={<Icon name="linkedin" />} aria-label="LinkedIn" variant="outline" data-force="hover" />
          </Row>
          <Row>
            <Avatar alt="Kieran Anderson" size="small" />
            <Avatar alt="Kieran Anderson" size="medium" />
            <Avatar alt="Kieran Anderson" size="large" />
          </Row>
          <Row>
            <Logo />
            <Logo size="small" />
          </Row>
          <div className="w-[400px]">{/* tokens-ok: fixed demo width matching the Figma Divider */}
            <Divider />
          </div>
        </>
      )}
    </section>
  );
}
const page = new URLSearchParams(location.search).get("page") ?? "button";
createRoot(document.getElementById("root")!).render(
  <div className={page === "nav" ? "flex flex-col" : "inline-flex flex-col"} id="capture">
    <Pane theme="light" page={page} />
    <Pane theme="dark" page={page} />
  </div>,
);
