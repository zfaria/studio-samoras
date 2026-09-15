import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { GoogleReviews } from './components/GoogleReviews';
import { Features } from './components/Features';
import { InstagramSection } from './components/InstagramSection';
import { LocationAndSchedule } from './components/LocationAndSchedule';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2C2426]">
      {/* Skip link: keyboard/screen-reader users can bypass the header nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-white focus:text-[#3E1422] focus:px-4 focus:py-2.5 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#72223D]"
      >
        Pular para o conteúdo
      </a>

      {/* Header / Navbar */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Sobre o Studio */}
        <About />

        {/* 4. Serviços */}
        <Services />

        {/* 5. Avaliações do Google (Substituindo Galeria & Inspirações) */}
        <GoogleReviews />

        {/* 6. Por que escolher o Studio Samora's */}
        <Features />

        {/* 7. Instagram */}
        <InstagramSection />

        {/* 8. Localização & 9. Horário de Funcionamento */}
        <LocationAndSchedule />

        {/* 10. CTA Final */}
        <FinalCta />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Mobile Sticky Bar & Floating WhatsApp */}
      <FloatingActions />
    </div>
  );
}
