import React from 'react';
import './Hero.scss';

const Hero = React.memo(() => {
  return (
    <section className="hero" aria-label="Sección principal">
      <div className="hero-content">
        <h1 className="title">Bienvenidos a Nuestro Espacio</h1>
        <h2 className="subtitle">El lugar perfecto para tus eventos inolvidables</h2>
        <a className="cta-button" href="#reservation" aria-label="Ir a sección de reservas">
          Reservar Ahora
        </a>
      </div>
    </section>
  );
});

export default Hero;
