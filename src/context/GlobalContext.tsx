import { createContext, useState, useContext, useEffect, type ReactNode } from "react";

interface GlobalContextType {
  cookieConsent: boolean;
  setCookieConsent: (value: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") setCookieConsent(true);
  }, []);

  return (
    <GlobalContext.Provider value={{ cookieConsent, setCookieConsent }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalContext must be used within GlobalProvider");
  return context;
};
