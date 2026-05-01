import type { Language } from '../types/language';

const languageStorageKey = 'portfolio-language';
const defaultLanguage: Language = 'es';

export function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem(languageStorageKey);
  return isLanguage(savedLanguage) ? savedLanguage : defaultLanguage;
}

export function getNextLanguage(currentLanguage: Language): Language {
  return currentLanguage === 'es' ? 'en' : 'es';
}

export function saveLanguage(language: Language) {
  localStorage.setItem(languageStorageKey, language);
}

function isLanguage(value: string | null): value is Language {
  return value === 'es' || value === 'en';
}
