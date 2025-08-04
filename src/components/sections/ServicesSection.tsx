import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicios } from '../../data/servicios';
import { equipo } from '../../data/equipo';
import { formatPriceRange, getTeamMemberById } from '../../utils';
import Modal from '../ui/Modal';
import type { Servicio } from '../../types';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Servicio | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Servicio) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas completas adaptadas a las necesidades 
            específicas de cada cliente. Desde desarrollo web hasta consultoría especializada.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.titulo}
        size="lg"
      >
        {selectedService && (
          <ServiceDetailModal service={selectedService} onClose={closeModal} />
        )}
      </Modal>
    </section>
  );
};

interface ServiceCardProps {
  service: Servicio;
  index: number;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-gray-100"
      onClick={onClick}
    >
      {/* Icon */}
      <div className="text-6xl mb-6 text-center">
        {service.icono}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {service.titulo}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 text-center leading-relaxed">
        {service.descripcion}
      </p>

      {/* Price Range */}
      <div className="text-center mb-6">
        <span className="text-2xl font-bold text-blue-600">
          ${formatPriceRange(service.precioMinimo, service.precioMaximo)}
        </span>
        <p className="text-sm text-gray-500 mt-1">
          Tiempo estimado: {service.tiempoEstimado}
        </p>
      </div>

      {/* Technology Badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {service.tecnologias.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
        {service.tecnologias.length > 3 && (
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
            +{service.tecnologias.length - 3} más
          </span>
        )}
      </div>

      {/* CTA Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
        Ver Detalles
      </button>
    </motion.div>
  );
};

interface ServiceDetailModalProps {
  service: Servicio;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: '',
    presupuesto: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu consulta! Te contactaremos pronto.');
    onClose();
  };

  const specializedMembers = service.miembrosEspecializados.map(id => 
    getTeamMemberById(equipo, id)
  ).filter(Boolean);

  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Service Details */}
        <div>
          <div className="text-6xl mb-6 text-center">
            {service.icono}
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Descripción Detallada</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.descripcionDetallada}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {service.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Casos de Uso</h3>
              <ul className="space-y-2">
                {service.casosUso.map((caso, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    {caso}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipo Especializado</h3>
              <div className="space-y-3">
                {specializedMembers.map((member) => (
                  <div key={member?.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {member?.nombre.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{member?.nombre}</p>
                      <p className="text-sm text-gray-600">{member?.rol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Rango de Precio:</span>
                <span className="text-2xl font-bold text-blue-600">
                  ${formatPriceRange(service.precioMinimo, service.precioMaximo)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Tiempo Estimado:</span>
                <span className="text-lg font-semibold text-gray-900">
                  {service.tiempoEstimado}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Consulta</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Empresa
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Presupuesto Estimado
              </label>
              <select
                name="presupuesto"
                value={formData.presupuesto}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Selecciona un rango</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-20000">$10,000 - $20,000</option>
                <option value="20000+">$20,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje *
              </label>
              <textarea
                name="mensaje"
                required
                rows={4}
                value={formData.mensaje}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;