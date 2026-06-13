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
    nav_bodegas: "bodegas",
    cat_tintos: "tintos",
    cat_blancos: "blancos",
    cat_espumantes: "espumantes",
    cat_destilados: "destilados",
    filter_all: "TODO EL CATÁLOGO",
    btn_add: "AGREGAR AL CÓDIGO",
    btn_no_stock: "SIN STOCK",
    checkout_title: "FINALIZAR COMPRA",
    checkout_step1: "Carrito",
    checkout_step2: "Datos y Envío",
    checkout_step3: "Pago"
  },
  EN: {
    nav_inicio: "home",
    nav_tienda: "shop",
    nav_origen: "origin",
    nav_compromiso: "commitment",
    nav_comunidad: "community",
    nav_eventos: "events",
    nav_bodegas: "wineries",
    cat_tintos: "red wines",
    cat_blancos: "white wines",
    cat_espumantes: "sparkling",
    cat_destilados: "spirits",
    filter_all: "ALL CODES",
    btn_add: "ADD TO CODE",
    btn_no_stock: "OUT OF STOCK",
    checkout_title: "CHECKOUT",
    checkout_step1: "Cart",
    checkout_step2: "Shipping",
    checkout_step3: "Payment"
  },
  PT: {
    nav_inicio: "início",
    nav_tienda: "loja",
    nav_origen: "origem",
    nav_compromiso: "compromisso",
    nav_comunidad: "comunidade",
    nav_eventos: "eventos",
    nav_bodegas: "vinícolas",
    cat_tintos: "vinhos tintos",
    cat_blancos: "vinhos brancos",
    cat_espumantes: "espumantes",
    cat_destilados: "destilados",
    filter_all: "TODOS OS VINHOS",
    btn_add: "ADICIONAR AO CÓDIGO",
    btn_no_stock: "SEM ESTOQUE",
    checkout_title: "FINALIZAR COMPRA",
    checkout_step1: "Carrinho",
    checkout_step2: "Dados e Envio",
    checkout_step3: "Pagamento"
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