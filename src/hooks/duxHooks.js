export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        const lista = data.results || [];
        
        const formatted = lista.map(item => {
          // DEBUG: Esto nos dirá en la consola qué está leyendo exactamente
          console.log("Producto:", item.item, "| Precios:", item.precios);
          
          let precioCalculado = 0;
          if (item.precios && item.precios.length > 0) {
             // Si existe la lista, tomamos el primero
             precioCalculado = parseFloat(item.precios[0].precio);
          }

          return {
            id: item.cod_item,
            name: item.item,
            price: precioCalculado,
            stock: item.stock ? item.stock.reduce((acc, s) => acc + parseFloat(s.ctd_disponible), 0) : 0,
            category: traducirCategoria(item.rubro?.nombre),
            image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=500&q=80'
          };
        });
        
        setProducts(category ? formatted.filter(p => p.category === category) : formatted);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error cargando productos:", e);
        setLoading(false);
      });
  }, [category]);
  return { products, loading };
}