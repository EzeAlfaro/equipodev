import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { isValidEmail } from '../../utils';

interface ContactFormData {
  nombre: string;
  email: string;
  empresa?: string;
  telefono?: string;
  tipoProyecto: string;
  presupuesto: string;
  mensaje: string;
  urgencia: string;
}

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<ContactFormData>();

  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate EmailJS integration
      // In a real implementation, you would use:
      // await emailjs.send('service_id', 'template_id', data, 'public_key');
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: '', label: 'Selecciona el tipo de proyecto' },
    { value: 'web', label: 'Aplicación Web' },
    { value: 'mobile', label: 'Aplicación Móvil' },
    { value: 'ecommerce', label: 'Tienda Online / E-commerce' },
    { value: 'sistema', label: 'Sistema de Gestión (CRM/ERP)' },
    { value: 'api', label: 'API / Microservicios' },
    { value: 'consultoria', label: 'Consultoría Técnica' },
    { value: 'otro', label: 'Otro (especificar en mensaje)' }
  ];

  const budgetRanges = [
    { value: '', label: 'Selecciona tu presupuesto' },
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-20000', label: '$10,000 - $20,000' },
    { value: '20000-50000', label: '$20,000 - $50,000' },
    { value: '50000+', label: '$50,000+' },
    { value: 'por-definir', label: 'Por definir' }
  ];

  const urgencyLevels = [
    { value: '', label: 'Selecciona la urgencia' },
    { value: 'baja', label: 'Baja - Tengo tiempo para planificar' },
    { value: 'media', label: 'Media - Me gustaría empezar en 1-2 meses' },
    { value: 'alta', label: 'Alta - Necesito empezar pronto' },
    { value: 'urgente', label: 'Urgente - Es para ayer' }
  ];

  return (
    <section id="contacto" className="py-20 bg-gray-50">
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
            ¿Listo para Empezar tu Proyecto?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuéntanos sobre tu idea y te ayudaremos a convertirla en realidad. 
            Responderemos en menos de 24 horas con una propuesta personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Formulario de Contacto
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    {...register('nombre', { 
                      required: 'El nombre es requerido',
                      minLength: { value: 2, message: 'Mínimo 2 caracteres' }
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'El email es requerido',
                      validate: value => isValidEmail(value) || 'Email inválido'
                    })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    {...register('empresa')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    {...register('telefono')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Proyecto *
                </label>
                <select
                  {...register('tipoProyecto', { required: 'Selecciona el tipo de proyecto' })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.tipoProyecto ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {projectTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.tipoProyecto && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoProyecto.message}</p>
                )}
              </div>

              {/* Budget and Urgency Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto Estimado *
                  </label>
                  <select
                    {...register('presupuesto', { required: 'Selecciona tu presupuesto' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.presupuesto ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {budgetRanges.map(budget => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                  {errors.presupuesto && (
                    <p className="text-red-500 text-sm mt-1">{errors.presupuesto.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgencia *
                  </label>
                  <select
                    {...register('urgencia', { required: 'Selecciona la urgencia' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.urgencia ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    {urgencyLevels.map(urgency => (
                      <option key={urgency.value} value={urgency.value}>
                        {urgency.label}
                      </option>
                    ))}
                  </select>
                  {errors.urgencia && (
                    <p className="text-red-500 text-sm mt-1">{errors.urgencia.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  {...register('mensaje', { 
                    required: 'El mensaje es requerido',
                    minLength: { value: 10, message: 'Mínimo 10 caracteres' }
                  })}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                    errors.mensaje ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto, objetivos, funcionalidades específicas que necesitas, etc."
                />
                {errors.mensaje && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensaje.message}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  {watchedFields.mensaje?.length || 0} caracteres
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                } text-white`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="text-green-600 mr-3">✅</div>
                    <div>
                      <h4 className="text-green-800 font-semibold">¡Mensaje enviado exitosamente!</h4>
                      <p className="text-green-700 text-sm">Te responderemos en menos de 24 horas.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="text-red-600 mr-3">❌</div>
                    <div>
                      <h4 className="text-red-800 font-semibold">Error al enviar el mensaje</h4>
                      <p className="text-red-700 text-sm">Por favor, intenta nuevamente o contáctanos directamente.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contacto@equipodev.com</p>
                    <p className="text-sm text-gray-500">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Lun-Vie 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-gray-600">@equipodev-profesional</p>
                    <p className="text-sm text-gray-500">Síguenos para actualizaciones</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 text-xl">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios de Atención</h4>
                    <p className="text-gray-600">Lun-Vie: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sáb: 10:00 AM - 2:00 PM</p>
                    <p className="text-sm text-gray-500">Zona horaria: UTC-5 (EST)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-600 text-xl">📅</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reuniones</h4>
                    <p className="text-gray-600">Consulta inicial gratuita</p>
                    <p className="text-sm text-gray-500">30 min por videollamada</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ubicación</h4>
                    <p className="text-gray-600">Trabajo remoto global</p>
                    <p className="text-sm text-gray-500">Clientes en 15+ países</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/15551234567?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20desarrollo"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                💬 Chatear por WhatsApp
              </a>
              
              <a
                href="mailto:contacto@equipodev.com?subject=Consulta%20sobre%20servicios%20de%20desarrollo&body=Hola%2C%0A%0AMe%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.%20Mi%20proyecto%20es%3A%0A%0A"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                📧 Enviar Email Directo
              </a>

              <a
                href="https://linkedin.com/company/equipodev-profesional"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                💼 Conectar en LinkedIn
              </a>

              <a
                href="https://calendly.com/equipodev/consulta-inicial"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                📅 Agendar Reunión
              </a>
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h4 className="font-bold text-gray-900 mb-4">🌐 Más Formas de Contactarnos</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💬</span>
                    <span className="font-medium">Telegram</span>
                  </div>
                  <a 
                    href="https://t.me/equipodev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    @equipodev
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📞</span>
                    <span className="font-medium">Teléfono</span>
                  </div>
                  <a 
                    href="tel:+15551234567"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💻</span>
                    <span className="font-medium">GitHub</span>
                  </div>
                  <a 
                    href="https://github.com/equipodev-team" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    @equipodev-team
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🐦</span>
                    <span className="font-medium">Twitter</span>
                  </div>
                  <a 
                    href="https://twitter.com/equipodev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    @equipodev
                  </a>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-gray-900 mb-3">🚀 Nuestra Promesa de Servicio</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Respuesta en menos de 24 horas
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Propuesta personalizada gratuita
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Consulta inicial sin compromiso
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Comunicación transparente
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Soporte post-entrega incluido
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  Metodología ágil y entregas frecuentes
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;