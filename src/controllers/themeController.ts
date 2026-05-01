import type { Theme } from '../types/theme';

const themeStorageKey = 'portfolio-theme';
const themeVersionKey = 'portfolio-theme-version';
const currentThemeVersion = 'portfolio-theme-v4';
const defaultTheme: Theme = 'dark';

export function getInitialTheme(): Theme {
  const savedVersion = localStorage.getItem(themeVersionKey);

  if (savedVersion !== currentThemeVersion) {
    localStorage.setItem(themeVersionKey, currentThemeVersion);
    localStorage.setItem(themeStorageKey, defaultTheme);
    return defaultTheme;
  }

  const savedTheme = localStorage.getItem(themeStorageKey);
  return isTheme(savedTheme) ? savedTheme : defaultTheme;
}

export function getNextTheme(currentTheme: Theme): Theme {
  return currentTheme === 'dark' ? 'light' : 'dark';
}

export function saveTheme(theme: Theme) {
  localStorage.setItem(themeStorageKey, theme);
  applyThemeToDocument(theme);
}

export function isDarkTheme(theme: Theme) {
  return theme === 'dark';
}

export function applyThemeToDocument(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark';
}
