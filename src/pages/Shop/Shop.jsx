import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useProducts } from "../../hooks/duxHooks";
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import './Shop.css';

export default function Shop() {
  const { t } = useLanguage();
  
  // 1. LEEMOS LA URL DEL MEGA MENÚ
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get('categoria'); 

  // 2. ESTADO DE LOS BOTONES DE LA TIENDA
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Pedimos TODOS los productos a Dux (pasando null) para filtrarlos localmente
  const { products, loading } = useProducts(null);
  const { addToCart } = useCart();

  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const categories = [
    { id: null, label: t.filter_all || 'TODO EL CATÁLOGO' },
    { id: 'vinos', label: 'VINOS' },
    { id: 'destilados', label: 'DESTILADOS' },
    { id: 'cervezas', label: 'CERVEZAS' },
    { id: 'combos', label: 'COMBOS' },
  ];

  // 3. LA MAGIA DEL FILTRO INTELIGENTE
  const filteredProducts = products.filter(product => {
    // Si tocaste un botón de la tienda (ej: VINOS)
    if (activeCategory && product.category !== activeCategory) return false;
    
    // Si entraste desde el Mega Menú (ej: ?categoria=malbec)
    if (urlCategory) {
      const q = urlCategory.toLowerCase();
      // Buscamos si la palabra "malbec" está en el nombre o en la categoría
      if (!product.name.toLowerCase().includes(q) && !product.category.toLowerCase().includes(q)) {
        return false;
      }
    }
    return true;
  });

  // Al tocar un botón de la tienda, borramos el filtro del Navbar para no confundir
  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setSearchParams({}); 
  };

  return (
    <div className="cv-page-shop">
      <div className="cv-shop-header">
        {bgImages.map((img, index) => (
          <div 
            key={index}
            className={`cv-shop-header-bg ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
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
              <button
                key={cat.id || 'all'}
                className={`cv-filter-btn ${(activeCategory === cat.id && !urlCategory) ? 'is-active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="cv-shop-loading">
            <span className="cv-code-text cv-blinking-cursor">/ cargando_datos...</span>
          </div>
        ) : (
          <div className="cv-products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                    <p className="cv-product-price">
                      {product.price > 0 ? `$${product.price.toLocaleString('es-AR')}` : "Consultar precio"}
                    </p>
                    <button 
                      className="cv-btn-add-cart"
                      onClick={() => addToCart(product, 1)}
                      disabled={product.stock <= 0}
                    >
                      {product.stock > 0 ? (
                        <><span className="cv-code-symbol">[+]</span> {t.btn_add || "AGREGAR"}</>
                      ) : (
                        <><span className="cv-code-symbol">[x]</span> {t.btn_no_stock || "SIN STOCK"}</>
                      )}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="cv-shop-empty">
                <span className="cv-code-text">/ error_404</span>
                <p>No se encontraron etiquetas para "{urlCategory || activeCategory}".</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}