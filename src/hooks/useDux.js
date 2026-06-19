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

// HOOK PRINCIPAL UNIVERSAL
export function useDux(endpoint = "items", params = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no pasamos endpoint (ej: no apretó buscar en Mi Cuenta), no hacemos la llamada
    if (!endpoint) return;

    setLoading(true);
    let url = `/api/${endpoint}`;
    
    // Si pasamos parámetros (ej: el email para consultar pedidos)
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
            // Para pedidos o subrubros, devolvemos la data cruda
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