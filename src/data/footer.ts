import { site } from './site';

// Licensing line for the footer bottom bar. USDOT / MC numbers appear
// automatically once they're filled in site.credentials.
const { usdot, mc } = site.credentials;
export const footerCredentials = [
  'U.S. DOT & MC Certified',
  usdot && `USDOT #${usdot}`,
  mc && `MC #${mc}`,
].filter(Boolean).join(' · ');
