// src/data/images.ts

export interface Image {
  src: string;
  alt: string;
}

export const images: Image[] = [
  { src: './image8.webp', alt: 'Salón principal con decoración acogedora' },
  { src: './image6.webp', alt: 'Equipado con cocina americana' },
  { src: './image11.webp', alt: 'Baño preparado para personas con discapacidad' },
  { src: './image50.webp', alt: 'Mobiliario multifuncional para albergar hasta 32 personas' },
  { src: './image51.webp', alt: 'Vista panorámica del salón' },
  { src: './image7.webp', alt: 'Photocall para hacerse fotos' },
  { src: './image3.webp', alt: 'Televisor de 70 pulgadas con altavoces integrados' },
  { src: './image10.webp', alt: 'Cocina integrada con horno grande, pequeño, microondas, frigorifico, Congelador' },
  { src: './image5.webp', alt: 'Hall de baño' },
  { src: './image19.webp', alt: 'Mesas amplias reconfigurables' },
  { src: './image2.webp', alt: '' },
  { src: './image4.webp', alt: '' },
  { src: './image9.webp', alt: '' },
  { src: './image12.webp', alt: '' },
  { src: './image13.webp', alt: '' },
  { src: './image14.webp', alt: '' },
  { src: './image15.webp', alt: '' },
  { src: './image16.webp', alt: '' },
  { src: './image17.webp', alt: '' },
  { src: './image18.webp', alt: '' },
  { src: './image20.webp', alt: '' },
  { src: './image21.webp', alt: '' },
  { src: './image22.webp', alt: '' },
  { src: './image23.webp', alt: '' },
  { src: './image24.webp', alt: '' },
  { src: './image25.webp', alt: '' },
  { src: './image26.webp', alt: '' },
  { src: './image27.webp', alt: '' },
  { src: './image28.webp', alt: '' },
  { src: './image29.webp', alt: '' },
  { src: './image30.webp', alt: '' },
  { src: './image31.webp', alt: '' },
  { src: './image32.webp', alt: '' },
  { src: './image33.webp', alt: '' },
  { src: './image34.webp', alt: '' },
  { src: './image35.webp', alt: '' },
  { src: './image36.webp', alt: '' },
  { src: './image37.webp', alt: '' },
  { src: './image38.webp', alt: '' },
  { src: './image39.webp', alt: '' },
  { src: './image40.webp', alt: '' },
  { src: './image41.webp', alt: '' },
  { src: './image42.webp', alt: '' },
  { src: './image43.webp', alt: '' },
  { src: './image44.webp', alt: '' },
  { src: './image45.webp', alt: '' },
  { src: './image45.webp', alt: '' },
  { src: './image46.webp', alt: '' },
  { src: './image47.webp', alt: '' },
  { src: './image48.webp', alt: '' },
  { src: './image49.webp', alt: '' },
];

// si quieres mostrar solo un subset (ej. portada de galería)
export const visibleImages = images.slice(0, 10);
