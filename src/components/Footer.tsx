import { Instagram, MessageCircle, Calendar, MapPin, Clock, ArrowUp, Star } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#260F17] text-[#EDE0E3] pt-16 pb-24 md:pb-12 border-t border-[#3B1724]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3E1A27]">
          {/* Brand Presentation */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-3">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Logo Studio Samora's"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-[#5C2337] shadow-sm"
              />
              <div>
                <span className="font-serif-luxury text-3xl font-semibold tracking-wide text-white block leading-tight">
                  {BUSINESS_DATA.name}
                </span>
                <p className="text-[11px] uppercase tracking-widest text-[#D4A5B5] font-medium">
                  Estúdio de Manicure e Pedicure
                </p>
              </div>
            </div>
            <p className="text-sm text-[#C4ABB3] leading-relaxed max-w-sm mb-6">
              {BUSINESS_DATA.description}
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-instagram w-10 h-10 rounded-full flex items-center justify-center text-white hover:brightness-110 transition-all"
                aria-label="Instagram do Studio Samora's"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={BUSINESS_DATA.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D1A27] hover:bg-[#5C2337] flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp do Studio Samora's"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
              </a>
              <a
                href={BUSINESS_DATA.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3D1A27] hover:bg-[#5C2337] flex items-center justify-center text-white transition-colors"
                aria-label="Agendamento Online no Agenda Beauty"
              >
                <Calendar className="w-5 h-5 text-[#F0DAE2]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4ABB3]">
              <li>
                <a
                  href={BUSINESS_DATA.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4A5B5]" />
                  <span>Agendamento</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_DATA.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_DATA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#e1306c]" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_DATA.googleReviews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Avaliações no Google (5.0 ★)</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_DATA.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D4A5B5]" />
                  <span>Localização (Google Maps)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Business Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Informações do Estúdio
            </h4>

            <div>
              <div className="flex items-center gap-2 text-xs text-[#D4A5B5] font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#E6B8C6]" />
                <span>Endereço</span>
              </div>
              <p className="text-sm text-[#C4ABB3] leading-relaxed">
                {BUSINESS_DATA.address.formatted}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-[#D4A5B5] font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-[#E6B8C6]" />
                <span>Horário</span>
              </div>
              <p className="text-sm text-[#C4ABB3]">
                Terça a Domingo — {BUSINESS_DATA.schedule.tuesdayToSunday}
              </p>
              <p className="text-xs text-[#9B7F87] mt-0.5">
                Segunda-feira: Fechado
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B7F87]">
          <p>
            &copy; {currentYear} {BUSINESS_DATA.name}. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#C4ABB3] hover:text-white transition-colors py-1 px-2 rounded-sm"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
