import {
  Code2,
  Database,
  LayoutDashboard,
  Palette,
  Rocket,
  Smartphone,
} from 'lucide-react';

export const technologiesContent = {
  es: {
    eyebrow: 'Tecnologias',
    title: 'Herramientas para construir experiencias modernas.',
    description:
      'Trabajo con tecnologias enfocadas en crear interfaces rapidas, mantenibles y listas para publicarse en produccion.',
  },
  en: {
    eyebrow: 'Technologies',
    title: 'Tools for building modern experiences.',
    description:
      'I work with technologies focused on creating fast, maintainable interfaces ready for production.',
  },
};

export const skillsContent = {
  es: [
    {
      name: 'React',
      description: 'Componentes reutilizables y experiencias interactivas.',
      icon: Code2,
    },
    {
      name: 'TypeScript',
      description: 'Codigo mas seguro, ordenado y facil de mantener.',
      icon: Database,
    },
    {
      name: 'Tailwind CSS',
      description: 'Interfaces limpias con estilos consistentes y responsive.',
      icon: LayoutDashboard,
    },
    {
      name: 'Responsive Design',
      description: 'Disenos adaptados para celular, tablet y escritorio.',
      icon: Smartphone,
    },
    {
      name: 'UI Design',
      description: 'Criterio visual para construir pantallas claras y modernas.',
      icon: Palette,
    },
    {
      name: 'Deploy Netlify',
      description: 'Publicacion continua desde GitHub hacia produccion.',
      icon: Rocket,
    },
  ],
  en: [
    {
      name: 'React',
      description: 'Reusable components and interactive experiences.',
      icon: Code2,
    },
    {
      name: 'TypeScript',
      description: 'Safer, cleaner and easier-to-maintain code.',
      icon: Database,
    },
    {
      name: 'Tailwind CSS',
      description: 'Clean interfaces with consistent responsive styling.',
      icon: LayoutDashboard,
    },
    {
      name: 'Responsive Design',
      description: 'Layouts adapted for mobile, tablet and desktop.',
      icon: Smartphone,
    },
    {
      name: 'UI Design',
      description: 'Visual judgment for clear and modern screens.',
      icon: Palette,
    },
    {
      name: 'Netlify Deploy',
      description: 'Continuous publishing from GitHub to production.',
      icon: Rocket,
    },
  ],
};
