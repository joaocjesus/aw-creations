import * as React from 'react';

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderContextValue = {
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
};

export const ThemeProviderContext = React.createContext<ThemeProviderContextValue | null>(null);

export function useTheme() {
  const context = React.useContext(ThemeProviderContext);

  if (!context) {
    throw new Error('useTheme must be used inside <ThemeProvider>.');
  }

  return context;
}
