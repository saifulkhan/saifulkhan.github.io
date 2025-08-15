import React, { useMemo } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useTheme, useMediaQuery, SxProps, Theme } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

// props for tag filter component
export interface TagFilterProps {
  tags: string[];
  filter: string | null;
  setFilter: (filter: string | null) => void;
  tagCounts?: Record<string, number>; // tag to count mapping
  sx?: SxProps<Theme>;
}

// tag filter component with tag count badges and improved design
const TagFilter: React.FC<TagFilterProps> = ({ tags, filter, setFilter, tagCounts = {}, sx }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Unique sorted tag options
  const preferredOrder = ['Software Engineering', 'Machine Learning', 'Visualization', 'LLM'];

  const tagOptions = useMemo(() => {
    return Array.from(new Set(tags))
      .filter((tag) => tag !== 'DPhil Thesis')
      .sort((a, b) => {
        const indexA = preferredOrder.indexOf(a);
        const indexB = preferredOrder.indexOf(b);
        if (indexA === -1 && indexB === -1) return 0; // both not found, preserve order
        if (indexA === -1) return 1; // a is not preferred, b is
        if (indexB === -1) return -1; // b is not preferred, a is
        return indexA - indexB;
      });
  }, [tags, preferredOrder]);

  const handleFilter = (_: React.MouseEvent<HTMLElement>, newFilter: string | null) => {
    setFilter(newFilter);
  };
  // Mobile view - show simple list of tags with horizontal scroll
  if (isMobile) {
    return (
      <Box
        sx={[
          {
            display: 'flex',
            flexDirection: 'column',
            mb: 2,
            width: '100%',
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        role="group"
        aria-label="Filter by tag"
      >
        <Box sx={{ overflowX: 'auto', pb: 1, whiteSpace: 'nowrap' }}>
          {tagOptions.map((tag) => (
            <Chip
              key={tag}
              label={`${tag}${tagCounts[tag] ? ` (${tagCounts[tag]})` : ''}`}
              onClick={() => setFilter(tag === filter ? null : tag)}
              color={tag === filter ? 'primary' : 'default'}
              variant={tag === filter ? 'filled' : 'outlined'}
              sx={{ mr: 1, mb: 1 }}
              size="small"
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip title="Reset filter">
            <span>
              <IconButton
                onClick={() => setFilter(null)}
                disabled={filter === null}
                size="small"
                sx={{
                  border: '1px solid #ccc',
                  background: '#fff',
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <RestartAltIcon fontSize="small" />
              </IconButton>
            </span>
          </Tooltip>
        </Box>
      </Box>
    );
  }

  // Desktop view - original toggle button group
  return (
    <Box
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          width: '100%',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      role="group"
      aria-label="Filter by tag"
    >
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        size="small"
        sx={{
          '& .MuiToggleButtonGroup-grouped': {
            m: 0,
            border: `1px solid ${theme.palette.divider}`,
            '&:not(:last-of-type)': {
              borderRight: 0,
            },
            '&:first-of-type': {
              borderRadius: '4px 0 0 4px',
            },
            '&:last-of-type': {
              borderRadius: '0 4px 4px 0',
            },
          },
        }}
      >
        {tagOptions.map((tag) => (
          <ToggleButton
            key={tag}
            value={tag}
            sx={{
              px: 2,
              py: 0.5,
              fontSize: 13,
              fontFamily: 'Roboto Condensed, Arial Narrow',
              textTransform: 'none',
              '&.Mui-selected': {
                backgroundColor: theme.palette.action.selected,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          >
            {tag}
            {tagCounts[tag] > 0 && (
              <Box
                component="span"
                sx={{
                  ml: 0.5,
                  px: 1,
                  py: 0.25,
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.text.secondary,
                  borderRadius: 10,
                  fontSize: '0.7rem',
                  lineHeight: 1,
                }}
              >
                {tagCounts[tag]}
              </Box>
            )}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Box sx={{ ml: 2 }}>
        <Tooltip title="Reset filter">
          <span>
            <IconButton
              onClick={() => setFilter(null)}
              disabled={filter === null}
              size="small"
              sx={{ border: '1px solid #ccc', background: '#fff' }}
            >
              <RestartAltIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default TagFilter;
