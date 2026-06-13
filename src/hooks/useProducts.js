import { useState, useEffect } from 'react';

const FALLBACK_PRODUCTS = [
  {
    id: '939a1f06-6e48-47e1-a5a1-4cc4e74eafe8',
    name: 'Vino Pixel Malbec',
    description: 'Malbec mendocino de excelente cuerpo y notas a frutos rojos. Ideal para acompañar carnes.',
    price: 6500,
    category: 'vinos',
    image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    badge: 'Destacado',
    stock: 24,
    is_featured: true,
  },
  {
    id: 'fe6bfa0f-a835-4a6a-864d-0048906238a9',
    name: 'Vino Pixel Blend de Tintas',
    description: 'Blend exclusivo con paso por barrica. Notas especiadas y final persistente.',
    price: 7200,
    category: 'vinos',
    image_url: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    badge: 'Más vendido',
    stock: 18,
    is_featured: true,
  },
  {
    id: '977e492d-990e-4934-8227-6ae0a8203ef5',
    name: 'Cerveza Chachingo IPA',
    description: 'Cerveza artesanal mendocina con intenso aroma a lúpulo y amargor equilibrado.',
    price: 2800,
    category: 'cervezas',
    image_url: 'https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    badge: null,
    stock: 48,
    is_featured: true,
  },
  {
    id: '6acf35f1-8a23-4717-971e-5fe657c5ed35',
    name: 'Estuche Degustación Premium',
    description: '2 Botellas Reserva de selección exclusiva + estuche de madera grabado.',
    price: 45000,
    category: 'combos',
    image_url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Edición Limitada',
    stock: 15,
    is_featured: true,
  },
  {
    id: '4668527e-d5b2-4302-9985-b55d87dc5f80',
    name: 'Fernet Branca 750ml',
    description: 'El clásico aperitivo italiano, infaltable para armar el combo perfecto.',
    price: 8500,
    category: 'destilados',
    image_url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    badge: 'Clásico',
    stock: 30,
    is_featured: false,
  },
  {
    id: '9852b131-00e1-4b09-8ab1-ed94984568b2',
    name: 'Gin Mendocino Artesanal',
    description: 'Gin destilado con botánicos de la precordillera. Fresco y aromático.',
    price: 15000,
    category: 'destilados',
    image_url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    badge: null,
    stock: 12,
    is_featured: false,
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

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filtered = category
      ? FALLBACK_PRODUCTS.filter(p => p.category === category)
      : FALLBACK_PRODUCTS;
    setProducts(filtered);
    setLoading(false);
  }, [category]);

  return { products, loading };
}