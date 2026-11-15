/**
 * Home — built only from ka-design-system components, laid out like Figma's Home template
 * (Desktop 12:2, Tablet 12:161, Mobile 12:283). Spacing uses the responsive layout tokens, so the
 * page changes at 768 and 1280 on its own.
 */
import { AboutBlock, HeroIntro, ProjectCard, SectionHeader } from "ka-design-system";
import { about, hero, projects, site } from "./content";
import { SiteLayout } from "./SiteLayout";

export function HomePage() {
  return (
    <SiteLayout activeHref="/">
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
    </SiteLayout>
  );
}
