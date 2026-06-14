// src/hooks/useProducts.js
import { useState, useEffect } from 'react';

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        // data.results es la lista que viene de Dux
        const listaCruda = data.results || [];
        
        const listaLimpia = listaCruda.map(item => ({
          id: item.cod_item,
          name: item.item,
          // Si el precio viene en otro lado, lo ajustaremos luego
          price: 0, 
          category: item.rubro?.nombre || "Otros",
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
        }));

        let filtered = listaLimpia;
        if (category && category !== "Todo") {
          filtered = listaLimpia.filter(p => p.category === category);
        }
        
        setProducts(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  return { products, loading };
}