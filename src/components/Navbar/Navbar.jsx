import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cv-navbar">
      <div className="cv-nav-container">
        
        {/* Logo de la empresa en la esquina izquierda (Agrandado por CSS) */}
        <Link to="/" className="cv-nav-logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Código Vinario" className="cv-nav-logo-img" />
        </Link>

        {/* Menú de Navegación con Mega Menú Integrado */}
        <nav className={`cv-nav-menu ${menuOpen ? 'is-active' : ''}`}>
          <Link to="/" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_inicio}
          </Link>
          
          {/* Item con MegaMenú Desplegable */}
          <div className="cv-nav-item-has-mega">
            <Link to="/tienda" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
              <span className="cv-code-symbol">/</span>{t.nav_tienda}
            </Link>
            
            {/* Contenedor del Mega Menú Estilo Catálogo Premium */}
            <div className="cv-megamenu">
              <div className="cv-megamenu-grid">
                <div className="cv-mega-col">
                  <h3>{`// ${t.cat_tintos}`}</h3>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Malbec</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Cabernet Sauvignon</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Blend de Tintas</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Pinot Noir</Link>
                </div>
                <div className="cv-mega-col">
                  <h3>{`// ${t.cat_blancos}`}</h3>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Chardonnay</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Sauvignon Blanc</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Torrontés</Link>
                </div>
                <div className="cv-mega-col">
                  <h3>{`// ${t.cat_espumantes}`}</h3>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Brut Nature</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Extra Brut</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Cosechas Históricas</Link>
                </div>
                <div className="cv-mega-col">
                  <h3>{`// complementos`}</h3>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>{t.cat_destilados}</Link>
                  <Link to="/tienda" onClick={() => setMenuOpen(false)}>Estuches & Regalos</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/bodegas" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_bodegas}
          </Link>
          <Link to="/eventos" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_eventos}
          </Link>
          <Link to="/origen" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_origen}
          </Link>
        </nav>

        {/* selectores y carrito */}
        <div className="cv-nav-actions">
          <div className="cv-lang-selector">
            {['ES', 'EN', 'PT'].map((l) => (
              <button
                key={l}
                className={`cv-lang-btn ${lang === l ? 'is-active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
            ))}
          </div>

          <Link to="/mi-cuenta" className="cv-nav-account" title="Mi Perfil">
            <span className="material-symbols-outlined cv-cart-icon">person</span>
          </Link>

          <Link to="/carrito" className="cv-nav-cart">
            <span className="material-symbols-outlined cv-cart-icon">shopping_cart</span>
            <span className="cv-cart-badge">{`[ ${cartCount || 0} ]`}</span>
          </Link>

          <button className="cv-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}