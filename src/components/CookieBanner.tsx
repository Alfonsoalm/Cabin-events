import React, { useState, useEffect } from "react";
import "./CookieBanner.scss";

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner show">
      <p>
        Usamos cookies para mejorar tu experiencia y mostrar contenido como Google Maps. 
        ¿Aceptas su uso?
      </p>
      <div className="buttons">
        <button className="accept" onClick={handleAccept}>
          Aceptar
        </button>
        <button className="decline" onClick={handleDecline}>
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
