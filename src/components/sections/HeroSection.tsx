import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of sticky header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Effects - complementing the cyberpunk cat */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-cyan rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-pink rounded-full blur-3xl opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-orange rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass-card px-4 py-2"
            >
              <div className="w-2 h-2 bg-accent-cyan rounded-full pulse-glow"></div>
              <span className="text-sm font-medium text-text-gray">Disponible para proyectos</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6">
                Creamos
                <br />
                <span className="text-accent-pink neon-text">Experiencias</span>
                <br />
                Digitales
              </h1>
              <p className="text-xl text-text-gray leading-relaxed max-w-lg">
                Somos un equipo de desarrolladores especializados en crear 
                soluciones web modernas que combinan diseño excepcional con 
                tecnología de vanguardia.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="glass-button px-8 py-4 text-lg font-display font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('portfolio')}
              >
                Ver Proyectos
              </motion.button>
              <motion.button
                className="px-8 py-4 text-lg font-display font-semibold text-white border-2 border-accent-orange rounded-xl hover:bg-accent-orange transition-all duration-300 brutal-shadow-orange"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
              >
                Contactar
              </motion.button>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4"
            >
              <p className="text-sm font-medium text-text-gray uppercase tracking-wider">
                Stack Tecnológico
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="glass-card px-4 py-2 text-sm font-medium text-white hover:border-accent-pink transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="glass-card p-8 float" style={{ maxWidth: '90%', margin: '0 auto' }}>
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-3 text-center" style={{ background: 'rgba(0, 245, 255, 0.03)' }}>
                    <div className="text-2xl font-display font-bold text-accent-cyan">150+</div>
                    <div className="text-sm text-text-gray">Proyectos</div>
                  </div>
                  <div className="glass-card p-3 text-center" style={{ background: 'rgba(255, 0, 128, 0.03)' }}>
                    <div className="text-2xl font-display font-bold text-accent-pink">95%</div>
                    <div className="text-sm text-text-gray">Satisfacción</div>
                  </div>
                </div>

                {/* Team Preview */}
                <div className="glass-card p-5 text-center" style={{ background: 'rgba(139, 92, 246, 0.03)' }}>
                  <div className="text-5xl mb-3">👥</div>
                  <h3 className="text-lg font-display font-semibold text-white mb-2">
                    Equipo Especializado
                  </h3>
                  <p className="text-sm text-text-gray">
                    4 desarrolladores full-stack con +25 años de experiencia combinada
                  </p>
                </div>

                {/* Tech Indicators */}
                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-accent-cyan rounded-full pulse-glow"></div>
                  <div className="w-3 h-3 bg-accent-pink rounded-full pulse-glow" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-accent-orange rounded-full pulse-glow" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass-card flex items-center justify-center"
              style={{ background: 'rgba(255, 107, 53, 0.1)' }}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">⚡</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full glass-card flex items-center justify-center"
              style={{ background: 'rgba(0, 245, 255, 0.1)' }}
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="text-xl">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;