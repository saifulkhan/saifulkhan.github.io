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
  ListItemButton,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface NavBarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Software', path: '/software' },
  { name: 'Projects', path: '/projects' },
  { name: 'Publications', path: '/publication' },
];

const NavBar: React.FC<NavBarProps> = ({ darkMode, onToggleTheme }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ pt: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            href={item.path}
            selected={isActive(item.path)}
            sx={{ borderRadius: 2, mx: 1 }}
          >
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{
                fontWeight: isActive(item.path) ? 700 : 500,
                color: isActive(item.path) ? 'primary' : 'text.primary',
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: alpha(theme.palette.background.default, 0.85),
        backdropFilter: 'blur(8px)',
        color: 'text.primary',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 64 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isMobile && (
              <IconButton color="inherit" aria-label="open navigation" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={Link}
              href="/"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Saiful Khan
            </Typography>
          </Box>

          <Stack direction="row" spacing={{ xs: 0.5, md: 1 }} alignItems="center">
            {!isMobile &&
              navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Typography
                    key={item.path}
                    component={Link}
                    href={item.path}
                    sx={{
                      position: 'relative',
                      px: 1,
                      py: 2.5,
                      fontSize: 15,
                      fontWeight: active ? 700 : 500,
                      color: active ? 'text.primary' : 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'text.primary' },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 8,
                        right: 8,
                        bottom: 0,
                        height: 2,
                        borderRadius: 1,
                        backgroundColor: active ? 'primary.main' : 'transparent',
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                );
              })}
            <IconButton onClick={onToggleTheme} color="inherit" aria-label="toggle dark mode" size="small">
              {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
