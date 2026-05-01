import {
  Code2,
  Database,
  LayoutDashboard,
  Palette,
  Rocket,
  Smartphone,
} from 'lucide-react';
import type { Language } from '../types/language';

export const portfolioContent = {
  es: {
    navItems: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Sobre mi', href: '#sobre-mi' },
      { label: 'Tecnologias', href: '#tecnologias' },
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Contacto', href: '#contacto' },
    ],
    profile: {
      name: 'Yael Lopez Mariano',
      role: 'Desarrollador Frontend',
      location: 'Mexico',
      email: 'tuemail@correo.com',
      intro:
        'Construyo interfaces rapidas, claras y responsivas con React, TypeScript y Tailwind CSS.',
      about:
        'Soy un desarrollador enfocado en crear experiencias web modernas, utiles y faciles de usar. Me gusta convertir ideas en productos funcionales, cuidar los detalles visuales y escribir codigo ordenado.',
      socials: [
        { label: 'GitHub', href: 'https://github.com/tuusuario' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/tuusuario' },
        { label: 'CV', href: '#' },
      ],
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      titleStart: 'Desarrollador Frontend para crear',
      titleHighlight: 'experiencias web',
      titleEnd: 'claras.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Contactarme',
      profileCardTitle: 'Perfil profesional',
      profileCardText: 'React + TypeScript',
      locationLabel: 'Ubicacion',
    },
    stats: [
      { value: '6+', label: 'Proyectos' },
      { value: '3', label: 'Tecnologias base' },
      { value: '100%', label: 'Responsive' },
    ],
    highlights: ['Interfaces claras', 'Codigo ordenado', 'Experiencia responsive'],
    about: {
      eyebrow: 'Sobre mi',
      title: 'Tecnologia con orden, claridad y buen criterio visual.',
      tags: ['Frontend', 'UI limpia', 'Responsive'],
    },
    technologies: {
      eyebrow: 'Tecnologias',
      title: 'Herramientas para construir experiencias modernas.',
      description:
        'Trabajo con tecnologias enfocadas en crear interfaces rapidas, mantenibles y listas para publicarse en produccion.',
    },
    skills: [
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
    projectsSection: {
      eyebrow: 'Proyectos',
      title: 'Trabajos destacados',
      description:
        'Cambia estos ejemplos por tus proyectos reales, agrega enlaces a demo y repositorio, y deja que el portafolio hable por ti.',
      itemLabel: 'Proyecto',
      demoLabel: 'Demo',
      codeLabel: 'Codigo',
    },
    projects: [
      {
        title: 'Dashboard de ventas',
        description:
          'Panel administrativo con metricas, tablas filtrables y una interfaz clara para revisar resultados.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        demo: '#',
        repo: '#',
      },
      {
        title: 'Landing de producto',
        description:
          'Pagina responsive para presentar un producto digital con secciones comerciales y llamadas a la accion.',
        tags: ['Vite', 'Tailwind', 'SEO'],
        demo: '#',
        repo: '#',
      },
      {
        title: 'App de tareas',
        description:
          'Aplicacion para organizar actividades, marcar avances y mantener una experiencia rapida en mobile.',
        tags: ['React', 'Hooks', 'LocalStorage'],
        demo: '#',
        repo: '#',
      },
    ],
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu siguiente proyecto.',
      description:
        'Estoy listo para colaborar en sitios web, aplicaciones frontend, interfaces responsive y mejoras visuales.',
    },
    footer: 'Portafolio profesional frontend.',
  },
  en: {
    navItems: [
      { label: 'Home', href: '#inicio' },
      { label: 'About', href: '#sobre-mi' },
      { label: 'Technologies', href: '#tecnologias' },
      { label: 'Projects', href: '#proyectos' },
      { label: 'Contact', href: '#contacto' },
    ],
    profile: {
      name: 'Yael Lopez Mariano',
      role: 'Frontend Developer',
      location: 'Mexico',
      email: 'tuemail@correo.com',
      intro:
        'I build fast, clear, responsive interfaces with React, TypeScript and Tailwind CSS.',
      about:
        'I am a developer focused on creating modern, useful and easy-to-use web experiences. I enjoy turning ideas into functional products, caring for visual details and writing organized code.',
      socials: [
        { label: 'GitHub', href: 'https://github.com/tuusuario' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/tuusuario' },
        { label: 'Resume', href: '#' },
      ],
    },
    hero: {
      badge: 'Available for new projects',
      titleStart: 'Frontend Developer building',
      titleHighlight: 'web experiences',
      titleEnd: 'with clarity.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
      profileCardTitle: 'Professional profile',
      profileCardText: 'React + TypeScript',
      locationLabel: 'Location',
    },
    stats: [
      { value: '6+', label: 'Projects' },
      { value: '3', label: 'Core technologies' },
      { value: '100%', label: 'Responsive' },
    ],
    highlights: ['Clear interfaces', 'Organized code', 'Responsive experience'],
    about: {
      eyebrow: 'About me',
      title: 'Technology with order, clarity and strong visual judgment.',
      tags: ['Frontend', 'Clean UI', 'Responsive'],
    },
    technologies: {
      eyebrow: 'Technologies',
      title: 'Tools for building modern experiences.',
      description:
        'I work with technologies focused on creating fast, maintainable interfaces ready for production.',
    },
    skills: [
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
    projectsSection: {
      eyebrow: 'Projects',
      title: 'Featured work',
      description:
        'Replace these examples with your real projects, add demo and repository links, and let the portfolio speak for you.',
      itemLabel: 'Project',
      demoLabel: 'Demo',
      codeLabel: 'Code',
    },
    projects: [
      {
        title: 'Sales dashboard',
        description:
          'Admin panel with metrics, filterable tables and a clear interface for reviewing results.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        demo: '#',
        repo: '#',
      },
      {
        title: 'Product landing page',
        description:
          'Responsive page for presenting a digital product with commercial sections and calls to action.',
        tags: ['Vite', 'Tailwind', 'SEO'],
        demo: '#',
        repo: '#',
      },
      {
        title: 'Task app',
        description:
          'Application for organizing activities, tracking progress and keeping a fast mobile experience.',
        tags: ['React', 'Hooks', 'LocalStorage'],
        demo: '#',
        repo: '#',
      },
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'Let us talk about your next project.',
      description:
        'I am ready to collaborate on websites, frontend applications, responsive interfaces and visual improvements.',
    },
    footer: 'Professional frontend portfolio.',
  },
};

export type PortfolioContent = (typeof portfolioContent)['es'];

export function getPortfolioContent(language: Language): PortfolioContent {
  return portfolioContent[language];
}
