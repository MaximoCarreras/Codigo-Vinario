import { useState, useEffect } from 'react';

const traducirCategoria = (rubro) => {
  const nombre = (rubro || "").toLowerCase();
  const mapa = { "bebida": "Vinos", "gaseosa": "Complementos", "espumante": "Espumantes", "destilado": "Destilados", "birra": "Cervezas" };
  return mapa[nombre] || "Otros"; 
};

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        
        // AQUÍ ES DONDE HACEMOS LA MAGIA
        const formatted = lista.map(item => ({
          id: item.cod_item,
          name: item.item,
          // Probamos varios nombres comunes de campos de precio en Dux
          price: item.precio_venta || item.precio || item.precio_lista || 0,
          // Probamos varios nombres comunes de stock
          stock: item.stock || item.stock_actual || 0,
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