import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix: string;
  icon: string;
  description: string;
}

const StatsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats: StatItem[] = [
    {
      id: 'projects',
      value: 150,
      label: 'Proyectos Completados',
      suffix: '+',
      icon: '🚀',
      description: 'Aplicaciones web y móviles entregadas exitosamente'
    },
    {
      id: 'clients',
      value: 95,
      label: 'Clientes Satisfechos',
      suffix: '%',
      icon: '😊',
      description: 'Índice de satisfacción basado en feedback directo'
    },
    {
      id: 'experience',
      value: 25,
      label: 'Años de Experiencia',
      suffix: '+',
      icon: '⭐',
      description: 'Experiencia combinada del equipo completo'
    },
    {
      id: 'technologies',
      value: 40,
      label: 'Tecnologías Dominadas',
      suffix: '+',
      icon: '💻',
      description: 'Frameworks, lenguajes y herramientas especializadas'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brown-900 mb-6">
            Nuestros Números Hablan
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto font-body">
            Más de una década construyendo soluciones digitales que transforman negocios. 
            Estos números reflejan nuestro compromiso con la excelencia.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: StatItem;
  index: number;
  isInView: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(Math.round(increment * currentStep), stat.value);
      setCount(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="bg-cream-100 vintage-border rounded-2xl p-8 text-center vintage-shadow hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon */}
      <div className="text-6xl mb-4">
        {stat.icon}
      </div>

      {/* Number */}
      <div className="mb-4">
        <span className="text-4xl md:text-5xl font-serif font-semibold text-cream-600">
          {count}
        </span>
        <span className="text-3xl md:text-4xl font-serif font-semibold text-cream-600">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="text-xl font-serif font-medium text-brown-900 mb-3">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="text-brown-700 text-sm leading-relaxed font-body">
        {stat.description}
      </p>
    </motion.div>
  );
};

export default StatsSection;