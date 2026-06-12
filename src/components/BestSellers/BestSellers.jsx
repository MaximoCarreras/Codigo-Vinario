import { Link } from 'react-router-dom';
import { useFeaturedProducts } from '../../hooks/useProducts';
import { useCart } from '../../context/CartContext';
import './BestSellers.css';

export default function BestSellers() {
  const { products, loading } = useFeaturedProducts();
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="cv-bestsellers">
      <div className="section-header">
        <span className="cv-code-detail">{'{ DESTACADOS }'}</span>
        <h2>Los más elegidos</h2>
      </div>

      {loading ? (
        <div className="loading-state">Cargando selección...</div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image_url} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{formatPrice(product.price)}</p>
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => addToCart(product)}
                >
                  AGREGAR AL CARRITO
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}