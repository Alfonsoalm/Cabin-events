import React from 'react';
import './Hero.scss';

const Hero = React.memo(() => {
  return (
    <section className="hero" aria-label="Sección principal">
      <div className="hero-content">
        <h1 className="title">Bienvenidos a Nuestro Espacio</h1>
        <h2 className="subtitle">El lugar perfecto para tus eventos inolvidables</h2>

        {/* Párrafo con palabras clave */}
        <p className="description">
          En Eventos La Cabaña en Córdoba alquilamos tu espacio para fiestas,  
          cumpleaños, reuniones corporativas, santos y todo tipo de celebraciones. 
          Disfruta de nuestro espacio con instalaciones amplias, bien decoradas y
          equipadas para que tu evento sea inolvidable.
        </p>

        <a 
          className="cta-button" 
          href="#reservation" 
          aria-label="Reservar ahora nuestro espacio para eventos en Córdoba"
        >
          Reservar Ahora
        </a>
      </div>
    </section>
  );
});

export default Hero;
