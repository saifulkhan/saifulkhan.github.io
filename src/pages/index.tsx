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
                  color: (theme) => (theme.palette.mode === 'dark' ? '#ffffff' : '#424242'),
                  mb: 0.5,
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

              <Box
                sx={{
                  '& a': {
                    color: 'inherit',
                    textDecoration: 'none',
                    borderBottom: '1px dotted rgba(0, 0, 0, 0.3)',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                    '&:hover': {
                      color: '#1976d2',
                      borderBottom: '1px solid #1976d2',
                    },
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 'normal',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  Dr Khan is a <strong>Senior Scientist</strong> at the{' '}
                  <a
                    href="https://www.ukri.org/who-we-are/stfc/facilities/rutherford-appleton-laboratory/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Science and Technology Facilities Council (STFC), UK Research and Innovation (UKRI)
                  </a>
                  . He holds a DPhil from the <strong>University of Oxford</strong>, where he also conducted
                  postdoctoral research with{' '}
                  <a href="https://sites.google.com/view/mchen" target="_blank" rel="noopener noreferrer">
                    Professor Min Chen
                  </a>
                  .
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 'normal',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  He specialises in <strong>data-driven software infrastructure</strong> across diverse domains—nuclear
                  fusion, pandemic response, radio astronomy, seismology, and security intelligence.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 'normal',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  During the UK's COVID-19 response, he designed{' '}
                  <a href="https://sites.google.com/view/rampvis/home" target="_blank" rel="noopener noreferrer">
                    RAMPVIS
                  </a>
                  , a pandemic visualization infrastructure that earned him the Royal Society's{' '}
                  <a
                    href="https://eng.ox.ac.uk/news/royal-society-award-recognises-researcher-s-pandemic-modelling-effort"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RAMP Early Career Investigator Award
                  </a>
                  . He built a real-time data-streaming and signal-display system for the{' '}
                  <a href="https://www.skatelescope.org/" target="_blank" rel="noopener noreferrer">
                    Square Kilometre Array
                  </a>
                  , the world's largest radio telescope, and led the design of{' '}
                  <a href="https://mastapp.site/" target="_blank" rel="noopener noreferrer">
                    FAIR-MAST
                  </a>
                  —a first-of-its-kind open data platform for UKAEA's nuclear fusion diagnostics that enables machine
                  learning and visual analytics on tokamak data. He also led development of{' '}
                  <a href="https://isc.ac.uk/" target="_blank" rel="noopener noreferrer">
                    VBAS
                  </a>{' '}
                  for seismological data visualization and{' '}
                  <a href="" target="_blank" rel="noopener noreferrer">
                    VIS4ML
                  </a>{' '}
                  visualisation for machine learning. As a user liaison for{' '}
                  <a href="https://www.dafni.ac.uk/" target="_blank" rel="noopener noreferrer">
                    DAFNI (UK National Data Infrastructure)
                  </a>
                  , he led data integration with CEDA (Centre for Environmental Data Analysis) to streamline researcher
                  access to national environmental modeling resources.
                </Typography>
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
                  With prior industry experience at{' '}
                  <a href="https://www.oracle.com/" target="_blank" rel="noopener noreferrer">
                    <strong>Oracle</strong>
                  </a>{' '}
                  and{' '}
                  <a href="https://global.abb/" target="_blank" rel="noopener noreferrer">
                    <strong>ABB</strong>
                  </a>
                  , he bridges research with scalable, real-world impact. His interests span{' '}
                  <strong>Software Infrastructure</strong>, <strong>Visual Analytics</strong>, and{' '}
                  <strong>Applied Machine Learning</strong>, with publications in{' '}
                  <a
                    href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=4629386"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IEEE TSC
                  </a>
                  ,{' '}
                  <a
                    href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=2945"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IEEE TVCG
                  </a>
                  ,{' '}
                  <a
                    href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=27"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IEEE TPS
                  </a>
                  ,{' '}
                  <a href="https://iopscience.iop.org/journal/2632-2153" target="_blank" rel="noopener noreferrer">
                    MLST
                  </a>
                  ,{' '}
                  <a href="https://royalsocietypublishing.org/journal/rsta" target="_blank" rel="noopener noreferrer">
                    Phil. Trans. A
                  </a>
                  , and{' '}
                  <a href="https://ieeevis.org/" target="_blank" rel="noopener noreferrer">
                    IEEE VIS
                  </a>
                  .
                </Typography>

                {/* <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 1.5,
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 700,
                    fontSize: 15,
                    borderLeft: '3px solid',
                    borderColor: (theme) => (theme.palette.mode === 'dark' ? '#ffffff' : '#424242'),
                    paddingLeft: 1.5,
                    color: (theme) => (theme.palette.mode === 'dark' ? '#ffffff' : '#424242'),
                  }}
                >
                  Research Interests:
                </Typography> */}

                {/* <Box
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
                </Box> */}
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
