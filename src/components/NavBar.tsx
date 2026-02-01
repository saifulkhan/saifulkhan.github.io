import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface NavBarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, onToggleTheme }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath = router.pathname;

  const isActive = (path: string) => currentPath === path;

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Software', path: '/software' },
    { name: 'Projects', path: '/projects' },
    { name: 'Publication', path: '/publication' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            href={item.path}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
              fontWeight: isActive(item.path) ? 'bold' : 'normal',
              justifyContent: 'center',
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMobile && (
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: isMobile ? 1 : 0 }}>
          {/* Optional: Add your name or logo here */}
        </Typography>

        {!isMobile && (
          <Stack direction="row" spacing={3} alignItems="center">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref legacyBehavior>
                <a
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'text-decoration 0.2s',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <IconButton onClick={onToggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Stack>
        )}

        {isMobile && (
          <IconButton onClick={onToggleTheme} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        )}
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
