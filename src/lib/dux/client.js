// lib/dux/client.js
export async function getDuxData(endpoint) {
  const response = await fetch(`/api/dux/${endpoint}`);
  if (!response.ok) return [];
  const data = await response.json();
  return data.results || []; // Dux siempre devuelve los datos en 'results'
}