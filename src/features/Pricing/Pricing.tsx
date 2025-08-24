import { useEffect, useState } from "react";
import "./Pricing.scss";

const Pricing = () => {
  const originalPrice = 129;
  const discountPercent = 20;
  const discountedPrice = (originalPrice * (100 - discountPercent)) / 100;

  const [daysLeft, setDaysLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 86400000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pricing-section" aria-labelledby="pricing-title">
      <div className="container">
        <header className="pricing-header">
          <h2 id="pricing-title">Oferta Especial</h2>
          <p>Aprovecha esta Promoción por Tiempo limitado</p>
        </header>

        <div className="pricing-card">
          {/* Etiqueta roja grande */}
          <div className="offer-badge" aria-label={`Oferta del ${discountPercent}%`}>
            -{discountPercent}%
          </div>

          <h2>Precio Único</h2>
          <p className="price">
            <span className="original-price">€{originalPrice.toFixed(2)}</span>
            <span className="discounted-price">€{discountedPrice.toFixed(2)}</span>
          </p>
          <p className="countdown" aria-live="polite">
            Oferta termina en {daysLeft} {daysLeft === 1 ? "día" : "días"}
          </p>
          <a key="reservation-button" href="#reservation" className="btn-primary">
            Reservar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
