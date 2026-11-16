import { useEffect } from 'react';

// Thin wrapper around the Google Analytics (gtag.js) snippet loaded in _document.tsx (production builds only).
// Event parameters only appear in GA reports once registered under Admin → Custom definitions.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventParams = Record<string, string | undefined>;

// GA4 caps parameter values at 100 characters
const MAX_PARAM_LENGTH = 100;

// Section and item (publication, software, project) an element sits in, so events say what was engaged with
const contextOf = (el: Element): EventParams => ({
  section: el.closest('section[id]')?.id,
  item: el.closest('[data-analytics-item]')?.getAttribute('data-analytics-item') ?? undefined,
});

export function trackEvent(name: string, params: EventParams = {}, source?: Element) {
  if (typeof window === 'undefined' || !window.gtag) return;
  const all = source ? { ...contextOf(source), ...params } : params;
  const cleaned = Object.fromEntries(
    Object.entries(all)
      .filter(([, value]) => value)
      .map(([key, value]) => [key, value!.slice(0, MAX_PARAM_LENGTH)]),
  );
  window.gtag('event', name, cleaned);
}

// Records every link visitors open (papers, code, project sites, social profiles), except in-page navigation
export function useLinkClickTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link || (link.origin === window.location.origin && link.pathname === '/')) return;
      const label = link.getAttribute('aria-label') || link.title || link.textContent?.trim();
      trackEvent('link_click', { link_label: label, link_url: link.href }, link);
    };
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);
}

// Records each section once per visit, after it has held the middle of the screen for a second
// (so sections merely scrolled past on the way elsewhere don't count)
export function useSectionViewTracking() {
  useEffect(() => {
    const timers = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          window.clearTimeout(timers.get(target));
          if (!isIntersecting) return;
          timers.set(
            target,
            window.setTimeout(() => {
              trackEvent('section_view', { section: target.id });
              observer.unobserve(target);
            }, 1000),
          );
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}
