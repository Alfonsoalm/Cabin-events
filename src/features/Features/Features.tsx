import { featuresList } from './featuresList';
import { FaRegClock } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";
import React from "react";
import './Features.scss';

const iconMap: Record<string, React.ReactNode> = {
  clock: <FaRegClock size={32} />,
  payment: <BsCashCoin size={32} />,
  keys: <GiHouseKeys size={32} />,
};

const Features = () => {
  return (
    <section className="features" aria-label="Características del espacio">

      {/* Resto de features */}
      {featuresList.map((feature, index) => (
        <article key={index} className="feature">
          <h2>{feature.title}</h2>
          <p>{feature.desc}</p>
          {feature.icon && <div className="icon">{iconMap[feature.icon]}</div>}
        </article>
      ))}

      {/* Bloque especial de precios */}
      <article className="feature price">
        <h2>Tarifas de Alquiler</h2>

        <div className="price-items">
          <div className="price-item">
            <h3>Lunes a Jueves</h3>
            <p><strong>99€</strong> / día</p>
            <p>Perfecto para clases, talleres o reuniones corporativas.</p>
          </div>

          <div className="price-item">
            <h3>Viernes y Domingos</h3>
            <p><strong>118€</strong> / día</p>
            <p>Ideal para celebraciones y eventos puntuales.</p>
          </div>

          <div className="price-item">
            <h3>Sábados</h3>
            <p><strong>149€</strong> / día</p>
            <p>El día más solicitado para fiestas y cumpleaños.</p>
          </div>

          <div className="price-item">
            <h3>Alquiler mensual partido</h3>
            <p><strong>Negociable</strong></p>
            <p>Descuentos especiales para uso recurrente por las mañanas.</p>
          </div>

          <div className="price-item">
            <h3>Fianza</h3>
            <p><strong>99€</strong></p>
            <p>Reembolsable tras la inspección del espacio.</p>
          </div>
        </div>

        <p className="cta-price">
          ¡Reserva ahora y asegura tu espacio para tu próximo evento!
        </p>
      </article>


    </section>
  );
};

export default Features;
