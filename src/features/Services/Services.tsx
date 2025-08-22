import React from 'react';
import { services } from './services';
import './Services.scss';


const Services = React.memo(() => {
  return (
    <section className="services" id="services" aria-label="Servicios ofrecidos">
      <h2>Nuestros Servicios</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
});

export default Services;
