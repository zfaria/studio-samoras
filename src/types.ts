export interface BusinessSchedule {
  tuesdayToSunday: string;
  monday: string;
  openHour: number;
  closeHour: number;
}

export interface BusinessAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
  country: string;
  formatted: string;
}

export interface BusinessInfo {
  name: string;
  logoUrl: string;
  tagline: string;
  subTagline: string;
  description: string;
  instagram: {
    handle: string;
    url: string;
  };
  facebook: {
    url: string;
  };
  whatsapp: {
    display: string;
    url: string;
  };
  booking: {
    url: string;
    ctaText: string;
  };
  maps: {
    directionsUrl: string;
    embedQuery: string;
  };
  googleReviews: {
    rating: number;
    totalReviews: number;
    url: string;
  };
  address: BusinessAddress;
  schedule: BusinessSchedule;
}

export interface ServicePlaceholder {
  id: string;
  title: string;
  category: 'manicure' | 'pedicure' | 'cuidados';
  description: string;
  durationPlaceholder: string;
  priceNote: string;
  tag?: string;
  imageUrl: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  alt: string;
}

export interface ExperiencePillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  postUrl?: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: number;
  timeAgo: string;
  comment: string;
  serviceMentioned?: string;
  initials: string;
  avatarBgColor?: string;
  avatarUrl?: string;
  reviewUrl?: string;
}
