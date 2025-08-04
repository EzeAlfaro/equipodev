import type { Proyecto } from '../types';

export const proyectos: Proyecto[] = [
  {
    id: 'proyecto-1',
    titulo: 'Plataforma de Gestión Empresarial TechStart',
    cliente: 'TechStart Solutions',
    descripcion: 'Sistema integral de gestión empresarial con módulos de CRM, inventario, facturación y reportes en tiempo real.',
    imagenes: [
      '/images/projects/techstart-1.jpg',
      '/images/projects/techstart-2.jpg',
      '/images/projects/techstart-3.jpg'
    ],
    tecnologias: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    categoria: 'sistema',
    complejidad: 5,
    fechaInicio: new Date('2023-10-01'),
    fechaFin: new Date('2024-01-15'),
    miembrosEquipo: ['miembro-1', 'miembro-3'],
    enlaceDemo: 'https://demo.techstart-platform.com',
    resultados: [
      'Reducción del 40% en tiempo de procesamiento de órdenes',
      'Mejora del 60% en seguimiento de clientes',
      'Automatización completa del proceso de facturación'
    ],
    testimonio: {
      id: 'testimonio-1',
      cliente: 'Roberto Sánchez',
      empresa: 'TechStart Solutions',
      foto: '/images/clients/roberto.jpg',
      proyecto: 'Plataforma de Gestión Empresarial',
      calificacion: 5,
      comentario: 'Excelente trabajo del equipo. Entregaron exactamente lo que necesitábamos y en el tiempo acordado.',
      fecha: new Date('2024-01-15')
    }
  },
  {
    id: 'proyecto-2',
    titulo: 'Tienda Online Boutique Fashion',
    cliente: 'Boutique Fashion',
    descripcion: 'E-commerce completo para boutique de moda con catálogo dinámico, carrito de compras y pasarela de pagos.',
    imagenes: [
      '/images/projects/boutique-1.jpg',
      '/images/projects/boutique-2.jpg',
      '/images/projects/boutique-3.jpg'
    ],
    tecnologias: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    categoria: 'ecommerce',
    complejidad: 4,
    fechaInicio: new Date('2023-12-01'),
    fechaFin: new Date('2024-02-20'),
    miembrosEquipo: ['miembro-1', 'miembro-2'],
    enlaceDemo: 'https://boutique-fashion-demo.com',
    resultados: [
      'Aumento del 300% en ventas online',
      'Reducción del 50% en abandono de carrito',
      'Mejora del 80% en experiencia de usuario'
    ],
    testimonio: {
      id: 'testimonio-2',
      cliente: 'María Elena Vásquez',
      empresa: 'Boutique Fashion',
      foto: '/images/clients/maria.jpg',
      proyecto: 'Tienda Online de Moda',
      calificacion: 5,
      comentario: 'Mi tienda online ha aumentado las ventas un 300% desde el lanzamiento.',
      fecha: new Date('2024-02-20')
    }
  },
  {
    id: 'proyecto-3',
    titulo: 'App Móvil FitLife',
    cliente: 'FitLife App',
    descripcion: 'Aplicación móvil de fitness con seguimiento de ejercicios, planes nutricionales y comunidad social.',
    imagenes: [
      '/images/projects/fitlife-1.jpg',
      '/images/projects/fitlife-2.jpg',
      '/images/projects/fitlife-3.jpg'
    ],
    tecnologias: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
    categoria: 'mobile',
    complejidad: 4,
    fechaInicio: new Date('2023-11-15'),
    fechaFin: new Date('2024-03-10'),
    miembrosEquipo: ['miembro-4', 'miembro-2'],
    enlaceDemo: 'https://apps.apple.com/fitlife-demo',
    resultados: [
      'Más de 10,000 descargas en el primer mes',
      'Calificación promedio de 4.8 estrellas',
      'Retención de usuarios del 75% a los 30 días'
    ],
    testimonio: {
      id: 'testimonio-3',
      cliente: 'David Chen',
      empresa: 'FitLife App',
      foto: '/images/clients/david.jpg',
      proyecto: 'Aplicación Móvil de Fitness',
      calificacion: 5,
      comentario: 'La app que desarrollaron es increíble. Los usuarios la califican con 4.8 estrellas.',
      fecha: new Date('2024-03-10')
    }
  },
  {
    id: 'proyecto-4',
    titulo: 'Sistema de Gestión Clínica Dental',
    cliente: 'Clínica Dental Sonrisa',
    descripcion: 'Sistema completo para gestión de pacientes, citas, historiales médicos y facturación para clínica dental.',
    imagenes: [
      '/images/projects/dental-1.jpg',
      '/images/projects/dental-2.jpg',
      '/images/projects/dental-3.jpg'
    ],
    tecnologias: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
    categoria: 'sistema',
    complejidad: 4,
    fechaInicio: new Date('2023-09-01'),
    fechaFin: new Date('2023-12-05'),
    miembrosEquipo: ['miembro-1', 'miembro-3'],
    resultados: [
      'Reducción del 70% en tiempo de gestión administrativa',
      'Mejora del 90% en organización de historiales',
      'Automatización completa del sistema de citas'
    ],
    testimonio: {
      id: 'testimonio-4',
      cliente: 'Carmen Ruiz',
      empresa: 'Clínica Dental Sonrisa',
      foto: '/images/clients/carmen.jpg',
      proyecto: 'Sistema de Gestión de Pacientes',
      calificacion: 5,
      comentario: 'El sistema ha revolucionado la forma en que manejamos nuestros pacientes.',
      fecha: new Date('2023-12-05')
    }
  },
  {
    id: 'proyecto-5',
    titulo: 'API de Integración LogiTrans',
    cliente: 'LogiTrans',
    descripcion: 'API RESTful para integración de sistemas logísticos con tracking en tiempo real y gestión de rutas.',
    imagenes: [
      '/images/projects/logitrans-1.jpg',
      '/images/projects/logitrans-2.jpg'
    ],
    tecnologias: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS'],
    categoria: 'api',
    complejidad: 3,
    fechaInicio: new Date('2023-12-15'),
    fechaFin: new Date('2024-01-30'),
    miembrosEquipo: ['miembro-3', 'miembro-1'],
    enlaceRepositorio: 'https://github.com/logitrans/api-integration',
    resultados: [
      'Integración exitosa con 5 sistemas externos',
      'Reducción del 50% en tiempo de procesamiento',
      'Mejora del 80% en trazabilidad de envíos'
    ],
    testimonio: {
      id: 'testimonio-5',
      cliente: 'Andrés Morales',
      empresa: 'LogiTrans',
      foto: '/images/clients/andres.jpg',
      proyecto: 'API de Integración Logística',
      calificacion: 4,
      comentario: 'La API que desarrollaron integra perfectamente todos nuestros sistemas.',
      fecha: new Date('2024-01-30')
    }
  },
  {
    id: 'proyecto-6',
    titulo: 'Plataforma Educativa EduTech',
    cliente: 'EduTech Academy',
    descripcion: 'Plataforma de aprendizaje online con videos, quizzes, seguimiento de progreso y certificaciones.',
    imagenes: [
      '/images/projects/edutech-1.jpg',
      '/images/projects/edutech-2.jpg',
      '/images/projects/edutech-3.jpg'
    ],
    tecnologias: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    categoria: 'web',
    complejidad: 5,
    fechaInicio: new Date('2023-08-01'),
    fechaFin: new Date('2023-11-18'),
    miembrosEquipo: ['miembro-1', 'miembro-2', 'miembro-3'],
    enlaceDemo: 'https://demo.edutech-academy.com',
    resultados: [
      'Más de 5,000 estudiantes registrados',
      'Tasa de finalización de cursos del 85%',
      'Satisfacción del estudiante del 95%'
    ],
    testimonio: {
      id: 'testimonio-6',
      cliente: 'Isabella Torres',
      empresa: 'EduTech Academy',
      foto: '/images/clients/isabella.jpg',
      proyecto: 'Plataforma Educativa Online',
      calificacion: 5,
      comentario: 'Crearon una plataforma educativa que nuestros estudiantes adoran.',
      fecha: new Date('2023-11-18')
    }
  },
  {
    id: 'proyecto-7',
    titulo: 'Dashboard Analytics FinTech',
    cliente: 'FinTech Innovations',
    descripcion: 'Dashboard interactivo para análisis financiero con gráficos en tiempo real y reportes automatizados.',
    imagenes: [
      '/images/projects/fintech-1.jpg',
      '/images/projects/fintech-2.jpg'
    ],
    tecnologias: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    categoria: 'web',
    complejidad: 4,
    fechaInicio: new Date('2024-01-01'),
    fechaFin: new Date('2024-03-15'),
    miembrosEquipo: ['miembro-1', 'miembro-2'],
    resultados: [
      'Reducción del 60% en tiempo de análisis',
      'Mejora del 90% en visualización de datos',
      'Automatización de 15 reportes diarios'
    ]
  },
  {
    id: 'proyecto-8',
    titulo: 'App de Delivery RestaurantGo',
    cliente: 'RestaurantGo',
    descripcion: 'Aplicación móvil para delivery de comida con geolocalización, pagos y seguimiento en tiempo real.',
    imagenes: [
      '/images/projects/restaurant-1.jpg',
      '/images/projects/restaurant-2.jpg',
      '/images/projects/restaurant-3.jpg'
    ],
    tecnologias: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
    categoria: 'mobile',
    complejidad: 4,
    fechaInicio: new Date('2024-02-01'),
    fechaFin: new Date('2024-04-20'),
    miembrosEquipo: ['miembro-4', 'miembro-2'],
    resultados: [
      'Lanzamiento exitoso en iOS y Android',
      'Más de 2,000 pedidos en el primer mes',
      'Tiempo promedio de entrega de 25 minutos'
    ]
  }
];