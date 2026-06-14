export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;
  try {
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/items', {
      method: 'GET',
      headers: { 'accept': 'application/json', 'authorization': token }
    });

    const data = await response.json();
    
    // --- ESTO ES LA CLAVE ---
    // Imprimimos el resultado en los logs de Vercel para ver qué nos manda Dux
    console.log("Respuesta cruda de Dux:", JSON.stringify(data).substring(0, 500));
    
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}