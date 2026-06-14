// api/productos.js
export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;
  
  try {
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/items', {
      headers: { 
        'authorization': token, 
        'accept': 'application/json' 
      }
    });
    
    const data = await response.json();
    // Devolvemos el objeto completo que Dux nos envía
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión" });
  }
}