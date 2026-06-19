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
              .filter(item => item.activo !== false) // Descartamos artículos inactivos en Dux
              .map(item => {
                
                // Intentamos leer el stock real de Dux
                let stockReal = 0;
                if (item.stock && Array.isArray(item.stock)) {
                    stockReal = item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible || s.cantidad || 0), 0);
                } else if (typeof item.stock === 'number') {
                    stockReal = item.stock;
                }

                // BYPASS DE EMERGENCIA: Si el stock da 0 o error, forzamos 100 para que la tienda funcione.
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