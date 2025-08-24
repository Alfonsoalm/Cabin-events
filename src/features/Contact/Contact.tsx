
import React from 'react';
import './Contact.scss';

const Contact = React.memo(() => {
  return (
    <section className="contact" id="contact" aria-label="Información de contacto">
      <h2>Contacto</h2>
      <p>Teléfono: <a href="tel:+123456789">+34 657289925</a></p>
      <p>Email: <a href="mailto:info@nuestroespacio.com">eventoslacabanacor@gmail.com</a></p>
      <p>Poeta Blanco Criado, 6, Levante, 14007 Córdoba</p>
    </section>
  );
});

export default Contact;
