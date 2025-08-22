import React from 'react';
import './Footer.scss';

const Footer = React.memo(() => {
  return (
    <footer className="footer" aria-label="Pie de página">
      <p>© 2025 Nuestro Espacio. Todos los derechos reservados.</p>
      <nav aria-label="Enlaces legales">
        <a href="/privacy-policy">Política de privacidad</a> | 
        <a href="/sitemap.xml">Sitemap</a>
      </nav>
    </footer>
  );
});

export default Footer;
