import { useState, useEffect } from 'react';

export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apuntamos directamente a nuestra función interna segura
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        // Mapeamos o filtramos los productos que Dux devuelva como destacados
        // Nota: Dependiendo de cómo te devuelva los datos Dux, puede que necesites adaptar los nombres de los campos (ej: data.articulos)
        const destacados = (data.productos || data || []).slice(0, 4); // Tomamos los primeros 4 de ejemplo
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