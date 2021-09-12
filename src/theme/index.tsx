import { ReactNode, useMemo } from 'react';

import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

interface IThemeConfig {
  children: ReactNode
};

export default function ThemeConfig({ children }: IThemeConfig) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
