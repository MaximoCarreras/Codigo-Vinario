// Archivo: api/consultar-pedidos.js
export default async function handler(req, res) {
  const token = process.env.DUX_API_TOKEN;
  const emailCliente = req.query.email;

  if (!emailCliente) return res.status(400).json({ error: "Falta el email" });

  try {
    // Buscamos los pedidos. En una app real de alto volumen, primero se busca el ID del cliente.
    const response = await fetch(`https://erp.duxsoftware.com.ar/WSERP/rest/services/pedidos?limite=100`, {
      method: 'GET',
      headers: { 
        'authorization': token, 
        'accept': 'application/json' 
      }
    });
    
    if (!response.ok) throw new Error("Error en Dux");
    const data = await response.json();
    
    // Filtramos los pedidos que coincidan con el email del cliente (Simulación segura en backend)
    const pedidosDelCliente = (data.results || []).filter(
        p => p.cliente && p.cliente.email && p.cliente.email.toLowerCase() === emailCliente.toLowerCase()
    );

    return res.status(200).json({ results: pedidosDelCliente });
  } catch (error) {
    return res.status(500).json({ error: "Error al consultar historial" });
  }
}