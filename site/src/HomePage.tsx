/**
 * Home — built only from ka-design-system components, laid out like Figma's Home template
 * (Desktop 12:2, Tablet 12:161, Mobile 12:283). Spacing uses the responsive layout tokens, so the
 * page changes at 768 and 1280 on its own.
 */
import { AboutBlock, Button, Footer, Header, HeroIntro, ProjectCard, SectionHeader } from "ka-design-system";
import { about, contactCta, hero, navLinks, projects, site } from "./content";

export function HomePage() {
  return (
    <>
      {/* Keyboard users can jump past the header. Hidden until it gets focus. */}
      <Button asChild className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-16 focus-visible:top-16 focus-visible:z-50">
        <a href="#main">Skip to content</a>
      </Button>

      <Header links={navLinks} activeHref="/" email={site.email} cta={contactCta} />

      {/* Main: side margin, then section-sm on top and section spacing between and below (56/96 Desktop, 40/64 Tablet, 32/48 Mobile). */}
      <main id="main" tabIndex={-1} className="bg-bg-page px-margin pb-section pt-section-sm outline-none">
        <div className="mx-auto flex max-w-content flex-col gap-section">
          <HeroIntro
            statement={
              <>
                I'm Kieran, <strong>Senior product designer</strong> at Barclays. I thrive creating user-centric, impactful
                designs that meet user needs and achieve business goals.
              </>
            }
            previously={
              <>
                Previously I designed for <strong>Tesco</strong>, <strong>Booking.com</strong> and <strong>NatWest</strong>.
              </>
            }
            disciplines={hero.disciplines}
            portraitSrc={hero.portraitSrc}
            portraitAlt={hero.portraitAlt}
          />

          <section id="work" className="flex flex-col gap-32">
            <SectionHeader overline="Selected work" title="Case studies" />
            {/* One column on Mobile, two from Tablet up. */}
            <ul className="grid gap-card-gap tablet:grid-cols-2">
              {projects.map((p) => (
                <li key={p.project} className="flex">
                  <ProjectCard
                    project={p.project}
                    client={p.client}
                    description={p.description}
                    tint={p.tint}
                    status={p.status}
                    href={p.href}
                    image={
                      // Screenshots are pinned to the top so the site's header (logo) is never cropped off.
                      p.imageSrc ? (
                        <img
                          src={p.imageSrc}
                          alt={p.imageAlt ?? ""}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover object-top transition-transform duration-base ease-out group-hover:scale-103"
                        />
                      ) : undefined
                    }
                    className="w-full"
                  />
                </li>
              ))}
            </ul>
          </section>

          <AboutBlock cvHref={site.cvHref}>
            {about.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </AboutBlock>
        </div>
      </main>

      <Footer id="contact" email={site.email} linkedInHref={site.linkedIn} />
    </>
  );
}
