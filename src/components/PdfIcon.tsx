import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

const PdfIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 20 20">
    <rect width="20" height="20" rx="3" fill="#E53935" />
    <text x="10" y="15" textAnchor="middle" fontFamily="Lato, sans-serif" fontWeight="bold" fontSize="9" fill="#fff">
      PDF
    </text>
  </SvgIcon>
);

export default PdfIcon;
