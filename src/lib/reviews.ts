// Shared helpers for review cards (home carousel + /reviews grid).
import { getCollection } from 'astro:content';

export async function getReviews() {
  return (await getCollection('reviews')).map((r) => r.data).sort((a, b) => a.order - b.order);
}

export function timeAgo(date: Date, now = Date.now()) {
  const days = Math.max(0, Math.floor((now - date.getTime()) / 86_400_000));
  if (days < 1) return 'today';
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
  if (days < 30) { const w = Math.floor(days / 7); return `${w} week${w === 1 ? '' : 's'} ago`; }
  if (days < 365) { const m = Math.floor(days / 30); return `${m} month${m === 1 ? '' : 's'} ago`; }
  const y = Math.floor(days / 365);
  return `${y} year${y === 1 ? '' : 's'} ago`;
}

export const avatarColors = ['var(--maroon)', 'var(--gold-dark)', 'var(--charcoal)', 'var(--maroon-light)'];
export const initial = (name: string) => name.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase() || '?';

/** Escapes review text and turns the **bold** markers some reviewers type into <strong>. */
export function formatReview(text: string) {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}
