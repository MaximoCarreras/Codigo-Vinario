import { useState, useEffect } from 'react';

// TRADUCTOR
const traducirCategoria = (rubro) => {
  const nombre = (rubro || "").toLowerCase();
  const mapa = { "bebida": "Vinos", "gaseosa": "Complementos", "espumante": "Espumantes", "destilado": "Destilados", "birra": "Cervezas" };
  return mapa[nombre] || "Otros"; 
};

// EXPORT 1
export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        const formatted = lista.map(item => ({
          id: item.cod_item, name: item.item, price: 0,
          category: traducirCategoria(item.rubro?.nombre),
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
        }));
        setProducts(category && category !== "Todo" ? formatted.filter(p => p.category === category) : formatted);
        setLoading(false);
      });
  }, [category]);
  return { products, loading };
}

// EXPORT 2 (¡ES ESTE EL QUE TE FALTA Y ROMPE TODO!)
export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        const formatted = lista.map(item => ({ id: item.cod_item, name: item.item, price: 0 }));
        setProducts(formatted.slice(0, 4));
        setLoading(false);
      });
  }, []);
  return { products, loading };
}