// api/dux/[modulo].js
export default async function handler(req, res) {
  const { modulo } = req.query;
  const token = process.env.DUX_API_TOKEN;

  // Si no hay módulo, salimos
  if (!modulo) return res.status(400).json({ error: "Falta módulo" });

  try {
    const url = `https://erp.duxsoftware.com.ar/WSERP/rest/services/${modulo}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 
        'authorization': token, 
        'accept': 'application/json' 
      }
    });

    const data = await response.json();
    
    // Esto asegura que siempre devolvemos JSON y nada más
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error en servidor" });
  }
}