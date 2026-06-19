// Archivo: api/subrubros.js
export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;
  try {
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/subrubros?limit=100', {
      method: 'GET',
      headers: { 
        'authorization': token, 
        'accept': 'application/json' 
      }
    });
    
    if (!response.ok) throw new Error("Error en Dux");
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión con Dux Subrubros" });
  }
}