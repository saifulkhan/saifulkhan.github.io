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
          elevation={3}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 2, md: 3 },
            background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
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
                  Dr. Saiful Khan is a Senior Computer Scientist at the Rutherford Appleton Laboratory, STFC, where he
                  leads research and development of data-driven software infrastructure for large-scale scientific
                  applications. He holds a DPhil (PhD) from the University of Oxford, where he conducted postdoctoral
                  research under Prof. Min Chen. His work spans critical infrastructure including FAIR-MAST (nuclear
                  fusion data), RAMPVIS (pandemic data visualization), SKA (radio astronomy), VBAS (seismological data
                  visualization), DAFNI (national data & analytics infrastructure ), etc. With industry experience at
                  Oracle, ABB, and other organizations, he bridges advanced research with real-world impact.
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
                  <li>Data visualization infrastructure</li>
                  <li>Applied Machine Learning</li>
                  <li>Large language models (LLM) & Agents</li>
                </Box>

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
                  Major Projects and Contributions:
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  <strong>VIS4ML4HD: Visualization for Machine Learning for Human-centered Decision Making — </strong>
                  Current AI/ML practice often focuses on selecting a single “best” model while discarding non-optimal
                  alternatives. This leads to missed opportunities because we lack effective ways to understand models’
                  skill profiles, use them productively, or combine them meaningfully. Visualization can help address
                  this challenge by leveraging the strengths of human visual perception to convey complex, high-volume
                  information more efficiently than statistics or algorithms alone. It reduces cognitive load while
                  preserving rich data context, enabling faster and more reliable reasoning. This project develops a
                  visualization-enabled infrastructure and toolset that manages large pools of ML models and their
                  performance profiles, supports the construction of effective model ensembles, and empowers decision
                  makers to interpret model anomalies and reconcile conflicting predictions. Dr. Khan is a
                  co-investigator and researcher on this{' '}
                  <Link
                    href="https://gtr.ukri.org/projects?ref=EP%2FX029557%2F1"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                  >
                    EPSRC
                  </Link>
                  -funded project, conducted in collaboration with the University of Oxford.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  <strong>Bridging the Gap: Correlative Imaging Across Length Scales — </strong>
                  Understanding protein mechanisms in cancer progression requires integrating data across imaging scales
                  and modalities. This{' '}
                  <Link
                    href="https://gtr.ukri.org/projects?ref=ST%2FY004183%2F1"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                  >
                    UKRI
                  </Link>
                  -funded project combines AI/ML with advanced imaging to analyze patient biobank samples, developing
                  automated workflows to accelerate discovery of mechanisms behind cancer progression and treatment
                  resistance. Dr. Khan is a Co-Investigator of this project in collaboration with the Central Laser
                  Facility (CLF), STFC.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 1.5,
                    textAlign: 'justify',
                    fontFamily: 'Lato, sans-serif',
                    lineHeight: 1.6,
                    color: 'text.primary',
                    fontSize: 14,
                  }}
                >
                  <strong>DAFNI: Data & Analytics Facility for National Infrastructure — </strong>
                  UK infrastructure research increasingly depends on modelling and analysis at unprecedented scale.{' '}
                  <Link
                    href="https://www.dafni.ac.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                  >
                    DAFNI
                  </Link>{' '}
                  is a national computing platform that enables researchers to run advanced simulations across
                  transport, water, energy, and city-scale systems, generating insights that help make infrastructure
                  more efficient, reliable, resilient, and affordable. Dr. Khan serves as a user liaison and leads
                  several initiatives on this project.
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textAlign: 'justify',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontSize: 14,
                    }}
                  >
                    <strong>FAIR-MAST: Nuclear Fusion Data — </strong>
                    Nuclear fusion experiments generate massive experimental datasets that remain inaccessible to modern
                    data science methods. Dr. Khan, in collaboration with UK Atomic Energy Authority, led the
                    development of{' '}
                    <Link
                      href="https://mastapp.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                    >
                      FAIR-MAST
                    </Link>{' '}
                    for the Mega Ampere Spherical Tokamak (MAST), designing infrastructure that makes fusion data adhere
                    to FAIR principles and open-sources it for visual analytics and AI/ML—the first comprehensive data
                    management system of its kind in fusion research.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textAlign: 'justify',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontSize: 14,
                    }}
                  >
                    <strong>RAMP-VIS: Rapid Assistance in Modelling the Pandemic — </strong>
                    During COVID-19, epidemiologists and modelling scientists required rapid, intuitive access to
                    pandemic data and complex modelling outputs to make informed decisions. In response to the Royal
                    Society’s Rapid Assistance in Modelling the Pandemic initiative{' '}
                    <Link
                      href="https://royalsociety.org/news-resources/projects/ramp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                    >
                      (RAMP)
                    </Link>
                    , Dr. Khan—working with the University of Oxford and the Scottish Covid Response Consortium
                    (SCRC)—designed and developed{' '}
                    <Link
                      href="https://sites.google.com/view/rampvis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                    >
                      RAMP-VIS
                    </Link>
                    , a visualization infrastructure that enabled SCRC scientists to efficiently analyse epidemiological
                    data. For his contributions, he received the Royal Society’s RAMP Early Career Investigator Award.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textAlign: 'justify',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontSize: 14,
                    }}
                  >
                    <strong>SKA: Square Kilometre Array — </strong>
                    The world&apos;s largest radio telescope,{' '}
                    <Link
                      href="https://www.skao.int/en"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                    >
                      SKA
                    </Link>
                    , generates hundreds of TB/second of raw data, requiring real-time visualization at unprecedented
                    scale. In his postdoctoral work at University of Oxford, Dr. Khan designed and implemented a visual
                    analytics system with low-latency data streaming architecture and web-based rendering pipelines for
                    high-volume real-time data streams.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1.5,
                      textAlign: 'justify',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: 1.6,
                      color: 'text.primary',
                      fontSize: 14,
                    }}
                  >
                    <strong>VBAS: Visual Bulletin Analytics System — </strong>
                    Seismologists at the International Seismological Centre (ISC) previously relied on inefficient,
                    paper-based workflows to review complex seismic events across multiple data types. In his
                    postdoctoral work at University of Oxford, Dr. Khan developed{' '}
                    <Link
                      href="https://www.isc.ac.uk/iscbulletin/review/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}
                    >
                      VBAS
                    </Link>
                    —an interactive visualization system that integrates diverse seismological data, including
                    hypocentres, magnitudes, phase arrivals, travel-time curves, seismicity maps, station geometry, and
                    more. VBAS provides a unified interface that helps ISC analysts detect patterns, identify anomalies,
                    and perform data analysis far more efficiently. The system replaced the ISC’s 30-year-old
                    paper-based process.
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 0,
                      textAlign: 'justify',
                      fontFamily: 'Lato, sans-serif',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      fontSize: 14,
                      fontStyle: 'italic',
                    }}
                  >
                    For other projects, please visit the{' '}
                    <Link href="/projects" sx={{ fontFamily: 'Lato, sans-serif', color: '#1565c0' }}>
                      projects
                    </Link>{' '}
                    section.
                  </Typography>
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

          <Box sx={{ mt: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                mb: 2,
                borderLeft: '3px solid',
                borderColor: '#1565c0',
                paddingLeft: 1.5,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
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
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: 'primary.dark',
                          },
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
