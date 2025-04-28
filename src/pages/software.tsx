import React, { useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Chip,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Paper from '@mui/material/Paper';
import GitHubIcon from '@mui/icons-material/GitHub';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import Image from 'next/image';

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

/**
 * NpmIcon: renders a custom SVG for the npm logo.
 */
const NpmIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 50 50">
      <rect width="50" height="48" rx="4" fill="#CB3837" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="20"
        fill="#FFF"
      >
        NPM
      </text>
    </SvgIcon>
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
                  overflow: 'visible', // Ensure image can overflow this box
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative', // Needed for stacking context
                  zIndex: 10,
                }}
              >
                <ZoomImage src={sw.image} alt={sw.name} />
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1">{sw.name}</Typography>
                {Array.isArray(sw.description) ? (
                  <Typography variant="body2" color="text.secondary">
                    {sw.description.map((desc, idx) =>
                      typeof desc === 'string' ? (
                        desc
                      ) : (
                        <a
                          key={idx}
                          href={desc.link}
                          target="_blank"
                          rel="noopener"
                          style={{
                            color: '#1976d2',
                            textDecoration: 'none',
                          }}
                        >
                          {desc.text}
                        </a>
                      ),
                    )}
                  </Typography>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {sw.description}
                  </Typography>
                )}

                {sw.descriptionBlue && (
                  <Typography
                    variant="body2"
                    sx={{ color: '#1976d2', fontSize: 10 }}
                  >
                    {sw.descriptionBlue}
                  </Typography>
                )}

                {sw.descriptionGrey &&
                  (Array.isArray(sw.descriptionGrey) ? (
                    <Typography
                      variant="body2"
                      sx={{ color: 'grey', fontSize: 10 }}
                    >
                      {sw.descriptionGrey.map((desc, idx) =>
                        typeof desc === 'string' ? (
                          desc
                        ) : (
                          <a
                            key={idx}
                            href={desc.link}
                            target="_blank"
                            rel="noopener"
                            style={{
                              color: '#1976d2',
                              textDecoration: 'none',
                            }}
                          >
                            {desc.text}
                          </a>
                        ),
                      )}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      sx={{ color: 'grey', fontSize: 10 }}
                    >
                      {sw.descriptionGrey}
                    </Typography>
                  ))}

                <Stack direction="row" spacing={0.1} mt={2} alignItems="center">
                  {Array.isArray(sw.github)
                    ? sw.github.map((repo) => (
                        <IconButton
                          key={repo.url}
                          href={repo.url}
                          target="_blank"
                          rel="noopener"
                          aria-label={
                            repo.label ? `GitHub: ${repo.label}` : 'GitHub'
                          }
                          color="inherit"
                          size="small"
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                      ))
                    : sw.github && (
                        <IconButton
                          href={sw.github}
                          target="_blank"
                          rel="noopener"
                          aria-label="GitHub"
                          color="inherit"
                          size="small"
                        >
                          <GitHubIcon fontSize="small" />
                        </IconButton>
                      )}
                  {sw.npm && (
                    <IconButton
                      href={sw.npm}
                      target="_blank"
                      rel="noopener"
                      aria-label="npm"
                      color="inherit"
                      size="small"
                    >
                      <NpmIcon fontSize="small" />
                    </IconButton>
                  )}
                  {sw.external && (
                    <IconButton
                      href={sw.external}
                      target="_blank"
                      rel="noopener"
                      aria-label="External Link"
                      color="primary"
                      size="small"
                    >
                      <OpenInNewIcon fontSize="small" />
                    </IconButton>
                  )}
                  {sw.funding && sw.funding.length > 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                      <Box
                        sx={{
                          borderLeft: '1px solid grey',
                          height: 22,
                          mr: 1,
                          ml: 0.5,
                        }}
                      />
                      <Stack direction="row" spacing={0.5}>
                        {sw.funding.map((fund, i) => (
                          <Chip
                            key={String(fund) + i}
                            label={fund}
                            size="small"
                            sx={{
                              backgroundColor: '#E5E4E2',
                              color: '#808080',
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
                    </Box>
                  )}
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
