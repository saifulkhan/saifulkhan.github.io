import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';

// props for tag filter component
export interface TagFilterProps {
  tags: string[];
  filter: string | null;
  setFilter: (filter: string | null) => void;
  tagCounts?: Record<string, number>; // tag to count mapping
  sx?: object;
}

// tag filter component with tag count badges and improved design
const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  filter,
  setFilter,
  tagCounts = {},
  sx,
}) => {
  // Unique sorted tag options
  const preferredOrder = [
    'System',
    'Software',
    'Visualization',
    'Machine Learning',
    'LLM',
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
          <ToggleButton
            key={tag}
            value={tag}
            sx={{
              fontSize: 13,
              px: 2,
              py: 0.5,
              borderRadius: 8,
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              background: filter === tag ? '#f5f5f5' : '#fff',
              border:
                filter === tag ? '1px solid #e0e0e0' : '1px solid #e0e0e0',
              boxShadow:
                filter === tag ? '0 1px 8px rgba(124,58,237,0.07)' : 'none',
              color: filter === tag ? '#222' : '#222',
              fontWeight: filter === tag ? 600 : 400,
              transition: 'all 0.15s',
              '&:hover': {
                borderColor: '#f3e8ff',
                background: '#f3e8ff',
              },
            }}
          >
            <span>{tag}</span>
            {typeof tagCounts[tag] === 'number' && (
              <span
                style={{
                  marginLeft: 6,
                  background: '#ede9fe',
                  color: '#222',
                  fontWeight: 'normal',
                  fontSize: 11,
                  borderRadius: 8,
                  padding: '0 7px',
                  minWidth: 22,
                  display: 'inline-block',
                  textAlign: 'center',
                  lineHeight: '20px',
                }}
                aria-label={`count for ${tag}`}
              >
                {tagCounts[tag]}
              </span>
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
