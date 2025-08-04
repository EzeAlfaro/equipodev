import { Header, Footer, HeroSection, StatsSection, ServicesSection, PortfolioSection, TeamSection, TestimonialsSection, ContactSection } from './components'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main content with proper spacing for sticky header */}
      <main className="pt-20">
        {/* Hero/Inicio Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Team Section */}
        <TeamSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App