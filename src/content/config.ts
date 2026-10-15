import { defineCollection, z } from 'astro:content';

// Skeleton collections. astro-strategy drafts the real shape per project,
// astro-content finalizes it here. Delete collections a project doesn't need.

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    company: z.string().optional(),
    quote: z.string(),
    avatar: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    result: z.string().optional(),
    publishDate: z.date(),
  }),
});

// Google reviews shown in the home Reviews carousel. Copy real reviews
// verbatim from the client's Google Business Profile, never invent them.
// Entries marked `placeholder: true` are layout stand-ins to delete at launch.
const reviews = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    rating: z.number().int().min(1).max(5),
    text: z.string(),
    avatar: z.string().optional(),
    location: z.string().optional(),
    order: z.number().default(99),
    placeholder: z.boolean().default(false),
  }),
});

// Service pages: one JSON file per service, filename = URL slug, rendered at
// /<pillar>/<slug>/ by src/pages/[pillar]/[service].astro. Every page follows
// the same section order (astro-seo-architecture per-page template); only the
// copy changes. Never state prices; point to the free quote instead.
const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  type: 'data',
  schema: z.object({
    pillar: z.enum(['residential-relocation', 'commercial-relocation', 'event-logistics', 'specialty-services']),
    order: z.number(),
    /** Keyword map — not rendered, kept with the page so copy edits stay on target. */
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()),
    title: z.string(),
    description: z.string().max(165),
    kicker: z.string(),
    h1: z.string(),
    intro: z.string(),
    /** Short name used in headings, breadcrumbs, and schema ("Local Relocation"). */
    name: z.string(),
    serviceType: z.string(),
    icon: z.enum(['home', 'route', 'box', 'shelves', 'estate', 'office', 'building', 'event', 'truck', 'handoff']),
    overview: z.object({ heading: z.string(), body: z.array(z.string()) }),
    included: z.array(z.string()).min(4),
    whoFor: z.object({ heading: z.string(), intro: z.string(), items: z.array(z.string()).min(4) }),
    approach: z.object({
      heading: z.string(),
      body: z.array(z.string()),
      points: z.array(z.object({ title: z.string(), text: z.string() })).length(3),
    }),
    faqs: z.array(faq).min(4),
    /** Slugs of closely related services in other pillars (cross-links). */
    related: z.array(z.string()).default([]),
  }),
});

// Pillar hub pages (/<pillar>/): introduce the group and link every child service.
const pillars = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    kicker: z.string(),
    h1: z.string(),
    intro: z.string(),
    overview: z.object({ heading: z.string(), body: z.array(z.string()) }),
    servicesHeading: z.string(),
    servicesIntro: z.string(),
    faqs: z.array(faq).min(4),
  }),
});

// Town pages (/service-areas/<slug>/): filename must match a slug in
// site.serviceAreas. ~60% of each page is the shared template; the fields
// below are the ~40% that must be genuinely about that town (neighborhoods,
// housing, access, routes). Don't ship a town until these are real.
const areas = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().max(165),
    kicker: z.string(),
    h1: z.string(),
    intro: z.string(),
    /** Short card blurb for the /service-areas/ hub. */
    summary: z.string(),
    why: z.object({ heading: z.string(), body: z.array(z.string()) }),
    neighborhoods: z.array(z.string()).min(3),
    local: z.object({
      heading: z.string(),
      body: z.array(z.string()),
      points: z.array(z.object({ title: z.string(), text: z.string() })).length(3),
    }),
    /** Service slugs to feature (3-6), ordered by local demand. */
    services: z.array(z.string()).min(3).max(6),
    /** Neighboring town slugs. Keep reciprocal: neighbors link back. */
    nearby: z.array(z.string()).min(2).max(8),
    /** Parent area page (e.g. a county) that this town links up to. */
    parent: z.string().optional(),
    /** Neighborhood-by-neighborhood guide (primary markets only). */
    guide: z
      .object({
        heading: z.string(),
        intro: z.string(),
        items: z.array(z.object({ name: z.string(), text: z.string() })).min(3),
      })
      .optional(),
    faqs: z.array(faq).min(5),
  }),
});

// Service-in-town pages (/service-areas/<area>/<service>/). Primary markets
// only, and only where the town genuinely changes how the job is done.
// Every field here must be specific to the town, not the main service copy
// with the name swapped.
const areaServices = defineCollection({
  type: 'data',
  schema: z.object({
    area: z.string(),
    service: z.string(),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()),
    title: z.string(),
    description: z.string().max(165),
    kicker: z.string(),
    h1: z.string(),
    intro: z.string(),
    overview: z.object({ heading: z.string(), body: z.array(z.string()) }),
    included: z.array(z.string()).min(4),
    local: z.object({
      heading: z.string(),
      body: z.array(z.string()),
      points: z.array(z.object({ title: z.string(), text: z.string() })).length(3),
    }),
    faqs: z.array(faq).min(5),
  }),
});

export const collections = { blog, testimonials, caseStudies, reviews, services, pillars, areas, areaServices };
