import React from 'react';
import Head from 'next/head';
import Seo, { SITE_URL } from '../components/Seo';
import { Box, Container, Typography, Avatar, Chip, Link as MuiLink } from '@mui/material';
import SocialLinks from '../components/SocialLinks';
import SoftwareSection from '../components/sections/SoftwareSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PublicationsSection from '../components/sections/PublicationsSection';

const focusAreas = [
  'Data & Service Computing',
  'Applied AI/ML',
  'Human-centred AI',
  'Visual Analytics',
  'Semantic Search',
  'Data Virtualization',
];

export default function About() {
  return (
    <>
      <Seo
        title="Saiful Khan | Senior Scientist"
        description="Saiful Khan — Senior Scientist at UK Research and Innovation (UKRI). Data & service computing, applied AI/ML, and visual analytics."
        path="/"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Saiful Khan',
              url: `${SITE_URL}/`,
              image: `${SITE_URL}/profile.jpeg`,
              jobTitle: 'Senior Scientist',
              worksFor: {
                '@type': 'Organization',
                name: 'UK Research and Innovation (UKRI)',
                url: 'https://www.ukri.org/',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of Oxford',
              },
              knowsAbout: focusAreas,
              sameAs: [
                'https://scholar.google.com/citations?hl=en&user=lZLfsJwAAAAJ',
                'https://github.com/saifulkhan',
                'https://www.linkedin.com/in/khansaiful/',
              ],
            }),
          }}
        />
      </Head>

      <Box component="section" id="about" sx={{ scrollMarginTop: { xs: 56, md: 64 } }}>
        <Container sx={{ py: { xs: 5, md: 8 } }}>
          {/* Hero */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: { xs: 3, md: 6 },
              mb: { xs: 5, md: 7 },
            }}
          >
            <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
              <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 0.5 }}>
                Senior Scientist · UK Research and Innovation (UKRI)
              </Typography>
              <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
                Saiful Khan
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                B.E., M.S., D.Phil. (Oxford)
              </Typography>
              <SocialLinks />
            </Box>
            <Avatar
              src="/profile.jpeg"
              alt="Saiful Khan"
              sx={{
                width: { xs: 120, md: 168 },
                height: { xs: 120, md: 168 },
                order: { xs: 0, md: 1 },
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                border: '1px solid',
                borderColor: 'divider',
              }}
            />
          </Box>

          {/* Bio */}
          <Box sx={{ mb: { xs: 5, md: 6 } }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I design and develop data-driven software systems and infrastructures that transform complex data and
              workflows into scalable, production-ready solutions. I focus on bridging the gap between raw information
              and impactful, real-world applications.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              My expertise lies at the intersection of software engineering, data systems, artificial
              intelligence/machine learning (AI/ML), and visual analytics. I have developed software systems for diverse
              domains including radio astronomy, nuclear fusion, urban environmental digital-twins, global health
              emergencies, seismology, and enterprise information search. In industry, I have contributed to engineering
              database software at Oracle and real-time industrial automation at ABB.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I earned my DPhil (PhD) and completed postdoctoral research at the University of Oxford, under the
              supervision of Professor{' '}
              <MuiLink href="https://eng.ox.ac.uk/people/min-chen" target="_blank" rel="noopener noreferrer">
                Min Chen
              </MuiLink>
              .
            </Typography>
            <Typography variant="body1">
              My current focus centers on advancing software infrastructure, with particular emphasis on data
              virtualization, semantic search, artificial intelligence and machine learning (AI/ML), and human-centered
              AI.
            </Typography>
          </Box>

          {/* Focus areas */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Focus Areas
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {focusAreas.map((area) => (
                <Chip key={area} label={area} size="small" variant="outlined" sx={{ color: 'text.secondary' }} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <SoftwareSection />
      <ProjectsSection />
      <PublicationsSection />
    </>
  );
}
