import React from 'react';
import { Box, Typography } from '@mui/material';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, subtitle }) => (
  <Box sx={{ mb: { xs: 4, md: 5 } }}>
    {eyebrow && (
      <Typography variant="overline" sx={{ color: 'primary.main', display: 'block', mb: 0.5 }}>
        {eyebrow}
      </Typography>
    )}
    <Typography variant="h4" component="h1" sx={{ mb: subtitle ? 1 : 0 }}>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 640 }}>
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default PageHeader;
