import { useState, useEffect } from 'react';

export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca los productos en nuestra API interna
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        const list = data.productos || data || [];
        // Filtramos solo los que son destacados
        const destacados = list.filter(p => p.is_featured).slice(0, 4);
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
        let lista = data.productos || data || [];
        
        // Filtros dinámicos según lo que el usuario toque en el menú
        if (category) {
          lista = lista.filter(p => p.category?.toLowerCase() === category.toLowerCase());
        }
        if (subcategory) {
          lista = lista.filter(p => p.subcategory?.toLowerCase() === subcategory.toLowerCase());
        }
        
        setProducts(lista);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando catálogo:", err);
        setLoading(false);
      });
  }, [category, subcategory]);

  return { products, loading };
}