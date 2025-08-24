import { featuresList } from './featuresList';
import { FaRegClock } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";
import React from "react";
import './Features.scss';

const iconMap: Record<string, React.ReactNode> = {
  clock: <FaRegClock size={32} />,
  payment: <BsCashCoin  size={32} />,
  keys: <GiHouseKeys  size={32} />,
};

const Features = () => {
  return (
    <section className="features" aria-label="Características del espacio">
      {/* Bloque especial de precios */}
      <article className="feature price">
        <h2>Tarifas de Alquiler</h2>
        <p>Lunes a Jueves: <strong>100€</strong></p>
        <p>Viernes y Domingos: <strong>129€</strong></p>
        <p>Sábados: <strong>150€</strong></p>
        <p>Fianza: <strong>100€</strong></p>
      </article>

      {/* Resto de features */}
      {featuresList.map((feature, index) => (
        <article key={index} className="feature">
          <h2>{feature.title}</h2>
          <p>{feature.desc}</p>
          {feature.icon && <div className="icon">{iconMap[feature.icon]}</div>}
        </article>
      ))}
    </section>
  );
};

export default Features;
