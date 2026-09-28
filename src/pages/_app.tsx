import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const FONT_FAMILY = '"Lato", "Helvetica Neue", Arial, sans-serif';

function buildTheme(mode: 'light' | 'dark') {
  const isDark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      primary: { main: isDark ? '#8ab4f8' : '#1d4ed8' },
      background: isDark ? { default: '#0e1116', paper: '#151a21' } : { default: '#ffffff', paper: '#ffffff' },
      text: isDark ? { primary: '#e6edf3', secondary: '#9aa4af' } : { primary: '#1f2328', secondary: '#57606a' },
      divider: isDark ? 'rgba(230, 237, 243, 0.12)' : 'rgba(31, 35, 40, 0.12)',
      success: { main: isDark ? '#57ab5a' : '#1a7f37' },
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: FONT_FAMILY,
      h3: { fontWeight: 800, letterSpacing: '-0.02em' },
      h4: { fontWeight: 800, letterSpacing: '-0.01em' },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
      subtitle1: { fontWeight: 600 },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.6 },
      overline: { fontWeight: 700, letterSpacing: '0.12em' },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiLink: {
        defaultProps: { underline: 'hover' },
      },
      MuiChip: {
        styleOverrides: { root: { fontWeight: 500 } },
      },
    },
  });
}

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = window.localStorage.getItem('color-mode');
    if (saved === 'dark' || saved === 'light') {
      setMode(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  const handleToggleTheme = () =>
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('color-mode', next);
      return next;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar darkMode={mode === 'dark'} onToggleTheme={handleToggleTheme} />
        <Box component="main" sx={{ flex: 1 }}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
