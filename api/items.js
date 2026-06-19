export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;

  try {
    const limit = 50;
    let allItems = [];
    let offset = 0;
    let keepFetching = true;

    // AUMENTAMOS EL LÍMITE A 10.000 PRODUCTOS (200 páginas de Dux)
    while (keepFetching && offset < 10000) {
      const batch = [];
      
      // Lanzamos 10 páginas al mismo tiempo (traemos de a 500 productos por ciclo)
      for (let i = 0; i < 10; i++) {
        const currentOffset = offset + (i * limit);
        const p = fetch(`https://erp.duxsoftware.com.ar/WSERP/rest/services/items?limit=${limit}&offset=${currentOffset}`, {
          method: 'GET',
          headers: { 
            'authorization': token, 
            'accept': 'application/json' 
          }
        }).then(r => r.ok ? r.json() : { results: [] }).catch(() => ({ results: [] }));
        
        batch.push(p);
      }

      // Esperamos que vuelvan las 10 páginas
      const results = await Promise.all(batch);

      for (const data of results) {
        const items = data.results || [];
        allItems.push(...items);
        
        // Si una página trae menos de 50, significa que vaciamos el catálogo de Dux
        if (items.length < limit) {
          keepFetching = false;
        }
      }
      offset += 500; // Avanzamos a los siguientes 500
    }

    return res.status(200).json({ results: allItems });
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión en bloque con Dux" });
  }
}