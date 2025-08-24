import React from 'react';
import { navLinks } from './navLinks';
import './Header.scss';

const Header = React.memo(() => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo" aria-label="Eventos La Cabaña">
          {/* <img
            src="/.webp"
            alt="Decoración cabaña"
            className="logo-img"
            width={48}
            height={48}
            loading="lazy"
          /> */}
          Eventos La Cabaña
        </div>
        <nav className="nav" aria-label="Menú principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={link.className ?? ''}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
});

export default Header;