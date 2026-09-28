import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { SxProps, Theme } from '@mui/material';

// props for tag filter component
export interface TagFilterProps {
  tags: string[];
  filter: string | null;
  setFilter: (filter: string | null) => void;
  tagCounts?: Record<string, number>; // tag to count mapping
  sx?: SxProps<Theme>;
}

// chip-based tag filter, consistent across desktop and mobile
const TagFilter: React.FC<TagFilterProps> = ({ tags, filter, setFilter, tagCounts = {}, sx }) => {
  // Unique sorted tag options
  const tagOptions = useMemo(() => {
    const preferredOrder = ['Software Engineering', 'Machine Learning', 'Visualization', 'LLM'];
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
  }, [tags]);

  return (
    <Box
      sx={[{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: { xs: 3, md: 4 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      role="group"
      aria-label="Filter by topic"
    >
      <Chip
        label="All"
        size="small"
        clickable
        color={filter === null ? 'primary' : 'default'}
        variant={filter === null ? 'filled' : 'outlined'}
        onClick={() => setFilter(null)}
      />
      {tagOptions.map((tag) => {
        const selected = filter === tag;
        const count = tagCounts[tag];
        return (
          <Chip
            key={tag}
            label={count ? `${tag} · ${count}` : tag}
            size="small"
            clickable
            color={selected ? 'primary' : 'default'}
            variant={selected ? 'filled' : 'outlined'}
            onClick={() => setFilter(selected ? null : tag)}
          />
        );
      })}
    </Box>
  );
};

export default TagFilter;
