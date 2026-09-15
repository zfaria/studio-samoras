import { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, Calendar, AlertCircle, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { getStudioStatus } from '../utils/status';

export function LocationAndSchedule() {
  const [status, setStatus] = useState(getStudioStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStudioStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="localizacao" className="py-20 md:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E5EA] text-[#65233B] text-xs font-semibold uppercase tracking-wider mb-3.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização &amp; Horários</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C111B] leading-tight mb-4">
            Onde estamos &amp; Quando visitar
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E54] leading-relaxed">
            Fácil acesso no Jardim Monte Cristo, em Suzano, com estrutura confortável para o seu atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Card & Schedule Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Location Details Card */}
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E8DDD8] shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#843851] uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nosso Endereço</span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#2C111B] mb-4">
                  {BUSINESS_DATA.name}
                </h3>

                <address className="not-italic text-[#554348] text-base leading-relaxed space-y-1 mb-6">
                  <p className="font-medium text-[#2E1A22]">{BUSINESS_DATA.address.street}</p>
                  <p>{BUSINESS_DATA.address.neighborhood}</p>
                  <p>
                    {BUSINESS_DATA.address.city} - {BUSINESS_DATA.address.state}
                  </p>
                  <p className="text-sm text-[#7D6B71]">CEP {BUSINESS_DATA.address.cep}</p>
                  <p className="text-sm text-[#7D6B71]">{BUSINESS_DATA.address.country}</p>
                </address>
              </div>

              <div className="pt-4 border-t border-[#F0E5E1]">
                <a
                  href={BUSINESS_DATA.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-directions-cta"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#5B1D30] hover:bg-[#72223D] text-white py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide shadow-xs transition-all active:scale-98"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Como chegar</span>
                </a>
              </div>
            </div>

            {/* Section 9: Horário de Funcionamento Card */}
            <div id="horarios" className="bg-[#FAF2F4] p-7 sm:p-8 rounded-2xl border border-[#E5D0D7] shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#72223D] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Horário de Funcionamento</span>
                </div>

                {/* Real-time Status Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    status.isOpen
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-stone-200 text-stone-700'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-stone-400'
                    }`}
                  />
                  <span>{status.statusText}</span>
                </div>
              </div>

              {/* Schedule Details as strictly specified */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/90 border border-[#E9DADB] flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#7A646A] uppercase tracking-wider font-semibold">
                      Terça a Domingo
                    </p>
                    <p className="text-lg font-serif-luxury font-semibold text-[#301620]">
                      {BUSINESS_DATA.schedule.tuesdayToSunday}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#843851]" />
                </div>

                <div className="p-4 rounded-xl bg-white/60 border border-[#E9DADB]/80 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8A757B] uppercase tracking-wider font-semibold">
                      Segunda-feira
                    </p>
                    <p className="text-base font-serif-luxury font-medium text-[#7D6B71]">
                      {BUSINESS_DATA.schedule.monday}
                    </p>
                  </div>
                  <AlertCircle className="w-5 h-5 text-stone-400" />
                </div>
              </div>

              <p className="text-xs text-[#756268] mt-4 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#843851] shrink-0" />
                <span>Atendimento mediante agendamento prévio.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (No API key needed) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[380px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#E2D5CF] shadow-sm relative bg-[#EFE5E0]">
              <iframe
                title="Mapa de localização do Studio Samora's em Suzano"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_DATA.maps.embedQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
