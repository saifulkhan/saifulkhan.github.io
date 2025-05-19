import React from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  Stack,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
  styled,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import TagFilter from '../components/TagFilter';
import projectsList from '../data/projectsList';

const Projects = () => {
  const [filter, setFilter] = React.useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Get all tags for TagFilter
  const allTags = projectsList.flatMap((p) => p.tags || []);

  // Count each tag occurrence
  const tagCounts = allTags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const filteredList = filter
    ? projectsList.filter((proj) => proj.tags && proj.tags.includes(filter))
    : projectsList;

  return (
    <>
      <Head>
        <title>Projects | Saiful Khan</title>
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
            Projects
          </Typography>

          {/* Tag filter with tag counts */}
          <TagFilter
            tags={allTags}
            filter={filter}
            setFilter={setFilter}
            tagCounts={tagCounts}
          />

          <Stack spacing={3}>
            {filteredList.map((proj, idx) => (
              <Box key={idx}>
                {/* Project Title and Status */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 1,
                    gap: 1,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                    {proj.title}
                  </Typography>
                  {proj.status === 'Ongoing' && (
                    <CircleIcon
                      sx={{
                        fontSize: 10,
                        color: '#81c784',
                        filter: 'drop-shadow(0 0 4px rgba(129, 199, 132, 0.5))',
                      }}
                      aria-label="Ongoing"
                    />
                  )}
                </Box>

                {/* Project Description */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  {proj.description}
                </Typography>

                {/* Project Metadata - Horizontal Layout */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1.5,
                    mt: 1,
                    alignItems: 'center',
                  }}
                >
                  {/* Roles */}
                  {proj.role && proj.role.length > 0 && (
                    <Box
                      component="span"
                      sx={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          mr: 0.5,
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                        }}
                      >
                        Role{proj.role.length > 1 ? 's' : ''}:
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          mr: 0.5,
                          fontSize: '0.875rem',
                        }}
                      >
                        {proj.role.filter((r) => r && r.trim()).join(', ')}
                      </Box>
                    </Box>
                  )}

                  {/* Organization */}
                  {proj.organisation && proj.organisation.length > 0 && (
                    <Box
                      component="span"
                      sx={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          mr: 0.5,
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                        }}
                      >
                        Org{proj.organisation.length > 1 ? 's' : ''}:
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          mr: 0.5,
                          fontSize: '0.875rem',
                        }}
                      >
                        {proj.organisation.join(', ')}
                      </Box>
                    </Box>
                  )}

                  {/* Funding */}
                  {proj.funding && proj.funding.length > 0 && (
                    <Box
                      component="span"
                      sx={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          mr: 0.5,
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                        }}
                      >
                        Funding:
                      </Box>
                      <Box component="span" sx={{ color: 'text.secondary' }}>
                        {proj.funding.join(', ')}
                      </Box>
                    </Box>
                  )}
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

export default Projects;
