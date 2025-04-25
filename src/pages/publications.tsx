import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Link,
} from '@mui/material';

const publications = [
  {
    title: 'Title of Publication 1',
    authors: 'Author1, Author2',
    journal: 'Journal Name',
    year: 2024,
    link: '#',
    tag: 'Landslides',
  },
  {
    title: 'Title of Publication 2',
    authors: 'Author1, Author2',
    journal: 'Another Journal',
    year: 2023,
    link: '#',
    tag: 'ADWR',
  },
];

const Publications = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Publications
    </Typography>
    <Stack spacing={3}>
      {publications.map((pub, idx) => (
        <Card key={idx} sx={{ p: 2 }}>
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Chip
                label={pub.tag}
                color={pub.tag === 'Landslides' ? 'secondary' : 'primary'}
              />
              <Typography variant="h6">{pub.title}</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {pub.authors}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pub.journal}, {pub.year}
            </Typography>
            {pub.link && (
              <Link href={pub.link} target="_blank" rel="noopener">
                Read more
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Publications;
