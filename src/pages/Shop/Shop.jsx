import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useProducts } from "../../hooks/duxHooks";
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import './Shop.css';

export default function Shop() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('categoria'); 
  const [activeCategory, setActiveCategory] = useState(null);
  
  const { products, loading } = useProducts(null);
  const { addToCart } = useCart();

  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentBg(prev => (prev + 1) % bgImages.length), 4000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const categories = [
    { id: null, label: t.filter_all || 'TODO EL CATÁLOGO' },
    { id: 'vinos', label: 'VINOS' },
    { id: 'destilados', label: 'DESTILADOS' },
    { id: 'cervezas', label: 'CERVEZAS' },
    { id: 'combos', label: 'COMBOS' },
  ];

  const filteredProducts = products.filter(product => {
    if (activeCategory && product.category !== activeCategory) return false;
    if (urlCategory) {
      const q = urlCategory.toLowerCase();
      if (!product.name.toLowerCase().includes(q) && !product.category.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setSearchParams({}); 
  };

  return (
    <div className="cv-page-shop">
      <div className="cv-shop-header">
        {bgImages.map((img, index) => (
          <div key={index} className={`cv-shop-header-bg ${index === currentBg ? 'active' : ''}`} style={{ backgroundImage: `url(${img})` }} />
        ))}
        <div className="cv-shop-header-overlay"></div>
        <div className="cv-shop-header-content">
          <span className="cv-code-text cv-blinking-cursor">/ explorando_inventario_</span>
          <h1 className="cv-section-title" style={{color: '#fff'}}>NUESTRA <span className="cv-text-wine">CAVA</span></h1>
        </div>
      </div>

      <div className="cv-shop-container">
        <div className="cv-shop-filters">
          <span className="cv-filter-label">/ filtrar_por:</span>
          <div className="cv-filter-buttons">
            {categories.map(cat => (
              <button key={cat.id || 'all'} className={`cv-filter-btn ${(activeCategory === cat.id && !urlCategory) ? 'is-active' : ''}`} onClick={() => handleCategoryClick(cat.id)}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="cv-shop-loading">
            <span className="cv-code-text cv-blinking-cursor">/ decodificando_stock_dux...</span>
          </div>
        ) : (
          <div className="cv-products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="cv-product-card">
                  <Link to={`/producto/${product.id}`} className="cv-product-image-wrapper">
                    <img src={product.image_url} alt={product.name} className="cv-product-image" />
                  </Link>
                  <div className="cv-product-info">
                    <span className="cv-product-category">{`// ${product.category}`}</span>
                    
                    {/* ACÁ IMPRIMIMOS LA MARCA EXTRAÍDA DE DUX */}
                    <span style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px', display: 'block' }}>
                      {product.brand}
                    </span>

                    <Link to={`/producto/${product.id}`}>
                      <h3 className="cv-product-name">{product.name}</h3>
                    </Link>
                    <p className="cv-product-price">${product.price.toLocaleString('es-AR')}</p>
                    <button className="cv-btn-add-cart" onClick={() => addToCart(product, 1)}>
                      <span className="cv-code-symbol">[+]</span> AGREGAR
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="cv-shop-empty"><span className="cv-code-text">/ error_404</span><p>No se encontraron etiquetas.</p></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}