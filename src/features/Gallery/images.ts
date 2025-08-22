// src/data/images.ts

export interface Image {
  src: string;
  alt: string;
}

export const images: Image[] = [
  { src: './image1.webp', alt: 'Salón principal con decoración elegante' },
  { src: './image2.webp', alt: 'Área exterior con jardín y luces' },
  { src: './image3.webp', alt: 'Detalle de la decoración de mesas' },
  { src: './image4.webp', alt: 'Zona de descanso y lounge para invitados' },
  { src: './image5.webp', alt: 'Vista panorámica del salón' },
];

// si quieres mostrar solo un subset (ej. portada de galería)
export const visibleImages = images.slice(0, 3);
