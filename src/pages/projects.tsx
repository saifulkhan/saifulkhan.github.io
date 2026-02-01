import React from 'react';
import Head from 'next/head';
import { Box, Typography, Stack, Paper, Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import TagFilter from '../components/TagFilter';
import projectsList from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = React.useState<string | null>(null);

  // format funding with currency icons
  const formatFundingItem = (funding: string) => {
    const hasCurrency = /[£$€¥]/.test(funding);
    if (hasCurrency) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
          <SellTwoToneIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <span>{funding}</span>
        </Box>
      );
    }
    return funding;
  };

  // categorize projects into grants and other projects
  const grants = projectsList.filter(
    (proj) => proj.funding && proj.funding.length > 1,
    // &&
    // proj.funding.some(f => f.includes('£') || f.includes('$') ||
    // ['EPSRC', 'UKRI', 'UKAEA', 'STFC', 'Innovate UK'].includes(f))
  );

  const projects = projectsList.filter((proj) => !grants.includes(proj));

  const allTags = projectsList.flatMap((p) => p.tags || []);
  const tagCounts = allTags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const filteredGrants = filter ? grants.filter((proj) => proj.tags && proj.tags.includes(filter)) : grants;
  const filteredProjects = filter ? projects.filter((proj) => proj.tags && proj.tags.includes(filter)) : projects;

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
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontFamily: 'Lato, sans-serif',
              mb: 3,
              fontWeight: 600,
            }}
          >
            Grants & Projects
          </Typography>

          {/* Tag filter with tag counts */}
          <TagFilter tags={allTags} filter={filter} setFilter={setFilter} tagCounts={tagCounts} />

          {/* Grants Section */}
          {filteredGrants.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: 600, fontFamily: 'Lato, sans-serif', color: 'grey.500' }}
              >
                Grants
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={3}>
                {filteredGrants.map((proj, idx) => (
                  <Box key={`grant-${idx}`}>
                    {/* Project Title and Status */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 'bold',
                          fontSize: 16,
                          lineHeight: 1.3,
                          color: 'text.primary',
                        }}
                      >
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
                      sx={{
                        fontFamily: 'Lato, sans-serif',
                        fontWeight: 'normal',
                        fontSize: 14,
                        lineHeight: 1.3,
                        color: 'text.secondary',
                      }}
                    >
                      {proj.description}
                    </Typography>

                    {/* Project Metadata - Icons and Text */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        mt: 1.5,
                        alignItems: 'center',
                      }}
                    >
                      {/* Roles */}
                      {proj.role && proj.role.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <EngineeringTwoToneIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'Lato, sans-serif',
                              fontWeight: 'normal',
                              fontSize: 13,
                              lineHeight: 1.3,
                              color: 'text.secondary',
                            }}
                          >
                            {proj.role.filter((r) => r && r.trim()).join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Organization */}
                      {proj.organisation && proj.organisation.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <BusinessTwoToneIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'Lato, sans-serif',
                              fontWeight: 'normal',
                              fontSize: 13,
                              lineHeight: 1.3,
                              color: 'text.secondary',
                            }}
                          >
                            {proj.organisation.join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Funding */}
                      {proj.funding && proj.funding.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccountBalanceTwoToneIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            component="div"
                            sx={{
                              fontFamily: 'Lato, sans-serif',
                              fontWeight: 'normal',
                              fontSize: 13,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              flexWrap: 'wrap',
                              color: 'text.secondary',
                            }}
                          >
                            {proj.funding.map((fund, i) => (
                              <React.Fragment key={i}>{formatFundingItem(fund)}</React.Fragment>
                            ))}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}

          {/* Divider between Grants and Projects */}
          {filteredGrants.length > 0 && filteredProjects.length > 0 && (
            <Box sx={{ my: 4, display: 'flex', alignItems: 'center' }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Box sx={{ px: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 12 }}>
                  •••
                </Typography>
              </Box>
              <Divider sx={{ flexGrow: 1 }} />
            </Box>
          )}

          {/* Projects Section */}
          {filteredProjects.length > 0 && (
            <Box>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: 600, fontFamily: 'Lato, sans-serif', color: 'grey.500' }}
              >
                Projects
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={3}>
                {filteredProjects.map((proj, idx) => (
                  <Box key={`project-${idx}`}>
                    {/* Project Title and Status */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 0.5,
                        gap: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 'bold',
                          fontSize: 16,
                          lineHeight: 1.3,
                          color: 'text.primary',
                        }}
                      >
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
                      sx={{
                        fontFamily: 'Lato, sans-serif',
                        fontWeight: 'normal',
                        fontSize: 14,
                        lineHeight: 1.3,
                        color: 'text.secondary',
                      }}
                    >
                      {proj.description}
                    </Typography>

                    {/* Project Metadata - Icons and Text */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                        mt: 1.5,
                        alignItems: 'center',
                      }}
                    >
                      {/* Roles */}
                      {proj.role && proj.role.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <EngineeringTwoToneIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'Lato, sans-serif',
                              fontWeight: 'normal',
                              fontSize: 13,
                              lineHeight: 1.3,
                              color: 'text.secondary',
                            }}
                          >
                            {proj.role.filter((r) => r && r.trim()).join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Organization */}
                      {proj.organisation && proj.organisation.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <BusinessTwoToneIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontFamily: 'Lato, sans-serif',
                              fontWeight: 'normal',
                              fontSize: 13,
                              lineHeight: 1.3,
                              color: 'text.secondary',
                            }}
                          >
                            {proj.organisation.join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Funding */}
                      {proj.funding && proj.funding.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccountBalanceTwoToneIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            component="div"
                            sx={{
                              fontFamily: 'Lato, sans-serif',
                              fontWeight: 'normal',
                              fontSize: 13,
                              lineHeight: 1.3,
                              color: 'text.secondary',
                            }}
                          >
                            {proj.funding.map((fund, i) => (
                              <React.Fragment key={i}>{formatFundingItem(fund)}</React.Fragment>
                            ))}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default Projects;
