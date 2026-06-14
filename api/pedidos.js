import { fetchDux } from "../../lib/duxFetcher";

export default async function handler(req, res) {
  const data = await fetchDux('pedidos'); // Solo cambiás el nombre del endpoint
  res.status(200).json(data);
}