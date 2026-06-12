import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* LOGO */}
        <div className="navbar__left">
          <Link to="/" className="navbar__brand">
            <span className="navbar__logo-text">CÓDIGO <span>VINARIO</span></span>
          </Link>
        </div>

        {/* BUSCADOR */}
        <div className="navbar__center">
          <form className="navbar__search">
            <input type="text" placeholder="¿Qué buscás?" />
            <button type="submit" className="material-symbols-outlined">search</button>
          </form>
        </div>

        {/* LINKS Y CARRITO */}
        <div className="navbar__right">
          <div className="navbar__desktop-links">
            <Link to="/" className="nav-item">Inicio</Link>
            
            <div className="nav-item-dropdown" 
                 onMouseEnter={() => setIsProductsOpen(true)} 
                 onMouseLeave={() => setIsProductsOpen(false)}>
              <Link to="/productos" className="nav-item">Productos ▾</Link>
              {isProductsOpen && (
                <div className="dropdown-menu">
                  <Link to="/categoria/vinos">Vinos</Link>
                  <Link to="/categoria/destilados">Destilados</Link>
                  <Link to="/categoria/cervezas">Cervezas</Link>
                  <Link to="/categoria/combos">Combos</Link>
                </div>
              )}
            </div>

            <Link to="/bodegas" className="nav-item">Bodegas</Link>
            <Link to="/nosotros" className="nav-item">Nosotros</Link>
            <Link to="/mi-cuenta" className="nav-item">Mi Cuenta</Link>
          </div>

          <Link to="/carrito" className="navbar__cart-link">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}