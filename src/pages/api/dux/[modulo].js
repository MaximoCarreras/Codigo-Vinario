// api/dux/[modulo].js
export default async function handler(req, res) {
  const { modulo } = req.query;
  const token = process.env.DUX_API_TOKEN;

  if (!modulo) return res.status(400).json({ error: "Falta el módulo" });

  try {
    // URL real de Dux para items
    const url = `https://erp.duxsoftware.com.ar/WSERP/rest/services/${modulo}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: { 
        'authorization': token, 
        'accept': 'application/json' 
      }
    });

    // Si la respuesta no es 200, devolvemos un error limpio
    if (!response.ok) {
        return res.status(response.status).json({ error: "Error de Dux" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Fallo en el servidor" });
  }
}