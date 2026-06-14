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
        // En lugar de tirar error, devolvemos lista vacía para que la web no explote
        return res.status(200).json([]); 
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error("Error Dux:", error);
    return res.status(200).json([]); // Retorno vacío para evitar error 500
  }
}