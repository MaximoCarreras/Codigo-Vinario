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
          <div className="logo-text">
            <span className="binary-text">01010110</span>
            <h1>CÓDIGO VINARIO</h1>
          </div>
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
            <a href="#vinos">VINOS <span>▾</span></a>
            
            {/* Contenedor del Mega Menú */}
            <div className="mega-menu">
              <div className="mega-menu-content">
                <div className="mega-column">
                  <h4>// TINTOS</h4>
                  {/* ACÁ ESTÁ EL CAMBIO: Usamos Link en vez de "a href" */}
                  <Link to="/categoria">Malbec</Link>
                  <a href="#cabernet">Cabernet Sauvignon</a>
                  <a href="#cabernet-franc">Cabernet Franc</a>
                  <a href="#blend">Blend</a>
                  <a href="#pinot">Pinot Noir</a>
                </div>
                <div className="mega-column">
                  <h4>// BLANCOS</h4>
                  <a href="#chardonnay">Chardonnay</a>
                  <a href="#sauvignon">Sauvignon Blanc</a>
                  <a href="#torrontes">Torrontés</a>
                  <a href="#semillon">Semillón</a>
                </div>
                <div className="mega-column">
                  <h4>// ESPUMANTES</h4>
                  <a href="#brut-nature">Brut Nature</a>
                  <a href="#extra-brut">Extra Brut</a>
                  <a href="#dulce">Espumante Dulce</a>
                </div>
                <div className="mega-column">
                  <h4>// OTROS</h4>
                  <a href="#rosados">Rosados</a>
                  <a href="#naranjos">Naranjos</a>
                  <a href="#organicos">Orgánicos</a>
                </div>
              </div>
              
              <div className="mega-menu-promo">
                <button className="cv-btn-white">VER SELECCIÓN</button>
                <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Selección de Vinos" />
              </div>
            </div>
          </li>

          <li><a href="#destilados">DESTILADOS</a></li>
          <li><a href="#cervezas">CERVEZAS</a></li>
          <li><a href="#combos">COMBOS</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;