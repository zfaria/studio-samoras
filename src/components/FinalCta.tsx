import { Calendar, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-[#FAF7F5] via-[#F4E8EC] to-[#EEDEE4] relative overflow-hidden">
      {/* Soft atmospheric blur elements */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2BFCB]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xs text-[#72223D] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#E0CBD3]">
          <Sparkles className="w-3.5 h-3.5 text-[#843851]" />
          <span>Seu Momento Especial</span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-[#2C111B] leading-tight mb-5">
          Pronta para cuidar de você?
        </h2>

        <p className="text-lg sm:text-xl text-[#5E4C52] max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Escolha seu horário e faça seu agendamento.
        </p>

        {/* Both CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
          {/* Main Booking Button */}
          <a
            href={BUSINESS_DATA.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-booking"
            className="inline-flex items-center justify-center gap-2.5 bg-[#5B1D30] hover:bg-[#72223D] text-white px-9 py-4 rounded-full text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#72223D] focus:ring-offset-2"
          >
            <Calendar className="w-5 h-5" />
            <span>{BUSINESS_DATA.booking.ctaText}</span>
            <ArrowRight className="w-4 h-4 ml-0.5 opacity-80" />
          </a>

          {/* WhatsApp Button */}
          <a
            href={BUSINESS_DATA.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp"
            className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F9F5F3] text-[#3A1823] border border-[#D9C4CC] px-8 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#72223D]"
          >
            <MessageCircle className="w-5 h-5 text-emerald-700" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-[#7A646A] mt-6">
          Atendimento de Terça a Domingo · Suzano, SP
        </p>
      </div>
    </section>
  );
}
