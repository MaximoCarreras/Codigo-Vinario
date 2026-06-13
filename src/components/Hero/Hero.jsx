import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="cv-hero cv-binary-bg">
      <div className="cv-hero-content">
        
        <div className="cv-hero-badge">
          <span className="cv-code-text cv-blinking-cursor">/ inicializando_sistema</span>
        </div>

        <h1 className="cv-hero-title">
          LA BIBLIOTECA<br />
          <span className="cv-text-wine">PREMIUM</span> DE VINOS
        </h1>
        
        <p className="cv-hero-description">
          Los códigos del vino son una forma de comunicación. Decodificamos el terroir mendocino para llevar la máxima expresión vitivinícola directo a tu copa.
        </p>

        <div className="cv-hero-actions">
          <Link to="/tienda" className="cv-btn-primary">
            <span className="cv-code-symbol">[</span>
            EXPLORAR CAVA
            <span className="cv-code-symbol">]</span>
          </Link>
          <a href="#nuestra-historia" className="cv-btn-secondary">
            DESCUBRIR ORIGEN
          </a>
        </div>

      </div>
    </section>
  );
}