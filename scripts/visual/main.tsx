/* Visual check page: renders real components in every state, light and dark, for screenshot comparison with Figma.
   Elements marked data-force="hover|pressed|focus" get that state forced by the screenshot script (browser dev tools). */
import { createRoot } from "react-dom/client";
import "./visual.css";
import { AboutBlock, Avatar, Button, Divider, Footer, Header, HeroIntro, Icon, IconButton, Logo, MobileMenu, NavLink, ProjectCard, SectionHeader, Tag, TextLink } from "../../src";
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
      {page === "home" && (
        <div className="mx-auto flex w-full max-w-content flex-col gap-40">
          <SectionHeader overline="Selected work" title="Case studies" action={{ label: "View all", href: "#" }} />
          <HeroIntro
            statement={<>I'm Kieran, <strong>Senior product designer</strong> at Barclays. I thrive creating user-centric, impactful designs that meet user needs and achieve business goals.</>}
            previously={<>Previously I designed for <strong>Tesco</strong>, <strong>Booking.com</strong> and <strong>NatWest</strong>.</>}
            disciplines={["Product design", "UX research", "Design systems", "AI prototyping"]}
            portraitAlt="Kieran Anderson"
          />
          <div className="grid grid-cols-1 gap-24 desktop:grid-cols-2">
            {(["default", "hover"] as const).map((st) => (
              <ProjectCard key={st} data-force={st} project="Help pages" client="– Community Fibre" description="A redesign of a full help centre to increase user satisfaction and lower operating costs." tint="blue" href="#" />
            ))}
            <ProjectCard project="Help pages" client="– Community Fibre" description="A redesign of a full help centre to increase user satisfaction and lower operating costs." tint="peach" status="coming-soon" />
          </div>
          <AboutBlock cvHref="#">
            <p>Currently based in Glasgow, I have been designing digital experiences for over 12 years — for household brands, startups and small agencies, which has taken me to live in three different countries.</p>
            <p>I have a strong interest in AI tooling and vibe coding (which is how I built this portfolio).</p>
            <p>When I’m not designing or tinkering, I’m usually out hiking or running in the Scottish mountains.</p>
          </AboutBlock>
        </div>
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
  <div className={page === "nav" || page === "home" ? "flex flex-col" : "inline-flex flex-col"} id="capture">
    <Pane theme="light" page={page} />
    <Pane theme="dark" page={page} />
  </div>,
);
