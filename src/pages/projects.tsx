import React from 'react';
import Head from 'next/head';
import { Box, Typography, Chip, Stack, Paper } from '@mui/material';
import TagFilter from '../components/TagFilter';
import projectsList from '../data/projectsList';

const Projects = () => {
  const [filter, setFilter] = React.useState<string | null>(null);
  // Get all tags for TagFilter
  const allTags = projectsList.flatMap((p) => p.tags || []);
  const filteredList = filter
    ? projectsList.filter((proj) => proj.tags && proj.tags.includes(filter))
    : projectsList;

  return (
    <>
      <Head>
        <title>Projects | Saiful Khan</title>
      </Head>

      <Box sx={{ mt: 4, maxWidth: 900, mx: 'auto', p: 1 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Projects
            <Typography variant="body2" color="text.secondary">
              Under construction...
            </Typography>
          </Typography>

          <TagFilter tags={allTags} filter={filter} setFilter={setFilter} />
          <Stack spacing={0.5}>
            {filteredList.map((proj, idx) => (
              <React.Fragment key={idx}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 0.1 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ mr: proj.status === 'Ongoing' ? 1 : 0 }}
                    >
                      {proj.title}
                    </Typography>
                    {proj.status === 'Ongoing' && (
                      <Chip
                        label={proj.status}
                        size="small"
                        sx={{
                          height: 20,
                          fontSize: 12,
                          backgroundColor: '#f5f5f5',
                          color: '#00695c',
                          fontWeight: 500,
                          ml: 0.5,
                        }}
                      />
                    )}
                  </Box>
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: 13, mt: 0.1 }}
                >
                  {proj.description}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 0.1 }}
                >
                  <span style={{ fontSize: 13, marginBottom: 0, flex: 1 }}>
                    {proj.role
                      .filter((r) => r && r.trim())
                      .map((role, i, arr) => (
                        <span
                          key={role + i}
                          style={{
                            color: role === 'Co-I' ? '#333' : '#333',
                            background: 'white',
                            borderRadius: 4,
                            padding: '0',
                            marginRight: i < arr.length - 1 ? 4 : 0,
                            fontWeight: 'normal',
                          }}
                        >
                          {role}
                          {i < arr.length - 1 ? ',' : ''}
                        </span>
                      ))}
                  </span>
                  <Box>
                    {proj.organisation.map((org, i) => (
                      <Chip
                        key={org + i}
                        label={org}
                        size="small"
                        sx={{
                          backgroundColor: '#f5f5f5',
                          color: '#757575',
                          fontWeight: 500,
                          fontSize: 11,
                          height: 20,
                          mr: 0.5,
                        }}
                      />
                    ))}
                    {proj.funding &&
                      proj.funding.length > 0 &&
                      proj.funding.map((fund, i) => {
                        const hasCurrency = /£|\$|€/.test(fund);
                        return (
                          <Chip
                            key={fund + i}
                            label={fund}
                            size="small"
                            sx={{
                              backgroundColor: hasCurrency
                                ? '#e8f5e9'
                                : '#f5f5f5',
                              color: hasCurrency ? '#388e3c' : '#757575',
                              fontWeight: 500,
                              fontSize: 10,
                              height: 18,
                              mr: 0.3,
                              p: 0,
                            }}
                          />
                        );
                      })}
                  </Box>
                </Stack>
                {idx < projectsList.length - 1 && (
                  <Box sx={{ my: 0.5 }}>
                    <hr
                      style={{
                        border: 'none',
                        borderTop: '1px solid #e0e0e0',
                        margin: 0,
                      }}
                    />
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Projects;
