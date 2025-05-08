import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';

export interface TagFilterProps {
  tags: string[];
  filter: string | null;
  setFilter: (filter: string | null) => void;
  sx?: object;
}

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  filter,
  setFilter,
  sx,
}) => {
  // Unique sorted tag options
  const preferredOrder = [
    'Infrastructure',
    'System',
    'visualisation',
    'machine learning',
    'llm',
    // Add more preferred tags here in order if needed
  ];
  const tagOptions = Array.from(new Set(tags))
    .filter((tag) => tag !== 'DPhil Thesis')
    .sort((a, b) => {
      const indexA = preferredOrder.indexOf(a);
      const indexB = preferredOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) return 0; // both not found, preserve order
      if (indexA === -1) return 1; // a is not preferred, b is
      if (indexB === -1) return -1; // b is not preferred, a is
      return indexA - indexB;
    });
  const handleFilter = (
    _: React.MouseEvent<HTMLElement>,
    newFilter: string | null,
  ) => {
    setFilter(newFilter);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, ...sx }}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        size="small"
      >
        {tagOptions.map((tag) => (
          <ToggleButton key={tag} value={tag} sx={{ fontSize: 13 }}>
            {tag}
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
