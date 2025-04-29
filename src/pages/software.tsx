import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Card, CardContent, Typography, Stack, Chip } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import LinkIcons from '../components/LinkIcons';

const ZoomImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{
        display: 'inline-block',
        width: 120,
        height: 120,
        borderRadius: 8,
        overflow: 'hidden',
        cursor: 'pointer',
        zIndex: 1,
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.18)' : undefined,
        transform: hovered ? 'scale(2.2)' : 'scale(1)',
        transition:
          'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        style={{ objectFit: 'contain', borderRadius: 8 }}
        priority={false}
      />
    </span>
  );
};

import softwareList from '../data/softwareList';

const Software = () => (
  <>
    <Head>
      <title>Software | Saiful Khan</title>
    </Head>
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4, p: 1 }}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Software & Infrastructure
        </Typography>

        <Stack spacing={1.5}>
          {softwareList.map((sw, idx) => (
            <Card
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                minHeight: 150,
              }}
            >
              <Box
                sx={{
                  width: 120,
                  height: 120,
                  mr: 1.5,
                  overflow: 'visible',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                <ZoomImage src={sw.image} alt={sw.name} />
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{sw.name}</Typography>
                {Array.isArray(sw.description) && sw.description.length > 0 && (
                  <Stack spacing={0.5} mb={1}>
                    {sw.description.map((desc, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color:
                            desc.color === 'blue'
                              ? '#1976d2'
                              : desc.color === 'grey'
                                ? 'grey'
                                : 'text.secondary',
                          fontSize: desc.color !== 'default' ? 11 : 13,
                        }}
                      >
                        {desc.value}
                      </Typography>
                    ))}
                  </Stack>
                )}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: 1 }}
                >
                  {/* Left: Funding chips */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {sw.funding && sw.funding.length > 0 && (
                      <Stack direction="row" spacing={0.5}>
                        {sw.funding.map((fund, i) => (
                          <Chip
                            key={String(fund) + i}
                            label={fund}
                            size="small"
                            sx={{
                              backgroundColor: '#f5f5f5',
                              color: '#757575',
                              fontWeight: 400,
                              fontSize: 11,
                              letterSpacing: 0.2,
                              px: 0.5,
                              boxShadow: 'none',
                              height: 20,
                              minHeight: 20,
                            }}
                          />
                        ))}
                      </Stack>
                    )}
                  </Box>
                  {/* Right: Icons */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {sw.links && (
                      <LinkIcons
                        links={sw.links as any}
                        iconSize={16}
                        spacing={0.5}
                        inline={false}
                      />
                    )}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Paper>
    </Box>
  </>
);

export default Software;
