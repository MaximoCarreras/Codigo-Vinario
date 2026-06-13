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
        
        {/* Logo Solitario y Limpio */}
        <Link to="/" className="cv-nav-logo" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Código Vinario" className="cv-nav-logo-img" onError={(e) => e.target.style.display='none'} />
        </Link>

        {/* Menú de Navegación Ampliado */}
        <nav className={`cv-nav-menu ${menuOpen ? 'is-active' : ''}`}>
          <Link to="/" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_inicio}
          </Link>
          <Link to="/tienda" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_tienda}
          </Link>
          <Link to="/bodegas" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>bodegas
          </Link>
          <Link to="/eventos" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_eventos}
          </Link>
          <Link to="/origen" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_origen}
          </Link>
        </nav>

        {/* Acciones: Idioma, Cuenta y Carrito */}
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

          {/* Botón Mi Cuenta (Futuro Supabase) */}
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