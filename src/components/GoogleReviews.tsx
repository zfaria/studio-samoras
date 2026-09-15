import { Star, ExternalLink, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { BUSINESS_DATA, GOOGLE_REVIEWS } from '../data/business';

export function GoogleReviews() {
  const { googleReviews } = BUSINESS_DATA;

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-[#F5EFEB] relative">
      {/* Anchor alias to support previous #galeria links seamlessly */}
      <span id="galeria" className="absolute -top-24 sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBD9DF] text-[#65233B] text-xs font-semibold uppercase tracking-wider mb-3">
              {/* Google stylized mini badge */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <span>Avaliações no Google · Nota 5.0 ★</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2C111B] leading-tight">
              O que nossas clientes dizem
            </h2>
            <p className="text-base text-[#655459] mt-2 max-w-xl">
              Experiências reais e depoimentos de quem frequenta e confia no cuidado e acabamento do Studio Samora's em Suzano.
            </p>
          </div>

          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            id="google-reviews-header-btn"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#65233B] hover:text-[#843851] py-2.5 px-5 rounded-full border border-[#D9C4CC] hover:border-[#65233B] bg-white shadow-xs hover:shadow-md transition-all duration-200 self-start md:self-auto shrink-0"
          >
            <ExternalLink className="w-4 h-4 text-[#843851]" />
            <span>Ver todas no Google</span>
          </a>
        </div>

        {/* Google Rating Overview Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5D7D3] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Stars & Score */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FAF3F0] text-[#72223D] font-serif-luxury text-3xl font-bold shadow-inner border border-[#ECDCD6]">
                5.0
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-semibold text-sm text-[#2C111B] flex items-center justify-center sm:justify-start gap-1.5">
                  <span>Excelente · Avaliações no Google</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                </p>
                <p className="text-xs text-[#7A676D]">
                  Classificação máxima com 100% de avaliações 5 estrelas em Suzano - SP
                </p>
              </div>
            </div>

            {/* Right: Direct CTA to Read or Leave Review */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                id="leave-google-review-btn"
                className="inline-flex items-center gap-2 bg-[#5B1D30] hover:bg-[#72223D] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all active:scale-95"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Avaliar no Google</span>
              </a>
              <a
                href={googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                id="open-google-reviews-link"
                className="inline-flex items-center gap-1.5 bg-[#FAF7F5] hover:bg-white text-[#523C43] border border-[#D9C8CD] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Conferir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8C3A5A]" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#E3D6D0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top: Author & Rating */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {review.avatarUrl ? (
                      <img
                        src={review.avatarUrl}
                        alt={`Foto de perfil de ${review.authorName}`}
                        className="w-10 h-10 rounded-full object-cover shadow-xs border border-[#E3D6D0]"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shadow-xs"
                        style={{ backgroundColor: review.avatarBgColor || '#72223D' }}
                      >
                        {review.initials}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-sm text-[#2C111B] leading-tight">
                        {review.authorName}
                      </h4>
                      <p className="text-[11px] text-[#7A676D] flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Avaliação Verificada</span>
                      </p>
                    </div>
                  </div>

                  {/* Google G logo miniature */}
                  <div className="w-6 h-6 rounded-full bg-[#F5EFEB] flex items-center justify-center" title="Publicado no Google">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Stars & Time */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-[#8A757B]">· {review.timeAgo}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4E3E43] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Card Footer: Tag & Link */}
              <div className="mt-5 pt-4 border-t border-[#F0E6E2] flex items-center justify-between text-xs">
                {review.serviceMentioned ? (
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF4F2] text-[#6E2A42] font-medium text-[11px]">
                    {review.serviceMentioned}
                  </span>
                ) : <span />}

                <a
                  href={review.reviewUrl || googleReviews.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#72223D] hover:text-[#521528] font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  <span>{review.reviewUrl ? 'Ver no Google' : 'Google'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 text-center">
          <a
            href={googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            id="all-google-reviews-bottom-btn"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-[#FAF7F5] text-[#4A1727] border border-[#D5C2C9] hover:border-[#72223D] px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-xs hover:shadow-md"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
            <span>Ver perfil e todas as avaliações no Google</span>
            <ExternalLink className="w-4 h-4 text-[#72223D]" />
          </a>
        </div>
      </div>
    </section>
  );
}
