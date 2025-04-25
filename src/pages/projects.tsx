import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Stack } from '@mui/material';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A brief description of this ongoing project.',
    status: 'Ongoing',
  },
  {
    title: 'Project Beta',
    description: 'A brief description of this completed project.',
    status: 'Completed',
  },
];

const Projects = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
    <Stack spacing={3}>
      {projects.map((proj, idx) => (
        <Card key={idx} sx={{ p: 2 }}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">{proj.title}</Typography>
              <Chip
                label={proj.status}
                color={proj.status === 'Ongoing' ? 'primary' : 'default'}
              />
            </Stack>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {proj.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Projects;
