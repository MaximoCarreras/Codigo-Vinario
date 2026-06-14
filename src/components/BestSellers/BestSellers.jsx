import { useFeaturedProducts } from "../../hooks/duxHooks";
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from "../../hooks/duxHooks";
import { useCart } from '../../context/CartContext';
import './BestSellers.css';

export default function BestSellers() {
  const { products, loading } = useFeaturedProducts();
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="cv-bestsellers-loading">
        <span className="cv-code-text cv-blinking-cursor">/ consultando_bodega...</span>
      </div>
    );
  }

  return (
    <section className="cv-bestsellers">
      <div className="cv-bestsellers-container">
        
        <div className="cv-section-header">
          <span className="cv-code-text">/ seleccion_exclusiva</span>
          <h2 className="cv-section-title">ETIQUETAS <span className="cv-text-wine">DESTACADAS</span></h2>
        </div>

        <div className="cv-products-grid">
          {products.map((product) => (
            <div key={product.id} className="cv-product-card">
              
              {/* Etiqueta de Destacado / Nuevo */}
              {product.badge && (
                <div className="cv-product-badge">
                  <span className="cv-code-text">[{product.badge}]</span>
                </div>
              )}

              {/* Imagen del Producto */}
              <Link to={`/producto/${product.id}`} className="cv-product-image-wrapper">
                <img src={product.image_url} alt={product.name} className="cv-product-image" />
              </Link>

              {/* Información del Producto */}
              <div className="cv-product-info">
                <span className="cv-product-category">{`// ${product.category}`}</span>
                <Link to={`/producto/${product.id}`}>
                  <h3 className="cv-product-name">{product.name}</h3>
                </Link>
                <p className="cv-product-price">${product.price.toLocaleString('es-AR')}</p>
                
                {/* Botón de Agregar al Carrito */}
                <button 
                  className="cv-btn-add-cart"
                  onClick={() => addToCart(product, 1)}
                  disabled={product.stock <= 0}
                >
                  {product.stock > 0 ? (
                    <>
                      <span className="cv-code-symbol">[+]</span> AGREGAR AL CÓDIGO
                    </>
                  ) : (
                    <>
                      <span className="cv-code-symbol">[x]</span> SIN STOCK
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="cv-bestsellers-footer">
          <Link to="/tienda" className="cv-btn-secondary">
            VER CATÁLOGO COMPLETO
          </Link>
        </div>

      </div>
    </section>
  );
}