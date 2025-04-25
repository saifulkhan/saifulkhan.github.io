import React from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Chip,
  Divider,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <>
      <Head>
        <title>About | My Personal Site</title>
      </Head>
      <Box sx={{ maxWidth: 900, mx: 'auto', mt: 6, p: 3 }}>
        <Paper elevation={2} sx={{ p: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Your Name
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Your Title or Position
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Brief introduction about yourself, your research interests, and
                background. Write a few sentences similar to the screenshot
                provided, emphasizing your expertise and current position.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add additional background, education, and recent achievements
                here.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Avatar
                src="/profile.jpeg"
                alt="Profile"
                sx={{ width: 150, height: 150, mx: 'auto', boxShadow: 2 }}
              />
            </Grid>
          </Grid>
          <Divider sx={{ my: 4 }} />
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h5" gutterBottom>
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
              <Typography variant="h5" gutterBottom>
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
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
