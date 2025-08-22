
import React from 'react';
import './Contact.scss';

const Contact = React.memo(() => {
  return (
    <section className="contact" id="contact" aria-label="Información de contacto">
      <h2>Contacto</h2>
      <p>Teléfono: <a href="tel:+123456789">+123 456 789</a></p>
      <p>Email: <a href="mailto:info@nuestroespacio.com">info@nuestroespacio.com</a></p>
      <p>Dirección: Calle Ejemplo 123, Ciudad</p>
    </section>
  );
});

export default Contact;
