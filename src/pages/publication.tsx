import React, { useState } from 'react';
import Seo from '../components/Seo';
import { Box, Container, Typography, Stack } from '@mui/material';
import { publicationsList } from '../data/publications';
import type { Publication } from '../data/publications';
import LinkIcons from '../components/LinkIcons';
import TagFilter from '../components/TagFilter';
import PageHeader from '../components/PageHeader';

const Publications = () => {
  const [filter, setFilter] = useState<string | null>(null);
  // Get all tags for TagFilter
  const allTags = publicationsList.flatMap((p) => p.tags || []);
  const filteredList = filter ? publicationsList.filter((pub) => pub.tags.includes(filter)) : publicationsList;

  // Group publications by year
  const groupedByYear = filteredList.reduce(
    (acc, pub) => {
      const year = pub.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(pub);
      return acc;
    },
    {} as Record<number, Publication[]>,
  );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // Helper function to format ordinal numbers with superscript
  const formatOrdinal = (text: string) => {
    return text.replace(/(\d+)(st|nd|rd|th)/gi, (_match, number, suffix) => {
      return `${number}<sup>${suffix}</sup>`;
    });
  };

  // Helper function to safely get and sort links
  const getSortedLinks = (links: NonNullable<Publication['links']>) => {
    return [...links].sort((a, b) => a.type.localeCompare(b.type));
  };

  return (
    <>
      <Seo
        title="Publications | Saiful Khan"
        description="Peer-reviewed publications by Saiful Khan in visualization, machine learning, and data systems."
        path="/publication"
      />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <PageHeader
          eyebrow="Research"
          title="Selected Publications"
          subtitle="Peer-reviewed research in visualization, machine learning, and data systems."
        />

        <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />

        <Stack spacing={3}>
          {sortedYears.map((year) => (
            <Box
              key={year}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '88px 1fr' },
                columnGap: 3,
                rowGap: 1,
              }}
            >
              {/* Year label */}
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 700,
                  lineHeight: 1.5,
                  borderBottom: { xs: 1, sm: 0 },
                  borderColor: { xs: 'divider', sm: 'transparent' },
                  pb: { xs: 0.5, sm: 0 },
                }}
              >
                {year}
              </Typography>

              {/* Publications for this year */}
              <Stack spacing={2}>
                {groupedByYear[year].map((pub: Publication, idx: number) => (
                  <Box key={idx}>
                    <Typography variant="subtitle1" sx={{ fontSize: 15, fontWeight: 700, lineHeight: 1.45, mb: 0.25 }}>
                      {pub.title}
                    </Typography>

                    {/* Authors */}
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.25 }}>
                      {pub.authors.split(/(,\s*)/).map((part, i) =>
                        part.includes('S Khan') ? (
                          <Box key={i} component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                            S Khan
                          </Box>
                        ) : (
                          <span key={i}>{part}</span>
                        ),
                      )}
                    </Typography>

                    {/* Venue and Links */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        justifyContent: 'space-between',
                        gap: { xs: 0.5, sm: 2 },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontStyle: 'italic', color: 'text.secondary' }}
                        dangerouslySetInnerHTML={{
                          __html: pub.venue ? formatOrdinal(pub.venue.name) : '',
                        }}
                      />
                      {pub.links && pub.links.length > 0 && (
                        <Box sx={{ flexShrink: 0 }}>
                          <LinkIcons
                            links={getSortedLinks(pub.links as NonNullable<typeof pub.links>)}
                            iconSize={14}
                            spacing={0.8}
                            inline
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Publications;
