import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="cv-header">
      <div className="cv-topbar">
        <span>ENVÍO GRATIS EN LAS HERAS Y GRAN MENDOZA A PARTIR DE $50.000 | 3 CUOTAS SIN INTERÉS</span>
      </div>

      <div className="cv-navbar-main">
        <div className="cv-logo">
          <Link to="/" className="logo-text">
            <span className="binary-text">01010110</span>
            <h1>CÓDIGO VINARIO</h1>
          </Link>
        </div>

        <div className="cv-search-container">
          <input type="text" placeholder="Buscar vinos, cervezas, bodegas..." className="cv-search-input" />
          <button className="cv-search-btn">🔍</button>
        </div>

        <div className="cv-cart-container">
          🛒 <span className="cart-badge">0</span>
        </div>
      </div>

      <nav className="cv-categories">
        <ul className="cv-menu-list">
          <li><Link to="/bodegas">BODEGAS</Link></li>
          <li className="has-mega-menu">
            <Link to="/categoria/vinos" className="menu-link">VINOS ▾</Link>
            <div className="mega-menu">
              <div className="mega-menu-content">
                <div className="mega-column">
                  <h4>// TINTOS</h4>
                  <Link to="/categoria/malbec">Malbec</Link>
                  <Link to="/categoria/cabernet">Cabernet Sauvignon</Link>
                  <Link to="/categoria/cabernet-franc">Cabernet Franc</Link>
                  <Link to="/categoria/blend">Blend</Link>
                </div>
                <div className="mega-column">
                  <h4>// BLANCOS</h4>
                  <Link to="/categoria/chardonnay">Chardonnay</Link>
                  <Link to="/categoria/sauvignon">Sauvignon Blanc</Link>
                  <Link to="/categoria/torrontes">Torrontés</Link>
                </div>
                <div className="mega-column">
                  <h4>// ESPUMANTES</h4>
                  <Link to="/categoria/brut-nature">Brut Nature</Link>
                  <Link to="/categoria/extra-brut">Extra Brut</Link>
                </div>
                <div className="mega-column">
                  <h4>// OTROS</h4>
                  <Link to="/categoria/rosados">Rosados</Link>
                  <Link to="/categoria/naranjos">Naranjos</Link>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/categoria/destilados">DESTILADOS</Link></li>
          <li><Link to="/categoria/cervezas">CERVEZAS</Link></li>
          <li><Link to="/categoria/combos">COMBOS</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;