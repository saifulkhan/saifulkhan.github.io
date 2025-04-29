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

  return (
    <>
      <Head>
        <title>Publications | Saiful Khan</title>
      </Head>
      <Box sx={{ mt: 4, maxWidth: 900, mx: 'auto', p: 1 }}>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 4 }}>
          <Typography variant="h5" gutterBottom>
            Selected Publications
            <Typography variant="body2" color="text.secondary">
              Under construction...
            </Typography>
          </Typography>
          <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />
          <Stack spacing={0.5} divider={<Divider flexItem />}>
            {filteredList.map((pub: Publication, idx: number) => (
              <Box key={idx}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mb: 0.2 }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500, fontSize: 16 }}
                  >
                    {pub.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 13, minWidth: 40, textAlign: 'right' }}
                  >
                    {pub.year}
                  </Typography>
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 13, ml: 0.5, mb: 0.1 }}
                >
                  {pub.authors.split(/(,\s*)/).map((part, i) =>
                    part.includes('S Khan') ? (
                      <span key={i} style={{ textDecoration: 'underline' }}>
                        S Khan
                      </span>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ ml: 0.5, mt: 0.3, mb: 0.5 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 13 }}
                  >
                    {pub.venue && pub.venue.name}
                  </Typography>
                  <Box>
                    {pub.links && (
                      <LinkIcons
                        links={pub.links}
                        iconSize={16}
                        spacing={0.5}
                        inline={true}
                      />
                    )}
                  </Box>
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
