import React, { useState } from 'react';
import { Box, Container, Typography, Stack, Link as MuiLink, SvgIconProps } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { publicationsList } from '../../data/publications';
import type { Publication, PublicationLinkType } from '../../data/publications';
import TagFilter from '../TagFilter';
import PageHeader from '../PageHeader';
import ArxivIcon from '../ArxivIcon';
import DoiIcon from '../DoiIcon';
import NpmIcon from '../NpmIcon';
import PdfIcon from '../PdfIcon';

// Icon and accessible label per link type; key order is the display order
const LINK_META: Record<PublicationLinkType, { label: string; Icon: React.ElementType<SvgIconProps> }> = {
  doi: { label: 'DOI', Icon: DoiIcon },
  pdf: { label: 'PDF', Icon: PdfIcon },
  arxiv: { label: 'arXiv', Icon: ArxivIcon },
  github: { label: 'Code', Icon: GitHubIcon },
  npm: { label: 'npm', Icon: NpmIcon },
  web: { label: 'Website', Icon: LanguageIcon },
};
const LINK_ORDER = Object.keys(LINK_META) as PublicationLinkType[];

// "JC Roberts" -> "J. C. Roberts"; names without leading initials (e.g. "MAST Team") are left as-is
const formatAuthor = (name: string) =>
  name.replace(/^([A-Z]{1,3}) /, (_match, initials: string) => `${initials.split('').join('. ')}. `);

// Join authors as "A and B" or "A, B, and C"
const formatAuthors = (authors: string) => {
  const names = authors.split(/,\s*/).map(formatAuthor);
  if (names.length <= 2) return names.join(' and ');
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
};

// Superscript ordinal suffixes, e.g. "22nd" -> 22<sup>nd</sup>
const formatOrdinals = (text: string) =>
  text.split(/(\d+(?:st|nd|rd|th)\b)/).map((part, i) => {
    const match = part.match(/^(\d+)(st|nd|rd|th)$/);
    return match ? (
      <React.Fragment key={i}>
        {match[1]}
        <Box component="sup" sx={{ lineHeight: 0 }}>
          {match[2]}
        </Box>
      </React.Fragment>
    ) : (
      part
    );
  });

// Small icon links in a fixed order; repeated types get numbered labels ("Code 1", "Code 2")
const LinkIconRow = ({ links }: { links: NonNullable<Publication['links']> }) => {
  const sorted = [...links].sort((a, b) => LINK_ORDER.indexOf(a.type) - LINK_ORDER.indexOf(b.type));
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'flex-start', sm: 'flex-end' },
        gap: 0.75,
        flexShrink: 0,
        minWidth: { sm: 76 },
        // match one line of body2 text so the icons sit level with the first line
        height: '1.4rem',
      }}
    >
      {sorted.map((link, i) => {
        const { label: baseLabel, Icon } = LINK_META[link.type];
        const sameType = sorted.filter((l) => l.type === link.type);
        const label = sameType.length > 1 ? `${baseLabel} ${sameType.indexOf(link) + 1}` : baseLabel;
        return (
          <MuiLink
            key={`${link.url}-${i}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            // muted and desaturated at rest so the icons don't compete with the citation; full colour on hover
            sx={{
              display: 'inline-flex',
              color: 'text.secondary',
              opacity: 0.7,
              filter: 'saturate(0.35)',
              transition: 'opacity 0.15s, filter 0.15s',
              '&:hover, &:focus-visible': { opacity: 1, filter: 'none', color: 'primary.main' },
            }}
          >
            <Icon sx={{ fontSize: 14 }} />
          </MuiLink>
        );
      })}
    </Box>
  );
};

const Citation = ({ pub, number }: { pub: Publication; number: number }) => (
  <Box component="li" sx={{ display: 'flex', gap: 1 }}>
    <Typography
      variant="body2"
      sx={{ minWidth: 28, textAlign: 'right', color: 'text.secondary', fontVariantNumeric: 'tabular-nums' }}
    >
      {number}.
    </Typography>
    <Box sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 3 } }}>
      <Typography variant="body2" sx={{ flex: 1, color: 'text.secondary' }}>
        {formatAuthors(pub.authors)}.{' '}
        <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
          {pub.title.trim()}
        </Box>
        .{' '}
        {pub.venue?.name && (
          <>
            <i>{formatOrdinals(pub.venue.name)}</i>,{' '}
          </>
        )}
        {pub.details && `${pub.details}, `}
        {pub.year}.{pub.note && ` (${pub.note}.)`}
      </Typography>
      {pub.links && pub.links.length > 0 && <LinkIconRow links={pub.links} />}
    </Box>
  </Box>
);

const PublicationsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);
  // Get all tags for TagFilter
  const allTags = publicationsList.flatMap((p) => p.tags || []);
  const filteredList = filter ? publicationsList.filter((pub) => pub.tags.includes(filter)) : publicationsList;

  // Preprints first, then peer-reviewed work grouped by year (newest first)
  const isPreprint = (pub: Publication) => pub.venue?.type === 'arxiv';
  const groups: { label: string; items: Publication[] }[] = [];
  const preprints = filteredList.filter(isPreprint);
  if (preprints.length > 0) {
    groups.push({ label: 'Preprints', items: preprints });
  }
  const years = Array.from(new Set(filteredList.filter((p) => !isPreprint(p)).map((p) => p.year))).sort(
    (a, b) => b - a,
  );
  years.forEach((year) => {
    groups.push({ label: String(year), items: filteredList.filter((p) => !isPreprint(p) && p.year === year) });
  });
  // Number the visible publications 1..N from top to bottom, continuing across groups
  const numberOf = new Map(groups.flatMap((g) => g.items).map((pub, i) => [pub, i + 1]));

  return (
    <Box
      component="section"
      id="publications"
      sx={{ scrollMarginTop: { xs: 56, md: 64 }, borderTop: 1, borderColor: 'divider' }}
    >
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <PageHeader eyebrow="Research" title="Publications" subtitle={undefined} />

        <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />

        <Stack spacing={3}>
          {groups.map((group) => (
            <Box key={group.label}>
              {/* Group label (year or "Preprints") above the full-width list */}
              <Typography
                variant="subtitle1"
                component="h3"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 700,
                  borderBottom: 1,
                  borderColor: 'divider',
                  pb: 0.5,
                  mb: 1.5,
                }}
              >
                {group.label}
              </Typography>

              <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', m: 0, p: 0 }}>
                {group.items.map((pub) => (
                  <Citation key={pub.title} pub={pub} number={numberOf.get(pub)!} />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default PublicationsSection;
