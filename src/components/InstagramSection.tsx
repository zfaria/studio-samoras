import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { BUSINESS_DATA, INSTAGRAM_PREVIEWS } from '../data/business';
import { FacebookIcon } from './icons/FacebookIcon';

export function InstagramSection() {
  return (
    <section id="instagram" className="py-20 md:py-28 bg-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBD9DF] text-[#65233B] text-xs font-semibold uppercase tracking-wider mb-3.5">
            <Instagram className="w-3.5 h-3.5 text-[#843851]" />
            <span>Redes Sociais</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C111B] leading-tight mb-3">
            Veja nosso trabalho nas redes sociais
          </h2>
          <p className="text-base sm:text-lg text-[#5F4E54] leading-relaxed mb-6">
            Acompanhe nossos trabalhos, novidades e inspirações.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto">
            <a
              href={BUSINESS_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              id="instagram-profile-cta"
              className="bg-instagram inline-flex items-center justify-center gap-2 text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow-md hover:brightness-110 transition-all active:scale-98"
            >
              <Instagram className="w-4 h-4" />
              <span>{BUSINESS_DATA.instagram.handle}</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
            <a
              href={BUSINESS_DATA.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              id="facebook-page-cta"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1C2B4A] border border-[#D5DDEE] hover:border-[#0866FF] px-7 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <FacebookIcon className="w-5 h-5" />
              <span>Seguir no Facebook</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
          </div>
        </div>

        {/* Instagram Grid Showcase */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_PREVIEWS.map((post) => (
            <a
              key={post.id}
              href={post.postUrl || BUSINESS_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square rounded-2xl overflow-hidden bg-white border border-[#E3D6D0] shadow-xs hover:shadow-md transition-all duration-300"
              aria-label={`Ver publicação no Instagram: ${post.caption}`}
            >
              <img
                src={post.imageUrl}
                alt="Publicação do Studio Samora's no Instagram"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                loading="lazy"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#2C111B]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium opacity-90">@studiosamoras</span>
                  <Instagram className="w-4 h-4 text-[#F0DAE2]" />
                </div>

                <p className="text-xs line-clamp-3 text-stone-200 font-normal leading-relaxed">
                  {post.caption}
                </p>

                <div className="flex items-center gap-3 text-xs text-[#F0DAE2]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                  <span className="ml-auto text-[11px] underline underline-offset-2">Ver no Insta</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
