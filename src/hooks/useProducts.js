import { useState, useEffect } from 'react';

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        // TRADUCCIÓN: Convertimos el formato de Dux al formato que entiende tu web
        const productosFormateados = data.map(item => ({
          id: item.cod_item,
          name: item.item,
          price: 0, // Dux a veces manda el precio en otro endpoint, lo inicializamos en 0
          category: item.rubro?.nombre || 'Sin categoría',
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80', // Placeholder
          stock: 10 // Placeholder temporal
        }));

        let filtered = productosFormateados;
        if (category) {
          filtered = filtered.filter(p => p.category?.toLowerCase() === category.toLowerCase());
        }
        
        setProducts(filtered);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al procesar los datos de Dux:", err);
        setLoading(false);
      });
  }, [category]);

  return { products, loading };
}

// Para BestSellers (mismo formato)
export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        const destacados = data.map(item => ({
          id: item.cod_item,
          name: item.item,
          price: 0,
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
        })).slice(0, 4);
        setProducts(destacados);
        setLoading(false);
      });
  }, []);
  return { products, loading };
}