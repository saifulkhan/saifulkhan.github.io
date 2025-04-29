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
  const tagOptions = Array.from(new Set(tags))
    .filter((tag) => tag !== 'DPhil Thesis')
    .sort((a, b) => b.localeCompare(a));
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
