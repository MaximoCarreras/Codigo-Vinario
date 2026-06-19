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
        
        {/* LOGO GIGANTE Y LIMPIO */}
        <Link to="/" className="cv-nav-logo" onClick={() => setMenuOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Código Vinario" 
            style={{ height: '80px', width: 'auto', objectFit: 'contain' }} 
          />
        </Link>

        {/* Menú de Navegación con Mega Menú Integrado */}
        <nav className={`cv-nav-menu ${menuOpen ? 'is-active' : ''}`}>
          <Link to="/" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
            <span className="cv-code-symbol">/</span>{t.nav_inicio}
          </Link>
          
          <div className="cv-nav-item-has-mega">
            <Link to="/tienda" className="cv-nav-link" onClick={() => setMenuOpen(false)}>
              <span className="cv-code-symbol">/</span>{t.nav_tienda}
            </Link>
            
            {/* MEGA MENÚ CON LINKS REALES */}
            <div className="cv-megamenu">
              <div className="cv-megamenu-grid">
                <div className="cv-mega-col">
                  <h3>{`// ${t.cat_tintos || "TINTOS"}`}</h3>
                  <Link to="/tienda?categoria=malbec" onClick={() => setMenuOpen(false)}>Malbec</Link>
                  <Link to="/tienda?categoria=cabernet" onClick={() => setMenuOpen(false)}>Cabernet Sauvignon</Link>
                  <Link to="/tienda?categoria=blend" onClick={() => setMenuOpen(false)}>Blend de Tintas</Link>
                  <Link to="/tienda?categoria=pinot" onClick={() => setMenuOpen(false)}>Pinot Noir</Link>
                </div>
                <div className="cv-mega-col">
                  <h3>{`// ${t.cat_blancos || "BLANCOS"}`}</h3>
                  <Link to="/tienda?categoria=chardonnay" onClick={() => setMenuOpen(false)}>Chardonnay</Link>
                  <Link to="/tienda?categoria=sauvignon" onClick={() => setMenuOpen(false)}>Sauvignon Blanc</Link>
                  <Link to="/tienda?categoria=torrontes" onClick={() => setMenuOpen(false)}>Torrontés</Link>
                </div>
                <div className="cv-mega-col">
                  <h3>{`// ${t.cat_espumantes || "ESPUMANTES"}`}</h3>
                  <Link to="/tienda?categoria=brut-nature" onClick={() => setMenuOpen(false)}>Brut Nature</Link>
                  <Link to="/tienda?categoria=extra-brut" onClick={() => setMenuOpen(false)}>Extra Brut</Link>
                  <Link to="/tienda?categoria=espumante" onClick={() => setMenuOpen(false)}>Todos los Espumantes</Link>
                </div>
                <div className="cv-mega-col">
                  <h3>{`// COMPLEMENTOS`}</h3>
                  <Link to="/tienda?categoria=destilados" onClick={() => setMenuOpen(false)}>{t.cat_destilados || "Destilados"}</Link>
                  <Link to="/tienda?categoria=cervezas" onClick={() => setMenuOpen(false)}>Cervezas</Link>
                  <Link to="/tienda?categoria=combos" onClick={() => setMenuOpen(false)}>Estuches & Regalos</Link>
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

        {/* Selectores y carrito */}
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