// Utility functions for the application

// Email validation utility
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format date utility
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

// Smooth scroll utility
export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Generate unique ID utility
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Filter projects by category
export const filterProjectsByCategory = (projects: any[], category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.categoria === category);
};

// Get team member by ID
export const getTeamMemberById = (members: any[], id: string) => {
  return members.find(member => member.id === id);
};

// Get service by ID
export const getServiceById = (services: any[], id: string) => {
  return services.find(service => service.id === id);
};

// Calculate project duration in days
export const calculateProjectDuration = (startDate: Date, endDate: Date): number => {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Format price range
export const formatPriceRange = (min: number, max: number): string => {
  return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
};

// Get random testimonials
export const getRandomTestimonials = (testimonials: any[], count: number = 3) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Sort projects by date (newest first)
export const sortProjectsByDate = (projects: any[]) => {
  return [...projects].sort((a, b) => new Date(b.fechaFin).getTime() - new Date(a.fechaFin).getTime());
};