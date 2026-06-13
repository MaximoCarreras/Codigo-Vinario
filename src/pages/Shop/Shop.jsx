import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../context/CartContext';
import './Shop.css';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState(null);
  const { products, loading } = useProducts(activeCategory);
  const { addToCart } = useCart();

  const categories = [
    { id: null, label: 'TODO EL CATÁLOGO' },
    { id: 'vinos', label: 'VINOS' },
    { id: 'destilados', label: 'DESTILADOS' },
    { id: 'cervezas', label: 'CERVEZAS' },
    { id: 'combos', label: 'COMBOS' },
  ];

  return (
    <div className="cv-page-shop">
      
      {/* Cabecera del Catálogo */}
      <div className="cv-shop-header cv-binary-bg">
        <div className="cv-shop-header-content">
          <span className="cv-code-text cv-blinking-cursor">/ explorando_inventario</span>
          <h1 className="cv-section-title">NUESTRA <span className="cv-text-wine">CAVA</span></h1>
        </div>
      </div>

      <div className="cv-shop-container">
        {/* Barra de Filtros */}
        <div className="cv-shop-filters">
          <span className="cv-filter-label">/ filtrar_por:</span>
          <div className="cv-filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id || 'all'}
                className={`cv-filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Productos (Reutilizamos la estructura visual de BestSellers) */}
        {loading ? (
          <div className="cv-shop-loading">
            <span className="cv-code-text cv-blinking-cursor">/ cargando_datos...</span>
          </div>
        ) : (
          <div className="cv-products-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="cv-product-card">
                  
                  {product.badge && (
                    <div className="cv-product-badge">
                      <span className="cv-code-text">[{product.badge}]</span>
                    </div>
                  )}

                  <Link to={`/producto/${product.id}`} className="cv-product-image-wrapper">
                    <img src={product.image_url} alt={product.name} className="cv-product-image" />
                  </Link>

                  <div className="cv-product-info">
                    <span className="cv-product-category">{`// ${product.category}`}</span>
                    <Link to={`/producto/${product.id}`}>
                      <h3 className="cv-product-name">{product.name}</h3>
                    </Link>
                    <p className="cv-product-price">${product.price.toLocaleString('es-AR')}</p>
                    
                    <button 
                      className="cv-btn-add-cart"
                      onClick={() => addToCart(product, 1)}
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
              ))
            ) : (
              <div className="cv-shop-empty">
                <span className="cv-code-text">/ error_404</span>
                <p>No se encontraron etiquetas en esta categoría.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}