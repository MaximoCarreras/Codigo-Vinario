import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cv-footer">
      <div className="footer-columns">
        <div className="footer-col">
          <span className="binary-logo">01010110</span>
          <h3>CÓDIGO VINARIO</h3>
          <p>La experiencia del vino mendocino, decodificada.</p>
        </div>
        
        <div className="footer-col">
          <h4>NUESTRA TIENDA</h4>
          <p>Av. Colón y Perú</p>
          <p>Mendoza, Argentina</p>
        </div>

        <div className="footer-col">
          <h4>AYUDA</h4>
          <ul>
            <li><a href="#faq">Condiciones y FAQ</a></li>
            <li><a href="#envios">Política de envíos</a></li>
            <li><a href="#devoluciones">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2026 Código Vinario. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;