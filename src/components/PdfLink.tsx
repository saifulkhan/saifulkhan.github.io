import React from 'react';
import { Link as MuiLink } from '@mui/material';
import PdfIcon from './PdfIcon';
import { trackEvent } from '@/lib/analytics';
import brokenLinks from '@/data/broken-links.json';

interface PdfLinkProps {
  url: string; // remote (preferred) location
  fallback: string; // local copy under /public, used when the remote is broken
  label?: string;
}

const REMOTE_TIMEOUT_MS = 4000;

/**
 * Inline PDF icon that opens the remote PDF in a new tab, falling back to the local copy when:
 *  - the build-time check (scripts/check-links.mjs) recorded the remote as broken (e.g. 404), or
 *  - the remote is unreachable from the browser (DNS failure, offline, timeout).
 * Cross-origin 404s cannot be detected in the browser, hence the build-time check.
 */
const PdfLink: React.FC<PdfLinkProps> = ({ url, fallback, label = 'PDF' }) => {
  const knownBroken = (brokenLinks as string[]).includes(url);
  const href = knownBroken ? fallback : url;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent('pdf_open', { pdf_url: href }, event.currentTarget);
    if (knownBroken) return; // plain link to the local copy

    event.preventDefault();
    // open synchronously so popup blockers allow it, then point it at whichever copy works
    const win = window.open('', '_blank');
    if (!win) {
      window.location.href = url;
      return;
    }
    win.opener = null;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REMOTE_TIMEOUT_MS);
    fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store', signal: controller.signal })
      .then(() => win.location.replace(url))
      .catch(() => win.location.replace(fallback))
      .finally(() => clearTimeout(timer));
  };

  return (
    <MuiLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={handleClick}
      // same treatment as the publication link icons: muted and desaturated at rest, full colour on hover
      sx={{
        display: 'inline-flex',
        verticalAlign: 'middle',
        color: 'text.secondary',
        opacity: 0.7,
        filter: 'saturate(0.35)',
        transition: 'opacity 0.15s, filter 0.15s',
        '&:hover, &:focus-visible': { opacity: 1, filter: 'none', color: 'primary.main' },
      }}
    >
      <PdfIcon sx={{ fontSize: 14 }} />
    </MuiLink>
  );
};

export default PdfLink;
