import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Seo, { SITE_URL } from '../components/Seo';
import { Box, Container, Typography, Avatar, Card, Chip, Link as MuiLink } from '@mui/material';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SocialLinks from '../components/SocialLinks';

const focusAreas = [
  'Data & Service Computing',
  'Applied AI/ML',
  'Human-centred AI',
  'Visual Analytics',
  'Semantic Search',
  'Data Virtualization'
];

const exploreCards = [
  {
    title: 'Software & Systems',
    description: 'Production systems and open-source tools I have designed and built.',
    href: '/software',
    icon: TerminalOutlinedIcon,
  },
  {
    title: 'Grants & Projects',
    description: 'Funded research programmes and engineering projects I lead and contribute to.',
    href: '/projects',
    icon: WorkOutlineIcon,
  },
  {
    title: 'Publications',
    description: 'Peer-reviewed research in visualization, machine learning, and data systems.',
    href: '/publication',
    icon: ArticleOutlinedIcon,
  },
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

      <Container maxWidth="md" sx={{ py: { xs: 5, md: 8 } }}>
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
            I design and develop data-driven software systems and infrastructures that transform complex
            data and workflows into scalable, production-ready solutions. I focus on bridging the gap
            between raw information and impactful, real-world applications.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            My expertise lies at the intersection of software engineering, data systems, artificial
            intelligence/machine learning (AI/ML), and visual analytics. I have developed software
            systems for diverse domains including radio astronomy, nuclear fusion, urban environmental
            digital-twins, global health emergencies, seismology, and enterprise information search. In
            industry, I have contributed to engineering database software at Oracle and real-time
            industrial automation at ABB.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I earned my DPhil (PhD) and completed postdoctoral research at the University of Oxford, under
            the supervision of Professor{' '}
            <MuiLink
              href="https://eng.ox.ac.uk/people/min-chen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Min Chen
            </MuiLink>
            .
          </Typography>
          <Typography variant="body1">
            My current focus centers on advancing software infrastructure, with particular emphasis on data virtualization, semantic search, artificial intelligence and machine learning (AI/ML), and human-centered AI.          
        </Typography>
        </Box>

        {/* Focus areas */}
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Focus Areas
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {focusAreas.map((area) => (
              <Chip key={area} label={area} size="small" variant="outlined" sx={{ color: 'text.secondary' }} />
            ))}
          </Box>
        </Box>

        {/* Explore */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Explore
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {exploreCards.map(({ title, description, href, icon: Icon }) => (
              <Card
                key={href}
                component={Link}
                href={href}
                variant="outlined"
                sx={{
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    '& .explore-arrow': { transform: 'translateX(4px)' },
                  },
                }}
              >
                <Icon sx={{ color: 'primary.main', fontSize: 26 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>
                  {description}
                </Typography>
                <ArrowForwardIcon
                  className="explore-arrow"
                  sx={{ fontSize: 18, color: 'text.secondary', transition: 'transform 0.2s ease' }}
                />
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
