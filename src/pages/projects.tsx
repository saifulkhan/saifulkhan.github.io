import React from 'react';
import Head from 'next/head';
import { Box, Typography, Chip, Stack, Paper } from '@mui/material';
import projectsList from '../data/projectsList';

const Projects = () => (
  <>
    <Head>
      <title>Projects | Saiful Khan</title>
    </Head>

    <Box sx={{ mt: 4, maxWidth: 900, mx: 'auto', p: 1 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Stack spacing={0.5}>
          {projectsList.map((proj, idx) => (
            <React.Fragment key={idx}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mb: 0.1 }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {proj.title}
                </Typography>
                <Chip
                  label={proj.status}
                  color={proj.status === 'Ongoing' ? 'primary' : 'default'}
                  size="small"
                  sx={{ height: 20, fontSize: 12 }}
                />
              </Stack>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 12, mt: 0.1 }}
              >
                {proj.description}
              </Typography>
              <span style={{ fontSize: 12, marginBottom: 2 }}>
                {proj.role
                  .filter((r) => r && r.trim())
                  .map((role, i, arr) => (
                    <span
                      key={role + i}
                      style={{
                        color: role === 'Co-I' ? 'tomato' : 'grey',
                        background: 'white',
                        borderRadius: 4,
                        padding: '1px 6px',
                        marginRight: i < arr.length - 1 ? 4 : 0,
                        fontWeight: 'bold',
                      }}
                    >
                      {role}
                      {i < arr.length - 1 ? ',' : ''}
                    </span>
                  ))}
              </span>
              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{ mt: 0.1 }}
              >
                {proj.organisation.map((org, i) => (
                  <Chip
                    key={org + i}
                    label={org}
                    size="small"
                    sx={{
                      backgroundColor: '#f3e5f5',
                      color: '#4527a0',
                      fontWeight: 500,
                      fontSize: 11,
                      height: 20,
                      mr: 0.5,
                    }}
                  />
                ))}
                {proj.funding &&
                  proj.funding.length > 0 &&
                  proj.funding.map((fund, i) => (
                    <Chip
                      key={fund + i}
                      label={fund}
                      size="small"
                      sx={{
                        backgroundColor: '#e0f7fa',
                        color: '#00695c',
                        fontWeight: 500,
                        fontSize: 10,
                        height: 18,
                        mr: 0.3,
                        p: 0,
                      }}
                    />
                  ))}
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

export default Projects;
