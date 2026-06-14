import { useState, useEffect } from 'react';

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/dux/items')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        const formatted = lista.map(item => ({
          id: item.cod_item, name: item.item, price: 0,
          category: (item.rubro?.nombre || "Otros").toLowerCase()
        }));
        setProducts(category ? formatted.filter(p => p.category === category.toLowerCase()) : formatted);
        setLoading(false);
      });
  }, [category]);
  return { products, loading };
}

export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/api/dux/items')
      .then(res => res.json())
      .then(data => {
        const formatted = (data.results || []).map(item => ({ id: item.cod_item, name: item.item, price: 0 }));
        setProducts(formatted.slice(0, 4));
        setLoading(false);
      });
  }, []);
  return { products, loading };
}