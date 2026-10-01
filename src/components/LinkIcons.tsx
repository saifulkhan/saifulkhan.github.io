import React, { useState } from 'react';
import { IconButton, SxProps, Theme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LanguageIcon from '@mui/icons-material/Language';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import NpmIcon from './NpmIcon';
import VideoDialog from './VideoDialog';

// linktype: defines supported link types, now includes pdf and video
export type LinkType = 'github' | 'npm' | 'web' | 'arxiv' | 'pdf' | 'video';

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

// play-icon button that opens the video in a popup dialog instead of navigating away
const VideoLinkButton: React.FC<{ url: string; label?: string; sx: SxProps<Theme> }> = ({ url, label, sx }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)} aria-label={label || 'Play video'} size="small" sx={sx}>
        <PlayCircleOutlineIcon fontSize="inherit" />
      </IconButton>
      <VideoDialog open={open} src={url} title={label} onClose={() => setOpen(false)} />
    </>
  );
};

/**
 * linkicons: renders a row of icon buttons for each link in the links array
 * supports github, npm, web, arxiv, and pdf link types
 */
const LinkIcons: React.FC<LinkIconsProps> = ({ links, iconSize = 16, spacing = 0.5, inline = true }) => {
  return (
    <span style={{ display: inline ? 'inline-flex' : 'flex', alignItems: 'center' }}>
      {links.map((link, i) => {
        if (link.type === 'github') {
          return (
            <IconButton
              key={`${link.url}-${i}`}
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
              key={`${link.url}-${i}`}
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
        if (link.type === 'video') {
          return (
            <VideoLinkButton
              key={`${link.url}-${i}`}
              url={link.url}
              label={link.label}
              sx={{ fontSize: iconSize, ml: i > 0 ? spacing : 0 }}
            />
          );
        }
        // if the link type is pdf, render a pdf icon
        if (link.type === 'pdf') {
          return (
            <IconButton
              key={`${link.url}-${i}`}
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
                  fontFamily="Lato, sans-serif"
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
        if (link.type === 'web') {
          return (
            <IconButton
              key={`${link.url}-${i}`}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={link.label || 'Website'}
              size="small"
              sx={{ fontSize: iconSize, ml: i > 0 ? spacing : 0 }}
            >
              <LanguageIcon fontSize="inherit" />
            </IconButton>
          );
        }
        if (link.type === 'arxiv') {
          return (
            <IconButton
              key={`${link.url}-${i}`}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={link.label || 'arXiv'}
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
