export default async function handler(req, res) {
  // 1. Obtenemos el token secreto guardado de forma segura en el servidor
  const token = process.env.DUX_API_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "Configuración incompleta: Falta el token de Dux." });
  }

  try {
    // 2. Le hacemos la petición oficial a la URL de la API de desarrolladores de Dux
    // Reemplazá esta URL por la que te indique la documentación de Dux (ej: /v1/articulos o /v1/productos)
    const response = await fetch('https://api.duxsoftware.com.ar/v1/productos', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la respuesta de Dux: ${response.status}`);
    }

    const data = await response.json();

    // 3. Le devolvemos los productos limpios a tu frontend de React
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error conectando con Dux:", error);
    return res.status(500).json({ error: "No se pudo sincronizar con el inventario de Dux." });
  }
}