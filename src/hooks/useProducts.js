import { useState, useEffect } from 'react';

// --- TRADUCTOR DE CATEGORÍAS ---
const traducirCategoria = (rubro) => {
  if (!rubro) return "Otros";
  const nombre = rubro.toLowerCase();
  const mapa = {
    "bebida": "Vinos",
    "gaseosa": "Complementos",
    "espumante": "Espumantes",
    "destilado": "Destilados",
    "birra": "Cervezas"
  };
  return mapa[nombre] || "Otros"; 
};

// --- EXPORTACIÓN 1: PRODUCTOS DESTACADOS ---
export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data.results || []);
        // Adaptamos los datos de Dux (cod_item -> id, item -> name)
        const formatted = list.map(item => ({
            id: item.cod_item,
            name: item.item,
            price: 0, 
            is_featured: true, // Forzamos true para que aparezcan en BestSellers
            category: traducirCategoria(item.rubro?.nombre)
        }));
        setProducts(formatted.slice(0, 4));
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando destacados:", err);
        setLoading(false);
      });
  }, []);

  return { products, loading };
}

// --- EXPORTACIÓN 2: CATÁLOGO COMPLETO ---
export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        const lista = Array.isArray(data) ? data : (data.results || []);
        
        const formatted = lista.map(item => ({
            id: item.cod_item,
            name: item.item,
            price: 0,
            category: traducirCategoria(item.rubro?.nombre)
        }));

        let filtered = formatted;
        if (category && category !== "Todo") {
          filtered = formatted.filter(p => p.category === category);
        }
        
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando catálogo:", err);
        setLoading(false);
      });
  }, [category]);

  return { products, loading };
}