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
  const filteredList = filter
    ? publicationsList.filter((pub) => pub.tags.includes(filter))
    : publicationsList;

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
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Selected Publications
          </Typography>
          <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />
          <Stack spacing={0.5}>
            {filteredList.map((pub: Publication, idx: number) => (
              <Box key={idx}>
                <Box sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column-reverse', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      mb: 0.5,
                      gap: { xs: 0.5, sm: 2 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: 15, sm: 16 },
                        lineHeight: 1.3,
                      }}
                    >
                      {pub.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: 13,
                        minWidth: 40,
                        textAlign: { xs: 'left', sm: 'right' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {pub.year}
                    </Typography>
                  </Box>

                  {/* Authors */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 13,
                      mb: 1,
                      color: 'text.secondary',
                    }}
                  >
                    {pub.authors.split(/(,\s*)/).map((part, i) =>
                      part.includes('S Khan') ? (
                        <span
                          key={i}
                          style={{
                            textDecoration: 'underline',
                            color: '#1976d2',
                            fontWeight: 500,
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
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    {/* Venue */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: 13,
                        color: 'text.secondary',
                        fontStyle: 'normal',
                      }}
                    >
                      {pub.venue && pub.venue.name}
                    </Typography>

                    {/* Links */}
                    {pub.links && pub.links.length > 0 && (
                      <Box>
                        <LinkIcons
                          links={getSortedLinks(
                            pub.links as NonNullable<typeof pub.links>,
                          )}
                          iconSize={16}
                          spacing={0.8}
                          inline
                        />
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Divider */}
                {idx < filteredList.length - 1 && (
                  <Box sx={{ mt: 2, mb: 1 }}>
                    <Divider />
                  </Box>
                )}
              </Box>
            ))}
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Publications;
