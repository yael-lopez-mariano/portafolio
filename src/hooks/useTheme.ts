import { useEffect, useState } from 'react';
import {
  applyThemeToDocument,
  getInitialTheme,
  getNextTheme,
  isDarkTheme,
  saveTheme,
} from '../controllers/themeController';
import type { Theme } from '../types/theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const initialTheme = getInitialTheme();
    applyThemeToDocument(initialTheme);
    return initialTheme;
  });

  const isDark = isDarkTheme(theme);

  function toggleTheme() {
    setTheme(getNextTheme);
  }

  useEffect(() => {
    saveTheme(theme);
  }, [theme]);

  return { isDark, theme, toggleTheme };
}
