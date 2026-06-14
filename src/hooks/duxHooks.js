import { useState, useEffect } from 'react';

console.log("Cargando duxHooks.js con filtro de exclusión");

// TRADUCTOR INTELIGENTE DE CATEGORÍAS
const clasificarProducto = (item) => {
  const nombre = (item.item || "").toLowerCase();
  const rubro = (item.rubro?.nombre || "").toLowerCase();

  // 1. FILTRO DE BASURA: Si el rubro es de insumos internos, lo ocultamos
  if (rubro.includes("insumo") || rubro.includes("varios") || rubro.includes("materia prima")) return "oculto";
  
  // 2. RECONOCIMIENTO DE PRODUCTOS WEB
  if (rubro.includes("vino") || nombre.includes("vino") || nombre.includes("malbec") || nombre.includes("cabernet") || nombre.includes("pinot") || nombre.includes("blend") || nombre.includes("naranjo") || nombre.includes("syrah")) return "vinos";
  if (rubro.includes("destilado") || nombre.includes("gin") || nombre.includes("vodka") || nombre.includes("whisky") || nombre.includes("ron")) return "destilados";
  if (rubro.includes("cerveza") || rubro.includes("birra") || nombre.includes("ipa")) return "cervezas";
  if (nombre.includes("combo") || nombre.includes("degustacion") || nombre.includes("caja") || nombre.includes("box")) return "combos";
  
  // 3. BARRERA DE SEGURIDAD: Si no encajó en las bebidas de arriba, NO lo mostramos
  return "oculto"; 
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
        const formatted = lista.map(item => ({
          id: item.cod_item,
          name: item.item,
          price: item.precios && item.precios[0] ? parseFloat(item.precios[0].precio) : 0,
          stock: item.stock ? item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible), 0) : 0,
          category: clasificarProducto(item),
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
        }));
        
        // MAGIA: Filtramos la categoría solicitada Y además borramos los "ocultos"
        let filtrados = formatted.filter(p => p.category !== "oculto");
        if (category && category !== "Todo") {
            filtrados = filtrados.filter(p => p.category === category.toLowerCase());
        }
        
        setProducts(filtrados);
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
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        const formatted = lista.map(item => ({ 
          id: item.cod_item, 
          name: item.item, 
          price: item.precios && item.precios[0] ? parseFloat(item.precios[0].precio) : 0,
          stock: item.stock ? item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible), 0) : 0,
          category: clasificarProducto(item),
          image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
        }));
        
        // Solo mostramos destacados que no sean ocultos
        const filtrados = formatted.filter(p => p.category !== "oculto");
        setProducts(filtrados.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { products, loading };
}