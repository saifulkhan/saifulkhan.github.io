import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Stack } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface NavBarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, onToggleTheme }) => (
  <AppBar position="static" color="default" elevation={0}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        {/* My Personal Site */}
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Link href="/" passHref legacyBehavior>
          <a>About</a>
        </Link>
        <Link href="/software" passHref legacyBehavior>
          <a>Software</a>
        </Link>
        <Link href="/projects" passHref legacyBehavior>
          <a>Projects</a>
        </Link>
        {/* <Link href="/publications" passHref legacyBehavior>
          <a>Publications</a>
        </Link> */}
        <IconButton sx={{ ml: 1 }} onClick={onToggleTheme} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {/* <Switch checked={darkMode} onChange={onToggleTheme} /> */}
      </Stack>
    </Toolbar>
  </AppBar>
);

export default NavBar;
