import React from 'react';
import dynamic from 'next/dynamic';
import Seo from '../components/Seo';
import Image from 'next/image';
import { Box, Card, Container, Typography, Stack, Chip, Link, useTheme, useMediaQuery } from '@mui/material';
import LinkIcons, { type LinkIcon } from '../components/LinkIcons';
import PageHeader from '../components/PageHeader';
import softwareList, { type SoftwareEntry } from '../data/software';

// Dynamically import the ZoomImage component with no SSR to prevent hydration issues with videos
const ZoomImage = dynamic<{ src: string; alt: string; width: number; height: number }>(
  () => import('../components/ZoomImage'),
  {
    ssr: false,
    loading: () => <Box sx={{ width: 240, height: 150 }} />, // Show a placeholder while loading
  },
);

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

  const renderDescription = (description: SoftwareEntry['description']) => {
    if (!Array.isArray(description) || description.length === 0) return null;

    return (
      <Stack spacing={0.5} mb={1}>
        {description.map((desc, idx) =>
          desc.type === 'credit' ? (
            <Typography key={idx} variant="caption" sx={{ fontSize: 12, color: 'text.secondary' }}>
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
              sx={
                // items marked with an accent color in the data are highlights (e.g. awards)
                desc.color && desc.color !== 'default' && desc.color !== 'grey'
                  ? { color: 'primary.main', fontWeight: 600 }
                  : { color: 'text.secondary' }
              }
            >
              {desc.value}
            </Typography>
          ),
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
            variant="outlined"
            sx={{
              color: 'text.secondary',
              fontSize: 12,
              height: 20,
              '& .MuiChip-label': { px: 0.75 },
            }}
            aria-label={`Funding: ${fund}`}
          />
        ))}
      </Stack>
    );
  };

  return (
    <>
      <Seo
        title="Software | Saiful Khan"
        description="Production software systems and open-source tools designed and built by Saiful Khan."
        path="/software"
      />

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <PageHeader
          eyebrow="Portfolio"
          title="Software & Systems"
          subtitle="Production systems and open-source tools I have designed and built."
        />

        <Stack spacing={2.5}>
          {softwareList.map((sw, idx) => (
            <Card
              key={`${sw.name}-${idx}`}
              variant="outlined"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                p: { xs: 2, sm: 2.5 },
                transition: 'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {sw.image && (
                <Box
                  sx={{
                    width: getImageSize().width,
                    height: getImageSize().height,
                    mr: { xs: 0, sm: 2.5 },
                    mb: { xs: 1.5, sm: 0 },
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1.5,
                    overflow: 'hidden',
                  }}
                >
                  {sw.imageLink ? (
                    <Box
                      component="a"
                      href={sw.imageLink}
                      target="_blank"
                      rel="noopener"
                      aria-label={`${sw.name} — live examples`}
                      title="Open live examples"
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        borderRadius: 1.5,
                        overflow: 'hidden',
                        transition: 'opacity 0.2s ease',
                        '&:hover': { opacity: 0.85 },
                      }}
                    >
                      <Image
                        src={sw.image}
                        alt={`${sw.name} screenshot`}
                        width={getImageSize().width}
                        height={getImageSize().height}
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                        loading="lazy"
                      />
                    </Box>
                  ) : (
                    <ZoomImage
                      src={sw.image}
                      alt={`${sw.name} logo`}
                      width={getImageSize().width}
                      height={getImageSize().height}
                    />
                  )}
                </Box>
              )}

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.4,
                    mb: 0.75,
                    textAlign: { xs: 'center', sm: 'left' },
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
                    mt: 1.5,
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
      </Container>
    </>
  );
};

export default Software;
