import { useState, useEffect } from 'react';

// Esta función es tu TRADUCTOR
const traducirCategoria = (rubro) => {
  if (!rubro) return "Otros";
  const nombre = rubro.toLowerCase();
  
  // Aquí mapeas lo que dice Dux (izquierda) a lo que tu web espera (derecha)
  const mapa = {
    "bebida": "Vinos",
    "gaseosa": "Complementos",
    "espumante": "Espumantes",
    "destilado": "Destilados",
    "birra": "Cervezas"
  };
  
  return mapa[nombre] || "Otros"; 
};

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        // Mapeamos los productos aplicando el traductor
        const lista = data.map(item => ({
          ...item,
          category: traducirCategoria(item.rubro?.nombre)
        }));

        let filtered = lista;
        if (category && category !== "Todo") {
          // Comparamos usando el nombre traducido
          filtered = lista.filter(p => p.category === category);
        }
        
        setProducts(filtered);
        setLoading(false);
      });
  }, [category]);

  return { products, loading };
}