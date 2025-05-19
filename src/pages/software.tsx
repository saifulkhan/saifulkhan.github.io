import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Card,
  Typography,
  Stack,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import LinkIcons, { type LinkIcon } from '../components/LinkIcons';
// Define types for software list items
type DescriptionItem = {
  type: string;
  value: string;
  color?: string; // Allow any string value for color
};

type SoftwareItem = {
  name: string;
  image: string;
  description: DescriptionItem[];
  links: Array<{ type: string; url: string }>;
  funding?: string[];
};

interface ZoomImageProps {
  src: string;
  alt: string;
  size?: number;
}

const ZoomImage: React.FC<ZoomImageProps> = React.memo(
  ({ src, alt, size = 120 }) => {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = useCallback(() => setHovered(true), []);
    const handleMouseLeave = useCallback(() => setHovered(false), []);

    return (
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: size,
          height: size,
          minWidth: size,
          minHeight: size,
          borderRadius: 2,
          overflow: 'hidden',
          cursor: 'pointer',
          zIndex: 1,
          boxShadow: (theme) => (hovered ? theme.shadows[4] : 'none'),
          transform: hovered ? 'scale(2.2)' : 'scale(1)',
          transition: (theme) =>
            theme.transitions.create(['transform', 'box-shadow'], {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeInOut,
            }),
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Zoom ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          style={{
            objectFit: 'contain',
            width: '100%',
            height: '100%',
            borderRadius: 8,
          }}
          priority={false}
          loading="lazy"
        />
      </Box>
    );
  },
);

ZoomImage.displayName = 'ZoomImage';

import softwareList from '../data/softwareList';

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
              color:
                desc.color === 'blue'
                  ? 'primary.main'
                  : desc.color === 'grey'
                    ? 'text.secondary'
                    : 'text.secondary',
              fontSize: desc.color !== 'default' ? 11 : 13,
              lineHeight: 1.4,
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
              fontWeight: 400,
              fontSize: 11,
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
        <meta
          name="description"
          content="List of software and systems developed by Saiful Khan"
        />
      </Head>
      <Box
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mt: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2 },
          pb: 4,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            p: { xs: 1.5, sm: 2, md: 3 },
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Software & Systems
          </Typography>

          <Stack spacing={2}>
            {softwareList.map((sw, idx) => (
              <Card
                key={`${sw.name}-${idx}`}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'center', sm: 'flex-start' },
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 2,
                  transition: theme.transitions.create(
                    ['box-shadow', 'transform'],
                    {
                      duration: theme.transitions.duration.shorter,
                    },
                  ),
                  '&:hover': {
                    boxShadow: theme.shadows[8],
                    transform: 'translateY(-2px)',
                  },
                }}
                variant="outlined"
              >
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
                  <ZoomImage
                    src={sw.image}
                    alt={`${sw.name} logo`}
                    size={getImageSize()}
                  />
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: { xs: '1.1rem', sm: '1.25rem' },
                      // fontWeight: 600,
                      mb: 1,
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
                      mt: 2,
                      pt: 1,
                      // borderTop: '1px solid',
                      // borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      {renderFundingChips(sw.funding)}
                    </Box>

                    {sw.links && sw.links.length > 0 && (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: { xs: 'center', sm: 'flex-end' },
                          flexShrink: 0,
                        }}
                      >
                        <LinkIcons
                          links={sw.links as LinkIcon[]}
                          iconSize={18}
                          spacing={0.75}
                          inline
                        />
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
