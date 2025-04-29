import React, { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Paper,
  Typography,
  Chip,
  Stack,
  Link,
  Divider,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { publicationsList } from '../data/publicationsList';
import type { Publication } from '../data/publicationsList';
import ArxivIcon from '../components/ArxivIcon';
import NpmIcon from '../components/NpmIcon';

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
          </Typography>
          <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />
          <Stack spacing={0.5} divider={<Divider flexItem />}>
            {filteredList.map((pub: Publication, idx: number) => (
              <Box key={idx}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 500, fontSize: 16, mb: 0.2 }}
                    >
                      {pub.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: 13, ml: 0.5, mb: 0.1 }}
                    >
                      {/* Underline 'S Khan' in authors */}
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
                    {pub.venue?.type !== undefined && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: 13,
                          ml: 0.5,
                          mb: 0.5,
                        }}
                      ></Typography>
                    )}
                    {/* Chips and icons row */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ ml: 0.5, mt: 0.3, mb: 0.5 }}
                    >
                      {pub.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{ height: 20, fontSize: 12 }}
                        />
                      ))}
                      {pub.links &&
                        pub.links.map((link, lidx) => (
                          <Link
                            key={lidx}
                            href={link.url}
                            target="_blank"
                            rel="noopener"
                            sx={{
                              ml: 0.5,
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {link.type === 'arxiv' ? (
                              <ArxivIcon
                                fontSize="inherit"
                                sx={{
                                  verticalAlign: 'middle',
                                  width: 16,
                                  height: 16,
                                }}
                              />
                            ) : link.type === 'github' ? (
                              <GitHubIcon
                                fontSize="inherit"
                                sx={{
                                  color: '#1976d2',
                                  verticalAlign: 'middle',
                                  width: 16,
                                  height: 16,
                                }}
                              />
                            ) : link.type === 'npm' ? (
                              <NpmIcon
                                fontSize="inherit"
                                sx={{
                                  verticalAlign: 'middle',
                                  width: 16,
                                  height: 16,
                                }}
                              />
                            ) : (
                              <OpenInNewIcon
                                fontSize="inherit"
                                sx={{
                                  verticalAlign: 'middle',
                                  width: 16,
                                  height: 16,
                                }}
                              />
                            )}
                          </Link>
                        ))}
                    </Stack>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: 13,
                      textAlign: 'right',
                      minWidth: 40,
                      mt: 0.3,
                    }}
                  >
                    {pub.year}
                  </Typography>
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
