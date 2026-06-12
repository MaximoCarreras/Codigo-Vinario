import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cv-footer">
      <div className="cv-footer__container">

        {/* COLUMNA 1: Marca e Identidad */}
        <div className="cv-footer__brand">
          <div className="cv-footer__logo">
            <span className="binary-text">01010110</span>
            <h3 className="cv-footer__title">CÓDIGO VINARIO</h3>
          </div>
          <p className="cv-footer__description">
            La experiencia del vino mendocino, decodificada. 
            Tu selección exclusiva con envíos a todo el país.
          </p>
          
          {/* Métodos de Pago */}
          <div className="cv-footer__payments">
            <span className="cv-footer__payment-label">Medios de pago:</span>
            <div className="cv-footer__payment-icons">
              <span className="payment-badge">Mercado Pago</span>
              <span className="payment-badge">Tarjetas</span>
              <span className="payment-badge">Transferencia</span>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: Contacto y Tienda */}
        <div className="cv-footer__group">
          <h4 className="cv-footer__subtitle">Nuestra Tienda</h4>
          <ul className="cv-footer__list">
            <li>Av. Colón y Perú</li>
            <li>Mendoza, Argentina</li>
            <li className="cv-contact-item">
              <a href="https://wa.me/5492614170950" target="_blank" rel="noreferrer">
                +54 9 261 417-0950
              </a>
            </li>
            <li className="cv-contact-item">
              <a href="mailto:info.codigovinario@gmail.com">
                info.codigovinario@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: Ayuda y Legales */}
        <div className="cv-footer__group">
          <h4 className="cv-footer__subtitle">Ayuda y Legales</h4>
          <ul className="cv-footer__list">
            <li><Link to="/#faq">Condiciones y FAQ</Link></li>
            <li><Link to="/envios">Política de envíos</Link></li>
            <li><Link to="/terminos">Términos y condiciones</Link></li>
            <li><Link to="/carrito">Mi Carrito</Link></li>
          </ul>
        </div>

      </div>

      <div className="cv-footer__bottom">
        <p>&copy; {currentYear} Código Vinario. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}