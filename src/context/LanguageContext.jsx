import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  ES: {
    nav_inicio: "inicio",
    nav_tienda: "tienda",
    nav_origen: "origen",
    nav_compromiso: "compromiso",
    nav_comunidad: "comunidad",
    nav_eventos: "eventos",
  },
  EN: {
    nav_inicio: "home",
    nav_tienda: "shop",
    nav_origen: "origin",
    nav_compromiso: "commitment",
    nav_comunidad: "community",
    nav_eventos: "events",
  },
  PT: {
    nav_inicio: "início",
    nav_tienda: "loja",
    nav_origen: "origem",
    nav_compromiso: "compromisso",
    nav_comunidad: "comunidade",
    nav_eventos: "eventos",
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ES');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);