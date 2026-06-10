import * as React from 'react';
import { ThemeProviderContext, type Theme } from '@/components/theme/theme-context';

const storageKey = 'anna-web-theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    return (window.localStorage.getItem(storageKey) as Theme | null) ?? defaultTheme;
  });
  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return theme === 'system' ? getSystemTheme() : theme;
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const nextResolvedTheme = theme === 'system' ? getSystemTheme() : theme;
      const root = window.document.documentElement;

      root.classList.toggle('dark', nextResolvedTheme === 'dark');
      root.dataset.theme = nextResolvedTheme;
      setResolvedTheme(nextResolvedTheme);
    };

    applyTheme();
    mediaQuery.addEventListener('change', applyTheme);

    return () => {
      mediaQuery.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  const setTheme = React.useCallback((nextTheme: Theme) => {
    window.localStorage.setItem(storageKey, nextTheme);
    setThemeState(nextTheme);
  }, []);

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme],
  );

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}
