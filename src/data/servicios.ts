import type { Servicio } from '../types';

export const servicios: Servicio[] = [
  {
    id: 'servicio-1',
    titulo: 'Desarrollo Web Full-Stack',
    descripcion: 'Aplicaciones web completas con frontend moderno y backend robusto',
    descripcionDetallada: 'Desarrollamos aplicaciones web completas desde cero, utilizando las últimas tecnologías como React, Vue.js, Node.js y bases de datos modernas. Nuestro enfoque incluye diseño responsive, optimización SEO y arquitectura escalable.',
    icono: '🌐',
    tecnologias: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Express'],
    precioMinimo: 2500,
    precioMaximo: 15000,
    tiempoEstimado: '4-12 semanas',
    miembrosEspecializados: ['miembro-1', 'miembro-2'],
    casosUso: ['Plataformas corporativas', 'Sistemas de gestión', 'Portales web', 'Dashboards administrativos']
  },
  {
    id: 'servicio-2',
    titulo: 'Aplicaciones Móviles',
    descripcion: 'Apps nativas e híbridas para iOS y Android con excelente UX',
    descripcionDetallada: 'Creamos aplicaciones móviles que destacan en las tiendas de aplicaciones. Utilizamos React Native y Flutter para desarrollo híbrido, o Swift/Kotlin para apps nativas de alto rendimiento.',
    icono: '📱',
    tecnologias: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    precioMinimo: 3000,
    precioMaximo: 20000,
    tiempoEstimado: '6-16 semanas',
    miembrosEspecializados: ['miembro-4', 'miembro-2'],
    casosUso: ['Apps de comercio', 'Aplicaciones empresariales', 'Apps de servicios', 'Plataformas sociales']
  },
  {
    id: 'servicio-3',
    titulo: 'E-commerce y Tiendas Online',
    descripcion: 'Tiendas online optimizadas para conversión y ventas',
    descripcionDetallada: 'Desarrollamos tiendas online completas con pasarelas de pago, gestión de inventario, panel administrativo y optimización para conversiones. Integración con sistemas de envío y CRM.',
    icono: '🛒',
    tecnologias: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Next.js'],
    precioMinimo: 2000,
    precioMaximo: 12000,
    tiempoEstimado: '3-10 semanas',
    miembrosEspecializados: ['miembro-1', 'miembro-2', 'miembro-3'],
    casosUso: ['Tiendas retail', 'Marketplaces', 'Subscripciones', 'Productos digitales']
  },
  {
    id: 'servicio-4',
    titulo: 'Sistemas de Gestión (CRM/ERP)',
    descripcion: 'Sistemas empresariales personalizados para optimizar procesos',
    descripcionDetallada: 'Desarrollamos sistemas de gestión empresarial adaptados a las necesidades específicas de cada cliente. Incluye módulos de CRM, inventario, facturación, reportes y integraciones.',
    icono: '⚙️',
    tecnologias: ['Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
    precioMinimo: 5000,
    precioMaximo: 30000,
    tiempoEstimado: '8-20 semanas',
    miembrosEspecializados: ['miembro-3', 'miembro-1'],
    casosUso: ['Gestión de clientes', 'Control de inventario', 'Sistemas de facturación', 'Reportes empresariales']
  },
  {
    id: 'servicio-5',
    titulo: 'APIs y Microservicios',
    descripcion: 'Arquitecturas escalables y APIs robustas para integraciones',
    descripcionDetallada: 'Diseñamos y desarrollamos APIs RESTful y GraphQL, arquitecturas de microservicios y sistemas distribuidos. Incluye documentación completa, testing automatizado y monitoreo.',
    icono: '🔗',
    tecnologias: ['Node.js', 'Python', 'GraphQL', 'Docker', 'Kubernetes', 'AWS'],
    precioMinimo: 1500,
    precioMaximo: 10000,
    tiempoEstimado: '2-8 semanas',
    miembrosEspecializados: ['miembro-3', 'miembro-1'],
    casosUso: ['Integraciones de terceros', 'Arquitecturas distribuidas', 'APIs públicas', 'Sistemas de autenticación']
  },
  {
    id: 'servicio-6',
    titulo: 'Consultoría Técnica',
    descripcion: 'Asesoramiento experto en arquitectura y mejores prácticas',
    descripcionDetallada: 'Ofrecemos consultoría técnica para optimizar arquitecturas existentes, auditorías de código, definición de stack tecnológico y mentoring de equipos de desarrollo.',
    icono: '💡',
    tecnologias: ['Arquitectura de Software', 'Code Review', 'DevOps', 'Performance'],
    precioMinimo: 800,
    precioMaximo: 5000,
    tiempoEstimado: '1-4 semanas',
    miembrosEspecializados: ['miembro-1', 'miembro-3'],
    casosUso: ['Auditorías de código', 'Optimización de performance', 'Migración de tecnologías', 'Mentoring técnico']
  }
];