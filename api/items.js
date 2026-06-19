export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;

  try {
    // Dux limita la salida a 50 artículos por petición.
    // Generamos 40 páginas en paralelo (40 x 50 = 2000 productos potenciales)
    // para asegurarnos de vaciar por completo el inventario de Dux.
    const offsets = Array.from({ length: 40 }, (_, i) => i * 50);
    
    const fetchPage = async (offset) => {
      try {
        const response = await fetch(`https://erp.duxsoftware.com.ar/WSERP/rest/services/items?limit=50&offset=${offset}`, {
          method: 'GET',
          headers: { 
            'authorization': token, 
            'accept': 'application/json' 
          }
        });
        if (!response.ok) return [];
        const data = await response.json();
        return data.results || [];
      } catch (e) {
        return []; // Si una página falla, no frenamos el resto
      }
    };

    // Lanzamos las 40 peticiones exactamente al mismo tiempo
    const paginas = await Promise.all(offsets.map(off => fetchPage(off)));
    
    // Unificamos todas las páginas en una sola lista gigante
    const todosLosProductos = paginas.flat();

    return res.status(200).json({ results: todosLosProductos });
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión masiva con Dux" });
  }
}