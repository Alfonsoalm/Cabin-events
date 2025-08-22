import { useState } from 'react';
import { Lightbox } from './Lightbox';
import { images, visibleImages } from './images';
import './Gallery.scss';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <section className="gallery" id="gallery" aria-label="Galería de imágenes">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {visibleImages.map((img, index) => (
          <figure
            key={img.src}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <figcaption>{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      <Lightbox
        isOpen={isOpen}
        currentIndex={currentIndex}
        images={images}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
};

export default Gallery;
