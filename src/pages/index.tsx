import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Typography, Avatar, Card, Chip } from '@mui/material';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SocialLinks from '../components/SocialLinks';

const focusAreas = [
  'Data & Service Computing',
  'Applied AI/ML',
  'Visual Analytics',
  'Data Virtualization',
  'Semantic Search',
  'Scientific Machine Learning',
  'Human-centred AI',
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
      <Head>
        <title>Saiful Khan | Senior Data Scientist</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Saiful Khan — Senior Data Scientist at Scientific Computing, STFC. Data & service computing, applied AI/ML, and visual analytics."
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
              Senior Data Scientist · Scientific Computing, STFC
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
            I lead the design and development of data-driven software systems and infrastructures that turn complex data
            and scientific workflows into scalable, production-ready systems.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I work at the intersection of software engineering, data systems, artificial intelligence/machine learning
            (AI/ML), and visual analytics, combining industry experience with applied research. My industry background
            includes engineering database software at Oracle and real-time industrial automation at ABB. My research and
            delivered software systems have supported applications ranging from radio astronomy and nuclear fusion to
            global health emergencies, seismology, environmental modelling, and enterprise information search.
          </Typography>
          <Typography variant="body1">
            I lead research and engineering projects, develop and publish in the area of data and service computing, and
            collaborate across academia, industry, and scientific organizations. My current work spans data
            virtualization, semantic search, scientific machine learning, and human-centred AI. I also contribute to
            research funding as a Co-PI on externally funded projects.
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
