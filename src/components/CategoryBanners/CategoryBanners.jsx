import React from 'react';
import './CategoryBanners.css';

const CategoryBanners = () => {
  return (
    <section className="cv-category-banners">
      {/* Banner Principal Apaisado */}
      <div className="cv-banner-wide">
        <div className="cv-banner-content">
          <span className="cv-code-detail">/* promo_destacada */</span>
          <h2>Regalos y Estuches</h2>
          <button className="cv-btn-outline">VER OPCIONES</button>
        </div>
      </div>

      {/* Grilla de 4 Categorías */}
      <div className="cv-grid-4">
        <div className="cv-grid-item">
          <img src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tesoros" />
          <h3>Tesoros de la Cava</h3>
        </div>
        <div className="cv-grid-item">
          <img src="https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Blancos" />
          <h3>Blancos Frescos</h3>
        </div>
        <div className="cv-grid-item">
          <img src="https://images.unsplash.com/photo-1566215039369-026049d5c414?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Botellones" />
          <h3>Botellones Magnum</h3>
        </div>
        <div className="cv-grid-item">
          <img src="https://images.unsplash.com/photo-1590606830743-7f11fbca512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Premium" />
          <h3>Selección Premium</h3>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanners;