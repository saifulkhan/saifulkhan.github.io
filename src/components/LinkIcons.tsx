import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import NpmIcon from './NpmIcon';

// linktype: defines supported link types, now includes pdf
export type LinkType = 'github' | 'npm' | 'external' | 'arxiv' | 'pdf';

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

/**
 * linkicons: renders a row of icon buttons for each link in the links array
 * supports github, npm, external, arxiv, and pdf link types
 */
const LinkIcons: React.FC<LinkIconsProps> = ({ links, iconSize = 16, spacing = 0.5, inline = true }) => {
  return (
    <span style={{ display: inline ? 'inline-flex' : 'flex', alignItems: 'center' }}>
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
              {/* set github icon color to dark gray */}
              <GitHubIcon fontSize="inherit" htmlColor="#333" />
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
        // if the link type is pdf, render a pdf icon
        if (link.type === 'pdf') {
          return (
            <IconButton
              key={link.url}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={link.label || 'PDF'}
              size="small"
              sx={{ fontSize: iconSize, ml: i > 0 ? spacing : 0 }}
            >
              {/* simple pdf svg icon */}
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" rx="3" fill="#E53935" />
                <text
                  x="10"
                  y="15"
                  textAnchor="middle"
                  fontFamily="Arial, Helvetica, sans-serif"
                  fontWeight="bold"
                  fontSize="9"
                  fill="#fff"
                >
                  PDF
                </text>
              </svg>
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
