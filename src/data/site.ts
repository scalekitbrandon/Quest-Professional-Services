export const site = {
  name: 'Quest Professional Services',
  legalName: 'Quest Professional Services',
  phone: '(240) 886-9044',
  phoneHref: 'tel:+12408869044',
  email: 'info@questprofessionalllc.com', // TODO confirm TLD with client
  address: {
    street: '938 E Swan Creek Rd #224',
    city: 'Fort Washington',
    region: 'MD',
    postalCode: '20744',
  },
  // Federal motor carrier credentials (supplied by client, Oct 2026).
  // FMCSA requires interstate carriers to show their USDOT number in ads,
  // including the website. Shown in the footer, hero trust card, quote form,
  // Credentials section, and LocalBusiness schema.
  credentials: {
    usdot: '3698493',
    mc: '1293117',
    /** Public FMCSA SAFER record, so visitors can verify the numbers. */
    verifyUrl: 'https://safer.fmcsa.dot.gov/query.asp?searchtype=ANY&query_type=queryCarrierSnapshot&query_param=USDOT&query_string=3698493',
  },
  // Hero rating line (also the Reviews page kicker). Wording supplied by
  // Brandon, Oct 2026. Never publish invented numbers.
  rating: {
    text: 'Rated 5 Stars on Google',
  },
  // Top-bar icons render only for entries with an href. Client URLs pending.
  social: [
    { label: 'Facebook', href: '' },
    { label: 'Instagram', href: '' },
    { label: 'X', href: '' },
  ],
  // Four service categories (Oct 2026 restructure). Each service is its own
  // page at /<pillar>/<service>/ and targets Washington, DC as its primary
  // city. `short` is the header menu label. LEGAL: never use moving/movers
  // language anywhere — relocation only. Junk removal is discontinued.
  servicePillars: [
    {
      slug: 'residential-relocation',
      name: 'Residential Relocation',
      short: 'Residential',
      services: [
        { slug: 'local-relocation', name: 'Local Relocation' },
        { slug: 'long-distance-relocation', name: 'Long-Distance & Interstate Relocation' },
        { slug: 'packing-unpacking', name: 'Packing & Unpacking' },
      ],
    },
    {
      slug: 'commercial-relocation',
      name: 'Commercial Relocation',
      short: 'Commercial',
      services: [
        { slug: 'office-relocation', name: 'Office Relocation' },
        { slug: 'business-relocation', name: 'Corporate & Business Relocation' },
        { slug: 'commercial-packing', name: 'Commercial Packing & Unpacking' },
      ],
    },
    {
      slug: 'event-logistics',
      name: 'Event Logistics',
      short: 'Event Logistics',
      services: [
        { slug: 'event-transportation', name: 'Event Transportation' },
        { slug: 'event-setup', name: 'Event Setup & Support' },
        { slug: 'pickup-delivery', name: 'Pickup & Delivery' },
      ],
    },
    {
      slug: 'specialty-services',
      name: 'Specialty Services',
      short: 'Specialty',
      services: [
        { slug: 'freight-transport', name: 'Freight Transport' },
        { slug: 'estate-cleanouts', name: 'Estate Cleanouts & Liquidation' },
        { slug: 'storage-organization', name: 'Storage Organization' },
      ],
    },
  ],
  // Service areas in priority order: primary markets (DC, Alexandria), then
  // HQ + county, then the Maryland towns. Drives nav, footer, and Service Areas.
  // Maryland town list is still a draft pending the client's confirmation.
  serviceAreas: [
    { slug: 'washington-dc', name: 'Washington, DC' },
    { slug: 'alexandria-va', name: 'Alexandria, VA' },
    { slug: 'fort-washington-md', name: 'Fort Washington, MD' },
    { slug: 'prince-georges-county-md', name: "Prince George's County, MD" },
    { slug: 'national-harbor-md', name: 'National Harbor, MD' },
    { slug: 'accokeek-md', name: 'Accokeek, MD' },
    { slug: 'upper-marlboro-md', name: 'Upper Marlboro, MD' },
    { slug: 'bowie-md', name: 'Bowie, MD' },
    { slug: 'waldorf-md', name: 'Waldorf, MD' },
  ],
  // Link for "See all reviews on Google". Section hides the link while empty.
  googleReviewsUrl: 'https://share.google/bvBQAcf3ILz2sn0ki',
};
