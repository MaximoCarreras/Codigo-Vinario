// api/dux/[modulo].js
export default async function handler(req, res) {
  const { modulo, ...params } = req.query; // Capturamos el módulo y CUALQUIER parámetro extra
  const token = process.env.DUX_API_TOKEN;

  // Convertimos los parámetros de la web a una cadena de consulta (?id_empresa=3455&fecha_desde=...)
  const queryString = new URLSearchParams(params).toString();
  const url = `https://erp.duxsoftware.com.ar/WSERP/rest/services/${modulo}${queryString ? '?' + queryString : ''}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'authorization': token, 'accept': 'application/json' }
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Fallo en Dux" });
  }
}