import {
  Code2,
  Database,
  LayoutDashboard,
  Mail,
  Rocket,
  Smartphone,
} from 'lucide-react';

export const profile = {
  name: 'Tu Nombre',
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
};

export const stats = [
  { value: '6+', label: 'Proyectos' },
  { value: '3', label: 'Tecnologias base' },
  { value: '100%', label: 'Responsive' },
];

export const skills = [
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: Database },
  { name: 'Tailwind CSS', icon: LayoutDashboard },
  { name: 'Responsive Design', icon: Smartphone },
  { name: 'Deploy Netlify', icon: Rocket },
  { name: 'Contacto profesional', icon: Mail },
];

export const projects = [
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
];
