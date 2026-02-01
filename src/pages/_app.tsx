import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { useMemo, useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Toolbar } from '@mui/material';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
    }
  }, [darkMode]);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: { main: '#7c3aed' },
        },
      }),
    [darkMode],
  );

  const handleToggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} onToggleTheme={handleToggleTheme} />
      <Toolbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
