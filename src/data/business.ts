import { BusinessInfo, ServicePlaceholder, GalleryPhoto, ExperiencePillar, InstagramPost, GoogleReview } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: "Studio Samora's",
  logoUrl: "/logo.jpg",
  tagline: "Suas unhas merecem esse cuidado.",
  subTagline: "Beleza, cuidado e momentos para você.",
  description: "Um espaço dedicado ao cuidado e à beleza das suas unhas, pensado para proporcionar uma experiência especial em cada visita.",
  instagram: {
    handle: "@studiosamoras",
    url: "https://www.instagram.com/studiosamoras",
  },
  whatsapp: {
    display: "(11) 94549-2722",
    url: "https://api.whatsapp.com/send/?phone=5511945492722&type=phone_number",
  },
  booking: {
    url: "https://app.agenda.beauty/agendastudiosamoras",
    ctaText: "Agende seu horário",
  },
  maps: {
    directionsUrl: "https://maps.google.com/?daddr=Av.%20Conde%20de%20Monte%20Cristo%2C%20285%20-%20Jardim%20Monte%20Cristo%2C%20Suzano%20-%20SP%2C%2008670-020%2C%20Brazil",
    embedQuery: "Studio Samora's, Av. Conde de Monte Cristo, 285, Suzano - SP",
  },
  googleReviews: {
    rating: 5.0,
    totalReviews: 10,
    url: "https://www.google.com/search?q=studio+samoras&oq=studio+samoras&gs_lcrp=EgRlZGdlKgYIABBFGDsyBggAEEUYOzIICAEQABgNGB4yCggCEAAYCBgNGB4yCggDEAAYCBgNGB4yCggEEAAYCBgNGB4yBwgFEAAY7wUyBggGEEUYPDIGCAcQRRg8MgYICBBFGDzSAQg2ODAyajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x94ce7b9cf2962785:0x85ad6f943757370e,1,,,,",
  },
  address: {
    street: "Av. Conde de Monte Cristo, 285",
    neighborhood: "Jardim Monte Cristo",
    city: "Suzano",
    state: "SP",
    cep: "08670-020",
    country: "Brasil",
    formatted: "Av. Conde de Monte Cristo, 285 - Jardim Monte Cristo, Suzano - SP, 08670-020",
  },
  schedule: {
    tuesdayToSunday: "08:00 às 18:00",
    monday: "Fechado",
    openHour: 8,
    closeHour: 18,
  },
};

/**
 * Visual structure prepared for future service details.
 * Strictly adheres to non-invented data: generic categories with clear invitation to consult official catalogue.
 */
export const SERVICES_STRUCTURE: ServicePlaceholder[] = [
  {
    id: "servico-manicure",
    title: "Serviço de Manicure",
    category: "manicure",
    description: "Cuidado delicado e acabamento dedicado para a saúde e beleza das suas mãos.",
    durationPlaceholder: "Consulte duração no agendamento",
    priceNote: "Consulte opções e valores disponíveis",
    tag: "Mãos",
    imageUrl: "/images/img1.jpg",
  },
  {
    id: "servico-pedicure",
    title: "Serviço de Pedicure",
    category: "pedicure",
    description: "Atenção completa aos seus pés com higiene cuidadosa, conforto e estética impecável.",
    durationPlaceholder: "Consulte duração no agendamento",
    priceNote: "Consulte opções e valores disponíveis",
    tag: "Pés",
    imageUrl: "/images/peimg1.jpg",
  },
  {
    id: "servico-cuidados",
    title: "Consulte os Serviços Disponíveis",
    category: "cuidados",
    description: "Confira a variedade de procedimentos, técnicas de esmaltação e horários abertos em nossa agenda.",
    durationPlaceholder: "Horários atualizados em tempo real",
    priceNote: "Tabela oficial na Agenda Beauty",
    tag: "Catálogo",
    imageUrl: "/images/img4.jpg",
  },
];

/**
 * 4 Experience Pillars based safely and strictly on the requested concepts:
 * Cuidado, Beleza, Atendimento, Seu momento.
 */
export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: "cuidado",
    title: "Cuidado",
    description: "Atenção minuciosa em cada detalhe, priorizando o bem-estar e a saúde das suas unhas.",
    icon: "HeartHandshake",
  },
  {
    id: "beleza",
    title: "Beleza",
    description: "Harmonia, acabamento refinado e técnicas pensadas para valorizar seu estilo pessoal.",
    icon: "Sparkles",
  },
  {
    id: "atendimento",
    title: "Atendimento",
    description: "Recepção atenciosa e ambiente acolhedor para que sua experiência seja agradável do início ao fim.",
    icon: "UserCheck",
  },
  {
    id: "seu-momento",
    title: "Seu Momento",
    description: "Uma pausa relaxante na sua rotina dedicada exclusivamente ao seu autocuidado.",
    icon: "Coffee",
  },
];

