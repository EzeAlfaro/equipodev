import React from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '../../utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Inicio', href: 'inicio' },
    { name: 'Servicios', href: 'servicios' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Equipo', href: 'equipo' },
    { name: 'Testimonios', href: 'testimonios' },
    { name: 'Contacto', href: 'contacto' }
  ];

  const services = [
    'Desarrollo Web Full-Stack',
    'Aplicaciones Móviles',
    'E-commerce',
    'Sistemas de Gestión',
    'APIs y Microservicios',
    'Consultoría Técnica'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/equipodev-profesional',
      icon: '💼'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/equipodev-team',
      icon: '💻'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/equipodev',
      icon: '🐦'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/15551234567',
      icon: '💬'
    }
  ];

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ED</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Equipo Dev</h3>
                <p className="text-gray-400 text-sm">Profesional</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos ideas en soluciones digitales excepcionales. 
              Somos tu equipo de desarrollo de confianza.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📧</span>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:contacto@equipodev.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    contacto@equipodev.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">📱</span>
                <div>
                  <p className="text-gray-300 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-purple-400 mt-1">⏰</span>
                <div>
                  <p className="text-gray-300 text-sm">Horarios</p>
                  <p className="text-white text-sm">Lun-Vie 9AM-6PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Equipo Dev Profesional. Todos los derechos reservados.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Términos de Servicio
              </a>
              <a 
                href="#cookies" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <h5 className="text-white font-semibold mb-2">🚀 Proyectos Entregados</h5>
                <p className="text-gray-400 text-sm">150+ proyectos exitosos</p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">😊 Satisfacción del Cliente</h5>
                <p className="text-gray-400 text-sm">95% de clientes satisfechos</p>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-2">⭐ Experiencia Combinada</h5>
                <p className="text-gray-400 text-sm">25+ años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => handleNavClick('inicio')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              ↑ Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;