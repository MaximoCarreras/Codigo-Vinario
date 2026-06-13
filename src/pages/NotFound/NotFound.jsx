import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="cv-page-404 cv-binary-bg">
      <div className="cv-404-content">
        <span className="cv-code-text cv-blinking-cursor">/ system_failure</span>
        <h1 className="cv-404-title">ERROR <span className="cv-text-wine">404</span></h1>
        <p className="cv-404-desc">La botella que estás buscando no existe en esta cava o la ruta fue escrita incorrectamente.</p>
        
        <Link to="/tienda" className="cv-btn-primary">
          <span className="cv-code-symbol">{'<'}</span> REINICIAR BÚSQUEDA
        </Link>
      </div>
    </div>
  );
}