// Type definitions for the portfolio application

export interface Proyecto {
  id: string;
  titulo: string;
  cliente: string;
  descripcion: string;
  imagenes: string[];
  tecnologias: string[];
  categoria: 'web' | 'mobile' | 'ecommerce' | 'sistema' | 'api';
  complejidad: 1 | 2 | 3 | 4 | 5;
  fechaInicio: Date;
  fechaFin: Date;
  miembrosEquipo: string[];
  enlaceDemo?: string;
  enlaceRepositorio?: string;
  resultados: string[];
  testimonio?: Testimonio;
}

export interface MiembroEquipo {
  id: string;
  nombre: string;
  rol: string;
  especialidades: string[];
  experienciaAnios: number;
  foto: string;
  biografia: string;
  certificaciones: string[];
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  descripcionDetallada: string;
  icono: string;
  tecnologias: string[];
  precioMinimo: number;
  precioMaximo: number;
  tiempoEstimado: string;
  miembrosEspecializados: string[];
  casosUso: string[];
}

export interface Testimonio {
  id: string;
  cliente: string;
  empresa: string;
  foto?: string;
  proyecto: string;
  calificacion: number;
  comentario: string;
  fecha: Date;
}