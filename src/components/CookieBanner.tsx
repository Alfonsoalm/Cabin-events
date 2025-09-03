import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import "./CookieBanner.scss";

const CookieBanner: React.FC = () => {
  const { cookieConsent, setCookieConsent } = useGlobalContext();
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    if (!cookieConsent) setShowBanner(true);
  }, [cookieConsent]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setCookieConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setCookieConsent(false);
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
        <button className="accept" onClick={handleAccept}>Aceptar</button>
        <button className="decline" onClick={handleDecline}>Rechazar</button>
      </div>
    </div>
  );
};

export default CookieBanner;
