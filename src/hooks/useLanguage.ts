import { useEffect, useState } from 'react';
import {
  getInitialLanguage,
  getNextLanguage,
  saveLanguage,
} from '../controllers/languageController';
import type { Language } from '../types/language';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  function toggleLanguage() {
    setLanguage(getNextLanguage);
  }

  useEffect(() => {
    saveLanguage(language);
  }, [language]);

  return { language, toggleLanguage };
}
