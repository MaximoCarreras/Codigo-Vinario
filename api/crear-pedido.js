// api/crear-pedido.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Método no permitido. Debe ser POST." });
  }

  const token = process.env.DUX_API_TOKEN;
  const pedidoData = req.body; // Aquí viene el carrito y los datos del cliente desde tu web

  try {
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/pedidos', {
      method: 'POST',
      headers: { 
        'authorization': token, 
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(pedidoData)
    });

    const data = await response.json();
    
    if (!response.ok) {
        return res.status(response.status).json({ error: data.mensaje || "Error al crear pedido en Dux" });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Fallo en el servidor al procesar el pedido" });
  }
}