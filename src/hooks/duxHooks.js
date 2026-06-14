// src/hooks/duxHooks.js
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
    fetch('/api/items') // Llamamos a la ruta plana
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        const formatted = lista.map(item => ({
          id: item.cod_item,
          name: item.item,
          price: 0,
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

export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/items') // Llamamos a la ruta plana
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