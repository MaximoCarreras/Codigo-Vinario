import { useState, useEffect } from 'react';

// =========================================================================
// TRADUCTOR BOUTIQUE - BASADO EN EL ÁRBOL EXACTO DE DUX
// =========================================================================
const clasificarProducto = (item) => {
  const nombre = (item.item || "").toLowerCase();
  const rubro = (item.rubro?.nombre || item.rubro || "").toLowerCase();
  const subRubro = (item.sub_rubro?.nombre || item.sub_rubro || "").toLowerCase();

  // 1. EXCLUSIÓN ADMINISTRATIVA ESTRICTA
  if (
    rubro.includes("gastos") || 
    rubro.includes("servicio") || 
    rubro.includes("talabarteria") || 
    rubro.includes("indumentaria") || 
    rubro === "otros" ||
    subRubro.includes("logistica") || 
    subRubro.includes("mantenimiento") || 
    subRubro.includes("personal") || 
    subRubro.includes("packaging") ||
    subRubro.includes("grabado")
  ) {
    return "oculto";
  }

  // 2. EVENTOS
  if (rubro === "eventos" || subRubro === "entradas") return "eventos";

  // 3. BAZAR Y COMPLEMENTOS
  if (subRubro === "estuches" || nombre.includes("combo") || nombre.includes("caja") || nombre.includes("box")) return "combos";
  if (rubro === "bazar" || subRubro.includes("cristalería") || subRubro.includes("accesorios") || subRubro.includes("decanters")) return "bazar";

  // 4. GOURMET / ALIMENTOS
  if (rubro === "aceites" || rubro === "vinagre" || rubro === "delicatessens") return "gourmet";

  // 5. CLASIFICACIÓN EXACTA DE BEBIDAS
  if (rubro.includes("cerveza") || subRubro.includes("cerveza") || nombre.includes("ipa") || nombre.includes("birra")) return "cervezas";
  if (rubro.includes("destilado") || subRubro.includes("destilado") || nombre.includes("gin ") || nombre.includes("vodka") || nombre.includes("whisky") || nombre.includes("ron")) return "destilados";
  if (subRubro.includes("espumante") || rubro.includes("espumante") || nombre.includes("espumante") || nombre.includes("brut") || rubro.includes("sidra") || subRubro.includes("sidra")) return "espumantes";
  if (rubro.includes("vermouth") || rubro.includes("vermut") || subRubro.includes("vermut")) return "aperitivos";
  if (rubro.includes("sin alcohol") || subRubro.includes("sin alcohol")) return "sin-alcohol";

  // 6. EL NÚCLEO: VINOS
  if (
    rubro === "vino" || 
    subRubro.includes("vino gp") || 
    rubro === "bebidas" || 
    nombre.includes("malbec") || nombre.includes("cabernet") || nombre.includes("pinot") || 
    nombre.includes("torrontes") || nombre.includes("chardonnay") || nombre.includes("sauvignon") || 
    nombre.includes("blend") || nombre.includes("syrah") || nombre.includes("merlot") || nombre.includes("naranjo")
  ) {
    return "vinos";
  }

  return "vinos"; 
};

// =========================================================================
// MOTOR UNIVERSAL DE CONEXIÓN CON LA API (CON BYPASS DE STOCK)
// =========================================================================
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
            
            const formatted = lista
              .filter(item => item.activo !== false) // Descartamos inactivos
              .map(item => {
                
                // Leemos stock
                let stockReal = 0;
                if (item.stock && Array.isArray(item.stock)) {
                    stockReal = item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible || s.cantidad || 0), 0);
                } else if (typeof item.stock === 'number') {
                    stockReal = item.stock;
                }

                // BYPASS: Forzamos a 100 si no hay lectura correcta
                if (stockReal <= 0) {
                    stockReal = 100; 
                }

                return {
                    id: item.cod_item,
                    name: item.item,
                    price: item.precios && item.precios[0] ? parseFloat(item.precios[0].precio) : 0,
                    stock: stockReal,
                    category: clasificarProducto(item),
                    image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
                };
            }).filter(p => p.category !== "oculto"); 
            
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
// ADAPTADORES DE COMPATIBILIDAD (¡Esto es lo que pedía Vercel!)
// =========================================================================
export function useProducts(category = null) {
    const { data, loading } = useDux("items");
    let filteredProducts = data;
    if (category && category !== "Todo") {
        filteredProducts = data.filter(p => p.category === category.toLowerCase());
    }
    return { products: filteredProducts, loading };
}

export function useFeaturedProducts() {
    const { data, loading } = useDux("items");
    return { products: data.slice(0, 4), loading };
}