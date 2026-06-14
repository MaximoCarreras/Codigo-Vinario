export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;
  try {
    // Acá está el límite de 200 que arregla la cantidad
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/items?limite=200', {
      method: 'GET',
      headers: { 'authorization': token, 'accept': 'application/json' }
    });
    if (!response.ok) return res.status(500).json({ error: "Error en Dux" });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Fallo de conexión" });
  }
}