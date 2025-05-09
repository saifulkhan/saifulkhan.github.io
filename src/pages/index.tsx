import React from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Saiful Khan</title>
      </Head>
      <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6, p: 3 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Saiful Khan
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {/* Your Title or Position */}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
                I specialise in developing data-driven <strong>software</strong>{' '}
                and <strong>systems</strong> involving{' '}
                <strong>machine learning</strong> and{' '}
                <strong>information visualization</strong>.
              </Typography>
              <Box sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.secondary">
                I am a Senior Computer Scientist at Rutherford Appleton
                Laboratory, Science and Technology Facilities Council (STFC),
                UK.
                <br />
                <br />
                Previously, I earned my DPhil (PhD) in Engineering Science from
                the University of Oxford, where I also conducted postdoctoral
                research under the supervision of{' '}
                <a href="https://eng.ox.ac.uk/people/min-chen/" target="_blank">
                  Prof. Min Chen
                </a>
                . My industrial experience includes working as a data scientist
                at Horus Security Consultancy and the International
                Seismological Centre in the UK. Additionally, I have held
                software engineering positions at Oracle and ABB in India.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Avatar
                src="/profile.jpeg"
                alt="Profile"
                sx={{ width: 200, height: 200, mx: 'auto', boxShadow: 2 }}
                slotProps={{
                  img: {
                    style: {
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {/* <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>
                News
              </Typography>
              <ul style={{ paddingLeft: 20 }}>
                <li>
                  <b>Apr 2025:</b> Started a new position at XYZ University.
                </li>
                <li>
                  <b>Jan 2024:</b> Published a paper in ABC Journal.
                </li>
              </ul> 
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" gutterBottom>
                Selected Publications
              </Typography>
              <Stack spacing={2}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Chip
                    label="Landslides"
                    color="secondary"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Title of your publication
                  </Typography>
                  <Typography variant="body2">Author1, Author2, ...</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Journal Name, 2024
                  </Typography>
                </Paper>

              </Stack>
            </Grid> */}
          </Grid>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              mt: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
              <IconButton
                component="a"
                aria-label="Email"
                sx={{ mr: 1 }}
                disabled
              >
                <EmailIcon fontSize="medium" />
              </IconButton>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ userSelect: 'auto', cursor: 'pointer' }}
                onClick={() => {
                  const e = [
                    'saiful',
                    '.',
                    'etc',
                    '@',
                    'gmail',
                    '.',
                    'com',
                  ].join('');
                  window.location.href = `mailto:${e}`;
                }}
              >
                <span>s</span>
                <span>aiful</span>
                <span>.</span>
                <span>etc</span>
                <span>@</span>
                <span>gmail</span>
                <span>.</span>
                <span>com</span>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.1, mr: 1 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/khansaiful/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/saifulkhan"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
              {/* <IconButton
                component="a"
                href="https://bsky.app/profile/your-bluesky"
                target="_blank"
                rel="noopener"
                aria-label="Bluesky"
              >
                <PublicIcon fontSize="medium" />
              </IconButton> */}
              <IconButton
                component="a"
                href="https://scholar.google.com/citations?hl=en&user=lZLfsJwAAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noopener"
                aria-label="Google Scholar"
              >
                <SchoolIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>

          {/* <Divider sx={{ my: 2 }} /> */}
        </Paper>
      </Box>
    </>
  );
}
