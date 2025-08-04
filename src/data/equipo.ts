import type { MiembroEquipo } from '../types';

export const equipo: MiembroEquipo[] = [
  {
    id: 'miembro-1',
    nombre: 'Carlos Rodríguez',
    rol: 'Full-Stack Developer & Team Lead',
    especialidades: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    experienciaAnios: 8,
    foto: '/images/team/carlos.jpg',
    biografia: 'Desarrollador full-stack con más de 8 años de experiencia liderando equipos y creando soluciones escalables. Especializado en arquitecturas modernas y metodologías ágiles.',
    certificaciones: ['AWS Solutions Architect', 'Scrum Master Certified', 'Google Cloud Professional'],
    linkedinUrl: 'https://linkedin.com/in/carlos-rodriguez-dev',
    githubUrl: 'https://github.com/carlos-rodriguez'
  },
  {
    id: 'miembro-2',
    nombre: 'Ana García',
    rol: 'Frontend Developer & UX/UI Designer',
    especialidades: ['React', 'Vue.js', 'Figma', 'Tailwind CSS', 'Framer Motion'],
    experienciaAnios: 6,
    foto: '/images/team/ana.jpg',
    biografia: 'Diseñadora UX/UI y desarrolladora frontend apasionada por crear experiencias de usuario excepcionales. Combina diseño y código para entregar productos que los usuarios aman.',
    certificaciones: ['Google UX Design Certificate', 'Adobe Certified Expert', 'React Developer Certification'],
    linkedinUrl: 'https://linkedin.com/in/ana-garcia-ux',
    githubUrl: 'https://github.com/ana-garcia'
  },
  {
    id: 'miembro-3',
    nombre: 'Miguel Torres',
    rol: 'Backend Developer & DevOps Engineer',
    especialidades: ['Python', 'Django', 'Docker', 'Kubernetes', 'MongoDB'],
    experienciaAnios: 7,
    foto: '/images/team/miguel.jpg',
    biografia: 'Ingeniero backend y DevOps con experiencia en sistemas distribuidos y arquitecturas de microservicios. Experto en automatización y optimización de infraestructura.',
    certificaciones: ['Docker Certified Associate', 'Kubernetes Administrator', 'MongoDB Professional'],
    linkedinUrl: 'https://linkedin.com/in/miguel-torres-devops',
    githubUrl: 'https://github.com/miguel-torres'
  },
  {
    id: 'miembro-4',
    nombre: 'Laura Martínez',
    rol: 'Mobile Developer & QA Engineer',
    especialidades: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Automated Testing'],
    experienciaAnios: 5,
    foto: '/images/team/laura.jpg',
    biografia: 'Desarrolladora móvil especializada en aplicaciones nativas e híbridas. Combina desarrollo con testing automatizado para garantizar la calidad del software.',
    certificaciones: ['Google Associate Android Developer', 'iOS App Development', 'ISTQB Certified Tester'],
    linkedinUrl: 'https://linkedin.com/in/laura-martinez-mobile',
    githubUrl: 'https://github.com/laura-martinez'
  }
];