import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Box, Card, Typography, Stack, Chip, Paper, useTheme, useMediaQuery } from '@mui/material';
import LinkIcons, { type LinkIcon } from '../components/LinkIcons';
import softwareList from '../data/softwareList';

// Dynamically import the ZoomImage component with no SSR to prevent hydration issues with videos
const ZoomImage = dynamic<{ src: string; alt: string; size: number }>(() => import('../components/ZoomImage'), {
  ssr: false,
  loading: () => <Box sx={{ width: 120, height: 120 }} />, // Show a placeholder while loading
});

type DescriptionItem = {
  type: string;
  value: string;
  color?: string;
};

type SoftwareItem = {
  name: string;
  image: string;
  description: DescriptionItem[];
  links: Array<{ type: string; url: string }>;
  funding?: string[];
};

const Software = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const getImageSize = () => {
    if (isMobile) return 80;
    if (isTablet) return 100;
    return 120;
  };

  const renderDescription = (description: SoftwareItem['description']) => {
    if (!Array.isArray(description) || description.length === 0) return null;

    return (
      <Stack spacing={0.5} mb={1}>
        {description.map((desc, idx) => (
          <Typography
            key={idx}
            variant="body2"
            sx={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
              fontSize: { xs: 14 },
              lineHeight: 1.3,
              color: desc.color,
            }}
          >
            {desc.value}
          </Typography>
        ))}
      </Stack>
    );
  };

  const renderFundingChips = (funding: string[] = []) => {
    if (funding.length === 0) return null;

    return (
      <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
        {funding.map((fund, i) => (
          <Chip
            key={`${fund}-${i}`}
            label={fund}
            size="small"
            sx={{
              backgroundColor: 'action.hover',
              color: 'text.secondary',
              fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
              fontSize: 13,
              letterSpacing: 0.2,
              px: 0.5,
              height: 20,
              minHeight: 20,
              '& .MuiChip-label': {
                px: 0.75,
              },
            }}
            aria-label={`Funding: ${fund}`}
          />
        ))}
      </Stack>
    );
  };

  return (
    <>
      <Head>
        <title>Software | Saiful Khan</title>
        <meta name="description" content="List of software and systems developed by Saiful Khan" />
      </Head>
      <Box
        sx={{
          mt: { xs: 2, sm: 3, md: 4 },
          maxWidth: 900,
          mx: 'auto',
          p: { xs: 1, sm: 2 },
          pb: 4,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif', mb: 3, fontWeight: 600 }}
          >
            Software & Systems
          </Typography>

          <Stack spacing={3}>
            {softwareList.map((sw, idx) => (
              <Card
                key={`${sw.name}-${idx}`}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 2,
                  transition: theme.transitions.create(['box-shadow', 'transform'], {
                    duration: theme.transitions.duration.shorter,
                  }),
                  '&:hover': {
                    boxShadow: theme.shadows[8],
                    transform: 'translateY(-2px)',
                  },
                }}
                variant="outlined"
              >
                {sw.image && (
                  <Box
                    sx={{
                      width: getImageSize(),
                      height: getImageSize(),
                      mr: { xs: 0, sm: 2 },
                      mb: { xs: 1.5, sm: 0 },
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ZoomImage src={sw.image} alt={`${sw.name} logo`} size={getImageSize()} />
                  </Box>
                )}

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: { xs: 16 },
                      fontWeight: 'bold',
                      mb: 1,
                      textAlign: { xs: 'center', sm: 'left' },
                      fontFamily: 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif',
                    }}
                  >
                    {sw.name}
                  </Typography>

                  {renderDescription(sw.description)}

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'stretch', sm: 'center' },
                      justifyContent: 'space-between',
                      gap: 1,
                      mt: 2,
                      pt: 1,
                    }}
                  >
                    <Box sx={{ flex: 1, minWidth: 0 }}>{renderFundingChips(sw.funding)}</Box>

                    {sw.links && sw.links.length > 0 && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: { xs: 'center', sm: 'flex-end' },
                          flexShrink: 0,
                        }}
                      >
                        <LinkIcons links={sw.links as LinkIcon[]} iconSize={14} spacing={0.75} inline />
                      </Box>
                    )}
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default Software;
