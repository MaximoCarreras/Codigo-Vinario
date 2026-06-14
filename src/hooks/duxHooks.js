import { useState, useEffect } from 'react';

// TRADUCTOR DE CATEGORÍAS
const traducirCategoria = (rubro) => {
  const nombre = (rubro || "").toLowerCase();
  const mapa = { "bebida": "Vinos", "gaseosa": "Complementos", "espumante": "Espumantes", "destilado": "Destilados", "birra": "Cervezas" };
  return mapa[nombre] || "Otros"; 
};

// EXPORT 1: Catálogo completo
export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        
        const formatted = lista.map(item => ({
          id: item.cod_item,
          name: item.item,
          // Aquí buscamos el precio en la lista [0]
          price: item.precios && item.precios[0] ? parseFloat(item.precios[0].precio) : 0,
          // Aquí sumamos el stock de todos los depósitos
          stock: item.stock ? item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible), 0) : 0,
          category: traducirCategoria(item.rubro?.nombre),
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
        }));
        
        setProducts(category ? formatted.filter(p => p.category === category) : formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);
  return { products, loading };
}

// EXPORT 2: Destacados
export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        const formatted = lista.map(item => ({ 
          id: item.cod_item, 
          name: item.item, 
          price: item.precios && item.precios[0] ? parseFloat(item.precios[0].precio) : 0,
          stock: item.stock ? item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible), 0) : 0
        }));
        setProducts(formatted.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { products, loading };
}