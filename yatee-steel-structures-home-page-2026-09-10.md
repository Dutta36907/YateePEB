# Yatee Steel Structures — Home Page

Scope for this round: the home page only, plus the global design system, header and footer that later pages will reuse. All other pages come in follow-up rounds.

## Brand and content rules

- Company: Yatee Steel Structures Pvt Ltd (PEB, structural steel, industrial construction).
- Premium industrial corporate look: deep navy, steel greys, large white space, one electric blue accent, no heavy gradients.
- Headings in Manrope, body in Inter. Hero headline large and architectural; generous section spacing.
- Every number, certificate, client name, testimonial and address is written as a clearly marked placeholder until you supply real values. Nothing factual is invented.
- Imagery is generated (industrial buildings, warehouse interiors, steel framing, factory floor) and can be swapped for real photography later.

## Home page sections

1. Hero — full-width industrial building image, headline "Engineering spaces. Building possibility.", supporting line, primary and secondary buttons.
2. Metrics strip — four to five figures that count up when scrolled into view (placeholder values).
3. Who we are — two-column editorial intro with one architectural image and a link onward.
4. Engineered advantages — six benefits as restrained numbered panels with fine line icons.
5. Products — one large featured tile plus smaller tiles for the six product lines, with hover zoom and moving arrow.
6. Services — interactive showcase where selecting a service swaps the image, covering the six capabilities.
7. Industries — full-bleed photographic cards for the six sectors.
8. Manufacturing — dark navy section with factory imagery, capability figures and a subtle blueprint grid.
9. Process — eight-step line that draws in on desktop, vertical timeline on mobile.
10. Selected projects — asymmetric editorial project cards with name, sector, location, area, year.
11. Cinematic showcase band with overlay statement.
12. Quality and certifications — certification cards, placeholder until confirmed.
13. Clients — quiet monochrome logo wall, colour on hover (placeholder marks).
14. Testimonial — single large editorial quote (placeholder).
15. Insights — three latest news cards (placeholder).
16. Closing call to action on navy.
17. Large footer with company blurb, link columns, contact details and social links.

## Navigation

Two-stage header: slim utility bar (certification note left; email, phone, social right) above the main bar with logo, navigation and a Get a Quote button. Mega menus for About, Services, Products and Industries with short descriptions and a feature image. Header turns solid white with a soft border and blur once scrolled. Mobile gets a full-screen drawer with expandable groups and contact actions at the bottom.

Since only the home page is being built now, menu items and buttons point to placeholder pages that render a short "coming next" panel rather than breaking, so nothing in the navigation is a dead link. Those get replaced by the real pages in later rounds.

## Technical notes

- The project runs on TanStack Start with React, TypeScript and Tailwind v4, which is the fixed stack here — Next.js is not available, but everything requested (file-based routing, server rendering, per-page metadata, typed data models, image optimisation) is covered by it.
- Design tokens (navy scale, greys, radii, section spacing) go into `src/styles.css`; fonts loaded via a link tag in the root route.
- Reusable components: Container, SectionHeader, Button, TopBar, Header, MegaMenu, MobileMenu, Hero, StatCounter, ProductCard, ServiceShowcase, IndustryCard, ProjectCard, ClientLogoGrid, CertificateCard, Testimonial, ProcessTimeline, NewsCard, CTASection, Footer.
- Content lives in typed data files (`src/data/*.ts`) with interfaces for services, products, projects, industries, news, certifications, testimonials and clients, so a CMS can be attached later.
- Motion via the `motion` library: fade-up, mask and text reveals, counters, timeline draw, hover zoom; all respecting reduced-motion.
- SEO on the home route: unique title, description, canonical, OpenGraph and Twitter tags, Organization and LocalBusiness structured data, semantic headings, alt text; `robots.txt` reviewed.
- Responsive layouts designed for 1440, 1280, 1024, 768 and 390 widths.
- Forms are not part of this round; enquiry and quote pages arrive with their own phase.
