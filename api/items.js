export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;

  try {
    // Pedimos exactamente 10 páginas (500 productos). Es el límite seguro para que Vercel NO corte la conexión.
    const offsets = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
    
    const fetchPage = async (offset) => {
      try {
        const response = await fetch(`https://erp.duxsoftware.com.ar/WSERP/rest/services/items?limit=50&offset=${offset}`, {
          method: 'GET',
          headers: { 'authorization': token, 'accept': 'application/json' }
        });
        if (!response.ok) return [];
        const data = await response.json();
        return data.results || [];
      } catch (e) {
        return []; 
      }
    };

    const paginas = await Promise.all(offsets.map(off => fetchPage(off)));
    const todosLosProductos = paginas.flat();

    return res.status(200).json({ results: todosLosProductos });
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión masiva con Dux" });
  }
}