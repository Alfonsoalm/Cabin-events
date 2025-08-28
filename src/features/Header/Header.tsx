import React from 'react';
import { navLinks } from './navLinks';
import { MdOutlineCabin } from 'react-icons/md';
import './Header.scss';

const Header = React.memo(() => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo" aria-label="Eventos La Cabaña - Eventos, cumpleaños y reuniones en Córdoba">
          <MdOutlineCabin 
            size={48} 
            aria-hidden="true" 
            className='logo-img'
            title="Icono de cabina - Eventos La Cabaña en Córdoba"
          />
          <span className="logo-text">
            Eventos La Cabaña
          </span>
        </div>

        {/* Menú de navegación */}
        <nav className="nav" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.className ?? ''}
              title={`${link.label} - Eventos en Córdoba`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
});

export default Header;
