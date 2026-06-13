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
        
        {/* Logo Real a la Izquierda */}
        <Link to="/" className="cv-nav-logo" onClick={() => setMenuOpen(false)}>
          {/* El sistema buscará el archivo logo.png en la carpeta public */}
          <img src="/logo.png" alt="Código Vinario" className="cv-nav-logo-img" onError={(e) => e.target.style.display='none'} />
          <div className="cv-logo-text">
            <span className="cv-logo-title">CÓDIGO VINARIO</span>
            <span className="cv-logo-subtitle">WINE STOP</span>
          </div>
        </Link>

        {/* Menú Traducido Dinámicamente */}
        <nav className={`cv-nav-menu ${menuOpen ? 'is-active' : ''}`}>
          <Link to="/" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_inicio}
          </Link>
          <Link to="/tienda" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_tienda}
          </Link>
          <Link to="/eventos" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_eventos}
          </Link>
          <Link to="/origen" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_origen}
          </Link>
        </nav>

        {/* Idiomas y Carrito Real */}
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