/**
 * Gallery items with real photos from Studio Samora's.
 */
export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "work-1",
    title: "Cuidado e Acabamento Delicado",
    category: "Unhas & Esmaltação",
    imageUrl: "/images/img1.jpg",
    alt: "Unhas bem cuidadas com acabamento delicado e sofisticado no Studio Samora's",
  },
  {
    id: "work-2",
    title: "Elegância Clássica e Neutros",
    category: "Manicure",
    imageUrl: "/images/img2.jpg",
    alt: "Esmaltação elegante em tons neutros e sofisticados no Studio Samora's",
  },
  {
    id: "work-3",
    title: "Atenção aos Detalhes",
    category: "Cuidado Pessoal",
    imageUrl: "/images/img3.jpg",
    alt: "Detalhes de esmaltação e preparação de unhas em estúdio de manicure",
  },
  {
    id: "work-4",
    title: "Conforto e Bem-Estar",
    category: "Pedicure",
    imageUrl: "/images/peimg1.jpg",
    alt: "Cuidados dedicados para pés e unhas com conforto no Studio Samora's",
  },
  {
    id: "work-5",
    title: "Estética Contemporânea",
    category: "Unhas & Esmaltação",
    imageUrl: "/images/img5.jpg",
    alt: "Unhas com esmaltação elegante e desenho contemporâneo no Studio Samora's",
  },
  {
    id: "work-6",
    title: "Design e Sofisticação",
    category: "Unhas & Esmaltação",
    imageUrl: "/images/img6.jpg",
    alt: "Trabalhos de manicure e pedicure no Studio Samora's",
  },
];

/**
 * Curated Instagram highlight posts preview with Studio Samora's photos
 */
export const INSTAGRAM_PREVIEWS: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: "/images/img7.jpg",
    caption: "Cuidado e carinho em cada detalhe. Agende seu horário pelo link na bio!",
    postUrl: "https://www.instagram.com/p/DFWaQXPOFCp/",
  },
  {
    id: "ig-2",
    imageUrl: "/images/img8.jpg",
    caption: "Tons elegantes e acabamento impecável para a sua semana.",
    postUrl: "https://www.instagram.com/p/DFWaL47OZvj/",
  },
  {
    id: "ig-3",
    imageUrl: "/images/img9.jpg",
    caption: "Seu momento de pausa e autocuidado no Studio Samora's.",
    postUrl: "https://www.instagram.com/p/C_W7N8UOSKm/",
  },
  {
    id: "ig-4",
    imageUrl: "/images/img10.jpg",
    caption: "Pés e mãos cuidados com todo o conforto que você merece.",
    postUrl: "https://www.instagram.com/p/DFWaGT5uZkk/",
  },
];

/**
 * Verified Google Reviews for Studio Samora's (5.0 rating on Google Maps / Search)
 */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-lilian-molica",
    authorName: "Lilian Molica",
    initials: "LM",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Maravilhosa, super profissional. Faço a aproximadamente 1 ano e meio alongamento e nunca tive problemas. O serviço de pedicure também é muito bem feito. Tenho unha encravada e ela sempre resolve. Recomendo de olhos fechados.",
    serviceMentioned: "Alongamento & Pedicure",
    avatarBgColor: "#72223D",
    avatarUrl: "/images/lilian-molica.png",
    reviewUrl: "https://share.google/b2HE7Fn4XNGafX9in",
  },
  {
    id: "rev-talita-trajano",
    authorName: "Talita Trajano Lima",
    initials: "TT",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Melhor manicure.",
    serviceMentioned: "Manicure",
    avatarBgColor: "#8C3A5A",
    avatarUrl: "/images/talita.png",
    reviewUrl: "https://share.google/bdJ5MtojzKbFLDJG3",
  },
  {
    id: "rev-selma-aparecida",
    authorName: "Selma Aparecida",
    initials: "SA",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "A melhor possível, adorei 👏👏👏👏",
    serviceMentioned: "Manicure & Pedicure",
    avatarBgColor: "#5B1D30",
    avatarUrl: "/images/selma.png",
    reviewUrl: "https://share.google/gFDY26oziJ5QUBoo0",
  },
  {
    id: "rev-maria-ribeiro",
    authorName: "Maria Ribeiro",
    initials: "MR",
    rating: 5,
    timeAgo: "Avaliação no Google",
    comment: "Profissional excelente",
    serviceMentioned: "Manicure & Cuidados",
    avatarBgColor: "#9A4B69",
    avatarUrl: "/images/maria.png",
    reviewUrl: "https://share.google/LaUx9DOKVOtQ3vnOI",
  },
];
