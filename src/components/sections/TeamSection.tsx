import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { equipo } from '../../data/equipo';
import Modal from '../ui/Modal';
import type { MiembroEquipo } from '../../types';

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<MiembroEquipo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: MiembroEquipo) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  // Calculate total team experience
  const totalExperience = equipo.reduce((sum, member) => sum + member.experienciaAnios, 0);

  // Get all unique specialties
  const allSpecialties = [...new Set(equipo.flatMap(member => member.especialidades))];

  return (
    <section id="equipo" className="py-20 bg-gray-50">
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
            Conoce Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Somos un equipo multidisciplinario de profesionales apasionados por la tecnología. 
            Cada miembro aporta experiencia única y especializada para crear soluciones excepcionales.
          </p>
          
          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{equipo.length}</div>
              <div className="text-gray-700 font-medium">Miembros del Equipo</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalExperience}+</div>
              <div className="text-gray-700 font-medium">Años de Experiencia</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{allSpecialties.length}+</div>
              <div className="text-gray-700 font-medium">Tecnologías</div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {equipo.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              onClick={() => handleMemberClick(member)}
            />
          ))}
        </div>

        {/* Team Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Nuestras Especialidades Combinadas
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allSpecialties.map((specialty, index) => (
              <motion.span
                key={specialty}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-gray-700 px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Member Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedMember?.nombre}
        size="lg"
      >
        {selectedMember && (
          <MemberDetailModal member={selectedMember} onClose={closeModal} />
        )}
      </Modal>
    </section>
  );
};

interface TeamMemberCardProps {
  member: MiembroEquipo;
  index: number;
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 text-center"
      onClick={onClick}
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {member.nombre.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
      </div>

      {/* Name and Role */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {member.nombre}
      </h3>
      <p className="text-blue-600 font-semibold mb-4">
        {member.rol}
      </p>

      {/* Experience */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="text-2xl font-bold text-gray-900">
          {member.experienciaAnios}
        </div>
        <div className="text-sm text-gray-600">
          años de experiencia
        </div>
      </div>

      {/* Top Specialties */}
      <div className="space-y-2 mb-4">
        {member.especialidades.slice(0, 3).map((specialty) => (
          <span
            key={specialty}
            className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-1"
          >
            {specialty}
          </span>
        ))}
        {member.especialidades.length > 3 && (
          <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
            +{member.especialidades.length - 3} más
          </span>
        )}
      </div>

      {/* Social Links Preview */}
      <div className="flex justify-center space-x-3">
        {member.linkedinUrl && (
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">in</span>
          </div>
        )}
        {member.githubUrl && (
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">gh</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface MemberDetailModalProps {
  member: MiembroEquipo;
  onClose: () => void;
}

const MemberDetailModal: React.FC<MemberDetailModalProps> = ({ member }) => {
  return (
    <div className="p-6">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Column */}
        <div className="text-center">
          {/* Avatar */}
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl mb-6">
            {member.nombre.split(' ').map(n => n[0]).join('')}
          </div>

          {/* Basic Info */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {member.nombre}
          </h3>
          <p className="text-blue-600 font-semibold text-lg mb-4">
            {member.rol}
          </p>

          {/* Experience Badge */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {member.experienciaAnios}
            </div>
            <div className="text-gray-700 font-medium">
              años de experiencia
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
              >
                <span>LinkedIn</span>
              </a>
            )}
            {member.githubUrl && (
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center space-x-2"
              >
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Details Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Biography */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Sobre mí</h4>
            <p className="text-gray-600 leading-relaxed">
              {member.biografia}
            </p>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Especialidades</h4>
            <div className="flex flex-wrap gap-2">
              {member.especialidades.map((specialty) => (
                <span
                  key={specialty}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Certificaciones</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {member.certificaciones.map((cert, index) => (
                <div
                  key={index}
                  className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Complementarity */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Complementariedad en el Equipo
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {member.nombre} aporta {member.experienciaAnios} años de experiencia especializada en{' '}
              {member.especialidades.slice(0, 2).join(' y ')}, complementando perfectamente las 
              habilidades del equipo. Su expertise en {member.rol.toLowerCase()} es fundamental 
              para el éxito de nuestros proyectos más complejos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;