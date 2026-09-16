import { Calendar } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { BUSINESS_DATA } from '../data/business';

export function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp Action Button - Desktop & Tablet */}
      <aside aria-label="Ações rápidas de contato" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={BUSINESS_DATA.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-3 focus:ring-emerald-400"
          aria-label="Fale conosco pelo WhatsApp"
        >
          {/* Subtle glowing ring indicator */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>

          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="text-xs font-semibold tracking-wide">Falar no WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <nav
        id="mobile-sticky-bar"
        aria-label="Ações de agendamento mobile"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F5]/98 backdrop-blur-md border-t border-[#E5D7D3] px-4 pt-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-2.5 max-w-md mx-auto">
          {/* Quick WhatsApp button */}
          <a
            href={BUSINESS_DATA.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-bar-whatsapp"
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F0FAF4] border border-emerald-200 text-emerald-700 hover:bg-emerald-50 active:scale-95 transition-transform shrink-0"
            aria-label="Conversar no WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6 text-emerald-600" />
          </a>

          {/* Primary Agendar Horário CTA */}
          <a
            href={BUSINESS_DATA.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-bar-booking"
            className="flex-1 flex items-center justify-center gap-2 bg-[#5B1D30] hover:bg-[#72223D] active:scale-98 text-white h-12 px-4 rounded-xl font-semibold text-sm shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
          </a>
        </div>
      </nav>
    </>
  );
}
