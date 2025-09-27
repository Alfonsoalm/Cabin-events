import React from 'react';
import './Hero.scss';

const Hero = React.memo(() => {
  return (
    <section className="hero" aria-label="Sección principal">
      <div className="hero-container">
        {/* Contenido central */}
        <div className="hero-content">
          <h1 className="title">Bienvenidos a Nuestro Espacio</h1>
          <h2 className="subtitle">El lugar perfecto para tus eventos inolvidables</h2>
          <p className="description">
            En <strong>Eventos La Cabaña</strong> en Córdoba alquilamos espacios para 
            <strong> cumpleaños, reuniones corporativas, talleres, clases de yoga, eventos periódicos y celebraciones puntuales</strong>. 
            Disfruta de instalaciones amplias, bien decoradas y equipadas para que tu evento sea inolvidable.
          </p>
          <a 
            className="cta-button" 
            href="#reservation" 
            aria-label="Reservar ahora nuestro espacio para eventos en Córdoba"
          >
            Reservar Ahora
          </a>
        </div>

        {/* Videos */}
        <div className="hero-videos-row">
          <div className="hero-video">
            <video autoPlay muted loop playsInline>
              <source src="/video1.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
