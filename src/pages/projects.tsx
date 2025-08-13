import React from 'react';
import Head from 'next/head';
import { Box, Typography, Stack, Paper, Divider } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TagFilter from '../components/TagFilter';
import projectsList from '../data/projectsList';

const Projects = () => {
  const [filter, setFilter] = React.useState<string | null>(null);

  // Helper function to format funding with currency icons
  const formatFundingItem = (funding: string) => {
    const hasCurrency = /[£$€¥]/.test(funding);
    if (hasCurrency) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
          <MonetizationOnIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <span>{funding}</span>
        </Box>
      );
    }
    return funding;
  };

  // Categorize projects into grants and other projects
  const grants = projectsList.filter((proj) => 
    proj.funding && proj.funding.length > 1 
  // && 
   // proj.funding.some(f => f.includes('£') || f.includes('$') || 
    // ['EPSRC', 'UKRI', 'UKAEA', 'STFC', 'Innovate UK'].includes(f))
  );
  
  const projects = projectsList.filter((proj) => 
    !grants.includes(proj)
  );

  // Get all tags for TagFilter
  const allTags = projectsList.flatMap((p) => p.tags || []);

  // Count each tag occurrence
  const tagCounts = allTags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const filteredGrants = filter
    ? grants.filter((proj) => proj.tags && proj.tags.includes(filter))
    : grants;
    
  const filteredProjects = filter
    ? projects.filter((proj) => proj.tags && proj.tags.includes(filter))
    : projects;

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
            Grants & Projects
          </Typography>

          {/* Tag filter with tag counts */}
          <TagFilter
            tags={allTags}
            filter={filter}
            setFilter={setFilter}
            tagCounts={tagCounts}
          />

          {/* Grants Section */}
          {filteredGrants.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Grants
              </Typography>
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
                          fontWeight: 500,
                          fontSize: { xs: 15, sm: 16 },
                          lineHeight: 1.3,
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
                        fontSize: 14,
                        mb: 1,
                        color: 'text.primary',
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
                          <PersonIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 13,
                              color: 'text.primary',
                            }}
                          >
                            {proj.role.filter((r) => r && r.trim()).join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Organization */}
                      {proj.organisation && proj.organisation.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <BusinessIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 13,
                              color: 'text.primary',
                            }}
                          >
                            {proj.organisation.join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Funding */}
                      {proj.funding && proj.funding.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccountBalanceIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            component="div"
                            sx={{
                              fontSize: 13,
                              color: 'text.primary',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              flexWrap: 'wrap',
                            }}
                          >
                            {proj.funding.map((fund, i) => (
                              <React.Fragment key={i}>
                                {formatFundingItem(fund)}
                              </React.Fragment>
                            ))}
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {/* Divider */}
                    {idx < filteredGrants.length - 1 && (
                      <Box sx={{ mt: 2, mb: 1 }}>
                        <Divider />
                      </Box>
                    )}
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
              <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
                Projects
              </Typography>
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
                          fontWeight: 500,
                          fontSize: { xs: 15, sm: 16 },
                          lineHeight: 1.3,
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
                        fontSize: 14,
                        mb: 0.5,
                        color: 'text.primary',
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
                          <PersonIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 13,
                              color: 'text.primary',
                            }}
                          >
                            {proj.role.filter((r) => r && r.trim()).join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Organization */}
                      {proj.organisation && proj.organisation.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <BusinessIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: 13,
                              color: 'text.primary',
                            }}
                          >
                            {proj.organisation.join(', ')}
                          </Typography>
                        </Box>
                      )}

                      {/* Funding */}
                      {proj.funding && proj.funding.length > 0 && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccountBalanceIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                          <Typography
                            variant="body2"
                            component="div"
                            sx={{
                              fontSize: 13,
                              color: 'text.primary',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              flexWrap: 'wrap',
                            }}
                          >
                            {proj.funding.map((fund, i) => (
                              <React.Fragment key={i}>
                                {formatFundingItem(fund)}
                              </React.Fragment>
                            ))}
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {/* Divider */}
                    {idx < filteredProjects.length - 1 && (
                      <Box sx={{ mt: 1, mb: 0.0 }}>
                        <Divider />
                      </Box>
                    )}
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
