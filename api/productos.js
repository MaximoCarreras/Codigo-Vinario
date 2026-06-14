export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;

  try {
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/items', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'authorization': token
      }
    });

    if (!response.ok) return res.status(200).json([]);

    const data = await response.json();
    
    // Devolvemos DIRECTAMENTE la lista de productos (results)
    return res.status(200).json(data.results || []);

  } catch (error) {
    return res.status(200).json([]);
  }
}