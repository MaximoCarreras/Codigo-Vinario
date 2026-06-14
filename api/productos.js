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

    if (!response.ok) {
      return res.status(500).json({ error: "Error en Dux" });
    }

    const data = await response.json();
    
    // --- ESTA LÍNEA ES PARA DEBUGEAR ---
    console.log("Dux nos envió estas llaves:", Object.keys(data));
    
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}