import React from 'react';
import Head from 'next/head';
import Seo, { SITE_URL } from '../components/Seo';
import { Box, Container, Typography, Avatar, Link as MuiLink } from '@mui/material';
import SocialLinks from '../components/SocialLinks';
import InfrastructureSection from '../components/sections/InfrastructureSection';
import SoftwareSection from '../components/sections/SoftwareSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PublicationsSection from '../components/sections/PublicationsSection';
import { useSectionViewTracking } from '@/lib/analytics';

const researchInterests = [
  'Service Computing',
  'Applied AI/ML',
  'Semantic Search',
  'Data Virtualization',
  'Information Visualisation',
];

const majorAwards: React.ReactNode[] = ['RAMP Early Career Investigator Award, Royal Society'];

const professionalService: React.ReactNode[] = [
  'International Programme Committee, Eurographics Conference on Visualization (EuroVis), 2027',
  'Programme Committee, Services Computing Conference (SCC), 2026',
  'Guest Editor, Reliable Scientific Machine Learning for PDE Solution and Discovery, Frontiers in Applied Mathematics and Statistics',
];

const AboutList = ({ title, items }: { title: string; items: React.ReactNode[] }) => (
  <Box>
    {/* underlined heading so both columns start on the same rule */}
    <Typography
      variant="subtitle1"
      component="h2"
      sx={{ fontWeight: 600, pb: 0.75, mb: 1.5, borderBottom: 1, borderColor: 'divider' }}
    >
      {title}
    </Typography>
    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
      {items.map((item, i) => (
        <Typography key={i} component="li" variant="body2" sx={{ mb: 0.5 }}>
          {item}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default function About() {
  useSectionViewTracking();

  return (
    <>
      <Seo
        title="Saiful Khan | Senior Scientist"
        description="Saiful Khan — Senior Scientist at UK Research and Innovation (UKRI). Data & service computing, applied AI/ML, and information visualisation."
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
              {/* tighter line height on phones, where this wraps onto two lines */}
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', display: 'block', mb: 0.5, lineHeight: { xs: 1.8, sm: 2.66 } }}
              >
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
              I design and build software infrastructure that supports numerical modelling and machine learning.
              Scientists and engineers rely on national data and compute facilities, but they also need software
              services on top of them: to find and combine data, analyse and visualise it, and develop their models. My
              vision is a shared, unified infrastructure of such services that scales across projects and research
              domains. The services I have built include data virtualisation, semantic search, model observability,
              digital twins as a service and visualisation. I work at the Rutherford Appleton Laboratory (RAL), part of
              the Science and Technology Facilities Council (STFC), which is part of UK Research and Innovation (UKRI).
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I began my career in industry, developing engineering database software at Oracle and real-time industrial
              automation systems at ABB. I then moved into academic research at the University of Oxford, where I
              completed my DPhil and subsequently undertook postdoctoral research with Professor{' '}
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
              . Since then, I have contributed to the design and development of software systems across a diverse range
              of domains, including enterprise search, seismology, radio astronomy, global health emergencies, nuclear
              fusion, urban environments and machine learning for PDEs. Many of these systems are now in active
              real-world use.
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
            <AboutList title="Major Professional Service" items={professionalService} />
          </Box>
        </Container>
      </Box>

      <InfrastructureSection />
      <SoftwareSection />
      <ProjectsSection />
      <PublicationsSection />
    </>
  );
}
