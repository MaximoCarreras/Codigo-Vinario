export default async function handler(req, res) {
  // El token que configuraste en Vercel
  const token = process.env.DUX_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Falta configurar DUX_API_TOKEN en Vercel" });
  }

  try {
    // URL REAL sacada de tu captura de pantalla
    const DUX_URL = 'https://erp.duxsoftware.com.ar/WSERP/rest/services/items';

    const response = await fetch(DUX_URL, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'authorization': token
      }
    });

    if (!response.ok) {
      throw new Error(`Dux respondió con error: ${response.status}`);
    }

    const data = await response.json();

    // Dux devuelve los items en un formato específico, lo enviamos tal cual
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error en la conexión:", error);
    return res.status(500).json({ error: "Error al consultar los items en Dux" });
  }
}