import { useState, useEffect } from 'react';
import { Calendar, Instagram, Menu, X, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';
import { getStudioStatus } from '../utils/status';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Horários', href: '#horarios' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getStudioStatus());
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].href);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Secao ativa e a ultima cujo topo ja passou pela barra fixa. Detecta por posicao,
      // e nao por IntersectionObserver, porque #horarios fica dentro de #localizacao.
      const limite = (document.getElementById('main-header')?.offsetHeight ?? 80) + 24;
      let atual = NAV_LINKS[0].href;
      for (const { href } of NAV_LINKS) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= limite) atual = href;
      }
      // No fim da pagina a ultima secao vence, mesmo que seu topo nao alcance o limite.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        atual = NAV_LINKS[NAV_LINKS.length - 1].href;
      }
      setActiveSection(atual);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Periodically refresh status
    const interval = setInterval(() => {
      setStatus(getStudioStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8DDD8] py-3'
          : 'bg-[#FAF7F5]/85 backdrop-blur-xs border-b border-[#E8DDD8]/50 py-4.5'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#inicio"
            id="brand-logo"
            className="group flex items-center gap-3 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#72223D] rounded-xl py-0.5"
            aria-label="Studio Samora's - Página Inicial"
          >
            <img
              src={BUSINESS_DATA.logoUrl}
              alt="Logo Studio Samora's"
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-[#D9C4CC] shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-semibold tracking-wide text-[#3E1422] group-hover:text-[#72223D] transition-colors leading-tight whitespace-nowrap">
                Studio Samora's
              </span>
              <span className="text-[10px] sm:text-xs lg:text-[10px] xl:text-xs tracking-widest uppercase text-[#836C73] font-medium whitespace-nowrap">
                Manicure &amp; Pedicure · Suzano
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 mx-4" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`text-sm font-medium transition-colors py-1 relative whitespace-nowrap after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:bg-[#72223D] after:transition-all after:duration-300 hover:text-[#72223D] hover:after:w-full ${
                    isActive ? 'text-[#72223D] font-semibold after:w-full' : 'text-[#4D3E42] after:w-0'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions: Socials + Primary CTA */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Live Open Status Indicator */}
            <div
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 mr-1 rounded-full text-xs font-medium bg-[#F2EAE7] text-[#553C43] border border-[#E8DDD8] whitespace-nowrap"
              title={status.detailText}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-stone-400'
                }`}
              />
              <span>{status.statusText}</span>
            </div>

            {/* Instagram Icon Link */}
            <a
              href={BUSINESS_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              id="header-instagram-btn"
              className="bg-instagram p-2 text-white rounded-full shadow-xs hover:brightness-110 transition-all"
              aria-label="Instagram do Studio Samora's"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp Icon Link */}
            <a
              href={BUSINESS_DATA.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
              aria-label="WhatsApp do Studio Samora's"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            {/* Main CTA: Booking */}
            <a
              href={BUSINESS_DATA.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              id="header-booking-cta"
              className="inline-flex items-center gap-2 bg-[#5B1D30] hover:bg-[#72223D] text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#72223D] focus:ring-offset-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{BUSINESS_DATA.booking.ctaText}</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Link & Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={BUSINESS_DATA.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 bg-emerald-50 rounded-full md:hidden"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#3E1422] hover:bg-[#F2EAE7] focus:outline-none focus:ring-2 focus:ring-[#72223D]"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden border-b border-[#E8DDD8] bg-[#FAF7F5] shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="px-5 pt-3 pb-6 space-y-3">
            {/* Mobile Header Brand Info */}
            <div className="flex items-center gap-3 pb-2 border-b border-[#E8DDD8]">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Logo Studio Samora's"
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border border-[#D9C4CC] shadow-xs"
              />
              <div>
                <p className="font-serif-luxury text-xl font-semibold text-[#3E1422] leading-none">
                  Studio Samora's
                </p>
                <p className="text-[10px] tracking-wider uppercase text-[#836C73] font-medium mt-1">
                  Manicure &amp; Pedicure · Suzano
                </p>
              </div>
            </div>

            {/* Status indicator in mobile */}
            <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-[#F5ECE8] text-xs text-[#523A41]">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-600' : 'bg-stone-400'
                }`}
              />
              <span className="font-medium">{status.statusText}</span>
              <span className="text-[#7A646A]">({status.detailText})</span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-1" aria-label="Menu móvel">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors border-l-2 ${
                      isActive
                        ? 'text-[#72223D] bg-[#F5ECE8] border-[#72223D] font-semibold'
                        : 'text-[#44363A] border-transparent hover:text-[#72223D] hover:bg-[#F2EAE7]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[#E8DDD8] flex flex-col gap-2.5">
              {/* Main Booking CTA */}
              <a
                href={BUSINESS_DATA.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#5B1D30] hover:bg-[#72223D] text-white py-3 px-4 rounded-xl text-center font-semibold text-base shadow-sm active:scale-98 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>{BUSINESS_DATA.booking.ctaText}</span>
              </a>

              {/* Social Channels Row */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={BUSINESS_DATA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-instagram flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-white text-xs font-semibold shadow-xs hover:brightness-110 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BUSINESS_DATA.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-[#E0D2CD] text-[#554046] hover:border-[#72223D] hover:text-[#72223D] text-xs font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
