import type { Testimonio } from '../types';

export const testimonios: Testimonio[] = [
  {
    id: 'testimonio-1',
    cliente: 'Roberto Sánchez',
    empresa: 'TechStart Solutions',
    foto: '/images/clients/roberto.jpg',
    proyecto: 'Plataforma de Gestión Empresarial',
    calificacion: 5,
    comentario: 'Excelente trabajo del equipo. Entregaron exactamente lo que necesitábamos y en el tiempo acordado. La comunicación fue fluida durante todo el proyecto y el resultado superó nuestras expectativas.',
    fecha: new Date('2024-01-15')
  },
  {
    id: 'testimonio-2',
    cliente: 'María Elena Vásquez',
    empresa: 'Boutique Fashion',
    foto: '/images/clients/maria.jpg',
    proyecto: 'Tienda Online de Moda',
    calificacion: 5,
    comentario: 'Mi tienda online ha aumentado las ventas un 300% desde el lanzamiento. El diseño es hermoso y la funcionalidad es perfecta. Recomiendo totalmente a este equipo.',
    fecha: new Date('2024-02-20')
  },
  {
    id: 'testimonio-3',
    cliente: 'David Chen',
    empresa: 'FitLife App',
    foto: '/images/clients/david.jpg',
    proyecto: 'Aplicación Móvil de Fitness',
    calificacion: 5,
    comentario: 'La app que desarrollaron es increíble. Los usuarios la califican con 4.8 estrellas en las tiendas. El equipo entendió perfectamente nuestra visión y la hicieron realidad.',
    fecha: new Date('2024-03-10')
  },
  {
    id: 'testimonio-4',
    cliente: 'Carmen Ruiz',
    empresa: 'Clínica Dental Sonrisa',
    foto: '/images/clients/carmen.jpg',
    proyecto: 'Sistema de Gestión de Pacientes',
    calificacion: 5,
    comentario: 'El sistema ha revolucionado la forma en que manejamos nuestros pacientes. Es intuitivo, rápido y nos ha ahorrado horas de trabajo administrativo cada día.',
    fecha: new Date('2023-12-05')
  },
  {
    id: 'testimonio-5',
    cliente: 'Andrés Morales',
    empresa: 'LogiTrans',
    foto: '/images/clients/andres.jpg',
    proyecto: 'API de Integración Logística',
    calificacion: 4,
    comentario: 'La API que desarrollaron integra perfectamente todos nuestros sistemas. La documentación es excelente y el soporte post-entrega ha sido excepcional.',
    fecha: new Date('2024-01-30')
  },
  {
    id: 'testimonio-6',
    cliente: 'Isabella Torres',
    empresa: 'EduTech Academy',
    foto: '/images/clients/isabella.jpg',
    proyecto: 'Plataforma Educativa Online',
    calificacion: 5,
    comentario: 'Crearon una plataforma educativa que nuestros estudiantes adoran. Las funcionalidades de video, quizzes y seguimiento de progreso funcionan perfectamente.',
    fecha: new Date('2023-11-18')
  }
];