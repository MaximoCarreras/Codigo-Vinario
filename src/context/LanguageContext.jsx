import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  ES: {
    tienda: "TIENDA", origen: "ORIGEN", comunidad: "COMUNIDAD",
    buscar: "Buscar un producto...",
    carrito_vacio: "TU CAVA ESTÁ VACÍA",
    ir_a_pagar: "IR A PAGAR", seguir_comprando: "SEGUIR COMPRANDO",
    resumen: "Resumen", subtotal: "Subtotal", envio: "Envío", total: "Total",
    a_coordinar: "A coordinar"
  },
  EN: {
    tienda: "SHOP", origen: "ORIGIN", comunidad: "COMMUNITY",
    buscar: "Search a product...",
    carrito_vacio: "YOUR CELLAR IS EMPTY",
    ir_a_pagar: "PROCEED TO CHECKOUT", seguir_comprando: "CONTINUE SHOPPING",
    resumen: "Summary", subtotal: "Subtotal", envio: "Shipping", total: "Total",
    a_coordinar: "To be agreed"
  },
  PT: {
    tienda: "LOJA", origen: "ORIGEM", comunidad: "COMUNIDADE",
    buscar: "Procurar um produto...",
    carrito_vacio: "SUA ADEGA ESTÁ VAZIA",
    ir_a_pagar: "IR PARA O PAGAMENTO", seguir_comprando: "CONTINUAR COMPRANDO",
    resumen: "Resumo", subtotal: "Subtotal", envio: "Envio", total: "Total",
    a_coordinar: "A combinar"
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ES');
  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);