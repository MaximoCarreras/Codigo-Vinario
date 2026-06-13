import { useState, useEffect } from 'react';

const FALLBACK_PRODUCTS = [
  {
    id: '939a1f06-6e48-47e1',
    name: 'Vino Pixel Malbec Reserva',
    description: 'Malbec mendocino de excelente cuerpo y notas a frutos rojos.',
    price: 8500,
    category: 'vinos',
    subcategory: 'malbec',
    image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Destacado',
    stock: 24,
    is_featured: true,
  },
  {
    id: 'fe6bfa0f-a835-4a6a',
    name: 'DV Catena Cabernet-Malbec',
    description: 'Blend exclusivo con paso por barrica. Notas especiadas y final persistente.',
    price: 12200,
    category: 'vinos',
    subcategory: 'blend',
    image_url: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Más vendido',
    stock: 18,
    is_featured: true,
  },
  {
    id: '977e492d-990e-4934',
    name: 'Rutini Chardonnay',
    description: 'Vino blanco de gran elegancia, con aromas a frutas tropicales y vainilla.',
    price: 15800,
    category: 'vinos',
    subcategory: 'chardonnay',
    image_url: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: null,
    stock: 12,
    is_featured: true,
  },
  {
    id: '6acf35f1-8a23-4717',
    name: 'Estuche Degustación Premium',
    description: '2 Botellas Reserva de selección exclusiva + estuche de madera grabado.',
    price: 45000,
    category: 'combos',
    subcategory: 'estuches',
    image_url: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Edición Limitada',
    stock: 15,
    is_featured: true,
  }
];

export function useFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(FALLBACK_PRODUCTS.filter(p => p.is_featured));
    setLoading(false);
  }, []);

  return { products, loading };
}

export function useProducts(category = null, subcategory = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let filtered = FALLBACK_PRODUCTS;
    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }
    if (subcategory) {
      filtered = filtered.filter(p => p.subcategory === subcategory);
    }
    setProducts(filtered);
    setLoading(false);
  }, [category, subcategory]);

  return { products, loading };
}