import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const [lang, setLang] = useState('ES');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cv-navbar">
      <div className="cv-nav-container">
        
        {/* Identidad de Marca Unificada */}
        <Link to="/" className="cv-nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="cv-logo-binary">01010110</span>
          <div className="cv-logo-text">
            <span className="cv-logo-title">CÓDIGO VINARIO</span>
            <span className="cv-logo-subtitle">WINE STOP</span>
          </div>
        </Link>

        {/* Menú de Navegación con Estética de Código */}
        <nav className={`cv-nav-menu ${menuOpen ? 'is-active' : ''}`}>
          <Link to="/tienda" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>tienda
          </Link>
          <a href="/#nuestra-historia" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>origen
          </a>
          <a href="/#compromiso" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>compromiso
          </a>
          <a href="/#newsletter" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>comunidad
          </a>
        </nav>

        {/* Acciones del Sistema Internacional */}
        <div className="cv-nav-actions">
          
          {/* Selector de Idiomas (ES / EN / PT) */}
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

          {/* Cava Digital / Carrito de Compras */}
          <Link to="/carrito" className="cv-nav-cart">
            <span className="material-symbols-outlined cv-cart-icon">wine_bar</span>
            <span className="cv-cart-badge">{`[ ${cartCount} ]`}</span>
          </Link>

          {/* Interruptor Móvil (Hamburguesa) */}
          <button className="cv-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}