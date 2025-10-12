import React from 'react';
import Head from 'next/head';
import { Box, Typography, Avatar, Paper, Divider, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { eventsList } from '../data/eventsList';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Saiful Khan</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: { xs: 2, sm: 4, md: 6 },
          p: { xs: 1, sm: 2, md: 3 },
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                  fontWeight: 'bold',
                  color: 'text.primary',
                  mb: 0.5,
                }}
              >
                Saiful Khan
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                  color: 'text.secondary',
                  mb: 0.5,
                }}
              >
                B.E., M.S., D.Phil.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                  color: 'text.secondary',
                  mb: 2,
                }}
              >
                Senior Computer Scientist
              </Typography>

              <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                      color: 'text.primary',
                    }}
                  >
                    saiful.etc (at) gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary', mt: 0.2 }} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                        color: 'text.primary',
                      }}
                    >
                      Rutherford Appleton Laboratory
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                        color: 'text.primary',
                      }}
                    >
                      Science and Technology Facilities Council (STFC), UK
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <IconButton
                  component="a"
                  href="https://scholar.google.com/citations?hl=en&user=lZLfsJwAAAAJ&view_op=list_works&sortby=pubdate"
                  target="_blank"
                  rel="noopener"
                  aria-label="Google Scholar"
                  size="small"
                  sx={{ padding: 0.5 }}
                >
                  <SchoolIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://github.com/saifulkhan"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  size="small"
                  sx={{ padding: 0.5 }}
                >
                  <GitHubIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/khansaiful/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  size="small"
                  sx={{ padding: 0.5 }}
                >
                  <LinkedInIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>

              <Box sx={{ my: 2 }}>
                <hr style={{ border: 0, borderTop: '1px solid #e0e0e0', margin: 0 }} />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  textAlign: 'justify',
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                  fontWeight: 'normal',
                  lineHeight: 1.3,
                  color: 'text.primary',
                }}
              >
                <strong>Research Interests:</strong> Data-driven software systems and infrastructure development, with
                particular interests in visualization for large-scale infrastructures, large language models and AI
                agents, and service computing.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexShrink: 0,
                mt: { xs: 2, md: 0 },
                mb: { xs: 3, md: 0 },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <Avatar
                src="/profile.jpeg"
                alt="Profile"
                sx={{
                  width: { xs: 150, sm: 180, md: 200 },
                  height: { xs: 150, sm: 180, md: 200 },
                  boxShadow: 3,
                  border: '3px solid #fff',
                }}
              />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 2,
              }}
            >
              Events
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                '& li': {
                  display: 'flex',
                  gap: 2,
                  mb: 1.5,
                  fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                },
              }}
            >
              {eventsList.map((event, index) => (
                <li key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          width: 170,
                          textAlign: 'left',
                          mb: 0,
                          fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                          lineHeight: 1.5,
                        }}
                      >
                        {event.date}
                      </Typography>
                      <Link
                        href={event.url}
                        underline="hover"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                          width: 270,
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {event.title}
                      </Link>
                    </Box>
                  </Box>
                </li>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
