import React from "react";
import type { Image } from "./images";


interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  images: Image[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox = React.memo(({ isOpen, currentIndex, images, onClose, onPrev, onNext }: LightboxProps) => {
  if (!isOpen) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <span className="close" onClick={(e) => { e.stopPropagation(); onClose(); }}>
        &times;
      </span>
      <button className="prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        &#10095;
      </button>
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="lightbox-img"
        loading="lazy"
      />
      <button className="next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        &#10094;
      </button>
    </div>
  );
});
