import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = React.memo(() => {
  return (
    <footer className="footer" aria-label="Pie de página">
      <p>© 2025 Eventos la Cabaña, Locales de alquiler para Negocios, Cumpleaños y Reuniones. Todos los derechos reservados.</p>
      
      <nav className="footer-links" aria-label="Redes sociales">
        <a 
          href="https://www.instagram.com/eventos.lacabana" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram de Eventos La Cabaña"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.facebook.com/lacabana.eventosycursos/?locale=es_LA" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook de Eventos La Cabaña"
        >
          <FaFacebookF />
        </a>
      </nav>

      <nav className="footer-legal" aria-label="Enlaces legales">
        <a href="/privacy-policy">Política de privacidad</a> | 
        <a href="/sitemap.xml">Sitemap</a>
      </nav>
    </footer>
  );
});

export default Footer;
