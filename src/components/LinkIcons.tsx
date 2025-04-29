import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import NpmIcon from './NpmIcon';

export type LinkType = 'github' | 'npm' | 'external' | 'arxiv';

export interface LinkIcon {
  type: LinkType;
  url: string;
  label?: string;
}

interface LinkIconsProps {
  links: LinkIcon[];
  iconSize?: number;
  spacing?: number;
  // If true, renders as inline-flex (for publications), else block (for software)
  inline?: boolean;
}

const LinkIcons: React.FC<LinkIconsProps> = ({
  links,
  iconSize = 16,
  spacing = 0.5,
  inline = true,
}) => {
  return (
    <span
      style={{ display: inline ? 'inline-flex' : 'flex', alignItems: 'center' }}
    >
      {links.map((link, i) => {
        if (link.type === 'github') {
          return (
            <IconButton
              key={link.url}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={link.label ? `GitHub: ${link.label}` : 'GitHub'}
              size="small"
              sx={{ fontSize: iconSize, ml: i > 0 ? spacing : 0 }}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          );
        }
        if (link.type === 'npm') {
          return (
            <IconButton
              key={link.url}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label="NPM"
              size="small"
              sx={{ fontSize: iconSize, ml: i > 0 ? spacing : 0 }}
            >
              <NpmIcon fontSize="inherit" />
            </IconButton>
          );
        }
        if (link.type === 'external' || link.type === 'arxiv') {
          return (
            <IconButton
              key={link.url}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={link.label || 'External'}
              size="small"
              sx={{ fontSize: iconSize, ml: i > 0 ? spacing : 0 }}
            >
              <OpenInNewIcon fontSize="inherit" />
            </IconButton>
          );
        }
        return null;
      })}
    </span>
  );
};

export default LinkIcons;
