import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', mt: 8, py: 4 }}>
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1.5,
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        © {new Date().getFullYear()} Saiful Khan
      </Typography>
      <SocialLinks iconSize={18} />
    </Container>
  </Box>
);

export default Footer;
