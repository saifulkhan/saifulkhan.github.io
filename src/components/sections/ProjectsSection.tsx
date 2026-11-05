import React from 'react';
import { Box, Container, Typography, Stack, Divider, Chip } from '@mui/material';
import TagFilter from '../TagFilter';
import PageHeader from '../PageHeader';
import projectsList, { type ProjectEntry } from '../../data/projects';

// one labelled metadata field, e.g. "ROLE  Technical Lead"
const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75 }}>
    <Typography
      component="dt"
      sx={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'text.secondary',
      }}
    >
      {label}
    </Typography>
    <Typography component="dd" variant="body2" sx={{ m: 0, fontSize: 13, color: 'text.primary' }}>
      {value}
    </Typography>
  </Box>
);

const TITLE_SX = { fontWeight: 700, fontSize: 16, lineHeight: 1.4 };

const ProjectItem = ({ proj, number }: { proj: ProjectEntry; number: number }) => {
  const roles = proj.role.filter((r) => r.trim());
  // funder first, then the amount if given: "EPSRC (£584k)"
  const [funder, ...amount] = proj.funding;
  return (
    // number hangs in its own column so the description and metadata line up under the title
    <Box component="li" sx={{ display: 'flex', gap: 1.5 }}>
      <Typography
        variant="subtitle1"
        sx={{
          ...TITLE_SX,
          minWidth: 20,
          textAlign: 'right',
          color: 'text.secondary',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {number}.
      </Typography>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75, flexWrap: 'wrap' }}>
          <Typography variant="subtitle1" sx={TITLE_SX}>
            {proj.title}
          </Typography>
          {proj.status === 'Ongoing' && (
            <Chip
              label="Active"
              size="small"
              color="success"
              variant="outlined"
              sx={{ height: 20, fontSize: 11, fontWeight: 600 }}
            />
          )}
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {proj.description}
        </Typography>

        <Box component="dl" sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 3, rowGap: 0.5, m: 0, mt: 1.25 }}>
          {roles.length > 0 && <MetaItem label="Role" value={roles.join(', ')} />}
          {proj.organisation.length > 0 && <MetaItem label="Organisation" value={proj.organisation.join(', ')} />}
          {funder && <MetaItem label="Funding" value={amount.length ? `${funder} (${amount.join(', ')})` : funder} />}
        </Box>
      </Box>
    </Box>
  );
};

const SectionHeading = ({ label, count }: { label: string; count: number }) => (
  <>
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
      <Typography variant="h6">{label}</Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {count}
      </Typography>
    </Box>
    <Divider sx={{ mb: 3 }} />
  </>
);

const ProjectsSection = () => {
  const [filter, setFilter] = React.useState<string | null>(null);

  // categorize projects into grants and other projects
  const grants = projectsList.filter((proj) => proj.funding && proj.funding.length > 1);
  const projects = projectsList.filter((proj) => !grants.includes(proj));

  const allTags = projectsList.flatMap((p) => p.tags || []);
  const tagCounts = allTags.reduce<Record<string, number>>((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const filteredGrants = filter ? grants.filter((proj) => proj.tags && proj.tags.includes(filter)) : grants;
  const filteredProjects = filter ? projects.filter((proj) => proj.tags && proj.tags.includes(filter)) : projects;

  return (
    <Box
      component="section"
      id="projects"
      // faint tint sets this long section apart from its neighbours
      sx={{
        scrollMarginTop: { xs: 56, md: 64 },
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#131820' : '#F3F1EC'),
      }}
    >
      <Container sx={{ py: { xs: 5, md: 7 } }}>
        <PageHeader
          eyebrow="Work"
          title="Grants & Projects"
          subtitle="Funded research programmes and engineering projects I lead and contribute to."
        />

        <TagFilter tags={allTags} filter={filter} setFilter={setFilter} tagCounts={tagCounts} />

        {filteredGrants.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <SectionHeading label="Grants" count={filteredGrants.length} />
            <Stack component="ol" spacing={3.5} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {filteredGrants.map((proj, idx) => (
                <ProjectItem key={`grant-${idx}`} proj={proj} number={idx + 1} />
              ))}
            </Stack>
          </Box>
        )}

        {filteredProjects.length > 0 && (
          <Box>
            <SectionHeading label="Projects" count={filteredProjects.length} />
            <Stack component="ol" spacing={3.5} sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {filteredProjects.map((proj, idx) => (
                <ProjectItem key={`project-${idx}`} proj={proj} number={idx + 1} />
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsSection;
