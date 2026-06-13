import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams(); // Obtenemos el ID de la URL
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!loading) {
      const foundProduct = products.find(p => p.id === slug);
      setProduct(foundProduct);
    }
  }, [slug, products, loading]);

  if (loading) {
    return (
      <div className="cv-page-detail cv-loading-state">
        <span className="cv-code-text cv-blinking-cursor">/ decodificando_etiqueta...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="cv-page-detail cv-empty-state">
        <span className="cv-code-text">/ error_404: ETIQUETA_NO_ENCONTRADA</span>
        <Link to="/tienda" className="cv-btn-secondary" style={{marginTop: '20px'}}>VOLVER A LA CAVA</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="cv-page-detail">
      <div className="cv-detail-container">
        
        {/* Columna Izquierda: Imagen */}
        <div className="cv-detail-image-wrapper">
          <div className="cv-image-bg-tech">01010110</div>
          {product.badge && (
            <div className="cv-detail-badge">
              <span className="cv-code-text">[{product.badge}]</span>
            </div>
          )}
          <img src={product.image_url} alt={product.name} className="cv-detail-image" />
        </div>

        {/* Columna Derecha: Información */}
        <div className="cv-detail-info">
          <Link to="/tienda" className="cv-back-link">
            <span className="cv-code-symbol">{'<'}</span> VOLVER AL CATÁLOGO
          </Link>
          
          <span className="cv-product-category">{`// ${product.category}`}</span>
          <h1 className="cv-detail-title">{product.name}</h1>
          <p className="cv-detail-price">${product.price.toLocaleString('es-AR')}</p>
          
          <div className="cv-detail-description">
            <span className="cv-code-text">/ notas_de_cata</span>
            <p>{product.description}</p>
          </div>

          <div className="cv-detail-stock">
            <span className="cv-code-symbol">_</span> Stock disponible: {product.stock} unidades
          </div>

          {/* Controles de Compra */}
          <div className="cv-detail-actions">
            <div className="cv-quantity-selector">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >-</button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                disabled={quantity >= product.stock}
              >+</button>
            </div>

            <button 
              className="cv-btn-primary cv-detail-add-btn"
              onClick={handleAdd}
              disabled={product.stock <= 0}
            >
              {product.stock > 0 ? (
                <><span className="cv-code-symbol">[+]</span> AGREGAR AL CÓDIGO</>
              ) : (
                <><span className="cv-code-symbol">[x]</span> SIN STOCK</>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}