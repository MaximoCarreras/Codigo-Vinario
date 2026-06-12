import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="cv-header">
      {/* Topbar negra */}
      <div className="cv-topbar">
        <span>ENVÍO GRATIS EN LAS HERAS Y GRAN MENDOZA A PARTIR DE $50.000 | 3 CUOTAS SIN INTERÉS</span>
      </div>

      {/* Main Navbar */}
      <div className="cv-navbar-main">
        <div className="cv-logo">
          {/* Si querés que el logo te lleve al inicio al hacerle clic, también usamos Link acá */}
          <Link to="/" className="logo-text" style={{ textDecoration: 'none' }}>
            <span className="binary-text">01010110</span>
            <h1 style={{ color: 'var(--color-negro)' }}>CÓDIGO VINARIO</h1>
          </Link>
        </div>

        <div className="cv-search-container">
          <input type="text" placeholder="Buscar vinos, cervezas, bodegas..." className="cv-search-input" />
          <button className="cv-search-btn">🔍</button>
        </div>

        <div className="cv-cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">0</span>
        </div>
      </div>

      {/* Menú de categorías con Mega Menu */}
      <nav className="cv-categories">
        <ul>
          <li><Link to="/bodegas">BODEGAS</Link></li>
          
          {/* Este es el ítem que despliega el Mega Menú */}
          <li className="has-mega-menu">
            <Link to="/categoria/vinos">VINOS <span>▾</span></Link>
            
            {/* Contenedor del Mega Menú */}
            <div className="mega-menu">
              <div className="mega-menu-content">
                <div className="mega-column">
                  <h4>// TINTOS</h4>
                  <Link to="/categoria/malbec">Malbec</Link>
                  <Link to="/categoria/cabernet">Cabernet Sauvignon</Link>
                  <Link to="/categoria/cabernet-franc">Cabernet Franc</Link>
                  <Link to="/categoria/blend">Blend</Link>
                  <Link to="/categoria/pinot-noir">Pinot Noir</Link>
                </div>
                <div className="mega-column">
                  <h4>// BLANCOS</h4>
                  <Link to="/categoria/chardonnay">Chardonnay</Link>
                  <Link to="/categoria/sauvignon">Sauvignon Blanc</Link>
                  <Link to="/categoria/torrontes">Torrontés</Link>
                  <Link to="/categoria/semillon">Semillón</Link>
                </div>
                <div className="mega-column">
                  <h4>// ESPUMANTES</h4>
                  <Link to="/categoria/brut-nature">Brut Nature</Link>
                  <Link to="/categoria/extra-brut">Extra Brut</Link>
                  <Link to="/categoria/dulce">Espumante Dulce</Link>
                </div>
                <div className="mega-column">
                  <h4>// OTROS</h4>
                  <Link to="/categoria/rosados">Rosados</Link>
                  <Link to="/categoria/naranjos">Naranjos</Link>
                  <Link to="/categoria/organicos">Orgánicos</Link>
                </div>
              </div>
              
              <div className="mega-menu-promo">
                <Link to="/categoria/destacados">
                  <button className="cv-btn-white">VER SELECCIÓN</button>
                </Link>
                <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Selección de Vinos" />
              </div>
            </div>
          </li>

          {/* Enlaces directos en la barra principal */}
          <li><Link to="/categoria/destilados">DESTILADOS</Link></li>
          <li><Link to="/categoria/cervezas">CERVEZAS</Link></li>
          <li><Link to="/categoria/combos">COMBOS</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;