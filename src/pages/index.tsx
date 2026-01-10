import React from 'react';
import Head from 'next/head';
import { Box, Typography, Avatar, Paper, Divider, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
// import { eventsList } from '../data/eventsList';

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
          elevation={3}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 2, md: 3 },
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'center' },
                flexShrink: 0,
                order: { xs: -1, md: 1 },
                mb: { xs: 2, md: 0 },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <Avatar
                src="/profile.jpeg"
                alt="Profile"
                sx={{
                  width: { xs: 128, sm: 130, md: 148 },
                  height: { xs: 128, sm: 130, md: 148 },
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  border: '4px solid #fff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.16)',
                  },
                }}
              />
            </Box>
            <Box sx={{ flex: 1, order: { xs: 0, md: 0 } }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 0.5,
                  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Dr. Saiful Khan
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'text.secondary',
                  mb: 0.5,
                }}
              >
                B.E., M.S., D.Phil. (Oxford)
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontFamily: 'Lato, sans-serif',
                  color: 'text.secondary',
                  // mb: 2,
                }}
              >
                Senior Computer Scientist
              </Typography>

              <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Lato, sans-serif',
                        color: 'text.secondary',
                      }}
                    >
                      Scientific Computing, STFC
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    component="a"
                    href="mailto:saiful.etc@gmail.com"
                    aria-label="Email"
                    size="small"
                    title="saiful.etc@gmail.com"
                    sx={{
                      padding: 0.5,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#1976d2',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://scholar.google.com/citations?hl=en&user=lZLfsJwAAAAJ&view_op=list_works&sortby=pubdate"
                    target="_blank"
                    rel="noopener"
                    aria-label="Google Scholar"
                    size="small"
                    sx={{
                      padding: 0.5,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#1976d2',
                        transform: 'translateY(-2px)',
                      },
                    }}
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
                    sx={{
                      padding: 0.5,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#1976d2',
                        transform: 'translateY(-2px)',
                      },
                    }}
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
                    sx={{
                      padding: 0.5,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#1976d2',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ my: 2 }}>
                <hr style={{ border: 0, borderTop: '1px solid #e0e0e0', margin: 0 }} />
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 'normal',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  Dr. Saiful Khan is a Senior Scientist at the Rutherford Appleton Laboratory, part of the Science and
                  Technology Facilities Council (STFC) under UK Research and Innovation (UKRI). He specializes in
                  developing data-driven systems and intelligent software to accelerate scientific research, leading the
                  design and development of full-stack systems that address complex, mission-critical challenges across
                  diverse fields. He earned a DPhil (PhD) from the University of Oxford, where he conducted postdoctoral
                  research under Professor Min Chen. His work spans key infrastructure projects including FAIR-MAST
                  (nuclear fusion data), RAMPVIS (pandemic data visualization), SKA (radio astronomy), VBAS
                  (seismological data visualization), and DAFNI (national data and analytics infrastructure). His
                  expertise encompasses software architecture, machine learning, data visualization, data management,
                  and research software engineering. With industry experience at Oracle, ABB, and other firms, Dr. Khan
                  bridges advanced research with real-world impact, delivering solutions for science, pandemic response,
                  security intelligence, seismology, and radio astronomy applications.
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1.5,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 700,
                    fontSize: 15,
                    borderLeft: '3px solid',
                    borderColor: '#1565c0',
                    paddingLeft: 1.5,
                    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Research Interests:
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    mb: 2,
                    pl: 2.5,
                    fontFamily: 'Lato, sans-serif',
                    '& li': {
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: 'text.primary',
                      mb: 0.5,
                    },
                  }}
                >
                  <li>Data-driven software infrastructure</li>
                  <li>Data visualization</li>
                  <li>Applied Machine Learning</li>
                  <li>Large language models (LLM) & Agent-based Systems</li>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider
            sx={{
              my: 3,
              borderColor: 'primary.light',
              opacity: 0.3,
            }}
          />
        </Paper>
      </Box>
    </>
  );
}
