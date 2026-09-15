import { HeartHandshake, Sparkles, UserCheck, Coffee } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/business';

export function Features() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#72223D]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#72223D]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#72223D]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#72223D]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#72223D]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#FAF7F5] border-y border-[#E8DDD8]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E5EA] text-[#65233B] text-xs font-semibold uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossa Proposta</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C111B] leading-tight mb-4">
            Por que escolher o Studio Samora's
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E54] leading-relaxed">
            Pilares essenciais que orientam cada momento do seu atendimento.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              className="bg-white p-7 rounded-2xl border border-[#E9DDD7] shadow-xs hover:shadow-md hover:border-[#D9BDC7] transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="w-13 h-13 rounded-2xl bg-[#F8EDF1] border border-[#ECD1DA] flex items-center justify-center mb-6">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="font-serif-luxury text-2xl font-semibold text-[#2F1521] mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#635157] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
