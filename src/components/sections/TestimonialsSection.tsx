import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonios } from '../../data/testimonios';
import { formatDate } from '../../utils';
import type { Testimonio } from '../../types';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  // Calculate average rating
  const averageRating = testimonios.reduce((sum, t) => sum + t.calificacion, 0) / testimonios.length;

  return (
    <section id="testimonios" className="py-20 bg-white">
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
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Descubre por qué confían en nosotros para sus proyectos más importantes.
          </p>
          
          {/* Overall Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(averageRating))}
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {averageRating.toFixed(1)}/5.0
              </div>
              <div className="text-gray-600">Calificación Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {testimonios.length}
              </div>
              <div className="text-gray-600">Testimonios</div>
            </div>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <TestimonialCard testimonial={testimonios[currentIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-colors duration-300 ${
                isAutoPlaying
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pausar' : '▶️ Reproducir'} Auto-play
            </button>
          </div>
        </div>

        {/* Testimonials Grid Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Todos Nuestros Testimonios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonios.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <TestimonialMiniCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonio;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Quote Icon */}
      <div className="text-6xl text-blue-600/20 mb-6">
        "
      </div>

      {/* Rating */}
      <div className="flex justify-center mb-6">
        {renderStars(testimonial.calificacion)}
      </div>

      {/* Comment */}
      <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
        "{testimonial.comentario}"
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center justify-center space-x-4">
        {/* Avatar */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
          {testimonial.cliente.split(' ').map(n => n[0]).join('')}
        </div>
        
        {/* Details */}
        <div className="text-left">
          <div className="font-bold text-gray-900 text-lg">
            {testimonial.cliente}
          </div>
          <div className="text-blue-600 font-semibold">
            {testimonial.empresa}
          </div>
          <div className="text-gray-500 text-sm">
            {testimonial.proyecto}
          </div>
          <div className="text-gray-400 text-sm">
            {formatDate(testimonial.fecha)}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialMiniCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div>
      {/* Rating */}
      <div className="flex mb-3">
        {renderStars(testimonial.calificacion)}
      </div>

      {/* Comment Preview */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        "{testimonial.comentario}"
      </p>

      {/* Client Info */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {testimonial.cliente.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.cliente}
          </div>
          <div className="text-blue-600 text-xs">
            {testimonial.empresa}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;