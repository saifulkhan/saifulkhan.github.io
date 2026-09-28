import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const links = [
  { label: 'Email', href: 'mailto:saiful.etc@gmail.com', icon: EmailIcon },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?hl=en&user=lZLfsJwAAAAJ&view_op=list_works&sortby=pubdate',
    icon: SchoolIcon,
  },
  { label: 'GitHub', href: 'https://github.com/saifulkhan', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khansaiful/', icon: LinkedInIcon },
];

interface SocialLinksProps {
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ iconSize = 20 }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: -1 }}>
    {links.map(({ label, href, icon: Icon }) => (
      <Tooltip key={label} title={label}>
        <IconButton
          component="a"
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel="noopener"
          aria-label={label}
          size="small"
          sx={{
            color: 'text.secondary',
            transition: 'color 0.2s ease, transform 0.2s ease',
            '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
          }}
        >
          <Icon sx={{ fontSize: iconSize }} />
        </IconButton>
      </Tooltip>
    ))}
  </Box>
);

export default SocialLinks;
