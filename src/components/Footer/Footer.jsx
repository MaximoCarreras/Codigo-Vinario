import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="cv-footer">
      <div className="cv-footer-container">
        
        {/* Columna 1: Marca y Ubicación */}
        <div className="cv-footer-brand">
          <span className="cv-code-text">01010110</span>
          <h2 className="cv-footer-logo">CÓDIGO VINARIO</h2>
          <p className="cv-footer-subtitle">WINE STOP</p>
          
          <div className="cv-footer-location">
            <span className="material-symbols-outlined">location_on</span>
            <p>Av. Colón y Perú<br/>Mendoza, Argentina</p>
          </div>
        </div>

        {/* Columna 2: Navegación del Sistema */}
        <div className="cv-footer-links">
          <h3 className="cv-footer-title">/ directorio</h3>
          <Link to="/tienda">Catálogo</Link>
          <a href="/#nuestra-historia">Nuestra Historia</a>
          <a href="/#compromiso">Garantía</a>
        </div>

        {/* Columna 3: Contacto y Redes */}
        <div className="cv-footer-contact">
          <h3 className="cv-footer-title">/ contacto</h3>
          <a href="https://wa.me/5492614170950" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

      </div>
      
      <div className="cv-footer-bottom">
        <p>System.Copyright © {new Date().getFullYear()} Código Vinario. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}