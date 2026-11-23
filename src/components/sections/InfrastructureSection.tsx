import React from 'react';
import { Box, Container } from '@mui/material';
import PageHeader from '../PageHeader';
import ExpertiseMap from '../ExpertiseMap';

// The expertise map: the software services I build, between the application domains and the facilities they run on.
// No intro text: the bio just above states the vision that the map shows.
export default function InfrastructureSection() {
  return (
    <Box
      component="section"
      id="infrastructure"
      sx={{ scrollMarginTop: { xs: 56, md: 64 }, borderTop: 1, borderColor: 'divider' }}
    >
      {/* the heading lines up with the other sections' headings */}
      <Container sx={{ pt: { xs: 5, md: 7 } }}>
        <PageHeader eyebrow="What I build" title="Software infrastructure for supporting modelling" />
      </Container>

      {/* the map is wider than the text column: it needs the room for its five service columns */}
      <Box
        sx={{ width: { xs: '100%', md: 'min(1240px, 92vw)' }, mx: 'auto', px: { xs: 2, sm: 3 }, pb: { xs: 5, md: 7 } }}
      >
        <ExpertiseMap />
      </Box>
    </Box>
  );
}
