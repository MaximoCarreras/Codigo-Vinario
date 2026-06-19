import { useState, useEffect } from 'react';

// Traductor de categorías para limpiar el catálogo
const clasificarProducto = (item) => {
  const rubro = (item.rubro?.nombre || "").toLowerCase();
  const subRubro = (item.sub_rubro?.nombre || "").toLowerCase();

  if (rubro.includes("insumo") || rubro.includes("varios") || rubro.includes("servicio")) return "oculto";

  if (subRubro) {
    if (subRubro.includes("vino")) return "vinos";
    if (subRubro.includes("destilado")) return "destilados";
    if (subRubro.includes("cerveza") || subRubro.includes("birra")) return "cervezas";
    if (subRubro.includes("combo") || subRubro.includes("caja")) return "combos";
    return subRubro.replace(/\s+/g, '-'); 
  }

  if (rubro.includes("bebida")) return "vinos";
  return "oculto"; 
};

// 1. EL MOTOR NUEVO UNIVERSAL (Para la página "Mi Cuenta" y pedidos)
export function useDux(endpoint = "items", params = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    setLoading(true);
    let url = `/api/${endpoint}`;
    
    if (params && params.cliente) {
        url = `/api/consultar-pedidos?email=${encodeURIComponent(params.cliente)}`;
    }

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Error en la conexión");
        return res.json();
      })
      .then(json => {
        if (endpoint === "items") {
            const lista = json.results || [];
            const formatted = lista.map(item => ({
                id: item.cod_item,
                name: item.item,
                price: item.precios && item.precios[0] ? parseFloat(item.precios[0].precio) : 0,
                stock: item.stock ? item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible), 0) : 0,
                category: clasificarProducto(item),
                image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
            })).filter(p => p.category !== "oculto");
            setData(formatted);
        } else {
            setData(json.results || []);
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [endpoint, params?.cliente]);

  return { data, loading, error };
}

// =========================================================================
// 2. ADAPTADORES DE COMPATIBILIDAD (Para que Vercel no rompa la compilación)
// =========================================================================

export function useProducts(category = null) {
    // Usamos el motor nuevo internamente
    const { data, loading } = useDux("items");
    
    // Y filtramos como esperaba la Tienda original
    let filteredProducts = data;
    if (category && category !== "Todo") {
        filteredProducts = data.filter(p => p.category === category.toLowerCase());
    }
    
    // Devolvemos la palabra "products" que es la que busca Shop.jsx
    return { products: filteredProducts, loading };
}

export function useFeaturedProducts() {
    const { data, loading } = useDux("items");
    // Devolvemos solo 4 productos para el Inicio
    return { products: data.slice(0, 4), loading };
}