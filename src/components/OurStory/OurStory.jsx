import React from 'react';
import './OurStory.css';

export default function OurStory() {
  return (
    <section className="cv-ourstory" id="nuestra-historia">
      <div className="cv-ourstory-container">
        
        <div className="cv-ourstory-content">
          <div className="cv-badge-tech">
            <span className="cv-code-text">/ decodificando_el_terroir</span>
          </div>
          
          <h2 className="cv-section-title">
            NUESTRO <span className="cv-text-wine">ORIGEN</span>
          </h2>
          
          <p className="cv-story-text">
            Nacimos en Mendoza, la capital indiscutida del vino, impulsados por una tradición familiar y una visión clara: llevar la experiencia de las mejores bodegas al mundo digital. 
          </p>
          <p className="cv-story-text">
            Más que una vinoteca, somos traductores de historias embotelladas. Seleccionamos rigurosamente cada etiqueta, desde joyas boutique hasta los grandes clásicos, asegurando que cada copa que sirvas tenga el sello de la excelencia mendocina.
          </p>

          <div className="cv-story-stats">
            <div className="cv-stat">
              <span className="cv-stat-number">01</span>
              <span className="cv-stat-label">Cuna del Malbec</span>
            </div>
            <div className="cv-stat">
              <span className="cv-stat-number">100+</span>
              <span className="cv-stat-label">Bodegas de Autor</span>
            </div>
          </div>
        </div>

        <div className="cv-ourstory-image-wrapper">
          {/* Fondo estilo código binario para la imagen */}
          <div className="cv-image-bg-tech">01010110</div>
          <img 
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Viñedos en Mendoza" 
            className="cv-ourstory-image"
          />
        </div>

      </div>
    </section>
  );
}