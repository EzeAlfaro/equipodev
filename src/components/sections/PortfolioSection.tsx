import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { proyectos } from '../../data/proyectos';
import { equipo } from '../../data/equipo';
import { filterProjectsByCategory, getTeamMemberById, formatDate } from '../../utils';
import Modal from '../ui/Modal';
import type { Proyecto } from '../../types';

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos', count: proyectos.length },
    { id: 'web', label: 'Web Apps', count: proyectos.filter(p => p.categoria === 'web').length },
    { id: 'mobile', label: 'Mobile Apps', count: proyectos.filter(p => p.categoria === 'mobile').length },
    { id: 'ecommerce', label: 'E-commerce', count: proyectos.filter(p => p.categoria === 'ecommerce').length },
    { id: 'sistema', label: 'Sistemas', count: proyectos.filter(p => p.categoria === 'sistema').length },
    { id: 'api', label: 'APIs', count: proyectos.filter(p => p.categoria === 'api').length }
  ];

  const filteredProjects = useMemo(() => {
    return filterProjectsByCategory(proyectos, selectedCategory);
  }, [selectedCategory]);

  const handleProjectClick = (project: Proyecto) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
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
            Nuestro Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados. Cada uno representa 
            nuestra pasión por crear soluciones digitales innovadoras y de alta calidad.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${selectedCategory}-${project.id}`}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedProject?.titulo}
        size="xl"
      >
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={closeModal} />
        )}
      </Modal>
    </section>
  );
};

interface ProjectCardProps {
  project: Proyecto;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const getComplexityColor = (complexity: number) => {
    if (complexity <= 2) return 'bg-green-100 text-green-800';
    if (complexity <= 3) return 'bg-yellow-100 text-yellow-800';
    if (complexity <= 4) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getComplexityLabel = (complexity: number) => {
    if (complexity <= 2) return 'Básico';
    if (complexity <= 3) return 'Intermedio';
    if (complexity <= 4) return 'Avanzado';
    return 'Experto';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 overflow-hidden border border-gray-100"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">
              {project.categoria === 'web' && '🌐'}
              {project.categoria === 'mobile' && '📱'}
              {project.categoria === 'ecommerce' && '🛒'}
              {project.categoria === 'sistema' && '⚙️'}
              {project.categoria === 'api' && '🔗'}
            </div>
            <p className="text-sm opacity-80 uppercase tracking-wider">
              {project.categoria}
            </p>
          </div>
        </div>
        
        {/* Complexity Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getComplexityColor(project.complejidad)}`}>
            {getComplexityLabel(project.complejidad)}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {project.titulo}
        </h3>

        {/* Client */}
        <p className="text-blue-600 font-medium mb-3">
          {project.cliente}
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {project.descripcion}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tecnologias.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tecnologias.length > 3 && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              +{project.tecnologias.length - 3}
            </span>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Completado: {formatDate(project.fechaFin)}</span>
          <div className="flex items-center space-x-1">
            {Array.from({ length: project.complejidad }, (_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectDetailModalProps {
  project: Proyecto;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const teamMembers = project.miembrosEquipo.map(id => 
    getTeamMemberById(equipo, id)
  ).filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.imagenes.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.imagenes.length - 1 : prev - 1
    );
  };

  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden mb-4">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">
                  {project.categoria === 'web' && '🌐'}
                  {project.categoria === 'mobile' && '📱'}
                  {project.categoria === 'ecommerce' && '🛒'}
                  {project.categoria === 'sistema' && '⚙️'}
                  {project.categoria === 'api' && '🔗'}
                </div>
                <p className="text-lg opacity-80 uppercase tracking-wider">
                  {project.categoria}
                </p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            {project.imagenes.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  →
                </button>
              </>
            )}
          </div>

          {/* Image Thumbnails */}
          {project.imagenes.length > 1 && (
            <div className="flex gap-2">
              {project.imagenes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-16 h-12 rounded-lg border-2 transition-colors ${
                    index === currentImageIndex
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-gray-100'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded"></div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {project.titulo}
            </h3>
            <p className="text-blue-600 font-semibold text-lg">
              {project.cliente}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h4>
            <p className="text-gray-600 leading-relaxed">
              {project.descripcion}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {project.tecnologias.map((tech) => (
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
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Equipo</h4>
            <div className="space-y-3">
              {teamMembers.map((member) => (
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Inicio</h4>
              <p className="text-gray-600">{formatDate(project.fechaInicio)}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Finalización</h4>
              <p className="text-gray-600">{formatDate(project.fechaFin)}</p>
            </div>
          </div>

          {project.resultados && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Resultados</h4>
              <ul className="space-y-2">
                {project.resultados.map((resultado, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-600">{resultado}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* External Links */}
          <div className="flex gap-4">
            {project.enlaceDemo && (
              <a
                href={project.enlaceDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Ver Demo
              </a>
            )}
            {project.enlaceRepositorio && (
              <a
                href={project.enlaceRepositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;