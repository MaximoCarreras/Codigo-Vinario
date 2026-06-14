// lib/duxFetcher.js
export async function fetchDux(endpoint) {
  const token = process.env.DUX_API_TOKEN;
  const response = await fetch(`https://erp.duxsoftware.com.ar/WSERP/rest/services/${endpoint}`, {
    headers: { 'authorization': token, 'accept': 'application/json' }
  });
  const data = await response.json();
  return data.results || data; // Maneja ambos formatos
}