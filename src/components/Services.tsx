import { Calendar, Clock, Tag, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_STRUCTURE, BUSINESS_DATA } from '../data/business';

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E5EA] text-[#65233B] text-xs font-semibold uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Serviços &amp; Cuidados</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C111B] leading-tight mb-4">
            Cuidados dedicados para você
          </h2>
          <p className="text-base sm:text-lg text-[#5E4C52] leading-relaxed">
            Consulte a lista completa com procedimentos, horários e opções atualizadas diretamente no sistema de agendamento online.
          </p>
        </div>

        {/* Services Cards Grid - Structured cleanly for future customization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {SERVICES_STRUCTURE.map((service) => (
            <article
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl border border-[#E8DDD8] overflow-hidden shadow-xs hover:shadow-md hover:border-[#DEC1CA] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F2EAE7]">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} no Studio Samora's`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-semibold text-[#72223D] border border-white/60 shadow-xs">
                  {service.tag}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-medium text-[#2C111B] mb-2.5 group-hover:text-[#72223D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#614E54] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Structured placeholders: Duração & Preço */}
                <div className="pt-4 border-t border-[#F0E6E2] space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs text-[#6F5B62]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#843851]" />
                      Duração
                    </span>
                    <span className="text-[#3A292E] font-medium">{service.durationPlaceholder}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#6F5B62]">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Tag className="w-3.5 h-3.5 text-[#843851]" />
                      Valores
                    </span>
                    <span className="text-[#72223D] font-semibold">{service.priceNote}</span>
                  </div>
                </div>

                {/* Action button inside card */}
                <a
                  href={BUSINESS_DATA.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#F6EEEC] hover:bg-[#5B1D30] text-[#553640] hover:text-white text-xs font-semibold tracking-wide transition-all duration-200"
                >
                  <span>Agendar este serviço</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Centralized CTA Banner for Services */}
        <div className="bg-linear-to-r from-[#F7EDF1] to-[#F3E7E2] rounded-2xl p-6 sm:p-8 border border-[#EADBD7] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-[#3A1624] mb-1.5">
              Pronta para escolher o seu procedimento?
            </h4>
            <p className="text-sm text-[#665057]">
              Acesse a plataforma oficial para conferir a grade completa de horários e serviços disponíveis.
            </p>
          </div>

          <a
            href={BUSINESS_DATA.booking.url}
            target="_blank"
            rel="noopener noreferrer"
            id="services-section-cta"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-[#5B1D30] hover:bg-[#72223D] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Ver serviços e agendar</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
