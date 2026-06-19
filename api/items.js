export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;

  try {
    const limit = 50;
    let allItems = [];
    let offset = 0;
    let keepFetching = true;

    // Pedimos a Dux en "tandas de a 5 páginas" para no saturar su seguridad
    while (keepFetching && offset < 2000) {
      const batch = [];
      for (let i = 0; i < 5; i++) {
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

      // Esperamos que vuelvan los 5 camiones
      const results = await Promise.all(batch);

      for (const data of results) {
        const items = data.results || [];
        allItems.push(...items);
        
        // Si Dux nos manda una página con menos de 50 productos, significa que llegamos al final del catálogo
        if (items.length < limit) {
          keepFetching = false;
        }
      }
      offset += 250; // Avanzamos a la siguiente tanda
    }

    return res.status(200).json({ results: allItems });
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión en bloque con Dux" });
  }
}