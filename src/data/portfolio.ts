import type { Language } from '../types/language';
import { aboutContent } from './about';
import { contactContent } from './contact';
import { footerContent } from './footer';
import { heroContent } from './hero';
import { highlightsContent } from './highlights';
import { navigationContent } from './navigation';
import { profileContent } from './profile';
import { projectsContent, projectsSectionContent } from './projects';
import { skillsContent, technologiesContent } from './technologies';
import { statsContent } from './stats';

export const portfolioContent = {
  es: {
    navItems: navigationContent.es,
    profile: profileContent.es,
    hero: heroContent.es,
    stats: statsContent.es,
    highlights: highlightsContent.es,
    about: aboutContent.es,
    technologies: technologiesContent.es,
    skills: skillsContent.es,
    projectsSection: projectsSectionContent.es,
    projects: projectsContent.es,
    contact: contactContent.es,
    footer: footerContent.es,
  },
  en: {
    navItems: navigationContent.en,
    profile: profileContent.en,
    hero: heroContent.en,
    stats: statsContent.en,
    highlights: highlightsContent.en,
    about: aboutContent.en,
    technologies: technologiesContent.en,
    skills: skillsContent.en,
    projectsSection: projectsSectionContent.en,
    projects: projectsContent.en,
    contact: contactContent.en,
    footer: footerContent.en,
  },
};

export type PortfolioContent = (typeof portfolioContent)['es'];

export function getPortfolioContent(language: Language): PortfolioContent {
  return portfolioContent[language];
}
