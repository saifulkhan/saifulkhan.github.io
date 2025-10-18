import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const ArxivIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#B31B1B" />
    <text x="16" y="21" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="Lato, sans-serif">
      arXiv
    </text>
  </SvgIcon>
);

export default ArxivIcon;
