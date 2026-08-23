import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Box, Card, Typography, Stack, Chip, Link, Paper, useTheme, useMediaQuery } from '@mui/material';
import LinkIcons, { type LinkIcon } from '../components/LinkIcons';
import softwareList from '../data/software';

// Dynamically import the ZoomImage component with no SSR to prevent hydration issues with videos
const ZoomImage = dynamic<{ src: string; alt: string; width: number; height: number }>(
  () => import('../components/ZoomImage'),
  {
    ssr: false,
    loading: () => <Box sx={{ width: 240, height: 150 }} />, // Show a placeholder while loading
  }
);

type DescriptionItem = {
  type: string;
  value: string;
  color?: string;
  url?: string;
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

  // Landscape thumbnails (16:10) suit the screenshot-style images
  const getImageSize = () => {
    if (isMobile) return { width: 200, height: 125 };
    if (isTablet) return { width: 220, height: 138 };
    return { width: 240, height: 150 };
  };

  const renderDescription = (description: SoftwareItem['description']) => {
    if (!Array.isArray(description) || description.length === 0) return null;

    return (
      <Stack spacing={0.5} mb={1}>
        {description.map((desc, idx) =>
          desc.type === 'credit' ? (
            <Typography
              key={idx}
              variant="caption"
              sx={{
                fontFamily: 'Lato, sans-serif',
                fontSize: 12,
                color: 'text.secondary',
              }}
            >
              {desc.url ? (
                <Link href={desc.url} target="_blank" rel="noopener" color="inherit" underline="hover">
                  {desc.value}
                </Link>
              ) : (
                desc.value
              )}
            </Typography>
          ) : (
            <Typography
              key={idx}
              variant="body2"
              sx={{
                fontFamily: 'Lato, sans-serif',
                fontSize: { xs: 14 },
                lineHeight: 1.3,
                color: desc.color,
              }}
            >
              {desc.value}
            </Typography>
          )
        )}
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
              fontFamily: 'Lato, sans-serif',
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
          maxWidth: 1200,
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
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Lato, sans-serif', mb: 3, fontWeight: 600 }}>
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
                      width: getImageSize().width,
                      height: getImageSize().height,
                      mr: { xs: 0, sm: 2 },
                      mb: { xs: 1.5, sm: 0 },
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ZoomImage
                      src={sw.image}
                      alt={`${sw.name} logo`}
                      width={getImageSize().width}
                      height={getImageSize().height}
                    />
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
                      fontFamily: 'Lato, sans-serif',
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
