import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const DoiIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <rect width="32" height="32" rx="6" fill="#FCB425" />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fontSize="13"
      fontWeight="bold"
      fill="#1f2328"
      fontFamily="Lato, sans-serif"
    >
      DOI
    </text>
  </SvgIcon>
);

export default DoiIcon;
