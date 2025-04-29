import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

/**
 * NpmIcon: renders a custom SVG for the npm logo.
 */
const NpmIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 50 50">
      <rect width="50" height="48" rx="4" fill="#CB3837" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="20"
        fill="#FFF"
      >
        NPM
      </text>
    </SvgIcon>
  );
};

export default NpmIcon;
