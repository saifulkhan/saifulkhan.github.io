import React from 'react';
import Head from 'next/head';
import Seo, { SITE_URL } from '../components/Seo';
import { Box, Container, Typography, Avatar, Link as MuiLink } from '@mui/material';
import SocialLinks from '../components/SocialLinks';
import SoftwareSection from '../components/sections/SoftwareSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PublicationsSection from '../components/sections/PublicationsSection';

const researchInterests = [
  'Service Computing',
  'Applied AI/ML',
  'Semantic Search',
  'Data Virtualization',
  'Human-centred AI',
  'Visual Analytics',
];

const majorAwards: React.ReactNode[] = ['RAMP Early Career Investigator Award, Royal Society'];

const professionalService: React.ReactNode[] = [
  'Programme Committee, Services Computing Conference (SCC), 2026',
  'Guest Editor, Reliable Scientific Machine Learning for PDE Solution and Discovery, Frontiers in Applied Mathematics and Statistics',
];

const AboutList = ({ title, items }: { title: string; items: React.ReactNode[] }) => (
  <Box>
    {/* underlined heading so both columns start on the same rule */}
    <Typography variant="h6" component="h2" sx={{ pb: 0.75, mb: 1.5, borderBottom: 1, borderColor: 'divider' }}>
      {title}
    </Typography>
    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
      {items.map((item, i) => (
        <Typography key={i} component="li" variant="body1" sx={{ mb: 0.5 }}>
          {item}
        </Typography>
      ))}
    </Box>
  </Box>
);

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
              knowsAbout: researchInterests,
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
              I build data-driven software systems for complex, end-to-end workflows, from AI/ML and digital-twin
              pipelines to interactive visualization. My work helps scientists and engineers make informed decisions. I
              work at the Rutherford Appleton Laboratory (RAL) of the Science and Technology Facilities Council (STFC),
              part of UK Research and Innovation (UKRI).
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I began my career in industry, building engineering database software at Oracle and real-time industrial
              automation at ABB. I then moved into research at the University of Oxford, completing my DPhil and
              postdoctoral research with Professor{' '}
              {/* body-text colour with a faint underline so it still reads as a link */}
              <MuiLink
                href="https://eng.ox.ac.uk/people/min-chen"
                target="_blank"
                rel="noopener noreferrer"
                color="text.primary"
                underline="always"
              >
                Min Chen
              </MuiLink>
              . My systems span enterprise search, seismology, radio astronomy, global health emergencies, nuclear
              fusion, and urban environments, and many are in active real-world use.
            </Typography>
          </Box>

          {/* Two columns on desktop (interests + awards | service, roughly equal height); stacked on mobile */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              columnGap: 6,
              rowGap: 4,
              alignItems: 'start',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <AboutList title="Research Interests" items={researchInterests} />
              <AboutList title="Major Awards" items={majorAwards} />
            </Box>
            <AboutList title="Professional Service" items={professionalService} />
          </Box>
        </Container>
      </Box>

      <SoftwareSection />
      <ProjectsSection />
      <PublicationsSection />
    </>
  );
}
