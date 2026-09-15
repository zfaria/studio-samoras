import { CheckCircle2, Sparkles, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#F5EFEB] relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#E9D5DC]/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with refined framing */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-[#E2D5CF] bg-white aspect-4/3 sm:aspect-5/4">
                <img
                  src="/images/img2.jpg"
                  alt="Espaço e ambiente de manicure e cuidados no Studio Samora's"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Inset quote badge with official logo */}
              <div className="mt-4 sm:-mt-10 sm:ml-6 relative z-10 max-w-xs bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-[#E5D7D3] shadow-md flex items-start gap-3.5">
                <img
                  src={BUSINESS_DATA.logoUrl}
                  alt="Logo Studio Samora's"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#E0D2CD] shadow-xs shrink-0"
                />
                <div>
                  <p className="font-serif-luxury italic text-xs sm:text-sm text-[#4E182B] leading-relaxed">
                    "Um ambiente acolhedor pensado para que você sinta bem-estar a cada visita."
                  </p>
                  <p className="text-[11px] font-semibold text-[#843851] mt-1 uppercase tracking-wider">
                    Studio Samora's · Suzano
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Presentation */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBD9DF] text-[#65233B] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Conheça o Studio</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C111B] leading-tight mb-6">
              Dedicado ao cuidado e à beleza das suas unhas
            </h2>

            {/* Respecting strict constraint: institucional text without invented stories */}
            <p className="text-base sm:text-lg text-[#55454A] leading-relaxed mb-6">
              {BUSINESS_DATA.description}
            </p>

            <p className="text-sm sm:text-base text-[#68575D] leading-relaxed mb-8">
              Localizado no Jardim Monte Cristo, em Suzano, o estúdio oferece serviços de manicure e pedicure com foco na higiene, na atenção às suas preferências e na valorização da sua autoestima.
            </p>

            {/* Core facts points - grounded in user data */}
            <div className="space-y-3.5 w-full mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E6CCD5] flex items-center justify-center text-[#72223D] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-[#3E2F33] font-medium">
                  Atendimento especializado para cuidados de mãos e pés
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E6CCD5] flex items-center justify-center text-[#72223D] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-[#3E2F33] font-medium">
                  Atendimento de terça-feira a domingo com horário marcado
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E6CCD5] flex items-center justify-center text-[#72223D] shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-[#3E2F33] font-medium">
                  Agendamento online prático e rápido pelo sistema Agenda Beauty
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <a
              href={BUSINESS_DATA.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5B1D30] hover:bg-[#72223D] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Agende sua visita</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
