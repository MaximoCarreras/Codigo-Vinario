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
    carrito_vacio: "Tu carrito está vacío",
    seguir_comprando: "Seguir comprando",
    resumen: "Resumen",
    subtotal: "Subtotal",
    envio: "Envío",
    a_coordinar: "A coordinar",
    total: "Total",
  },
  EN: {
    nav_inicio: "home",
    nav_tienda: "shop",
    nav_origen: "origin",
    nav_compromiso: "commitment",
    nav_comunidad: "community",
    nav_eventos: "events",
    carrito_vacio: "Your cart is empty",
    seguir_comprando: "Continue shopping",
    resumen: "Summary",
    subtotal: "Subtotal",
    envio: "Shipping",
    a_coordinar: "To be arranged",
    total: "Total",
  },
  PT: {
    nav_inicio: "início",
    nav_tienda: "loja",
    nav_origen: "origem",
    nav_compromiso: "compromisso",
    nav_comunidad: "comunidade",
    nav_eventos: "eventos",
    carrito_vacio: "Seu carrinho está vazio",
    seguir_comprando: "Continuar comprando",
    resumen: "Resumo",
    subtotal: "Subtotal",
    envio: "Frete",
    a_coordinar: "A combinar",
    total: "Total",
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