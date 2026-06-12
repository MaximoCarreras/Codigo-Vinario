import React from 'react';
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
          {/* Aquí luego puedes poner la etiqueta <img> con tu logo real */}
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

      {/* Menú de categorías */}
      <nav className="cv-categories">
        <ul>
          <li><a href="#bodegas">BODEGAS</a></li>
          <li><a href="#vinos">VINOS</a></li>
          <li><a href="#cervezas">CERVEZAS</a></li>
          <li><a href="#espumantes">ESPUMANTES</a></li>
          <li><a href="#combos">COMBOS</a></li>
          <li><a href="#promos">PROMOCIONES</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;