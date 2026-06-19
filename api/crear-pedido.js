// Archivo: api/crear-pedido.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Solo método POST" });

  const token = process.env.DUX_API_TOKEN;
  const pedidoWeb = req.body; // Lo que envía el Checkout.jsx

  try {
    const response = await fetch('https://erp.duxsoftware.com.ar/WSERP/rest/services/pedidos', {
      method: 'POST',
      headers: { 
        'authorization': token, 
        'Content-Type': 'application/json',
        'accept': 'application/json' 
      },
      body: JSON.stringify(pedidoWeb)
    });
    
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error al inyectar pedido en Dux" });
  }
}