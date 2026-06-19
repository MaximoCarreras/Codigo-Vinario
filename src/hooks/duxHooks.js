import { useState, useEffect } from 'react';

// TRADUCTOR INTELIGENTE: AHORA LEE EL SUB RUBRO DE DUX DIRECTAMENTE
const clasificarProducto = (item) => {
  const rubro = (item.rubro?.nombre || "").toLowerCase();
  const subRubro = (item.sub_rubro?.nombre || "").toLowerCase(); // Leemos el Sub Rubro

  // 1. FILTRO DE BASURA: Ocultamos insumos, servicios, y gastos internos
  if (
    rubro.includes("insumo") || 
    rubro.includes("varios") || 
    rubro.includes("servicio") ||
    rubro.includes("financiero")
  ) {
    return "oculto";
  }

  // 2. LECTURA DIRECTA DEL SUB RUBRO
  // Si en Dux le pusiste de Sub Rubro "Vino", "Destilado", "Cerveza", etc.
  // la página lo toma automáticamente.
  if (subRubro) {
    // Si dice "Vino", devolvemos "vinos" para que coincida con tus botones
    if (subRubro.includes("vino")) return "vinos";
    if (subRubro.includes("destilado")) return "destilados";
    if (subRubro.includes("cerveza") || subRubro.includes("birra")) return "cervezas";
    if (subRubro.includes("combo") || subRubro.includes("caja")) return "combos";
    
    // Si tiene un subrubro nuevo que crees en el futuro, lo pasa tal cual (ej: "bazar")
    return subRubro.replace(/\s+/g, '-'); 
  }

  // 3. FALLBACK: Si olvidaste ponerle Sub Rubro en Dux, pero el Rubro es "Bebida"
  if (rubro.includes("bebida")) return "vinos";

  // Si no tiene nada válido, se oculta para no ensuciar la web
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
        
        const filtrados = formatted.filter(p => p.category !== "oculto");
        setProducts(filtrados.slice(0, 4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { products, loading };
}