import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Paper, Typography, Stack, Divider } from '@mui/material';
import { publicationsList } from '../data/publicationsList';
import type { Publication } from '../data/publicationsList';
import LinkIcons from '../components/LinkIcons';
import TagFilter from '../components/TagFilter';

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

  // Helper function to safely get and sort links
  const getSortedLinks = (links: NonNullable<Publication['links']>) => {
    return [...links].sort((a, b) => a.type.localeCompare(b.type));
  };

  return (
    <>
      <Head>
        <title>Publications | Saiful Khan</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
          maxWidth: 900,
          mx: 'auto',
          p: { xs: 1, sm: 2 },
          pb: 4,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
              mb: 3,
              fontWeight: 600,
            }}
          >
            Selected Publications
          </Typography>
          <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />
          <Stack spacing={4}>
            {sortedYears.map((year) => (
              <Box key={year}>
                {/* Year Header */}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {year}
                </Typography>

                {/* Publications for this year */}
                <Stack spacing={3}>
                  {groupedByYear[year].map((pub: Publication, idx: number) => (
                    <Box key={idx}>
                      <Box sx={{ mb: 0.5 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-start', sm: 'flex-start' },
                            mb: 1.0,
                            gap: { xs: 0.5, sm: 2 },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                              fontWeight: 'bold',
                              fontSize: { xs: 14 },
                              lineHeight: 1.3,
                              color: 'text.primary',
                            }}
                          >
                            {pub.title}
                          </Typography>
                        </Box>

                        {/* Authors */}
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                            fontSize: { xs: 14 },
                            mb: 0.0,
                            color: 'text.secondary',
                          }}
                        >
                          {pub.authors.split(/(,\s*)/).map((part, i) =>
                            part.includes('S Khan') ? (
                              <span
                                key={i}
                                style={{
                                  color: 'inherit',
                                  textDecoration: 'underline',
                                }}
                              >
                                S Khan
                              </span>
                            ) : (
                              <span key={i} style={{ color: 'inherit' }}>
                                {part}
                              </span>
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
                            // gap: 1,
                            // mt: 1,
                          }}
                        >
                          {/* Venue */}
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                              fontSize: { xs: 14 },
                              color: 'text.primary',
                              fontWeight: 500,
                            }}
                          >
                            {pub.venue && pub.venue.name}
                          </Typography>

                          {/* Links */}
                          {pub.links && pub.links.length > 0 && (
                            <Box>
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

                      {/* Divider */}
                      {idx < groupedByYear[year].length - 1 && (
                        <Box sx={{ mt: 1, mb: 0.0 }}>
                          <Divider />
                        </Box>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Publications;
