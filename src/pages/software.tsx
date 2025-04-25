import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from '@mui/material';

const softwareList = [
  {
    name: 'AwesomeTool',
    image: '/awesome-tool.png',
    description: 'A brief description of AwesomeTool.',
    github: 'https://github.com/yourusername/awesometool',
    npm: 'https://www.npmjs.com/package/awesometool',
  },
  {
    name: 'CoolLib',
    image: '/cool-lib.png',
    description: 'A brief description of CoolLib.',
    github: 'https://github.com/yourusername/coollib',
    npm: 'https://www.npmjs.com/package/coollib',
  },
];

const Software = () => (
  <Box sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Software
    </Typography>
    <Stack spacing={3}>
      {softwareList.map((sw, idx) => (
        <Card key={idx} sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 120, height: 120, objectFit: 'contain', mr: 3 }}
            image={sw.image}
            alt={sw.name}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">{sw.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {sw.description}
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <Button href={sw.github} target="_blank" variant="outlined">
                GitHub
              </Button>
              <Button href={sw.npm} target="_blank" variant="contained">
                npm
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Software;
