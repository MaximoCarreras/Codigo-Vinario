import { useState, useEffect } from 'react';

export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        // Ajuste: Si Dux devuelve un objeto, buscamos la lista ahí
        const list = Array.isArray(data) ? data : (data.items || []);
        const destacados = list.filter(p => p.is_featured || p.destacado).slice(0, 4);
        setProducts(destacados);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando destacados:", err);
        setLoading(false);
      });
  }, []);

  return { products, loading };
}

export function useProducts(category = null, subcategory = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        // Ajuste: Aseguramos que siempre sea una lista
        const lista = Array.isArray(data) ? data : (data.items || []);
        
        let filtered = lista;
        if (category) {
          filtered = filtered.filter(p => p.category?.toLowerCase() === category.toLowerCase());
        }
        
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando catálogo:", err);
        setLoading(false);
      });
  }, [category, subcategory]);

  return { products, loading };
}