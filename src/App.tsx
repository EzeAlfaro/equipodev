import { Header, Footer, HeroSection, StatsSection, ServicesSection, PortfolioSection, TeamSection, TestimonialsSection, ContactSection } from './components';
import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState('<p>¡Edita este contenido en vivo!</p>');

  return (
    <div className="min-h-screen">
      <Header />
      {/* Editor visual en vivo */}
      <section className="max-w-2xl mx-auto my-8 p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold mb-2">Editor Visual en Vivo</h1>
        <JoditEditor
          ref={editor}
          value={content}
          tabIndex={1}
          onBlur={(newContent: string) => setContent(newContent)}
          onChange={(newContent: string) => setContent(newContent)}
        />
        <h2 className="mt-4 font-semibold">Vista previa:</h2>
        <div className="border p-2 mt-2" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      <main className="pt-20">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;