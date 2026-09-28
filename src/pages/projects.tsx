import React from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Stack, Divider, Chip } from '@mui/material';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import TagFilter from '../components/TagFilter';
import PageHeader from '../components/PageHeader';
import projectsList, { type ProjectEntry } from '../data/projects';

// single metadata item with icon and text
const MetaItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
    {icon}
    <Typography variant="body2" sx={{ fontSize: 13, color: 'text.secondary' }}>
      {text}
    </Typography>
  </Box>
);

const ProjectItem = ({ proj }: { proj: ProjectEntry }) => (
  <Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75, flexWrap: 'wrap' }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 16, lineHeight: 1.4 }}>
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

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1.25, alignItems: 'center' }}>
      {proj.role && proj.role.filter((r) => r && r.trim()).length > 0 && (
        <MetaItem
          icon={<EngineeringTwoToneIcon sx={{ fontSize: 14, color: 'text.secondary' }} />}
          text={proj.role.filter((r) => r && r.trim()).join(', ')}
        />
      )}
      {proj.organisation && proj.organisation.length > 0 && (
        <MetaItem
          icon={<BusinessTwoToneIcon sx={{ fontSize: 14, color: 'text.secondary' }} />}
          text={proj.organisation.join(', ')}
        />
      )}
      {proj.funding && proj.funding.length > 0 && (
        <MetaItem
          icon={<AccountBalanceTwoToneIcon sx={{ fontSize: 14, color: 'text.secondary' }} />}
          text={proj.funding.join(', ')}
        />
      )}
    </Box>
  </Box>
);

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

const Projects = () => {
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
    <>
      <Head>
        <title>Projects | Saiful Khan</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <PageHeader
          eyebrow="Work"
          title="Grants & Projects"
          subtitle="Funded research programmes and engineering projects I lead and contribute to."
        />

        <TagFilter tags={allTags} filter={filter} setFilter={setFilter} tagCounts={tagCounts} />

        {filteredGrants.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <SectionHeading label="Grants" count={filteredGrants.length} />
            <Stack spacing={3.5}>
              {filteredGrants.map((proj, idx) => (
                <ProjectItem key={`grant-${idx}`} proj={proj} />
              ))}
            </Stack>
          </Box>
        )}

        {filteredProjects.length > 0 && (
          <Box>
            <SectionHeading label="Projects" count={filteredProjects.length} />
            <Stack spacing={3.5}>
              {filteredProjects.map((proj, idx) => (
                <ProjectItem key={`project-${idx}`} proj={proj} />
              ))}
            </Stack>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Projects;
