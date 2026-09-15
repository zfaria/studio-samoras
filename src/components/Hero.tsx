import { Calendar, Instagram, MapPin, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FAF7F5]"
    >
      {/* Subtle organic ambient gradients */}
      <div
        className="absolute top-10 right-0 w-96 h-96 bg-[#F3DDE3]/60 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 bg-[#EFE3DC]/70 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Studio Seal Badge with Logo & Location */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <img
                src={BUSINESS_DATA.logoUrl}
                alt="Logo Studio Samora's"
                referrerPolicy="no-referrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#D9C4CC] shadow-sm shrink-0"
              />
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E9E7] border border-[#E5D7D3] text-[#65233B] text-xs sm:text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#843851]" />
                <span>Estúdio de Manicure e Pedicure</span>
                <span className="text-[#A38D93]">·</span>
                <span className="flex items-center gap-1 text-[#503A40]">
                  <MapPin className="w-3.5 h-3.5 text-[#843851]" />
                  Suzano - SP
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#2B111B] leading-[1.15] mb-6">
              {BUSINESS_DATA.tagline}
            </h1>

            {/* Secondary Headline / Subtitle */}
            <p className="text-lg sm:text-xl text-[#5C4C51] max-w-xl font-normal leading-relaxed mb-8 sm:mb-10">
              {BUSINESS_DATA.subTagline}
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
              {/* Primary CTA */}
              <a
                href={BUSINESS_DATA.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2.5 bg-[#5B1D30] hover:bg-[#72223D] text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#72223D] focus:ring-offset-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{BUSINESS_DATA.booking.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-0.5 opacity-80" />
              </a>

              {/* Secondary CTA */}
              <a
                href={BUSINESS_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-secondary-cta"
                className="bg-instagram inline-flex items-center justify-center gap-2.5 text-white px-6 py-4 rounded-full text-base font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#c13584] focus:ring-offset-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Conheça nosso Instagram</span>
              </a>
            </div>

            {/* Informational micro-pills */}
            <div className="w-full pt-6 border-t border-[#E8DDD8] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#7B696F] mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#843851]" />
                  <span>Funcionamento</span>
                </div>
                <p className="text-sm font-semibold text-[#301620]">
                  Terça a Domingo
                </p>
                <p className="text-xs text-[#6A575D]">08:00 às 18:00</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-[#7B696F] mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#843851]" />
                  <span>Bairro</span>
                </div>
                <p className="text-sm font-semibold text-[#301620]">
                  Jd. Monte Cristo
                </p>
                <p className="text-xs text-[#6A575D]">Suzano, SP</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-xs text-[#7B696F] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#843851]" />
                  <span>Agendamento</span>
                </div>
                <p className="text-sm font-semibold text-[#301620]">
                  Online &amp; Prático
                </p>
                <p className="text-xs text-[#6A575D]">Via Agenda Beauty</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with High-Quality Nail Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-linear-to-tr from-[#EEDDE2] to-[#FAF7F5] -rotate-1.5 scale-98 sm:scale-100 -z-10"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-[#E8DDD8] bg-white aspect-4/5 sm:aspect-3/4">
                <img
                  src="/images/img7.jpg"
                  alt="Unhas com acabamento impecável e elegante no Studio Samora's em Suzano"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Floating Info Badge on image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <img
                      src={BUSINESS_DATA.logoUrl}
                      alt="Logo Studio Samora's"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#E2D5CF] shadow-xs shrink-0"
                    />
                    <div>
                      <p className="text-xs font-semibold text-[#72223D] uppercase tracking-wider">
                        Studio Samora's
                      </p>
                      <p className="text-sm font-medium text-[#2C1920]">
                        Manicure e Pedicure
                      </p>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_DATA.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-[#5B1D30] hover:bg-[#72223D] text-white text-xs font-semibold transition-colors shrink-0"
                  >
                    Agendar
                  </a>
                </div>
              </div>

              {/* Small accent badge top right with brand emblem */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FAF7F5] border border-[#E0D2CD] rounded-2xl p-2.5 shadow-md items-center gap-3 z-10">
                <img
                  src={BUSINESS_DATA.logoUrl}
                  alt="Emblema Studio Samora's"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#D9C4CC]"
                />
                <div className="text-left pr-2">
                  <p className="text-xs font-semibold text-[#2C1920]">Studio Samora's</p>
                  <p className="text-[11px] text-[#78646B]">Beauty Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
