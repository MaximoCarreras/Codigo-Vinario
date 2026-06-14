// lib/dux/client.js
export async function getDuxData(path) {
  const token = process.env.DUX_API_TOKEN;
  const baseUrl = 'https://erp.duxsoftware.com.ar/WSERP/rest/services';
  
  const response = await fetch(`${baseUrl}/${path}`, {
    headers: { 
      'authorization': token, 
      'accept': 'application/json' 
    },
    // Añadimos caché para que la web no sea lenta
    next: { revalidate: 3600 } 
  });
  
  return await response.json();
}