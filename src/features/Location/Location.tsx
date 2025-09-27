import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import './Location.scss';

const Location: React.FC = React.memo(() => {
  const { cookieConsent } = useGlobalContext();

  return (
    <section className="location" id="location" aria-label="Ubicación del local">
      <h2>Localización</h2>
      <p>Estamos en C/ Poeta Blanco Criado, 6, Levante, 14007 Córdoba.</p>
      <div className="map-container">
        {cookieConsent ? (
          <iframe
            title="Mapa de ubicación - Eventos La Cabaña"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.716042876604!2d-4.7562357!3d37.8924571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf33b1c6b4ab%3A0x76fca9015d6aebcc!2sC.%20Poeta%20Blanco%20Criado%2C%206%2C%20Levante%2C%2014007%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1692550000000!5m2!1ses!2ses"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className="map-placeholder">
            <p>Para ver el mapa necesitas aceptar cookies de Google Maps.</p>
          </div>
        )}
      </div>
    </section>
  );
});

export default Location;
