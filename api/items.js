export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;

  try {
    // Dux solo deja traer 50 por vez. 
    // Armamos un arreglo con los "saltos" (offsets) para traer 15 páginas al mismo tiempo.
    // 15 páginas x 50 productos = 750 productos.
    const offsets = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
    
    // Función para traer una página específica
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
        return []; // Si falla una página, no rompemos el resto
      }
    };

    // Promise.all lanza las 15 llamadas a Dux ¡EXACTAMENTE AL MISMO TIEMPO!
    const paginas = await Promise.all(offsets.map(off => fetchPage(off)));
    
    // Agarramos las 15 listas y las aplastamos en una sola lista gigante
    const todosLosProductos = paginas.flat();

    return res.status(200).json({ results: todosLosProductos });
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión masiva con Dux" });
  }
}