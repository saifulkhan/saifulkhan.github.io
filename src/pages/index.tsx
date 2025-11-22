import React from 'react';
import Head from 'next/head';
import { Box, Typography, Avatar, Paper, Divider, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
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
                  boxShadow: 3,
                  border: '3px solid #fff',
                }}
              />
            </Box>
            <Box sx={{ flex: 1, order: { xs: 0, md: 0 } }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'Lato, sans-serif',
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
                    sx={{ padding: 0.5 }}
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
              </Box>

              <Box sx={{ my: 2 }}>
                <hr style={{ border: 0, borderTop: '1px solid #e0e0e0', margin: 0 }} />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  textAlign: 'justify',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 'normal',
                  lineHeight: 1.3,
                  color: 'text.primary',
                  fontSize: 14,
                }}
              >
                I am a Senior Computer Scientist at Rutherford Appleton Laboratory, Science and Technology Facilities
                Council, UK Research and Innovation. I lead large-scale research programs that bridge AI/ML research
                with real-world systems.
                <br />
                Currently, I am Co-I on a £0.5M EPSRC-funded project on visualization for machine learning and £1.5M
                UKRI-funded project on correlative imaging both involving cross-functional teams. I led the development
                of the FAIR data management infrastructure for the UK Atomic Energy Authority's tokamak fusion
                program—work that earned me a UKRI In Year Award. I also led development of streaming and visualization
                infrastructure for the Square Kilometre Array (SKA), world's largest radio telescope.
                <br />
                My industrial experience includes building production-grade systems that solve complex, real-world
                problems. At the International Seismological Centre, I developed the Visual Bulletin Analytics System
                (VBAS), replacing their 30-year-old manual seismological analysis process with modern software
                infrastructure. During the COVID-19 pandemic, I developed the Rapid Assistance in Modelling the Pandemic
                Visualisation infrastructure for visualizing pandemic and epidemiological modeling data, receiving a
                RAMP Early Career Investigator Award from the Royal Society, UK for this work. At Data & Analytics
                Facility for National Infrastructure (DAFNI) project, I serve as user liaison, directly supporting
                academic researchers to maximize it's impact.
                <br />I earned my DPhil (PhD) in Engineering Science from the University of Oxford under Prof. Min Chen
                and Prof. René Bañares-Alcántara. My career began with software engineering roles at Oracle and ABB,
                where I developed enterprise database systems and industrial automation applications as part of large
                engineering teams. My work focuses on data-driven software systems combining machine learning, data
                engineering, and visualization—creating robust, team-built solutions that transform how organizations
                analyze data and make decisions.
              </Typography>
              <Box
                component="ul"
                sx={{
                  margin: 0,
                  paddingLeft: 2.25,
                  mt: 0.25,
                  fontFamily: 'Lato, sans-serif',
                  fontSize: 14,
                  color: 'text.primary',
                  lineHeight: 1.3,
                }}
              >
                <li>
                  Data-driven software systems -- Building scalable infrastructure that integrates machine learning,
                  data engineering, and visualization for scientific and industrial applications
                </li>
                <li>
                  Large-scale data visualization -- Developing visualization systems for high-volume and complex
                  scientific datasets
                </li>
                <li>
                  AI/ML for scientific computing -- Applying machine learning, physics-informed neural networks, and
                  large language models to solve domain-specific challenges, and infrastructure{' '}
                </li>
                <li>Application of large language models (LLM) and agentic AI</li>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: 'Lato, sans-serif',
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
                  mb: 0.5,
                  fontFamily: 'Lato, sans-serif',
                },
              }}
            >
              {eventsList.map((event, index) => (
                <li key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          width: 170,
                          textAlign: 'left',
                          mb: 0,
                          fontFamily: 'Lato, sans-serif',
                          // lineHeight: 1.5,
                          fontSize: 14,
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
                          fontFamily: 'Lato, sans-serif',
                          width: 270,
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontSize: 14,
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
